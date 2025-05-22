import React, { useState, useEffect, useRef } from 'react';

const ChatComponent = ({ setIsChatOpen }) => {
   const [message, setMessage] = useState('');
   const [chatHistory, setChatHistory] = useState([]);
   const chatContainerRef = useRef(null);
   const chatHistoryKey = 'chatHistory';

   useEffect(() => {
      const savedHistory =
         JSON.parse(sessionStorage.getItem(chatHistoryKey)) || [];
      setChatHistory(savedHistory);
      scrollToBottom();
   }, []);

   const saveChatHistory = (newHistory) => {
      sessionStorage.setItem(chatHistoryKey, JSON.stringify(newHistory));
   };

   const scrollToBottom = () => {
      if (chatContainerRef.current) {
         chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
      }
   };

   const handleSendMessage = async (e) => {
      e.preventDefault();
      if (!message) return;

      // Добавляем сообщение пользователя
      const newUserMessage = { message, isUser: true };

      setChatHistory((prevHistory) => {
         const updatedHistory = [...prevHistory, newUserMessage];
         saveChatHistory(updatedHistory); // Сохраняем обновленную историю
         return updatedHistory;
      });

      const botTypingMessage = { message: 'Loono is typing...', isUser: false };
      setChatHistory((prevHistory) => [...prevHistory, botTypingMessage]);

      setMessage('');

      try {
         const backendUrl = 'https://ailoono.onrender.com/chat';
         const response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               messages: [...chatHistory, newUserMessage].slice(-10) // Теперь сохраняется и новое сообщение
            })
         });

         if (!response.ok)
            throw new Error(`${response.status} ${response.statusText}`);
         const data = await response.json();

         const botMessage = { message: data.reply, isUser: false };

         setChatHistory((prevHistory) => {
            const updatedHistory = prevHistory
               .filter((msg) => msg !== botTypingMessage) // Удаляем "Bot is typing..."
               .concat(botMessage); // Добавляем реальный ответ бота

            saveChatHistory(updatedHistory); // Сохраняем полную историю
            return updatedHistory;
         });
      } catch (error) {
         const errorMessage = {
            message: `Error: ${error.message || 'Error sending request'}`,
            isUser: false
         };

         setChatHistory((prevHistory) => {
            const updatedHistory = prevHistory
               .filter((msg) => msg !== botTypingMessage)
               .concat(errorMessage);

            saveChatHistory(updatedHistory);
            return updatedHistory;
         });
      }
   };

   return (
      <div className='text-card-foreground shadow-sm bg-[#1a2e1a] bg-opacity-80 border-0 p-6'>
         <div className='flex justify-between items-center mb-4'>
            <h2 className='text-[#4AFF91] text-2xl font-bold'>
               Talk with Loono
            </h2>
            <button
               onClick={() => setIsChatOpen(false)}
               className='h-10 w-10 text-[#4AFF91]'
            >
               &#9660;
            </button>
         </div>

         {/* Контейнер чата */}
         <div
            className='h-[300px] overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-[#4AFF91] scrollbar-track-[#1a2e1a]'
            ref={chatContainerRef}
         >
            {chatHistory.map((entry, index) => (
               <div
                  key={index}
                  className={`flex items-start gap-3 ${
                     entry.isUser ? 'justify-end' : ''
                  }`}
               >
                  {/* Иконка пользователя */}
                  {entry.isUser ? (
                     <div className='w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0'>
                        <span className='text-white text-xs'>U</span>
                     </div>
                  ) : (
                     <div className='w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0'>
                        <img
                           alt='Loomo'
                           loading='lazy'
                           width='40'
                           height='40'
                           decoding='async'
                           className='object-cover'
                           src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_151334019-jjutOHX3Pw7SNIvDnOLvHnfvn9XrXM.webp'
                           style={{ color: 'transparent' }}
                        />
                     </div>
                  )}

                  {/* Сообщение */}
                  <div
                     className={`flex-1 break-words whitespace-pre-wrap [overflow-wrap:anywhere] ${
                        entry.isUser ? 'text-white' : 'text-[#4AFF91]'
                     }`}
                  >
                     {entry.message}
                  </div>
               </div>
            ))}
         </div>

         {/* Форма отправки сообщения */}
         <form className='flex space-x-2' onSubmit={handleSendMessage}>
            <input
               className='flex-grow h-10 border px-3 py-2 bg-[#243524] border-[#4AFF91] text-white'
               placeholder='Ask Loono something...'
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <button className='h-10 px-4 bg-[#4AFF91] text-black'>Send</button>
         </form>
      </div>
   );
};

export default ChatComponent;
