"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl lg:text-3xl font-playfair font-light mb-4 lg:mb-6 tracking-[0.2em] text-white">MORTEN</h3>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-md">
              Estúdio especializado em Fine Line e arte autoral. 
              Transformando ideias em arte permanente com técnica e sensibilidade.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base lg:text-lg font-medium mb-4 lg:mb-6 text-white">Navegação</h4>
            <nav className="space-y-2 lg:space-y-3">
              {['Início', 'Portfólio', 'Sobre', 'Estilos', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base lg:text-lg font-medium mb-4 lg:mb-6 text-white">Contato</h4>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={14} />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={14} />
                <span>contato@mortentattoo.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>Vila Madalena, São Paulo</span>
              </div>
            </div>
            
            {/* Social */}
            <div className="mt-6">
              <motion.a
                href="https://www.instagram.com/yasmy_tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Instagram size={16} />
                @yasmy_tattoo
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 lg:mt-16 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Morten Tattoo. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4 lg:gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Termos de Uso
            </a>
          </div>
        </motion.div>

        {/* Artist Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 lg:mt-12"
        >
          <p className="text-gray-600 text-xs italic font-playfair">
            &ldquo;A arte é a assinatura da alma&rdquo;
          </p>
        </motion.div>
      </div>
    </footer>
  );
}