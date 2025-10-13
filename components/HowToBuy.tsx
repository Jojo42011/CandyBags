'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaWallet, FaCoins, FaExchangeAlt, FaRocket } from 'react-icons/fa';

export default function HowToBuy() {
  const ref = useRef(null);

  const steps = [
    {
      icon: FaWallet,
      title: 'Get a Wallet',
      description: 'Download Phantom or Solflare wallet from their official websites. Available for mobile and desktop.',
      action: 'Download Phantom'
    },
    {
      icon: FaCoins,
      title: 'Buy SOL',
      description: 'Purchase SOL from an exchange like Coinbase, Binance, or directly in Phantom wallet.',
      action: 'Buy SOL'
    },
    {
      icon: FaExchangeAlt,
      title: 'Swap for CandyBags',
      description: 'Connect your wallet to Jupiter or Raydium and swap SOL for CandyBags using our contract address.',
      action: 'Swap Now'
    },
    {
      icon: FaRocket,
      title: 'Join the Party!',
      description: 'Congratulations! You\'re now a CandyBags holder. Join our community and spread the Halloween spirit!',
      action: 'Join Telegram'
    },
  ];

  return (
    <section id="howtobuy" className="relative py-20 bg-gradient-to-b from-secondary-black to-secondary-darkPurple" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold creepster mb-4 glow-text">
            🎃 How to Buy 🎃
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to fill your CandyBags and join the spookiest community on Solana!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-2xl font-bold creepster z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-gradient-to-br from-secondary-darkPurple to-secondary-black border-2 border-primary-orange/30 rounded-xl p-6 h-full hover-lift">
                <step.icon className="text-5xl text-primary-orange mb-4 animate-float" />
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <button className="w-full bg-primary-orange/20 border border-primary-orange text-primary-orange font-semibold py-2 px-4 rounded-lg hover:bg-primary-orange hover:text-white transition-all duration-300">
                  {step.action}
                </button>
              </div>

              {/* Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary-orange text-3xl z-0">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

