'use client';

import { motion } from 'framer-motion';

export default function CryptoChallengeSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container px-4 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">The Crypto Dilemma</h2>
          <p className="text-xl text-gray-300">
            The crypto market's volatility can be overwhelming, especially for those without trading experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
