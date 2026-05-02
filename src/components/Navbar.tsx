/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentSection: string;
  setSection: (section: string) => void;
}

export default function Navbar({ currentSection, setSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Tìm sân', id: 'home' },
    { name: 'Chủ sân?', id: 'owner' },
    { name: 'Về chúng tôi', id: 'about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 flex justify-between items-center h-20">
        <div 
          className="text-2xl font-black text-primary italic font-display cursor-pointer active:scale-95 transition-transform"
          onClick={() => setSection('home')}
        >
          SportBuddies
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setSection(link.id)}
              className={`font-semibold transition-all duration-200 relative py-1 ${
                currentSection === link.id 
                  ? 'text-primary' 
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              {link.name}
              {currentSection === link.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block font-semibold text-neutral-600 hover:text-primary transition-colors">
            Đăng nhập
          </button>
          <button className="bg-primary text-white font-semibold px-6 py-2.5 rounded-full hover:bg-primary-container transition-all active:scale-95 shadow-sm">
            Đăng ký
          </button>
          
          <button 
            className="md:hidden text-neutral-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-neutral-100 p-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setSection(link.id);
                setIsMenuOpen(false);
              }}
              className={`font-semibold text-left px-4 py-2 rounded-lg ${
                currentSection === link.id 
                  ? 'bg-primary-light text-primary' 
                  : 'text-neutral-600'
              }`}
            >
              {link.name}
            </button>
          ))}
          <hr className="border-neutral-100" />
          <button className="font-semibold text-neutral-600 px-4 py-2 text-left">
            Đăng nhập
          </button>
        </motion.div>
      )}
    </header>
  );
}
