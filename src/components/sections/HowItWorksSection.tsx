'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: "Open a Binance Futures Account",
    description: "Create your account on Binance.",
    icon: "🔑"
  },
  {
    title: "Deposit Funds (USDT)",
    description: "Fund your account with Tether (USDT).",
    icon: "💰"
  },
  {
    title: "Set Your Risk Level",
    description: "Choose your preferred tokens and leverage (2+ recommended).",
    icon: "⚖️"
  },
  {
    title: "Connect via API",
    description: "Securely link your Binance account. SAGE never has withdrawal access.",
    icon: "🔗"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get Started in 4 Simple Steps
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-primary p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
