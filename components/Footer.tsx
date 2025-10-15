'use client';

import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { GiSpiderWeb } from 'react-icons/gi';

export default function Footer() {
  const socialLinks = [
    { icon: FaTwitter, href: 'https://x.com/BagLords21', label: 'Twitter' },
    { icon: FaDiscord, href: 'https://discord.gg/kAzq2gszyV', label: 'Discord' },
  ];

  return (
    <footer className="relative bg-secondary-darkPurple border-t-2 border-primary-orange overflow-hidden">
      {/* Spider webs decoration */}
      <GiSpiderWeb className="absolute top-0 left-0 text-primary-orange/10 text-9xl" />
      <GiSpiderWeb className="absolute top-0 right-0 text-primary-orange/10 text-9xl transform scale-x-[-1]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-5xl animate-bounce-slow">🎒</span>
              <span className="text-3xl font-bold creepster glow-text">CandyBags</span>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              The spookiest memecoin on Solana. Trick or Treat on the Blockchain!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-primary-orange mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#howtobuy" className="text-gray-400 hover:text-white transition-colors">How to Buy</a>
              <a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
              <a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold text-primary-orange mb-4">Join the Community</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange/20 p-3 rounded-full hover:bg-primary-orange hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="mb-2">
            © 2024 CandyBags. All rights reserved. Built by the Community 🎃
          </p>
          <p className="text-sm">
            <strong className="text-primary-orange">Disclaimer:</strong> CandyBags is a memecoin with no intrinsic value or expectation of financial return. 
            This is for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

