import React from 'react';

export default function CTASection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/553799765937?text=Olá! Gostaria de fazer um orçamento para energia solar.', '_blank');
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
          alt="Solar Panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Soluções Completas em Energia Solar Fotovoltaica
        </h2>
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
        >
          Solicitar Orçamento
        </button>
      </div>
    </section>
  );
}