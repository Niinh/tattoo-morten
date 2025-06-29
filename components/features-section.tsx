"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brush, Award } from 'lucide-react';

const features = [
  {
    icon: Brush,
    title: 'ARTE',
    description: 'Cada traço é pensado com cuidado artístico, criando peças únicas que refletem sua personalidade e história.'
  },
  {
    icon: Heart,
    title: 'DEVOÇÃO',
    description: 'Dedicação completa a cada projeto, trabalhando com paixão para transformar sua visão em realidade na pele.'
  },
  {
    icon: Award,
    title: 'EXCELÊNCIA',
    description: 'Anos de experiência e técnica refinada em Fine Line, garantindo resultados excepcionais e duradouros.'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-spacing bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center mb-8"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                    <Icon size={32} className="text-white/70 group-hover:text-white transition-colors duration-500" />
                  </div>
                </motion.div>

                <h3 className="text-base lg:text-lg font-playfair font-medium mb-6 tracking-[0.3em] text-white/90">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto text-sm lg:text-base">
                  {feature.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  transition={{ duration: 1.2, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="mx-auto mt-8 h-px bg-white/15"
                ></motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}