import React from 'react';

export default function OnGridSystem() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sistema On-Grid</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80"
              alt="Sistema On-Grid"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">VOCÊ GERANDO SUA PRÓPRIA ENERGIA LIMPA E RENOVÁVEL.                </h3>
                <p className="text-lg">
                A Confiance Energias Renováveis é especializada no desenvolvimento de projetos de sistemas fotovoltaicos para residências, comércios, fazendas e Agronegócios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}