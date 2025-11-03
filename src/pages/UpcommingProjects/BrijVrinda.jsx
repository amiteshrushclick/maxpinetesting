import React, { useState, useEffect } from 'react';
import img from '../../assets/BrijVrinda/1.webp'
export default function BrijVrindaProjects() {
  const [projectName, setProjectName] = useState('Brij Vrinda');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-[#20ae9b]/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Coming Soon Text - In One Row */}
        <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight">
              Coming
            </span>
            <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#20ae9b] tracking-tight" style={{ textShadow: '0 0 30px rgba(32, 174, 155, 0.5)' }}>
              Soon
            </span>
          </div>
        </div>

        {/* Project Name Display */}
        <div className={`mt-8 transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-[#20ae9b]/20 backdrop-blur-md border border-[#20ae9b] rounded-full px-8 py-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              {projectName}
            </p>
          </div>
        </div>

        {/* Decorative Line */}
        <div className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#20ae9b]"></div>
          <div className="w-2 h-2 rounded-full bg-[#20ae9b]" style={{ boxShadow: '0 0 20px rgba(32, 174, 155, 0.8)' }}></div>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#20ae9b]"></div>
        </div>

        {/* Subtitle */}
        <p className={`mt-8 text-lg sm:text-xl text-gray-300 transition-all duration-1000 delay-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          We're working on something amazing. Stay tuned!
        </p>

        {/* Animated Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-[#20ae9b]"
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}