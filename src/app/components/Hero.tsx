"use client";

import Link from 'next/link';
import Image from 'next/image';
import TechOrbit from './TechOrbit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hola Mundo, Soy José Manuel</p>
          <h1 className="hero-title">
            Técnico Superior en Informática y <span id="typing-text">Desarrollador Web<span className="blinking-cursor"></span></span>
          </h1>
          <p className="hero-description">
            Apasionado por el desarrollo web. Transformo ideas en código funcional, aprendo tecnologías emergentes y creo soluciones innovadoras y eficientes.
          </p>
          <div className="hero-buttons">
            <Link
              href="/CV_ESTEBAN_MOLINA_CABAÑAS.pdf"
              download="CV_ESTEBAN_MOLINA_CABAÑAS.pdf"
              className="btn"
            >
              Descargar CV
            </Link>
            <Link href="#contact" className="btn btn-outline">
              Contáctame
            </Link>
          </div>
          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/esteban-molina-5342972a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/EstebanMxca"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://wa.me/5564680264"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.tiktok.com/@dev_stevee?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/assets/profile.jpg"
            alt="JosermDev"
            className="profile-img"
            width={500}
            height={500}
            priority
          />
          <TechOrbit />
        </div>
      </div>
    </section>
  );
};

export default Hero;