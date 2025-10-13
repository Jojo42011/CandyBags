'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GiGhost, GiSpiderWeb, GiBat } from 'react-icons/gi';

export default function About() {
  const ref = useRef(null);

  const features = [
    {
      icon: GiGhost,
      title: 'Community Driven',
      description: 'Built by the community, for the community. Every holder is part of the spooky family!'
    },
    {
      icon: GiSpiderWeb,
      title: 'Fair Launch',
      description: 'No presale, no team tokens. Everyone gets a fair chance to fill their candy bags!'
    },
    {
      icon: GiBat,
      title: 'Spooky Rewards',
      description: 'Hold CandyBags and earn mysterious rewards. The longer you hold, the sweeter the treats!'
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-secondary-black to-secondary-darkPurple" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold creepster mb-4 glow-text">
            👻 About CandyBags 👻
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CandyBags isn't just another memecoin – it's a Halloween celebration on the Solana blockchain! 
            Born from the spirit of trick-or-treating, we're building the spookiest community in crypto.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-secondary-black/50 backdrop-blur-md border-2 border-primary-orange/30 rounded-2xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-3xl font-bold text-primary-orange mb-6 creepster">The Legend</h3>
          <p className="text-lg text-gray-300 mb-4">
            Legend has it that on the darkest Halloween night, a mysterious developer appeared from the shadows 
            with a vision: to create a token that captures the true spirit of Halloween – fun, community, and endless treats!
          </p>
          <p className="text-lg text-gray-300 mb-4">
            CandyBags was born from this vision, combining the excitement of memecoin culture with Halloween's 
            playful and spooky atmosphere. Every transaction, every holder, every milestone is a celebration 
            of what makes crypto special: community and fun.
          </p>
          <p className="text-lg text-gray-300">
            Join us as we trick-or-treat our way through the Solana blockchain, collecting rewards and 
            building the most hauntingly awesome community in crypto! 🎃
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="bg-gradient-to-br from-secondary-darkPurple to-secondary-black border-2 border-primary-orange/30 rounded-xl p-8 hover-lift text-center"
            >
              <feature.icon className="text-6xl text-primary-orange mx-auto mb-4 animate-float" />
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

