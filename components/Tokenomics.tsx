'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GiFire, GiPadlock, GiTwoCoins } from 'react-icons/gi';

export default function Tokenomics() {
  const ref = useRef(null);

  const tokenData = [
    {
      icon: GiTwoCoins,
      title: 'Total Supply',
      value: '1,000,000,000',
      description: '1 Billion spooky tokens'
    },
    {
      icon: GiFire,
      title: 'Burned',
      value: '50%',
      description: '500M tokens sent to the void'
    },
    {
      icon: GiPadlock,
      title: 'Liquidity',
      value: 'Locked',
      description: 'LP tokens locked forever'
    },
    {
      icon: null,
      emoji: '🍭',
      title: 'Tax',
      value: '0%',
      description: 'No buy/sell tax!'
    },
  ];

  const distribution = [
    { label: 'Burned', percentage: 50, color: 'bg-red-500' },
    { label: 'Liquidity Pool', percentage: 30, color: 'bg-blue-500' },
    { label: 'Community', percentage: 15, color: 'bg-green-500' },
    { label: 'Marketing', percentage: 5, color: 'bg-yellow-500' },
  ];

  return (
    <section id="tokenomics" className="relative py-20 bg-gradient-to-b from-secondary-darkPurple to-secondary-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold creepster mb-4 glow-text">
            💰 Tokenomics 💰
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair, transparent, and designed for long-term spooky success!
          </p>
        </motion.div>

        {/* Token Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-purple/20 to-primary-orange/20 border-2 border-primary-orange/50 rounded-xl p-6 hover-lift text-center"
            >
              {item.icon ? (
                <item.icon className="text-5xl text-primary-orange mx-auto mb-4 animate-float" />
              ) : (
                <div className="text-5xl text-primary-orange mx-auto mb-4 animate-float">{item.emoji}</div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <div className="text-3xl font-bold text-primary-orange mb-2">{item.value}</div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-secondary-darkPurple/50 backdrop-blur-md border-2 border-primary-orange/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-primary-orange mb-8 creepster">
            Token Distribution
          </h3>

          {/* Bar Chart */}
          <div className="space-y-6 mb-8">
            {distribution.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{item.label}</span>
                  <span className="text-primary-orange font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contract Address */}
          <div className="bg-secondary-black/50 border border-primary-orange/30 rounded-lg p-6">
            <h4 className="text-xl font-bold text-primary-orange mb-3 text-center">
              Contract Address
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <code className="text-sm text-gray-300 bg-gray-800 px-4 py-2 rounded break-all text-center">
                HfqExokfkHeB72aDnCoqNyqNXrmNcE1MCVN6GbUbBAGS
              </code>
              <button className="bg-primary-orange hover:bg-primary-purple text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
                Copy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

