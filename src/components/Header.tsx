import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <Sun className="h-8 w-8 text-yellow-500" /> */}
            <span className="text-2xl font-bold text-gray-800">SolarTech</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-yellow-500">Home</a>
            <a href="/services" className="text-gray-600 hover:text-yellow-500">Serviços</a>
            <a href="/sobre" className="text-gray-600 hover:text-yellow-500">Sobre</a>
            <a href="/contato" className="text-gray-600 hover:text-yellow-500">Contato</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* {isMenuOpen ? <X /> : <Menu />} */}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-yellow-500">Home</a>
              <a href="#services" className="text-gray-600 hover:text-yellow-500">Serviços</a>
              <a href="#about" className="text-gray-600 hover:text-yellow-500">Sobre</a>
              <a href="#contact" className="text-gray-600 hover:text-yellow-500">Contato</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}