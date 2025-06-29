"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light mb-6 lg:mb-8 text-gradient"
              >
                Sobre Mim
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 lg:space-y-6"
              >
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed font-light italic">
                Yasmy Mortean é artista visual e tatuadora especializada em Fine Line e arte autoral, conhecida por transformar sentimentos, memórias e histórias em traços delicados e impactantes.
                </p>

                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  Minha jornada com a arte começou ainda na infância, mas encontrou na tatuagem uma forma profunda de expressão e conexão. Com anos de dedicação, aperfeiçoamento técnico e amor pela arte na pele, fundou o Morten Tattoo — um estúdio que vai além da estética e valoriza cada detalhe da experiência.
                </p>

                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                O Morten Tattoo é um espaço onde a arte respira. Com atendimento acolhedor, ambiente intimista e foco no conforto de cada cliente, o estúdio é referência em tatuagens personalizadas e delicadas.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 lg:gap-8 pt-6 lg:pt-8"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-playfair font-light text-white mb-2">400+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Tatuagens</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-playfair font-light text-white mb-2">4</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-playfair font-light text-white mb-2">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Satisfação</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-[500px] lg:h-[700px] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/32776955/pexels-photo-32776955.png?_gl=1*wd0r6b*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODMzOTckbzI1JGcxJHQxNzUxMTgzNjIyJGo1NyRsMCRoMA.."
                alt="Artista tatuando"
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 image-overlay opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}