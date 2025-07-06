'use client';

import { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;

    const numberOfParticles = isMobile ? 20 : 50;
    
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * (isMobile ? 4 : 5) + 1;
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = (Math.random() * (isMobile ? 0.4 : 0.5) + 0.1).toString();
      
      particlesContainer.appendChild(particle);
      animateParticle(particle, isMobile);
    }

    function animateParticle(particle: HTMLDivElement, isMobile: boolean) {
      const speed = Math.random() * (isMobile ? 15 : 20) + (isMobile ? 5 : 10);
      const direction = Math.random() * 360;
      const radians = direction * Math.PI / 180;
      
      const moveX = Math.cos(radians) * speed;
      const moveY = Math.sin(radians) * speed;
      
      let posX = parseFloat(particle.style.left);
      let posY = parseFloat(particle.style.top);
      
      function move() {
        const factor = isMobile ? 0.007 : 0.01;
        posX += moveX * factor;
        posY += moveY * factor;
        
        if (posX < 0 || posX > 100) {
          posX = Math.max(0, Math.min(100, posX));
        }
        if (posY < 0 || posY > 100) {
          posY = Math.max(0, Math.min(100, posY));
        }
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        requestAnimationFrame(move);
      }
      
      move();
    }
  }, []);

  return <div className="particles" id="particles"></div>;
};

export default Particles;