// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Critical above-the-fold styles */
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }
  
  /* Critical layout styles */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Critical banner styles */
  .banner-section {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #000;
    overflow: hidden;
  }
  
  .banner-content {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Critical navbar styles */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  /* Critical button styles */
  .btn-primary {
    background: #20ae9b;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn-primary:hover {
    background: #1a8f7a;
    transform: translateY(-2px);
  }
  
  /* Critical loading states */
  .loading {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .loaded {
    opacity: 1;
  }
  
  /* Critical responsive styles */
  @media (max-width: 768px) {
    .container {
      padding: 0 0.5rem;
    }
    
    .banner-section {
      height: 70vh;
    }
  }
`;

// Non-critical CSS loader
export const loadNonCriticalCSS = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/index.css';
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  document.head.appendChild(link);
};
