// Custom splash cursor effect
(function() {
  let isInitialized = false;
  
  function SplashCursor(options = {}) {
    if (isInitialized) return;
    isInitialized = true;
    
    const config = {
      color: options.color || '#00B4DB',
      size: options.size || 50,
      duration: options.duration || 600,
      particles: options.particles || 8
    };

    const cursor = document.createElement('div');
    cursor.id = 'splash-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: ${config.color};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease-out;
      mix-blend-mode: difference;
      opacity: 0.8;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    function updateCursor() {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.left = cursorX - 10 + 'px';
      cursor.style.top = cursorY - 10 + 'px';
      
      requestAnimationFrame(updateCursor);
    }

    function createSplash(x, y) {
      for (let i = 0; i < config.particles; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / config.particles;
        const velocity = 50 + Math.random() * 50;
        
        particle.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: ${config.color};
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          left: ${x}px;
          top: ${y}px;
          opacity: 1;
        `;
        
        document.body.appendChild(particle);
        
        const endX = x + Math.cos(angle) * velocity;
        const endY = y + Math.sin(angle) * velocity;
        
        particle.animate([
          { 
            transform: 'translate(0, 0) scale(1)',
            opacity: 1
          },
          { 
            transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`,
            opacity: 0
          }
        ], {
          duration: config.duration,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).addEventListener('finish', () => {
          particle.remove();
        });
      }
    }

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener('click', (e) => {
      createSplash(e.clientX, e.clientY);
    });

    // Hide cursor on touch devices
    document.addEventListener('touchstart', () => {
      cursor.style.display = 'none';
    });

    updateCursor();
  }

  // Make it globally available
  window.SplashCursor = SplashCursor;
})();