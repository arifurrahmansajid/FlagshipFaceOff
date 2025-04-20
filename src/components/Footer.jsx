import React from 'react';
import Container from './shared/Container';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FlagshipFaceOff</h2>
            <p className="mb-4 text-gray-600">
              The best place to compare and purchase top flagship phones of the current generation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-gray-900 transition">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900 transition">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-gray-900 transition">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-900 transition">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/about" className="hover:text-gray-900 transition">About Us</a></li>
              <li><a href="/phones" className="hover:text-gray-900 transition">All Phones</a></li>
              <li><a href="/compare" className="hover:text-gray-900 transition">Compare</a></li>
              <li><a href="/blog" className="hover:text-gray-900 transition">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/contact" className="hover:text-gray-900 transition">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-gray-900 transition">FAQs</a></li>
              <li><a href="/shipping" className="hover:text-gray-900 transition">Shipping Policy</a></li>
              <li><a href="/privacy" className="hover:text-gray-900 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FlagshipFaceOff Ltd. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative inline-block px-4 py-2 font-medium group cursor-pointer mt-4 md:mt-0"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white flex items-center justify-center">
              <i className="fas fa-arrow-up mr-2"></i> Back to Top
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;