"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">eByte</div>
        <div className="hidden md:flex w-full justify-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/Services" className="text-white hover:text-gray-300">Services</Link>
          <Link href="/Contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link href="/About" className="text-white hover:text-gray-300">About</Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block text-white py-2">Home</Link>
          <Link href="/services" className="block text-white py-2">Services</Link>
          <Link href="/contact" className="block text-white py-2">Contact</Link>
          <Link href="/about" className="block text-white py-2">About</Link>
        </div>
      )}
    </nav>
  );
}
