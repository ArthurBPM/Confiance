import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function FloatingSocial() {
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
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.bgColor} p-3 rounded-full text-white shadow-lg transform hover:scale-110 transition-all duration-300`}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
