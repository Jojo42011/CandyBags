'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Community() {
  const ref = useRef(null);

  const socials = [
    {
      name: 'Twitter',
      icon: FaTwitter,
      description: 'Follow for updates, memes, and spooky announcements!',
      link: 'https://x.com/BagLords21',
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      description: 'Hang out with the spookiest community in crypto!',
      link: 'https://discord.gg/kAzq2gszyV',
      color: 'hover:bg-indigo-500'
    },
  ];

  return (
    <section id="community" className="relative py-20 bg-gradient-to-b from-secondary-black to-secondary-darkPurple" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold creepster mb-4 glow-text">
            👻 Join the Community 👻
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with thousands of CandyBags holders and be part of the spookiest community on Solana!
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-secondary-darkPurple to-secondary-black border-2 border-primary-orange/30 rounded-xl p-6 hover-lift text-center cursor-pointer ${social.color} transition-colors duration-300 group`}
            >
              <social.icon className="text-6xl text-primary-orange group-hover:text-white mx-auto mb-4 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-white mb-3">{social.name}</h3>
              <p className="text-gray-400 text-sm">{social.description}</p>
            </motion.a>
          ))}
        </div>


      </div>
    </section>
  );
}

