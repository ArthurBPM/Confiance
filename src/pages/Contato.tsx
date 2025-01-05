import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  const hours = [
    { day: 'Segunda a Sexta', time: '08:00 - 18:00' },
    { day: 'Sábado', time: '09:00 - 13:00' },
    { day: 'Domingo', time: 'Fechado' }
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      url: 'https://wa.me/553799765937',
      bgColor: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: FaInstagram,
      url: 'https://instagram.com/confiance.rn',
      bgColor: 'bg-pink-500 hover:bg-pink-600',
    },
    {
      icon: FaFacebookF,
      url: 'https://www.facebook.com/share/182NxUkQjT/',
      bgColor: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/confiance-energias-renov%C3%A1veis-19a480304',
      bgColor: 'bg-blue-600 hover:bg-blue-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Entre em Contato</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-600 text-xl" />
                  <a href="tel:+553799765937" className="text-gray-700 hover:text-blue-600">
                    (37) 99976-5937
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-600 text-xl" />
                  <a href="mailto:contato@confiance.com.br" className="text-gray-700 hover:text-blue-600">
                    contato@confiance.com.br
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  <span className="text-gray-700">Minas Gerais, MG</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-2 mb-6">
                <FaClock className="text-blue-600 text-xl" />
                <h2 className="text-2xl font-bold text-gray-900">Horário de Atendimento</h2>
              </div>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Redes Sociais</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.bgColor} p-3 rounded-full text-white transition-colors duration-300`}
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Localização</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9661246021897!2d-44.1471888!3d-19.9176883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c1a7c76ef347%3A0x8f0d3c574f5c26ac!2sMinas%20Gerais!5e0!3m2!1sen!2sbr!4v1647891234567!5m2!1sen!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}