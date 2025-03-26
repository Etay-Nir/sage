'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">SAGE</Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#how-it-works" className="text-white hover:text-accent">How It Works</Link>
          <Link href="#advantages" className="text-white hover:text-accent">Advantages</Link>
          <Link href="#contact" className="text-white hover:text-accent">Contact</Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-secondary p-4">
          <Link href="#how-it-works" className="block py-2 text-white">How It Works</Link>
          <Link href="#advantages" className="block py-2 text-white">Advantages</Link>
          <Link href="#contact" className="block py-2 text-white">Contact</Link>
        </div>
      )}
    </motion.header>
  );
}
