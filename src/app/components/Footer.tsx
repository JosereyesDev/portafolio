import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/esteban-molina-5342972a3/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/EstebanMxca" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://wa.me/5564680264" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.tiktok.com/@dev_stevee?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
        <div className="footer-links">
          <Link href="#hero">Inicio</Link>
          <Link href="#about">Sobre Mí</Link>
          <Link href="#projects">Proyectos</Link>
          <Link href="#contact">Contacto</Link>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} JosermDev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;