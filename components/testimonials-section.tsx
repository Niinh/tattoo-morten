"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'Umuarama-PR',
    rating: 5,
    text: 'Aiiiii ficou impecável Yasmy, seu trabalho é incrível!!! Muito obrigada 🥰🥰🥰',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 2,
    name: 'João Santos',
    location: 'Umuarama-PR',
    rating: 5,
    text: 'Oii muito obrigada mesmo, realizei o meu sonho. Fiquei muito feliz, seu trabalho é impecável, pode ter certeza que irei fazer mais kkk',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 3,
    name: 'Ana Costa',
    location: 'Umuarama-PR',
    rating: 5,
    text: 'Não sei descreve o quanto o seu trabalho é incrível, a baunilha é a nossa estrelinha, a história dela é muito tocante. Obrgiada por eternizar ela na pele da minha amiga. Você é uma pessoa incrível.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-spacing bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light mb-6 lg:mb-8 text-gradient">
            EXPERIÊNCIAS REAIS
          </h2>
          <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o reflexo da nossa dedicação à excelência artística.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="testimonial-card p-6 lg:p-8 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4 lg:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={14} className="fill-white text-white" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="text-white/90 leading-relaxed mb-6 lg:mb-8 italic text-sm lg:text-base"
              >
                {testimonial.text}
              </motion.p>

              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 lg:gap-4"
              >
                <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover grayscale"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm lg:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs lg:text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}