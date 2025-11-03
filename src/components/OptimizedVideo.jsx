import { useState, useRef, useEffect } from 'react';

const OptimizedVideo = ({ 
  src, 
  className = '', 
  poster,
  autoPlay = false,
  muted = true,
  controls = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(true); // Set to true for modal/direct display
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // For modals, we want to load immediately, so we skip IntersectionObserver
    // But if you want lazy loading, use this observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleError = (e) => {
    console.error('Video loading error for:', src);
    console.error('Error details:', e.target?.error);
    if (e.target?.error) {
      const error = e.target.error;
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {isInView && src && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          controls={controls}
          onLoadedData={handleLoadedData}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          preload="auto"
          playsInline
          {...props}
        />
      )}
      {!src && (
        <div className="flex items-center justify-center w-full h-full bg-gray-900 text-white">
          <p>Video URL not provided</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;
