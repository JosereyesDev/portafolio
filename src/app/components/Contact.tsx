"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contacto',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ nombre: '', email: '', mensaje: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Trabajemos Juntos</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              Estoy interesado en oportunidades para colaborar en proyectos innovadores y desafiantes. Si tienes alguna propuesta, pregunta o simplemente quieres saludar, no dudes en contactarme a través del formulario o por mis redes sociales.
            </p>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/esteban-molina-5342972a3/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/devsteve1" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://wa.me/5513612613" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.tiktok.com/@dev_stevee?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
          <form
            className={`contact-form ${isSubmitted ? 'submitted' : ''}`}
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contacto" />
            <p style={{ display: 'none' }}>
              <label>No llenar si eres humano: <input name="bot-field" /></label>
            </p>

            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="form-input"
                required
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                className="form-input"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                className="form-input"
                required
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">Enviar Mensaje</button>

            {isSubmitted && (
              <div className="form-success-message">
                <div className="success-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarme. Te responderé lo antes posible.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;