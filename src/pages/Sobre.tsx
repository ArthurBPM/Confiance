import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSun, FaLeaf, FaHandshake, FaLightbulb } from 'react-icons/fa';
import FloatingSocial from "../components/FloatingSocial";

export default function About() {
  const values = [
    { icon: <FaLeaf className="text-green-600 text-2xl" />, text: "Compromisso com o cliente e com o meio ambiente" },
    { icon: <FaLightbulb className="text-yellow-600 text-2xl" />, text: "Inovação constante em soluções energéticas" },
    { icon: <FaHandshake className="text-blue-600 text-2xl" />, text: "Ética, transparência e responsabilidade" },
    { icon: <FaSun className="text-orange-600 text-2xl" />, text: "Excelência em serviços e atendimento" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Sobre a Empresa</h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Somos uma empresa dedicada a fornecer soluções inovadoras em energia solar. 
                Com anos de experiência no mercado, ajudamos pessoas e empresas a adotarem 
                energia limpa e sustentável, contribuindo para um futuro mais verde e econômico.
              </p>
              <FaSun className="text-6xl text-blue-600 mx-auto" />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-700">
                Nossa missão é transformar a maneira como o mundo consome energia, promovendo 
                soluções acessíveis e sustentáveis em energia solar para todos.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
                    {value.icon}
                    <p className="text-gray-700">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
            <img
                  src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?w=800&auto=format&fit=crop&q=80"
                  alt="Nossa equipe"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
            </div>
          </div>
        </div>
      </main>
    <FloatingSocial />
      <Footer />
    </div>
  );
}