"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Início', href: 'home' },
  { name: 'Portfólio', href: 'portfolio' },
  { name: 'Sobre', href: 'about' },
  { name: 'Estilos', href: 'styles' },
  { name: 'Contato', href: 'contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função melhorada para rolagem suave
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Fechar menu mobile após clique
    setIsOpen(false);
  };

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-none transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur' : 'bg-transparent'}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:py-5">
        {/* Logo - Clicável */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0 cursor-pointer bg-transparent border-none p-0"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-playfair font-light tracking-[0.2em] text-white hover:text-gray-300 transition-colors duration-300">
            Morten Tattoo
          </h1>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-base font-medium uppercase tracking-[0.2em] transition-colors px-3 py-2 ${scrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
            >
              {item.name}
            </motion.button>
          ))}
          {/* Social Links - Desktop */}
          <motion.a
            href="https://www.instagram.com/yasmy_tattoo/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={`transition-colors ${scrolled ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-700'}`}
          >
            <Instagram size={18} color={scrolled ? undefined : '#000'} />
          </motion.a>
          <motion.a
            href="tel:+5511999999999"
            whileHover={{ scale: 1.1 }}
            className={`transition-colors ${scrolled ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-700'}`}
          >
            <Phone size={18} color={scrolled ? undefined : '#000'} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-white hover:bg-white/10 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-subtle border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => scrollToSection(item.href), 250);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  className={`block w-full text-left text-base uppercase tracking-[0.2em] transition-colors py-3 bg-transparent border-none cursor-pointer ${scrolled ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-700'}`}
                >
                  {item.name}
                </motion.button>
              ))}
              {/* Social Links - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: navItems.length * 0.1 }
                }}
                className="flex space-x-6 pt-4 border-t border-white/10"
              >
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="tel:+5511999999999"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={20} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}