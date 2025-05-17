'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ChatComponent from './ChatComponent';
import { Docs } from './Docs';
import FlyingDots from './FlyDots';
const data = [
   {
      title: 'Chapter 1: The Awakening',
      image: 'portal-ezgif.com-png-to-webp-converter.webp',
      description:
         'A green puddle blinked into existence. It wobbled, whispered "Loono," and the universe shivered.',
      isLocked: false
   },
   {
      title: 'Chapter 2: The Scientist',
      image: 'imgs20-min-jijTmesAFnWUXs2TkR1lzqNdUUWZ3S.webp',
      description:
         'A green puddle blinked into existence. It wobbled, whispered "Loono," and the universe shivered.',
      isLocked: true
   },
   {
      title: 'Chapter 3: Cosmic Memory',
      image: 'imgs3-min.webp',
      description:
         'When Loono hummed, the walls vanished. Galaxies danced. Aki`s hands shook. You`re not from here, are you?',
      isLocked: true
   },
   {
      title: 'Chapter 4: The Gift',
      image: 'imgs21-min-QuBTgrPQD7W5l8UjJw0Hm5UFsmMgFA.webp',
      description:
         'Loono turned into a four-leaf clover. Aki`s luck changed. She wondered: Was it luck… or destiny?',
      isLocked: true
   },
   {
      title: 'Chapter 5: The Giant',
      image: 'imgs15-min-OHU0A5dyX5ArU8rpN9WWcK0FHw4Qoy.webp',
      description:
         'Loono grew tall enough to touch the clouds. Below, people whispered prayers.',
      isLocked: true
   },
   {
      title: 'Chapter 6: The Wanderer',
      image: 'zxczxc3-min-EiNov9igHaZiJn0ARHQ3HavbccVdVN.webp',
      description:
         'At the cliff`s edge, Loono stared into the void. Something stared back.',
      isLocked: true
   },
   {
      title: 'Chapter 7: The Waterfall',
      image: 'imgs14-min-AHnC1jtgABDuAD2dUgQjnGOAAYoIkF.webp',
      description:
         'Loono melted into the river. The water glowed green. No one dared to drink.',
      isLocked: true
   },
   {
      title: 'Chapter 8: The Beam',
      image: 'imgs12-min-a4sGMBDzRjrhfokYYRN6h7y3fCT8WO.webp',
      description:
         'A light from the sky called Loono home. It left behind nothing but silence… and questions.',
      isLocked: true
   },
   {
      title: 'Chapter 9: The Leap',
      image: 'imgs11-min-ofUlXISjlgd6LPmHeZd88hjGWbmHOi.webp',
      description:
         'Loono dove into the black hole, laughing. Some say it`s still out there, humming.',
      isLocked: true
   }
];

export default function Home() {
   const [selectedIndex, setSelectedIndex] = useState(0);

   const [isChatOpen, setIsChatOpen] = useState(false); // Состояние для управления видимостью чата
   const chatContainerRef = useRef(null);

   const toggleChat = () => {
      setIsChatOpen(!isChatOpen); // Переключаем состояние
   };

   useEffect(() => {
      if (isChatOpen) {
         window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth' // Прокрутка будет плавной
         });
      }
   }, [isChatOpen]);

   return (
      <div className='min-h-screen relative text-white'>
         <FlyingDots />
         <div className='relative z-10 pt-1 px-2 sm:px-6 pb-6'>
            <div className='mt-2 mb-4 flex justify-center'>
               <div className='relative w-full max-w-[1000px] h-[128px]'>
                  <img
                     alt='The Legend of Loono'
                     fetchPriority='high'
                     decoding='async'
                     data-nimg='fill'
                     className='object-contain object-center'
                     style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: 'transparent'
                     }}
                     src='header.png'
                  />
               </div>
            </div>
            <div className='max-w-7xl mx-auto md:grid md:grid-cols-[320px,1fr] gap-6'>
               <div className='space-y-2 mb-4 md:mb-0'>
                  {data.map((chapter, index) => (
                     <div
                        key={index}
                        className={` text-card-foreground shadow-sm bg-[#0a1f0a] bg-opacity-80 border-0 p-3 transition-colors hover:bg-[#1a2e1a] hover:bg-opacity-90 cursor-pointer ${
                           selectedIndex === index
                              ? 'ring-2 ring-[#4AFF91]'
                              : ''
                        }`}
                        onClick={() => setSelectedIndex(index)}
                     >
                        <div className='flex items-center justify-between'>
                           <h2 className='text-[#4AFF91] text-lg font-semibold'>
                              {chapter.title}
                           </h2>
                           {chapter.isLocked && (
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='24'
                                 height='24'
                                 viewBox='0 0 24 24'
                                 fill='none'
                                 stroke='currentColor'
                                 strokeWidth='2'
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 className='lucide lucide-lock text-[#4AFF91] w-5 h-5'
                              >
                                 <rect
                                    width='18'
                                    height='11'
                                    x='3'
                                    y='11'
                                    rx='2'
                                    ry='2'
                                 ></rect>
                                 <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
                              </svg>
                           )}
                        </div>
                     </div>
                  ))}

                  <div className='flex justify-center items-center space-x-4 mt-4'>
                     {/* <a
                        href='https://pump.fun/coin/EBzVoCbpFsBU1iKm9GL1k7LcKbNNrVUYk66qXZBTpump'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center transition-transform hover:scale-105 duration-200'
                     >
                        <img
                           alt='Pump.fun'
                           loading='lazy'
                           width='80'
                           height='80'
                           decoding='async'
                           data-nimg='1'
                           className='w-20 h-20 mb-1'
                           style={{ color: 'transparent' }}
                           src='IMG_4318.png'
                        />
                        <span className='text-[#4AFF91] text-xs'>Pump.fun</span>
                     </a> */}
                     <a
                        href='https://t.me/LoomoAlien'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center transition-transform hover:scale-105 duration-200'
                     >
                        <img
                           alt='TG'
                           loading='lazy'
                           width='80'
                           height='80'
                           decoding='async'
                           data-nimg='1'
                           className='w-20 h-20 mb-1'
                           style={{ color: 'transparent' }}
                           src='ico_5.png'
                        />
                        <span className='text-[#4AFF91] text-xs'>Telegram</span>
                     </a>
                     <button
                        onClick={() => setSelectedIndex(9)}
                        className='flex flex-col items-center transition-transform hover:scale-105 duration-200'
                     >
                        <img
                           alt='Documentation'
                           loading='lazy'
                           width='80'
                           height='80'
                           decoding='async'
                           data-nimg='1'
                           className='w-20 h-20 mb-1'
                           style={{ color: 'transparent' }}
                           src='IMG_4319.png'
                        />
                        <span className='text-[#4AFF91] text-xs'>Docs</span>
                     </button>
                     <a
                        href='https://x.com/LoomoAIien'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center transition-transform hover:scale-105 duration-200'
                     >
                        <img
                           alt='X'
                           loading='lazy'
                           width='80'
                           height='80'
                           decoding='async'
                           data-nimg='1'
                           className='w-20 h-20 mb-1'
                           style={{ color: 'transparent' }}
                           src='ico_4.png'
                        />
                        <span className='text-[#4AFF91] text-xs'>X</span>
                     </a>
                  </div>
                  <div className='flex justify-center items-center space-x-4 mt-4'>
                     <a
                        href='Pumpswap'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center transition-transform hover:scale-105 duration-200'
                     >
                        <img
                           alt='Pumpswap'
                           loading='lazy'
                           width='80'
                           height='80'
                           decoding='async'
                           data-nimg='1'
                           className='w-20 h-20 mb-1'
                           style={{ color: 'transparent' }}
                           src='ico_2 (1).png'
                        />
                        <span className='text-[#4AFF91] text-xs'>Pumpswap</span>
                     </a>

                     <a
                        href='https://dexscreener.com/solana/Qma6aqrGVpi1QQKyiBQgLa1rBDDKonpAk258LN9pump'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center transition-transform hover:scale-105 duration-200'
                     >
                        <img
                           alt='dexscreener'
                           loading='lazy'
                           width='80'
                           height='80'
                           decoding='async'
                           data-nimg='1'
                           className='w-20 h-20 mb-1'
                           style={{ color: 'transparent' }}
                           src='ico_3.png'
                        />
                        <span className='text-[#4AFF91] text-xs'>
                           Dexscreener
                        </span>
                     </a>

                     <a
                        href='https://www.dextools.io/app/en/solana/pair-explorer/CfegKuo4sWZEQnwircqp5EcyXQYCF37nQFNMAK8zjUzk'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center transition-transform hover:scale-105 duration-200'
                     >
                        <img
                           alt='dexscreener'
                           loading='lazy'
                           width='80'
                           height='80'
                           decoding='async'
                           data-nimg='1'
                           className='w-20 h-20 mb-1'
                           style={{ color: 'transparent' }}
                           src='ico_1 (1).png'
                        />
                        <span className='text-[#4AFF91] text-xs'>Dextools</span>
                     </a>
                  </div>
               </div>

               <div className='mx-auto md:mx-0 md:block space-y-4 w-full md:w-full max-w-[calc(100%-24px)]'>
                  {selectedIndex === 9 && <Docs></Docs>}
                  {selectedIndex !== null && selectedIndex !== 9 && (
                     <>
                        <div className='text-card-foreground shadow-sm bg-[#0a1f0a] bg-opacity-80 p-4 border border-[#4AFF91]'>
                           <h2 className='text-[#4AFF91] text-3xl font-bold mb-4'>
                              {data[selectedIndex].title}
                           </h2>
                           <div className='relative aspect-[16/9] mb-6'>
                              <img
                                 alt={`Illustration for ${data[selectedIndex].title}`}
                                 fetchPriority='high'
                                 decoding='async'
                                 data-nimg='fill'
                                 className={`rounded-lg 
                                  ${selectedIndex === 5 || selectedIndex === 6 ? 'object-fit' : 'object-cover'} 
                                  ${data[selectedIndex].isLocked ? 'filter grayscale-[30%] brightness-75' : ''} 
                                  ${selectedIndex === 0 ? 'object-fill' : ''} 
                                  ${selectedIndex === 7 ? 'object-fill' : ''} 
                                  ${selectedIndex === 8 ? 'object-fill' : ''} 
                               `}
                                 style={{
                                    position: 'absolute',
                                    height: '100%',
                                    width: '100%',
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    objectPosition: 'botton',
                                    color: 'transparent'
                                 }}
                                 src={data[selectedIndex].image}
                              />
                              {data[selectedIndex].isLocked && (
                                 <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       width='24'
                                       height='24'
                                       viewBox='0 0 24 24'
                                       fill='none'
                                       stroke='currentColor'
                                       strokeWidth='2'
                                       strokeLinecap='round'
                                       strokeLinejoin='round'
                                       className='lucide lucide-lock w-16 h-16 text-white opacity-75'
                                    >
                                       <rect
                                          width='18'
                                          height='11'
                                          x='3'
                                          y='11'
                                          rx='2'
                                          ry='2'
                                       ></rect>
                                       <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
                                    </svg>
                                 </div>
                              )}
                           </div>
                           <p className='text-xl text-[#a3e9c6] text-shadow-lg'>
                              {data[selectedIndex].description}
                           </p>
                        </div>
                        {!data[selectedIndex].isLocked && (
                           <>
                              <div className='text-card-foreground shadow-sm bg-[#1a2e1a] bg-opacity-80 border-0 transition-all duration-300 ease-in-out p-4'>
                                 <button
                                    onClick={toggleChat}
                                    className='gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 w-full h-16 bg-[#4AFF91] text-black hover:bg-[#3DE080] flex items-center justify-between px-4'
                                 >
                                    <span className='text-xl font-bold'>
                                       Talk with Loono
                                    </span>
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       width='24'
                                       height='24'
                                       viewBox='0 0 24 24'
                                       fill='none'
                                       stroke='currentColor'
                                       strokeWidth='2'
                                       strokeLinecap='round'
                                       strokeLinejoin='round'
                                       className='lucide lucide-chevron-up h-6 w-6'
                                    >
                                       <path d='m18 15-6-6-6 6'></path>
                                    </svg>
                                 </button>
                              </div>
                              {isChatOpen && (
                                 <ChatComponent setIsChatOpen={setIsChatOpen} />
                              )}
                           </>
                        )}
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
