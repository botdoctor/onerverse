
import React from 'react';

function Hero({ title, description, links }) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white p-8">
      <nav className="absolute top-8 w-full flex justify-center space-x-8 text-sm tracking-wider">
        {links.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            className="hover:text-purple-400 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function DemoOne() {
  const navigationLinks = [
    { name: 'HOME', href: '/' },
    { name: 'WORK', href: '/work' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' }
  ];
  return (
    <div className="h-svh w-screen relative">
      <Hero 
        title="Sculpted Light and Shadow"
        description="A dynamic form drifts through luminous voids — edges curve, surfaces gleam, and subtle glow pulses like a heartbeat. Motion and material merge, revealing the art hidden within geometry."
        links={navigationLinks}
      />
    </div>
  );
}
