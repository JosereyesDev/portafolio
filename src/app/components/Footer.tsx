import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/josereyesdev/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/JosereyesDev" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://wa.me/584121234253" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.instagram.com/josemreyesg/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="footer-links">
          <Link href="#hero">Inicio</Link>
          <Link href="#about">Sobre Mí</Link>
          <Link href="#projects">Proyectos</Link>
          <Link href="#contact">Contacto</Link>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;