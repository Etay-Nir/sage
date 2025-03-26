'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-primary pt-20 flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            SAGE: Traditional Asset Management for Crypto
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            SAGE combines proven financial strategies with cutting-edge technology to make crypto investing accessible and profitable.
          </p>
          
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-white rounded-lg text-white"
            />
            <button className="px-6 py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent/90">
              GET STARTED →
            </button>
          </div>
          
          <p className="mt-4 text-sm text-gray-400">
            No withdrawal access · Fully Binance integrated
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          {/* Placeholder for illustration */}
          <div className="w-full h-96 bg-secondary/50 rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
}
