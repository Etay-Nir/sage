'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function TrustSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Your Security, Our Priority
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start space-x-4">
              <ShieldCheckIcon className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Secure Asset Custody</h3>
                <p className="text-gray-300">
                  Your crypto assets are always held securely within your Binance account. 
                  SAGE never has withdrawal access.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <LockClosedIcon className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Industry-Leading Security</h3>
                <p className="text-gray-300">
                  Advanced encryption and strict security protocols protect your data 
                  and trading activities.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-primary/50 p-8 rounded-lg">
            <p className="text-xl font-bold mb-2">Licensed Operation</p>
            <p className="text-gray-300">
              SAGE is currently operating successfully under a license model
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
