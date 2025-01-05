import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="w-5 h-5 text-yellow-500" />
                <span>(37) 99976-5937</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-5 h-5 text-yellow-500" />
                <span>contato@confiance.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-5 h-5 text-yellow-500" />
                <span>Minas Gerais, MG</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-yellow-500">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-yellow-500">Nossos Serviços</a></li>
              <li><a href="#projects" className="hover:text-yellow-500">Projetos</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Fale Conosco</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/182NxUkQjT/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/confiance.rn" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/confiance-energias-renov%C3%A1veis-19a480304" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Confiance. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
