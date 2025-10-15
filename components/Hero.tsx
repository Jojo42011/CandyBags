'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaChartLine } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-darkPurple/50 to-secondary-black z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Candy Bag Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="relative inline-block">
            <div className="text-9xl md:text-[12rem] animate-glow">🎒</div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex gap-1 text-4xl md:text-6xl">
              <span className="animate-float">🍬</span>
              <span className="animate-bounce-slow">🍭</span>
              <span className="animate-float">🍫</span>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold creepster mb-6 glow-text"
        >
          CandyBags
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-3xl text-gray-300 mb-8 font-light"
        >
          🎃 Trick or Treat on the Blockchain 🍬
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          The spookiest memecoin on Solana. Join the Halloween revolution and fill your bags with treats!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a 
            href="https://phantom.com/tokens/solana/HfqExokfkHeB72aDnCoqNyqNXrmNcE1MCVN6GbUbBAGS?referralId=m5oorh8mr1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <FaRocket />
            <span>Swap Now</span>
          </a>
          <a 
            href="https://phantom.com/tokens/solana/HfqExokfkHeB72aDnCoqNyqNXrmNcE1MCVN6GbUbBAGS?referralId=m5oorh8mr1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <FaChartLine />
            <span>View Chart</span>
          </a>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: 'Market Cap', value: '$37K', icon: '💰' },
            { label: 'Holders', value: '188', icon: '👻' },
            { label: 'Volume 24h', value: '$40K', icon: '📈' },
            { label: 'Supply', value: '1B', icon: '🍬' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-secondary-darkPurple/50 backdrop-blur-md border border-primary-orange/30 rounded-lg p-4 hover-lift"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-orange">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16"
        >
          <div className="animate-bounce text-primary-orange text-4xl">
            ↓
          </div>
        </motion.div>
      </div>
    </section>
  );
}

