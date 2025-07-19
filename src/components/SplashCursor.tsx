import { useEffect } from 'react';

const SplashCursor = () => {
  useEffect(() => {
    // Check if we're on a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) return;

    let cursor: HTMLDivElement;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const createCursor = () => {
      cursor = document.createElement('div');
      cursor.className = 'splash-cursor';
      cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-middle)));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease-out;
        mix-blend-mode: difference;
        opacity: 0.7;
        transform: translate(-50%, -50%);
      `;
      document.body.appendChild(cursor);
    };

    const updateCursor = () => {
      if (!cursor) return;
      
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(updateCursor);
    };

    const createSplash = (x: number, y: number) => {
      const particles = 8;
      const colors = [
        'hsl(var(--gradient-start))',
        'hsl(var(--gradient-middle))',
        'hsl(var(--gradient-end))'
      ];
      
      for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 50 + Math.random() * 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
          position: fixed;
          width: 6px;
          height: 6px;
          background: ${color};
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          left: ${x}px;
          top: ${y}px;
          transform: translate(-50%, -50%);
          opacity: 1;
        `;
        
        document.body.appendChild(particle);
        
        const endX = x + Math.cos(angle) * velocity;
        const endY = y + Math.sin(angle) * velocity;
        
        const animation = particle.animate([
          { 
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 1
          },
          { 
            transform: `translate(${endX - x - 3}px, ${endY - y - 3}px) scale(0)`,
            opacity: 0
          }
        ], {
          duration: 600,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.addEventListener('finish', () => {
          particle.remove();
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleClick = (e: MouseEvent) => {
      createSplash(e.clientX, e.clientY);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('magnetic') || target.closest('.magnetic')) {
        if (cursor) {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursor.style.opacity = '0.9';
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity = '0.7';
      }
    };

    createCursor();
    updateCursor();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (cursor) {
        cursor.remove();
      }
    };
  }, []);

  return null;
};

export default SplashCursor;