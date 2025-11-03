import { useState, useRef, useEffect } from 'react';

const AdvancedImage = ({ 
  src, 
  alt, 
  className = '', 
  sizes = '100vw',
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Generate WebP and responsive image sources
  const generateImageSources = (originalSrc) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, "");
    const extension = originalSrc.split('.').pop();
    
    return {
      webp: `${baseName}.webp`,
      fallback: originalSrc,
      avif: `${baseName}.avif`
    };
  };

  const imageSources = generateImageSources(src);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <>
          {/* Placeholder */}
          <div className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`} />

          {/* Picture element for modern browsers */}
          <picture className="block w-full h-full">
            {/* AVIF for ultra-modern browsers */}
            <source 
              srcSet={imageSources.avif} 
              type="image/avif"
              sizes={sizes}
            />
            
            {/* WebP for modern browsers */}
            <source 
              srcSet={imageSources.webp} 
              type="image/webp"
              sizes={sizes}
            />
            
            {/* Fallback image */}
            <img
              src={hasError ? imageSources.fallback : imageSources.webp}
              alt={alt}
              onLoad={handleLoad}
              onError={handleError}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              {...props}
            />
          </picture>
        </>
      )}
    </div>
  );
};

export default AdvancedImage;
