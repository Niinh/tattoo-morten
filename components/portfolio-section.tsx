"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    id: 1,
    title: 'Fine Line Floral',
    category: 'Florais',
    image: 'https://images.pexels.com/photos/32777284/pexels-photo-32777284.png?_gl=1*av32h2*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2MzE2JGoxMyRsMCRoMA..',
    description: 'Delicada tatuagem floral em fine line com detalhes precisos e sombreamento sutil.'
  },
  {
    id: 2,
    title: 'Retrato Autoral',
    category: 'Retratos',
    image: 'https://images.pexels.com/photos/32777285/pexels-photo-32777285.png?_gl=1*g07ezw*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2MzcwJGo1MiRsMCRoMA..',
    description: 'Retrato realista com técnica fine line exclusiva e expressão única.'
  },
  {
    id: 3,
    title: 'Geométrico Minimalista',
    category: 'Geométricos',
    image: 'https://images.pexels.com/photos/32777280/pexels-photo-32777280.png?_gl=1*tazg4b*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2NDI0JGo1OSRsMCRoMA..',
    description: 'Design geométrico com linhas finas e precisas, criando harmonia visual.'
  },
  {
    id: 4,
    title: 'Arte Autoral Abstract',
    category: 'Autorais',
    image: 'https://images.pexels.com/photos/32777286/pexels-photo-32777286.png?_gl=1*7yv18*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2NDYyJGoyMSRsMCRoMA..',
    description: 'Criação exclusiva com conceito artístico único e interpretação pessoal.'
  },
  {
    id: 5,
    title: 'Pontilhismo Delicado',
    category: 'Pontilhismo',
    image: 'https://images.pexels.com/photos/32777283/pexels-photo-32777283.png?_gl=1*az0bwh*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2NDg2JGo1OCRsMCRoMA..',
    description: 'Técnica de pontilhismo aplicada com precisão milimétrica.'
  },
  {
    id: 6,
    title: 'Mandala Fine Line',
    category: 'Geométricos',
    image: 'https://images.pexels.com/photos/32777281/pexels-photo-32777281.png?_gl=1*1yvbth7*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2NTIzJGoyMSRsMCRoMA..',
    description: 'Mandala complexa executada em fine line com simetria perfeita.'
  },
  {
    id: 7,
    title: 'Natureza Autoral',
    category: 'Autorais',
    image: 'https://images.pexels.com/photos/32777284/pexels-photo-32777284.png?_gl=1*av32h2*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2MzE2JGoxMyRsMCRoMA..',
    description: 'Interpretação artística de elementos naturais com toque pessoal.'
  },
  {
    id: 8,
    title: 'Minimalista Elegante',
    category: 'Florais',
    image: 'https://images.pexels.com/photos/32777282/pexels-photo-32777282.png?_gl=1*gf0aff*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2NjAxJGo0OSRsMCRoMA..',
    description: 'Design minimalista com elegância e sofisticação atemporal.'
  },
  {
    id: 9,
    title: 'Linha Contínua',
    category: 'Autorais',
    image: 'https://images.pexels.com/photos/32777285/pexels-photo-32777285.png?_gl=1*g07ezw*_ga*MTc2ODY0NTg3NS4xNzQ5MDE0MTMx*_ga_8JE65Q40S6*czE3NTExODYyNjkkbzI2JGcxJHQxNzUxMTg2MzcwJGo1MiRsMCRoMA..',
    description: 'Arte em linha contínua que flui naturalmente pelo corpo.'
  }
];

const categories = ['Todos', 'Florais', 'Retratos', 'Geométricos', 'Autorais', 'Pontilhismo'];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const filteredItems = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  // Função para rolagem suave para contato
  const scrollToContact = () => {
    const targetElement = document.getElementById('contact');
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="section-spacing bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-light mb-6 lg:mb-8 text-gradient">
            MOSTRA DE ARTE
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Uma curadoria cuidadosa dos nossos trabalhos mais representativos, 
            demonstrando a versatilidade e precisão da técnica Fine Line.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12 lg:mb-16 px-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 rounded-none ${
                selectedCategory === category
                  ? 'text-white border-b border-white/50'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="portfolio-grid"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="portfolio-item group"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full h-full relative cursor-pointer">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <div className="text-center text-white px-4">
                          <h3 className="text-sm sm:text-lg lg:text-xl font-playfair font-medium mb-2">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-300">{item.category}</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl bg-black/95 border-white/10 backdrop-blur-xl mx-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                      <div className="aspect-square relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="flex flex-col justify-center space-y-6">
                        <div>
                          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                            {item.category}
                          </p>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair font-light text-white mb-4">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                        <Button 
                          className="btn-primary w-fit px-6 md:px-8 py-3 rounded-none text-sm md:text-base"
                          onClick={scrollToContact}
                        >
                          Solicitar orçamento
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}