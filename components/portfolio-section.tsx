"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// --- Tipos e Dados ---
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Fine Line Floral',
    category: 'Florais',
    image: 'https://images.pexels.com/photos/32777284/pexels-photo-32777284.png',
    description: 'Delicada tatuagem floral em fine line com detalhes precisos e sombreamento sutil.'
  },
  {
    id: 2,
    title: 'Retrato Autoral',
    category: 'Retratos',
    image: 'https://images.pexels.com/photos/32777285/pexels-photo-32777285.png',
    description: 'Retrato realista com técnica fine line exclusiva e expressão única.'
  },
  {
    id: 3,
    title: 'Geométrico Minimalista',
    category: 'Geométricos',
    image: 'https://images.pexels.com/photos/32777280/pexels-photo-32777280.png',
    description: 'Design geométrico com linhas finas e precisas, criando harmonia visual.'
  },
  {
    id: 4,
    title: 'Arte Autoral Abstract',
    category: 'Autorais',
    image: 'https://images.pexels.com/photos/32777286/pexels-photo-32777286.png',
    description: 'Criação exclusiva com conceito artístico único e interpretação pessoal.'
  },
  {
    id: 5,
    title: 'Pontilhismo Delicado',
    category: 'Pontilhismo',
    image: 'https://images.pexels.com/photos/32777283/pexels-photo-32777283.png',
    description: 'Técnica de pontilhismo aplicada com precisão milimétrica.'
  },
  {
    id: 6,
    title: 'Mandala Fine Line',
    category: 'Geométricos',
    image: 'https://images.pexels.com/photos/32777281/pexels-photo-32777281.png',
    description: 'Mandala complexa executada em fine line com simetria perfeita.'
  },
  {
    id: 7,
    title: 'Natureza Autoral',
    category: 'Autorais',
    image: 'https://images.pexels.com/photos/32777284/pexels-photo-32777284.png',
    description: 'Interpretação artística de elementos naturais com toque pessoal.'
  },
  {
    id: 8,
    title: 'Minimalista Elegante',
    category: 'Florais',
    image: 'https://images.pexels.com/photos/32777282/pexels-photo-32777282.png',
    description: 'Design minimalista com elegância e sofisticação atemporal.'
  },
  {
    id: 9,
    title: 'Linha Contínua',
    category: 'Autorais',
    image: 'https://images.pexels.com/photos/32777285/pexels-photo-32777285.png',
    description: 'Arte em linha contínua que flui naturalmente pelo corpo.'
  },
  {
    id: 10,
    title: 'Fine Line Animal',
    category: 'Autorais',
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
    description: 'Tatuagem de animal em fine line, com traços delicados e expressão marcante.'
  },
  {
    id: 11,
    title: 'Flor Minimalista',
    category: 'Florais',
    image: 'https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg',
    description: 'Flor desenhada com linhas finas e composição minimalista.'
  },
  {
    id: 12,
    title: 'Mandala Ornamental',
    category: 'Geométricos',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
    description: 'Mandala ornamental com simetria e detalhes geométricos sofisticados.'
  }
];

const categories = ['Todos', 'Florais', 'Retratos', 'Geométricos', 'Autorais', 'Pontilhismo'];

// --- Funções Auxiliares ---
const scrollToContact = () => {
  const targetElement = document.getElementById('contact');
  if (targetElement) {
    const offsetTop = targetElement.offsetTop - 80;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};

const prefetchImage = (src: string) => {
  if (typeof window !== 'undefined') {
    const img = new window.Image();
    img.src = src;
  }
};

// --- Componentes ---

const GalleryItem = React.memo((
  { item, onSelect, onPrefetch }: 
  { item: PortfolioItem; onSelect: () => void; onPrefetch: () => void; }
) => {
  GalleryItem.displayName = 'GalleryItem';
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="portfolio-item group"
    >
      <button
        className="group relative aspect-square w-full overflow-hidden rounded-lg cursor-pointer block"
        onClick={onSelect}
        onMouseEnter={onPrefetch}
        aria-label={`Ver detalhes de ${item.title}`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 z-10">
          <h4 className="text-white font-playfair font-light text-lg mb-1">{item.title}</h4>
          <p className="text-gray-300 text-sm">{item.category}</p>
        </div>
      </button>
    </motion.div>
  );
});


export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section id="portfolio" className="section-spacing bg-black overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
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
            <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Uma curadoria cuidadosa dos nossos trabalhos mais representativos, demonstrando a versatilidade e precisão da técnica Fine Line.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12 lg:mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 rounded-none ${selectedCategory === category ? 'text-white border-b border-white/50' : 'text-gray-500 hover:text-gray-300'}`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <motion.div layout className="portfolio-grid">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  onSelect={() => setSelectedItem(item)}
                  onPrefetch={() => prefetchImage(item.image)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Dialog open={!!selectedItem} onOpenChange={(isOpen) => !isOpen && handleCloseModal()}>
        <AnimatePresence>
          {selectedItem && (
                        <DialogContent className="bg-black/90 text-white border-white/10 backdrop-blur-md p-0 w-[90vw] h-auto max-h-[90vh] lg:w-[80vw] lg:h-[90vh] rounded-lg overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full"
              >
                <div className="relative w-full h-[50vh] md:h-full">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 50vw"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 space-y-6 overflow-y-auto">
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                      {selectedItem.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-playfair font-light text-white mb-4">
                      {selectedItem.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {selectedItem.description}
                    </p>
                  </div>
                  <Button
                    className="btn-primary w-fit px-8 py-3 rounded-none text-sm md:text-base"
                    onClick={() => {
                      handleCloseModal();
                      scrollToContact();
                    }}
                  >
                    Solicitar orçamento
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </>
  );
}