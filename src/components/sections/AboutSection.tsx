'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">SAGE: Your Crypto Asset Management Solution</h2>
          <p className="text-xl text-gray-300 mb-12">
            SAGE's mission is to simplify crypto investing, providing a stable and profitable approach for everyone.
          </p>
          
          <div className="space-y-6 text-gray-300">
            <p>Developed in 2022 and launched in 2024, SAGE leverages proven techniques from traditional equity asset management to navigate the volatile crypto market.</p>
            <p>Our proprietary model, designed for large capital and liquid markets, focuses on robust, research-backed strategies with a clear human narrative.</p>
            <p>We rigorously test our models through historical simulations and statistical analysis, ensuring resilience and diversification.</p>
            <p>SAGE operates independently of major high-frequency trading players, offering a unique approach to crypto investment.</p>
            <p>Currently available through our initial design partners program (Q1-Q2 2025), SAGE successfully manages assets across nine major liquid tokens.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
