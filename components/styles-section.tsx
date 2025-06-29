"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Pen, Circle, Sparkles } from 'lucide-react';

const styles = [
  {
    icon: Pen,
    title: 'Fine Line',
    description: 'Traços delicados e precisos que criam designs elegantes e minimalistas. Técnica especializada em linhas finas que resultam em tatuagens sofisticadas e atemporais.',
    features: ['Cicatrização rápida', 'Design minimalista', 'Precisão técnica']
  },
  {
    icon: Circle,
    title: 'Pontilhismo',
    description: 'Arte criada através de pontos meticulosamente aplicados, formando gradientes suaves e texturas únicas. Cada ponto é posicionado com precisão artística.',
    features: ['Texturas únicas', 'Gradientes suaves', 'Efeito visual impactante']
  },
  {
    icon: Sparkles,
    title: 'Autorais Exclusivas',
    description: 'Criações completamente originais desenvolvidas especialmente para você. Cada peça é única, nascida da colaboração entre sua visão e nossa expertise artística.',
    features: ['Design exclusivo', 'Conceito personalizado', 'Arte única']
  }
];

export function StylesSection() {
  return (
    <section id="styles" className="section-spacing bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light mb-6 lg:mb-8 text-gradient">
            ESTILOS & PROCESSOS
          </h2>
          <p className="text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cada estilo representa uma jornada artística diferente. Conheça as técnicas que 
            dominamos e descubra qual ressoa mais com sua visão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {styles.map((style, index) => {
            const Icon = style.icon;
            return (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-minimal p-6 lg:p-8 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mb-6 lg:mb-8"
                >
                  <Icon size={28} className="text-white/70 group-hover:text-white transition-colors duration-300" />
                </motion.div>

                <h3 className="text-xl lg:text-2xl font-playfair font-light mb-4 lg:mb-6 text-white/90">{style.title}</h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
                  {style.description}
                </p>

                <ul className="space-y-2 lg:space-y-3">
                  {style.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1 h-1 bg-white/30 rounded-full mr-3 lg:mr-4"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}