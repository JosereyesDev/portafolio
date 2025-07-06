import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faRocket,
  faFingerprint,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faPhp,
  faLaravel,
  faVuejs,
  faGitAlt,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const skills = [
    { name: 'HTML', icon: faHtml5, color: '#E34F26' },
    { name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
    { name: 'Bootstrap', icon: faBootstrap, color: '#7952B3' },
    { name: 'Php', icon: faPhp, color: '#777BB4' },
    { name: 'MySQL', icon: faDatabase, color: '#00758F' },
    { name: 'Laravel', icon: faLaravel, color: '#FF2D20' },
    { name: 'Vue', icon: faVuejs, color: '#41B883' },
    { name: 'Git', icon: faGitAlt, color: '#F05032' },
    { name: 'Node.js', icon: faNodeJs, color: '#339933' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-info">
            <div className="about-card">
              <div className="about-header">
                <FontAwesomeIcon icon={faUserCircle} />
                <h3>¿Quién Soy?</h3>
              </div>
              <p>Soy un Ingeniero en Sistemas y Desarrollador Web altamente motivado con sólidos conocimientos en desarrollo de software y diseño de interfaces web.</p>
            </div>

            <div className="about-card">
              <div className="about-header">
                <FontAwesomeIcon icon={faRocket} />
                <h3>Mi Objetivo</h3>
              </div>
              <p>Mi objetivo es seguir aprendiendo y aplicar mis conocimientos actuales para ganar experiencia en diversas áreas como Front-end y Back-end. Me apasiona crear soluciones elegantes para problemas complejos.</p>
            </div>

            <div className="about-card">
              <div className="about-header">
                <FontAwesomeIcon icon={faFingerprint} />
                <h3>Mi Perfil</h3>
              </div>
              <p>Me caracterizo por mi capacidad para adaptarme rápidamente a nuevos entornos de trabajo y tecnologías, mi atención al detalle y mi compromiso con la entrega de productos de alta calidad.</p>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Mis Habilidades Técnicas</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" style={{ color: skill.color }} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
