import React from 'react';

interface HoverImageProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HoverImage = ({ imageUrl, title, description }: HoverImageProps) => (
  <div className="relative overflow-hidden group rounded-lg">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
      <p className="text-white text-center px-6">{description}</p>
    </div>
  </div>
);

export default function ImageSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HoverImage
          imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80"
          title="Instalação Profissional"
          description="Nossa equipe especializada garante uma instalação perfeita e segura dos seus painéis solares"
        />
        <HoverImage
          imageUrl="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
          title="Tecnologia Avançada"
          description="Utilizamos painéis solares de última geração para máxima eficiência energética"
        />
      </div>
    </section>
  );
}