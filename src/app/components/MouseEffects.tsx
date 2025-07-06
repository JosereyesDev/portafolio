'use client'

import { useEffect } from 'react';

export default function MouseEffects() {
  useEffect(() => {
    // Crear el contenedor para el rastro del mouse
    const mouseTrailContainer = document.createElement('div');
    mouseTrailContainer.className = 'mouse-trail-container';
    document.body.appendChild(mouseTrailContainer);

    const trailLength = 20;
    const trails: { element: HTMLDivElement; x: number; y: number }[] = [];

    for (let i = 0; i < trailLength; i++) {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      trail.style.width = (10 - i * 0.4) + 'px';
      trail.style.height = (10 - i * 0.4) + 'px';
      trail.style.opacity = (1 - i / trailLength).toString();
      mouseTrailContainer.appendChild(trail);
      trails.push({ element: trail, x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        isMoving = false;
      }, 100);
    }

    document.addEventListener('mousemove', onMouseMove);

    function animateTrail() {
      if (isMoving) {
        trails[0].x = mouseX;
        trails[0].y = mouseY;

        for (let i = 1; i < trails.length; i++) {
          trails[i].x += (trails[i - 1].x - trails[i].x) * 0.3;
          trails[i].y += (trails[i - 1].y - trails[i].y) * 0.3;
        }

        for (let i = 0; i < trails.length; i++) {
          trails[i].element.style.transform = `translate(${trails[i].x - 5}px, ${trails[i].y - 5}px)`;
        }
      }

      requestAnimationFrame(animateTrail);
    }

    animateTrail();

    function isMobileDevice() {
      return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
    }

    if (isMobileDevice()) {
      mouseTrailContainer.style.display = 'none';
    }

    // Limpieza al desmontar el componente
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (timer) clearTimeout(timer);
      mouseTrailContainer.remove();
    };
  }, []);

  return null;
}
