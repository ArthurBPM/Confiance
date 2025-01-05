import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingSocial from "../components/FloatingSocial";

export default function Services() {
  const services = [
    {
      title: "Instalação de Painéis Solares",
      description: "Instalação profissional de sistemas fotovoltaicos completos, incluindo painéis solares de alta eficiência e inversores de última geração.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Consultoria Energética",
      description: "Análise detalhada do seu consumo e desenvolvimento de soluções personalizadas para maximizar sua economia de energia.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Manutenção e Suporte",
      description: "Serviços completos de manutenção preventiva e corretiva, garantindo o máximo desempenho do seu sistema solar.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80"
    },
    {
        title: "Manutenção e Suporte",
        description: "Serviços completos de manutenção preventiva e corretiva, garantindo o máximo desempenho do seu sistema solar.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80"
      }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Nossos Serviços</h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Veja Alguns de nossos serviços de Instalações       
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        <FloatingSocial />
      <Footer />
    </div>
  );
}