import { FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        {/* Company Name and Motto */}
        <h1 className="text-2xl font-bold">eByte</h1>
        <p className="text-lg">Towards a digital future</p>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-10 mt-4">
          <a href="https://web.facebook.com/fraser.msusa.3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://wa.me/265888073002" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://linkedin.com/in/fraser-msusa-31023a240/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:frasermsusa@gmail.com" className="text-white hover:text-gray-400">
            <FaEnvelope size={24} />
          </a>
          <a href="tel:+265888073002" className="text-white hover:text-gray-400">
            <FaPhone size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="mt-6 text-sm text-gray-400">
          © 2024 eByte - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
