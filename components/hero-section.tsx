"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  // Função para rolagem suave para seções
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
  };

  return (
    <section id="home" className="brand-banner overflow-x-hidden relative h-[60vh] lg:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/32775703/pexels-photo-32775703.png"
          alt="Mulher com uma tatuagem de flor fine line nas costas"
          fill
          className="object-contain sm:object-cover object-center scale-[4] sm:scale-100"
          priority
          quality={95}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-noise opacity-20"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-8 opacity-10 floating-element hidden lg:block">
        <div className="w-24 h-24 border border-white/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 right-12 opacity-8 floating-element hidden lg:block" style={{ animationDelay: '3s' }}>
        <div className="w-16 h-16 border border-white/15 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-5 floating-element hidden xl:block" style={{ animationDelay: '6s' }}>
        <div className="w-32 h-32 border border-white/10 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="brand-banner-content h-full flex flex-col items-center justify-end pb-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Studio Label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-400 mb-6 font-light"
          >
            Estúdio de Tatuagem
          </motion.p>

        

          {/* Main Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="brand-tagline font-playfair font-light text-white/95 mb-4"
          >
            Fine Line com alma. Arte autoral na sua pele.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="brand-subtitle text-gray-300 font-light leading-relaxed"
          >
            Tatuagens exclusivas feitas com precisão, significado e leveza. 
            Cada traço conta uma história única, criada especialmente para você.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="btn-primary px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-none w-full sm:w-auto min-w-[180px] sm:min-w-[200px]"
              onClick={() => scrollToSection('contact')}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3"
              >
                <Calendar size={16} />
                Agende sua sessão
              </motion.div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="btn-secondary px-6 sm:px-8 py-3 text-sm sm:text-base rounded-none w-full sm:w-auto min-w-[180px] sm:min-w-[200px]"
              onClick={() => scrollToSection('portfolio')}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center"
              >
                Ver portfólio
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}