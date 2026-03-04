import React, { useEffect, useState } from 'react';
import { Waypoints, Home,  User, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Navigations() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
   setTimeout(() => {
   setIsOpen(true)
   } , 3000)
  } , [])

  // all navigation like goes here
  const links = [
    { id: 1, icon: <Home size={20} />, label: "Home" , to : '/' },
    { id: 2, icon: <User size={20} />, label: "About" , to : '/about' },
    { id: 3, icon: <MessageCircleQuestion size={20} />, label: "Faqs"  , to : '/faqs'},
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg
          ${isOpen ? 'bg-yellow-500 rotate-45 text-black' : 'bg-black text-white hover:scale-110'}`}
      >
        <Waypoints size={24} strokeWidth={2.5} />
      </button>
      <div className={`flex flex-col items-center gap-3 transition-all duration-500 ease-out
        ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-50 pointer-events-none'}`}
      >
        {links.map((link, index) => (
          <Link
            key={link.id}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
            }}
            className="h-12 w-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-200"
            title={link.label}
            to={link.to}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
