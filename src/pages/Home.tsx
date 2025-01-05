// src/pages/Home.tsx
import Carousel from '../components/Carousel';
import ImageSection from '../components/ImageSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import OnGridSystem from '../components/OnGridSystem';
import CTASection from '../components/CTASection';
import FloatingSocial from '../components/FloatingSocial';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
        <Header />
      <Carousel />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Por que escolher energia solar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-yellow-500 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Economia</h3>
            <p className="text-gray-600">Reduza significativamente sua conta de energia elétrica</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-yellow-500 text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">SUSTENTABILIDADE</h3>
            <p className="text-gray-600">Energia limpa, renovável e sustentável para um futuro melhor.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-yellow-500 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">EFICIÊNCIA ENERGÉTICA</h3>
            <p className="text-gray-600">Você gera energia limpa com eficiência utilizando nossos módulos fotovoltaicos de última geração.</p>
          </div>
        </div>
      </section>
      <ImageSection />
      <OnGridSystem />
      <TestimonialsCarousel />
      <CTASection />
      <FloatingSocial />
      <Footer />
    </div>
  );
}
