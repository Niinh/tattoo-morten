"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bodyPart: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de agendar uma sessão de tatuagem.
    
Nome: ${formData.name}
Email: ${formData.email}
Local do corpo: ${formData.bodyPart}
Descrição: ${formData.description}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecionando para o WhatsApp...');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-spacing bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-light mb-6 lg:mb-8 text-gradient">
            VAMOS CRIAR JUNTOS
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Pronto para transformar sua ideia em arte? Entre em contato e vamos 
            começar a jornada da sua próxima tatuagem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-4 lg:px-0"
          >
            <div className="card-minimal p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-playfair font-light mb-2 text-white">Solicitar Orçamento</h3>
              <p className="text-gray-400 mb-6 lg:mb-8 text-sm">
                Preencha o formulário abaixo e entraremos em contato via WhatsApp
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 text-sm">Nome completo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="bg-transparent border-white/20 text-white mt-2 rounded-none focus:border-white/40 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300 text-sm">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-transparent border-white/20 text-white mt-2 rounded-none focus:border-white/40 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="bodyPart" className="text-gray-300 text-sm">Local do corpo</Label>
                  <Select onValueChange={(value) => handleInputChange('bodyPart', value)}>
                    <SelectTrigger className="bg-transparent border-white/20 text-white mt-2 rounded-none h-12">
                      <SelectValue placeholder="Selecione o local" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="antebraco">Antebraço</SelectItem>
                      <SelectItem value="braco">Braço</SelectItem>
                      <SelectItem value="perna">Perna</SelectItem>
                      <SelectItem value="costas">Costas</SelectItem>
                      <SelectItem value="peito">Peito</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description" className="text-gray-300 text-sm">Descrição da ideia</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Descreva sua ideia, estilo preferido, tamanho aproximado..."
                    className="bg-transparent border-white/20 text-white mt-2 min-h-[120px] rounded-none focus:border-white/40 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full py-4 text-sm lg:text-base font-medium rounded-none"
                  disabled={!formData.name || !formData.email || !formData.bodyPart || !formData.description}
                >
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 px-4 lg:px-0"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <motion.div
                whileHover={{ y: -3 }}
                className="card-minimal p-4 lg:p-6"
              >
                <Phone className="text-white/70 mb-3 lg:mb-4" size={20} />
                <h3 className="text-sm lg:text-base xl:text-lg font-medium mb-2 text-white">Telefone</h3>
                <p className="text-gray-400 text-xs lg:text-sm">+55 (11) 99999-9999</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="card-minimal p-4 lg:p-6"
              >
                <Mail className="text-white/70 mb-3 lg:mb-4" size={20} />
                <h3 className="text-sm lg:text-base xl:text-lg font-medium mb-2 text-white">E-mail</h3>
                <p className="text-gray-400 text-xs lg:text-sm">contato@mortentattoo.com</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="card-minimal p-4 lg:p-6"
              >
                <MapPin className="text-white/70 mb-3 lg:mb-4" size={20} />
                <h3 className="text-sm lg:text-base xl:text-lg font-medium mb-2 text-white">Localização</h3>
                <p className="text-gray-400 text-xs lg:text-sm">Umuarama-PR</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="card-minimal p-4 lg:p-6"
              >
                <Clock className="text-white/70 mb-3 lg:mb-4" size={20} />
                <h3 className="text-sm lg:text-base xl:text-lg font-medium mb-2 text-white">Horário</h3>
                <p className="text-gray-400 text-xs lg:text-sm">Seg-Sex: 10h-18h</p>
              </motion.div>
            </div>

            {/* Studio Info */}
            <div className="card-minimal p-6 lg:p-8">
              <h3 className="text-base lg:text-lg xl:text-xl font-playfair font-light mb-4 lg:mb-6 text-white">Por que nos escolher?</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white/30 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-xs lg:text-sm">Exclusividade em cada projeto com designs únicos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white/30 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-xs lg:text-sm">Segurança e higiene com materiais descartáveis</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white/30 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-xs lg:text-sm">Atendimento personalizado com escuta ativa</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white/30 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-400 text-xs lg:text-sm">Acompanhamento pós-tattoo para melhor cicatrização</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="text-center">
              <p className="text-gray-400 mb-4 text-sm">Siga nosso trabalho</p>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-white transition-colors rounded-none"
                asChild
              >
                <a
                  href="https://www.instagram.com/yasmy_tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram size={18} />
                  @yasmy_tattoo
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}