"use client";

import Link from 'next/link';
import Image from 'next/image';
import TechOrbit from './TechOrbit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
              href="https://www.linkedin.com/in/josereyesdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/JosereyesDev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://wa.me/584121234253"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.instagram.com/josemreyesg/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
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