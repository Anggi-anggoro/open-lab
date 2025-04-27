"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "./assets/OpenLabLogo.png"; // Adjust your logo path

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveMenu(null);
  };
  const navItems = [
    {
      name: "Mission",
      href: "/mission",
      dropdown: [
        { name: "Challenges", href: "/mission/challenges" },
        { name: "What We're Building", href: "/mission/building" },
      ],
    },
    {
      name: "Experiment",
      href: "/experiment",
      dropdown: [
        { name: "Engineering Lab", href: "/experiment/engineering" },
        { name: "Science Lab", href: "/experiment/science" },
        { name: "Playful Lab", href: "/experiment/playful" },
      ],
    },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "What is Open Lab", href: "/about/overview" },
        { name: "Meet the team", href: "/about/team" },        
      ],
    },
    {
      name: "Story",
      href: "/story",
    },
    {
      name: "Careers",
      href: "/careers",
    },
  ];

  return (
    <header className=" border-b-2 border-primary z-50 shadow-md">
    <div className="flex items-center justify-between px-4 py-4 md:px-12 md:pt-7 text-primary font-open-sans font-bold text-xl">
      <Link href="/" className="">
        <Image src={Logo} alt="Logo" width={180} height={80} className="md:w-64 md:h-auto" />
      </Link>
      
      {/* Desktop Navigation - hidden on mobile */}
      <nav className="hidden md:flex gap-x-24">
        {navItems.map((item, index) => (
          <div 
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="pb-3">
                {item.name === "Careers" || item.name === "Story" ? (
                  <Link href={item.href} className="hover:text-gray-400">
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className={`hover:text-gray-400 ${activeMenu === index ? 'text-gray-400' : ''}`}
                  >
                    {item.name}
                  </button>
                )}                       
            </div>

            {item.dropdown && (
              <div 
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 transition-all duration-200 ${
                  activeMenu === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-400 font-normal"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile menu button - hidden on desktop */}
      <button 
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-10 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>

    {/* Mobile menu - appears when button is pressed */}
    <div className={`md:hidden bg-white shadow-lg absolute w-full ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-4 py-2 space-y-2">
        {navItems.map((item, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0">
            <div className="py-3">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-lg">{item.name}</span>
                    <svg
                      className={`w-10 transform transition-transform ${
                        activeMenu === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${
                    activeMenu === index ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <div className="pl-4 py-2 space-y-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block py-2 text-gray-700 hover:text-gray-400 font-normal"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </header>
  );
};

export default Navbar;