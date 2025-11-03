"use client";

import { useNavigate ,Outlet} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper/modules';
import { Heart, Briefcase, User, Globe, Map, Building } from 'lucide-react';
import { useState } from 'react';

export default function OfficiTestimonial() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const featureData = [
    {
      icon: <Briefcase className="text-[#20ae9b] w-8 h-8 mb-2" />,
      title: "Corporate Office",
      text: "H-174, Ground Floor, Sector-63, Noida, Uttar Pradesh 201301." 
    },
    {
      icon: <Heart className="text-[#20ae9b] w-8 h-8 mb-2" />,
      title: "Branch Office",
      text: "Shahdra office - 1/6966 Shivaji Park, Shahdara 110032"
    },
    
    {
      icon: <User className="text-[#20ae9b] w-8 h-8 mb-2" />,
      title: "Sales Office",
     text: "CS-9, First Floor, Gyan Khand 2, Indrapuram"
    },
    {
      icon: <Globe className="text-[#20ae9b] w-8 h-8 mb-2" />,
      title: "Sales Office",
      text: "CS-9, First Floor, Gyan Khand 2, Indrapuram"
    },
    {
      icon: <Map className="text-[#20ae9b] w-8 h-8 mb-2" />,
      title: "Sales Office",
      text: "Kasana tower-1, 4th floor, Near Alfa- metro Station Greater Noida( UP)"
    },
    {
      icon: <User className="text-[#20ae9b] w-8 h-8 mb-2" />,
      title: "Sales Office",
     text: "CS-9, First Floor, Gyan Khand 2, Indrapuram"
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto text-center">
      {/* Section Title */}
      <p className="inline-block px-4 py-1 mb-3 text-sm rounded-full bg-[#ddebe9] text-[#2bc9b4] font-medium">
        Our Office
      </p>
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-gray-900">
        Our Main Office
      </h2>

      <div className="relative ">
        <Swiper
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          modules={[Pagination, Autoplay]}
          className="w-full pb-12 " 
        >
          {featureData.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div className="relative h-60 md:h-76"> {/* Fixed container height */}
                  <div 
                    className={`absolute inset-0 bg-white flex flex-col justify-between items-center text-center p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border-b-4 border-[#37ceba] ${
                      isActive 
                        ? 'transform scale-105 shadow-2xl bg-gradient-to-br from-white to-[#e9f3f2] border-[#29beab] z-10' 
                        : 'transform scale-95 opacity-80 z-0'
                    }`}
                    style={{
                      transformOrigin: 'center center'
                    }}
                  >
                    {/* Icon with splash background */}
                    <div className={`flex items-center justify-center mb-4 relative transition-all duration-500 ${
                      isActive ? 'w-24 h-24' : 'w-20 h-20'
                    }`}>
                      <div className={`absolute inset-0 bg-[#e4f0ee] rounded-full opacity-70 blur-md transition-all duration-500 ${
                        isActive ? 'bg-[#c5ece7] scale-110' : ''
                      }`}></div>
                      <div className={`relative text-[#2fc7b3] transition-all duration-500 ${
                        isActive ? 'text-5xl text-[#20ae9b]' : 'text-4xl'
                      }`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-gray-900 mb-2 transition-all duration-500 ${
                      isActive 
                        ? 'text-xl md:text-2xl text-[#158b7c]' 
                        : 'text-lg md:text-xl'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-gray-500 mb-4 flex-grow transition-all duration-500 ${
                      isActive 
                        ? 'text-base md:text-lg text-gray-600' 
                        : 'text-sm md:text-base'
                    }`}>
                      {item.text}
                    </p>

                    {/* CTA */}
                   
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/about/book-site-visit")}
        className="cursor-pointer mt-8 bg-[#2fb3a1] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#148071] transition text-sm sm:text-base md:text-lg"
      >
        Schedule Your Visit
      </button>
       <Outlet />
    </section>
  );
}