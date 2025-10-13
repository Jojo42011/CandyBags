'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

export default function Roadmap() {
  const ref = useRef(null);

  const phases = [
    {
      phase: 'Phase 1: The Haunting Begins',
      completed: true,
      items: [
        { text: 'Token Launch on Solana', done: true },
        { text: 'Website Launch', done: true },
        { text: 'Twitter & Discord Community', done: true },
        { text: 'Initial Marketing Push', done: true },
      ]
    },
    {
      phase: 'Phase 2: Building the Bag',
      completed: false,
      items: [
        { text: 'Grow to 500+ Holders', done: false },
        { text: 'CoinGecko & CMC Applications', done: false },
        { text: 'Community Meme Contests', done: false },
        { text: 'Twitter Raid Events', done: false },
      ]
    },
    {
      phase: 'Phase 3: Filling the Bags',
      completed: false,
      items: [
        { text: '1,000+ Active Community Members', done: false },
        { text: 'Partner with Other Memecoins', done: false },
        { text: 'Weekly Giveaways & Events', done: false },
        { text: 'Sticker Packs & Digital Assets', done: false },
      ]
    },
    {
      phase: 'Phase 4: The Sweet Rewards',
      completed: false,
      items: [
        { text: '2,500+ Holders Milestone', done: false },
        { text: 'Launch CandyBags Merch Store', done: false },
        { text: 'Community Collaborations', done: false },
        { text: 'Explore Future Opportunities', done: false },
      ]
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 bg-gradient-to-b from-secondary-darkPurple to-secondary-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold creepster mb-4 glow-text">
            🗺️ Roadmap 🗺️
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow the Trick-or-Treat path to the moon! 🌙
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-orange/30"></div>

          {/* Phases */}
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className={`w-6 h-6 rounded-full ${
                  phase.completed ? 'bg-accent-neonGreen' : 'bg-primary-orange'
                } border-4 border-secondary-black`}></div>
              </div>

              {/* Card */}
              <div className={`bg-gradient-to-br from-secondary-darkPurple to-secondary-black border-2 ${
                phase.completed ? 'border-accent-neonGreen' : 'border-primary-orange/30'
              } rounded-xl p-6 hover-lift ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <h3 className="text-2xl font-bold creepster text-primary-orange mb-4">
                  {phase.phase}
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      {item.done ? (
                        <FaCheckCircle className="text-accent-neonGreen text-xl mt-1 flex-shrink-0" />
                      ) : (
                        <FaCircle className="text-gray-600 text-xl mt-1 flex-shrink-0" />
                      )}
                      <span className={`${item.done ? 'text-white' : 'text-gray-400'}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

