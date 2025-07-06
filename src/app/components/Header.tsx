"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className={isMenuOpen ? 'menu-open' : ''}>
      <div className="container nav-container">
        <Link href="#" className="logo"><span>Joserm</span>Dev<span>.</span></Link>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Inicio</Link></li>
            <li><Link href="#about" className={activeSection === 'about' ? 'active' : ''}>Sobre Mí</Link></li>
            <li><Link href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Proyectos</Link></li>
            <li><Link href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contacto</Link></li>
          </ul>
        </nav>
        <div className="social-links">
  <a href="https://www.linkedin.com/in/esteban-molina-5342972a3/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://github.com/EstebanMxca" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://wa.me/5564680264" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
</div>

        <div className="menu-btn" id="menuBtn" onClick={toggleMenu}>
  <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
</div>

      </div>
    </header>
  );
};

export default Header;