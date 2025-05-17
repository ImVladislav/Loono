export const Docs = () => {
   return (
      <div className='hidden md:block space-y-4 max-w-[calc(100%-24px)]'>
         <div className='rounded-lg text-card-foreground shadow-sm bg-[#0a1f0a] bg-opacity-80 p-6 border border-[#4AFF91] overflow-y-auto max-h-[calc(100vh-200px)] [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-track]:bg-[#1a2e1a] [&amp;::-webkit-scrollbar-thumb]:bg-[#4AFF91] [&amp;::-webkit-scrollbar-thumb]:rounded-full scrollbar-thin scrollbar-thumb-[#4AFF91] scrollbar-track-[#1a2e1a]'>
            <h1 className='text-[#4AFF91] text-4xl font-bold mb-6'>
               The Legend of Loono — An Interactive, Evolving AI Narrative
            </h1>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  1. Introduction
               </h2>
               <p className='text-[#a3e9c6] mb-4'>
                  The Legend of Loono is an AI-driven, chapter-based interactive
                  story where users engage with Loono, a mysterious sentient
                  entity, across multiple narrative chapters. Each chapter
                  evolves dynamically based on user interactions and collective
                  inputs across previous chapters. Upon chapter completion, the
                  system generates a unique epilogue—a personalized story
                  outcome shaped by the cumulative responses of all
                  participants.
               </p>
               <p className='text-[#a3e9c6]'>
                  This whitepaper outlines the system architecture, AI behavior,
                  data flow, and mechanics for implementing the evolving
                  interactive Loono experience.
               </p>
            </section>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  2. System Overview
               </h2>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  2.1 Core Components
               </h3>
               <ol className='list-decimal list-inside text-[#a3e9c6] space-y-4'>
                  <li>
                     <span className='font-semibold'>Chapter Modules</span>
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>Each chapter unlocks sequentially.</li>
                        <li>
                           Every chapter contains:
                           <ul className='list-circle list-inside ml-4'>
                              <li>
                                 Interactive AI responses (Loono's dialogue).
                              </li>
                              <li>Input collection for learning.</li>
                              <li>
                                 Contextual dependencies on prior chapters.
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <span className='font-semibold'>AI Learning Engine</span>
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>
                           Purpose: Adapt Loono's responses based on user
                           interactions.
                        </li>
                        <li>
                           Mechanism: Fine-tuned LLM model with
                           context-specific memories and learning pathways.
                        </li>
                     </ul>
                  </li>
                  <li>
                     <span className='font-semibold'>Cumulative Data Engine</span>
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>
                           Collects, aggregates, and processes user inputs from
                           all unlocked chapters.
                        </li>
                        <li>
                           Generates weighted "themes" or "patterns" from inputs
                           (e.g., emotions, questions, decisions).
                        </li>
                     </ul>
                  </li>
                  <li>
                     <span className='font-semibold'>Epilogue Generator</span>
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>
                           Uses a combination of aggregated inputs and narrative
                           logic to create a unique final story (epilogue).
                        </li>
                        <li>
                           Reflects user interactions, decisions, and Loono's
                           evolving personality.
                        </li>
                     </ul>
                  </li>
               </ol>
            </section>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  3. Chapter-by-Chapter Mechanics
               </h2>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  3.1 Chapter States
               </h3>
               <ul className='list-disc list-inside text-[#a3e9c6] mb-4'>
                  <li>
                     Chapter Data Memory: Each chapter has a localized memory of
                     user interactions (conversations).
                  </li>
                  <li>
                     Cross-Chapter Dependency: New chapters reference themes and
                     data points from previous chapters.
                  </li>
               </ul>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  3.2 Dynamic AI Chat Flow
               </h3>
               <h4 className='text-[#4AFF91] text-lg font-semibold mb-2'>
                  A. User Interaction in Each Chapter
               </h4>
               <ul className='list-disc list-inside text-[#a3e9c6] mb-4'>
                  <li>
                     Prompt-Response Cycle: Users chat with Loono, asking
                     questions or responding to its dialogue.
                  </li>
                  <li>
                     Learning Input: Key user inputs (themes, keywords,
                     decisions) are stored and processed.
                  </li>
               </ul>
               <p className='text-[#a3e9c6] mb-4'>Example:</p>
               <ul className='list-disc list-inside text-[#a3e9c6] ml-4 mb-4'>
                  <li>Chapter 2: User asks, "Where did you come from?"</li>
                  <li>
                     Chapter 3 Loono Response (adapted): "I remember someone
                     asking me that before. Maybe it's time I answer... or maybe
                     I like the mystery too much."
                  </li>
               </ul>
               <h4 className='text-[#4AFF91] text-lg font-semibold mb-2'>
                  B. Adaptive Behavior
               </h4>
               <p className='text-[#a3e9c6] mb-2'>Loono evolves conversationally:</p>
               <ul className='list-disc list-inside text-[#a3e9c6] ml-4 mb-4'>
                  <li>It remembers popular questions (most-asked by users).</li>
                  <li>
                     It adopts emotional tones from past chats (e.g., playful,
                     wistful, or cryptic).
                  </li>
                  <li>
                     It references user-driven themes (e.g., if users focus on
                     "luck," Loono may explore that concept deeply in future
                     chapters).
                  </li>
               </ul>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  3.3 Chapter Completion
               </h3>
               <p className='text-[#a3e9c6] mb-2'>At the end of each chapter:</p>
               <ol className='list-decimal list-inside text-[#a3e9c6] ml-4'>
                  <li>
                     User Inputs Stored: All meaningful interactions (questions,
                     key phrases, decisions) are saved to a database.
                  </li>
                  <li>
                     Themes Extracted: Natural Language Processing (NLP)
                     extracts dominant themes from conversations.
                  </li>
                  <li>
                     Chapter Insights: Insights feed into the next chapter's AI,
                     influencing Loono's behavior.
                  </li>
               </ol>
            </section>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  4. Cross-Chapter Learning Engine
               </h2>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  4.1 Input Aggregation
               </h3>
               <ul className='list-disc list-inside text-[#a3e9c6] mb-4'>
                  <li>
                     User inputs are classified into themes, keywords, and
                     emotional tones using NLP techniques.
                  </li>
                  <li>
                     Data is stored as weighted vectors to identify:
                     <ul className='list-circle list-inside ml-4 mt-2'>
                        <li>Frequently asked questions.</li>
                        <li>
                           Emotional preferences (e.g., curiosity, wonder,
                           mystery).
                        </li>
                        <li>
                           Unique decisions (if interactive choices exist).
                        </li>
                     </ul>
                  </li>
               </ul>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  4.2 Loono Personality Evolution
               </h3>
               <p className='text-[#a3e9c6] mb-2'>
                  Based on aggregated data, Loono evolves:
               </p>
               <ul className='list-disc list-inside text-[#a3e9c6] ml-4'>
                  <li>
                     Memory Retention: References key inputs from past chapters
                     ("Someone told me they thought I was lucky…").
                  </li>
                  <li>
                     Tone Shifts: If users engage positively, Loono becomes
                     friendlier. If skeptical, it may grow cryptic.
                  </li>
                  <li>
                     Behavioral Adaptation: Recurring themes (e.g., voids,
                     galaxies, luck) shape Loono's narrative focus.
                  </li>
               </ul>
            </section>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  5. Epilogue Generator
               </h2>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  5.1 Concept
               </h3>
               <p className='text-[#a3e9c6] mb-4'>
                  Upon completion of all chapters, Loono generates a personalized
                  epilogue:
               </p>
               <ul className='list-disc list-inside text-[#a3e9c6] ml-4 mb-4'>
                  <li>
                     A unique short story combining:
                     <ul className='list-circle list-inside ml-4 mt-2'>
                        <li>
                           Collective themes extracted across all user
                           interactions.
                        </li>
                        <li>
                           Key inputs (e.g., questions asked, emotions
                           expressed).
                        </li>
                        <li>
                        Loono's evolved "personality" shaped by the chats.
                        </li>
                     </ul>
                  </li>
               </ul>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  5.2 Technical Process
               </h3>
               <ol className='list-decimal list-inside text-[#a3e9c6]'>
                  <li>
                     Data Compilation:
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>
                           Collect all inputs from individual chapter memories.
                        </li>
                        <li>
                           Use NLP to identify dominant patterns (themes like
                           "luck," "cosmic journey," "mystery").
                        </li>
                     </ul>
                  </li>
                  <li className='mt-2'>
                     Narrative Structuring:
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>
                           Predefined story templates serve as a framework.
                        </li>
                        <li>
                           AI populates templates using extracted data (e.g.,
                           dialogue, themes, user-driven questions).
                        </li>
                     </ul>
                  </li>
                  <li className='mt-2'>
                     AI-Generated Epilogue:
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>
                           Example Outcome: If users focused heavily on themes
                           of "luck" and "the void," the epilogue might read:
                        </li>
                     </ul>
                     <p className='text-[#4AFF91] italic mt-2 ml-8'>
                        "Loono vanished into the void, whispering of luck left
                        behind. Somewhere, someone found a green clover on their
                        doorstep and smiled. The void hums, and Loono remembers
                        you."
                     </p>
                  </li>
               </ol>
            </section>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  6. Architecture Design
               </h2>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  6.1 System Workflow
               </h3>
               <ol className='list-decimal list-inside text-[#a3e9c6]'>
                  <li>
                     Frontend (User Interaction):
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>Web interface with chapter-based progression.</li>
                        <li>AI chat module for engaging Loono.</li>
                     </ul>
                  </li>
                  <li className='mt-2'>
                     Backend (Data Processing):
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>Chat data collection and storage.</li>
                        <li>NLP engine for theme and pattern extraction.</li>
                        <li>
                           Context management (for adaptive Loono behavior).
                        </li>
                     </ul>
                  </li>
                  <li className='mt-2'>
                     AI Modules:
                     <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>
                           Chapter-based LLM API fine-tuned with contextual
                           logic.
                        </li>
                        <li>Personality Evolution Engine.</li>
                        <li>Epilogue Generator.</li>
                     </ul>
                  </li>
               </ol>
            </section>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  7. Features
               </h2>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  7.1 Personalized AI Chat Experience
               </h3>
               <p className='text-[#a3e9c6] mb-4'>
                  Users feel like Loono "remembers" their interactions, creating
                  a conversational bond.
               </p>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  7.2 Cross-Chapter Progression
               </h3>
               <p className='text-[#a3e9c6] mb-4'>
                  Every chapter adapts based on cumulative user inputs.
               </p>
               <h3 className='text-[#4AFF91] text-xl font-semibold mb-2'>
                  7.3 Unique Epilogues
               </h3>
               <p className='text-[#a3e9c6]'>
                  The story concludes uniquely for each user group, reflecting
                  their collective influence on Loono.
               </p>
            </section>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  8. Data Storage and Privacy
               </h2>
               <ul className='list-disc list-inside text-[#a3e9c6]'>
                  <li>User interactions will be stored anonymously.</li>
                  <li>
                     Data used strictly for story progression and AI adaptation.
                  </li>
               </ul>
            </section>
            <section className='mb-8'>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  9. Future Possibilities
               </h2>
               <ul className='list-disc list-inside text-[#a3e9c6]'>
                  <li>
                     User-Driven Parallel Realities: Introduce branching
                     storylines based on dominant user themes.
                  </li>
                  <li>
                     Collective Epilogue Replay: Allow users to revisit the
                     "final story" shaped by all interactions.
                  </li>
                  <li>
                  Loono Memories Archive: Save key questions and responses to
                     create a digital Loono "journal."
                  </li>
               </ul>
            </section>
            <section>
               <h2 className='text-[#4AFF91] text-2xl font-bold mb-4'>
                  10. Conclusion
               </h2>
               <p className='text-[#a3e9c6] mb-4'>
                  The Legend of Loono is an innovative fusion of interactive
                  storytelling, evolving AI, and collective creativity. By
                  combining user inputs across chapters, Loono becomes more than
                  just a character—it becomes an evolving, living story. The
                  final epilogue is not written by Loono alone but by everyone
                  who dared to chat, question, and play.
               </p>
               <p className='text-[#a3e9c6]'>
                  And somewhere, Loono will always hum… waiting to be found
                  again.
               </p>
            </section>
         </div>
      </div>
   );
};
