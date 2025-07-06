'use client'

import { useEffect } from 'react';

export default function ScriptEffects() {
  useEffect(() => {
    // Variables DOM
    const menuBtn = document.getElementById('menuBtn');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    if (!menuBtn || !header) return;

    // Toggle menu
    const onMenuClick = () => {
      header.classList.toggle('menu-open');
      const icon = menuBtn.querySelector('i');
      if (!icon) return;
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    };

    menuBtn.addEventListener('click', onMenuClick);

    // Close menu on link click
    const onNavLinkClick = () => {
      header.classList.remove('menu-open');
      const icon = menuBtn.querySelector('i');
      if (!icon) return;
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    };
    navLinks.forEach(link => link.addEventListener('click', onNavLinkClick));

    // Scroll effects with throttling
    let lastCall = 0;
    const throttle = (fn: () => void, delay: number) => {
      return () => {
        const now = Date.now();
        if (now - lastCall < delay) return;
        lastCall = now;
        fn();
      };
    };

    const onScroll = throttle(() => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }, 100);

    window.addEventListener('scroll', onScroll);

    // Cursor parpadeante para #typing-text
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
      const existingCursor = typingElement.querySelector('.cursor');
      if (existingCursor) existingCursor.remove();

      const cursorElement = document.createElement('span');
      cursorElement.className = 'cursor';
      typingElement.appendChild(cursorElement);

      const interval = setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
      }, 500);

      // Cleanup para cursor
      return () => clearInterval(interval);
    }

    // IntersectionObserver para animaciones reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.section-title, .about-info, .about-card, .skills-section, .skill-card, .project-card, .contact-form');
    revealElements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    // Ajuste para dispositivos móviles
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      const mobileObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      };

      const mobileObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            mobileObserver.unobserve(entry.target);
          }
        });
      }, mobileObserverOptions);

      document.querySelectorAll('.reveal').forEach(el => mobileObserver.observe(el));

      // Cerrar menú al click fuera
      const onDocumentClick = (e: MouseEvent) => {
        if (header.classList.contains('menu-open') &&
          !e.target || !(e.target as HTMLElement).closest('.nav-links') &&
          !(e.target as HTMLElement).closest('#menuBtn')) {
          header.classList.remove('menu-open');
          const icon = menuBtn.querySelector('i');
          if (icon && icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      };
      document.addEventListener('click', onDocumentClick);

      // Animación táctil para botones y enlaces
      const touchElements = document.querySelectorAll('.btn, .nav-links a, .social-icon, .project-card, .skill-card');
      const onTouchStart = (e: Event) => {
  (e.currentTarget as HTMLElement).style.transform = 'scale(0.98)';
};
const onTouchEnd = (e: Event) => {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = 'scale(1)';
  setTimeout(() => {
    el.style.transform = '';
  }, 300);
};
      touchElements.forEach(el => {
        el.addEventListener('touchstart', onTouchStart);
        el.addEventListener('touchend', onTouchEnd);
      });

      return () => {
        document.removeEventListener('click', onDocumentClick);
        touchElements.forEach(el => {
          el.removeEventListener('touchstart', onTouchStart);
          el.removeEventListener('touchend', onTouchEnd);
        });
        mobileObserver.disconnect();
      };
    }

    // Manejo formulario contacto
    const form = document.querySelector('.contact-form') as HTMLFormElement | null;
    const successMessage = document.querySelector('.form-success-message');

    if (form) {
      const onSubmit = (e: Event) => {
        const submitBtn = form.querySelector('.submit-btn') as HTMLButtonElement | null;

        if (submitBtn) {
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
          submitBtn.disabled = true;
          submitBtn.classList.add('loading');
        }

        if (!window.location.href.includes('netlify') && !e.defaultPrevented) {
          e.preventDefault();

          setTimeout(() => {
            Array.from(form.querySelectorAll('.form-group, .submit-btn')).forEach(el => {
              (el as HTMLElement).style.display = 'none';
            });

            if (successMessage) {
              (successMessage as HTMLElement).style.display = 'block';
            } else {
              const newSuccessMessage = document.createElement('div');
              newSuccessMessage.className = 'form-success-message';
              newSuccessMessage.innerHTML = `
                <div class="success-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <h3>¡Mensaje Enviado!</h3>
                <p>Gracias por contactarme. Te responderé lo antes posible.</p>
              `;
              form.appendChild(newSuccessMessage);
            }
            form.reset();
          }, 1500);
        } else if (window.location.href.includes('netlify')) {
          localStorage.setItem('formSubmitted', 'true');
        }
      };

      form.addEventListener('submit', onSubmit);

      if (localStorage.getItem('formSubmitted') === 'true' && window.location.href.includes('?submit=success')) {
        localStorage.removeItem('formSubmitted');
        const formContainer = document.querySelector('.contact-content');
        if (formContainer) {
          formContainer.innerHTML = `
            <div class="form-success-message" style="display:block; width:100%;">
              <div class="success-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <h3>¡Mensaje Enviado!</h3>
              <p>Gracias por contactarme. Te responderé lo antes posible.</p>
              <button onclick="window.location.href='${window.location.pathname}'" 
                      class="btn" style="margin-top:20px;">
                Volver
              </button>
            </div>
          `;
        }
      }

      return () => {
        form.removeEventListener('submit', onSubmit);
      };
    }

    // Cleanup principal: eliminar listeners y animaciones
    return () => {
      menuBtn.removeEventListener('click', onMenuClick);
      navLinks.forEach(link => link.removeEventListener('click', onNavLinkClick));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
