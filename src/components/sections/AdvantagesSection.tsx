'use client';

import { motion } from 'framer-motion';

const advantages = [
  { title: "Expertise", description: "Traditional finance principles applied to crypto." },
  { title: "No Trading Experience Needed", description: "We handle the complexity." },
  { title: "Risk Management", description: "Controlled exposure and diversification." },
  { title: "Research-Driven", description: "Strategies backed by data and analysis." },
  { title: "Liquidity", description: "Focus on the most liquid crypto assets." },
  { title: "Full Custody", description: "Your funds remain securely on Binance." },
  { title: "Transparency", description: "Clear and explainable trading models." },
  { title: "Easy Setup", description: "Get started in minutes." }
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-primary">
      <div className="container px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose SAGE?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-secondary/50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-400">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
