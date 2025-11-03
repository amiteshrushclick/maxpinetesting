// src/components/ScrollToTop.jsx
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-4 sm:right-6 md:right-8 lg:right-10 z-[9999] 
          p-3  rounded-full bg-gradient-to-r from-[#20ae9b] to-[#0b685c] text-white shadow-lg 
          hover:bg-[#0f6e61] active:scale-95 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-7 h-7 " />
        </button>
      )}
    </>
  );
}
