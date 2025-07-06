'use client'

import { useEffect } from 'react';

export default function TechOrbit() {
  useEffect(() => {
    // Función para detectar dispositivo móvil
    const isMobileDevice = () => {
      const isMobileWidth = window.innerWidth <= 768;
      const isMobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hasTouchScreen = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      return isMobileWidth || (isMobileAgent && hasTouchScreen);
    };

    const isMobile = isMobileDevice();
    console.log("¿Dispositivo móvil detectado?", isMobile);

    // Función que crea el sistema orbital
    function setupOrbitSystem() {
      const heroImage = document.querySelector('.hero-image');
      if (!heroImage) {
        console.log("No se encontró el contenedor de imagen de héroe");
        return;
      }

      // Evitar duplicar el contenedor si ya existe
      if (document.getElementById('orbit-container')) return;

      const orbitContainer = document.createElement('div');
      orbitContainer.className = 'orbit-container';
      orbitContainer.id = 'orbit-container';
      heroImage.appendChild(orbitContainer);

      const technologies = [
        { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
        { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#00758F' },
        { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#41B883' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' }
      ];

      const numberOfOrbits = 3;
      const techsPerOrbit = [3, 3, 3]; // Distribución equitativa

      let techCounter = 0; // Contador para recorrer las tecnologías

      for (let i = 0; i < numberOfOrbits; i++) {
        const orbit = document.createElement('div');
        orbit.className = `orbit orbit-${i + 1}`;
        orbitContainer.appendChild(orbit);

        for (let j = 0; j < techsPerOrbit[i]; j++) {
          // Verificar que haya tecnologías disponibles
          if (techCounter >= technologies.length) {
            console.warn("No hay suficientes tecnologías para todas las órbitas");
            break;
          }

          const tech = technologies[techCounter];
          techCounter++;

          const techIcon = document.createElement('div');
          techIcon.className = 'tech-icon';

          const icon = document.createElement('i');
          icon.className = tech.icon;
          icon.style.color = tech.color;
          techIcon.appendChild(icon);

          const tooltip = document.createElement('div');
          tooltip.className = 'tech-tooltip';
          tooltip.textContent = tech.name;
          techIcon.appendChild(tooltip);

          const angle = (360 / techsPerOrbit[i]) * j;
          const radians = angle * (Math.PI / 180);

          // Obtener dimensiones de la órbita
          const orbitStyles = window.getComputedStyle(orbit);
          const orbitWidth = parseFloat(orbitStyles.width);
          const orbitHeight = parseFloat(orbitStyles.height);

          const x = (orbitWidth / 2) * Math.cos(radians);
          const y = (orbitHeight / 2) * Math.sin(radians);

          techIcon.style.position = 'absolute';
          techIcon.style.left = `calc(50% + ${x}px)`;
          techIcon.style.top = `calc(50% + ${y}px)`;
          techIcon.style.transform = 'translate(-50%, -50%)';

          orbit.appendChild(techIcon);

          const orbitDuration = 20 + i * 10; // 20s, 30s, 40s
          const direction = i % 2 === 0 ? 1 : -1;

          techIcon.style.animation = `tech-bob 3s ease-in-out infinite, orbit-rotation ${orbitDuration}s linear infinite ${direction === 1 ? 'reverse' : 'normal'}`;
        }
      }
    }

    if (!isMobile) {
      console.log("Configurando sistema orbital para desktop");
      setupOrbitSystem();
    } else {
      console.log("Dispositivo móvil detectado. Sistema orbital desactivado.");
    }

    // Listener para redimensionar ventana y actualizar órbitas
    function onResize() {
      const isMobileNow = isMobileDevice();
      const orbitContainer = document.getElementById('orbit-container');

      if (isMobileNow && orbitContainer) {
        orbitContainer.remove();
        console.log("Cambiado a móvil - Sistema orbital eliminado");
      } else if (!isMobileNow && !orbitContainer) {
        console.log("Cambiado a desktop - Creando sistema orbital");
        setupOrbitSystem();
      }
    }

    window.addEventListener('resize', onResize);

    // Cleanup: quitar listener y eliminar órbitas al desmontar
    return () => {
      window.removeEventListener('resize', onResize);
      const orbitContainer = document.getElementById('orbit-container');
      if (orbitContainer) orbitContainer.remove();
    };
  }, []);

  return null;
}