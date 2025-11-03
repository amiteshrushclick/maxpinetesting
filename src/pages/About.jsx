import React , { useContext, useEffect, useState } from 'react'
import { AppContext } from '../components/AppContext';

import { Home, User, Award, Phone, Mail, MapPin, Target, Eye, Heart, Shield } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import vidimg from '../assets/All_home_imgs/video-placeholder.webp'
import img1 from '../assets/Team_Member/Pawan.webp'
import img2 from '../assets/Team_Member/ashish.webp'
import img3 from '../assets/Team_Member/Vijay.webp'
import img4 from '../assets/Team_Member/Pradeep-Tyagi.webp'
import img5 from '../assets/Team_Member/AMAN-BHUTANI.webp'
import img6 from '../assets/Team_Member/NISHANT-BHARDWAJ.webp'
import img7 from '../assets/Team_Member/Ankur-sharma-1.webp'
import img8 from '../assets/Team_Member/Shashank-singhal.webp'
import Testimonial from './About/Testimonial';
import OfficiTestimonial from './About/OfficiTestimonial';

const services = [
  {
    id: 1,
    icon: <User className="w-12 h-12 text-[#20ae9b]" />,
    bg: "bg-[#c3d9e0]",
    title: "Best Local Agents",
    desc: "Our local experts know every corner of Anugrah & Maxpine projects — helping you find the perfect home or investment within your budget.",
  },
  {
    id: 2,
    icon: <Home className="w-12 h-12 text-[#20ae9b]" />,
    bg: "bg-[#c3d9e0]",
    title: "Personalized Service",
    desc: "We provide tailored guidance to match your lifestyle, budget, and goals — ensuring every step feels personal and stress-free.",
  },
  {
    id: 3,
    icon: <Award className="w-12 h-12 text-[#20ae9b]" />,
    bg: "bg-[#c3d9e0]",
    title: "Excellent Reputation",
    desc: "Trusted by countless families, our proven track record speaks for itself in delivering quality and reliability.",
  },
];



const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Our Mission',
    description: 'To provide exceptional real estate services that exceed client expectations and create lasting relationships built on trust and integrity.'
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Our Vision',
    description: 'To be the most trusted and innovative real estate company, setting new standards in property services and customer satisfaction.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Our Values',
    description: 'Integrity, excellence, and commitment drive everything we do. We believe in transparent dealings and putting our clients first.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Our Promise',
    description: 'We guarantee professional service, honest advice, and dedicated support throughout your entire real estate journey.'
  }
];

const team = [
  { name: 'Pawan Kumar', role: 'Board Member', about: "32+ Years of  Expertise in the Finance & Real Estate Sector!", image: img1 },
  { name: 'Ashish Mishra', role: 'Chief Finance Officer', image: img2 },
  { name: 'Vijay Aggarwal', role: 'President (Sales & Marketing)', image: img3 },
  { name: 'Pradeep Tyagi', role: 'V.P - Sales', image: img4 },


  { name: 'Aman Bhutani', role: 'V.P - Sales', image: img5 },
  { name: 'Nishant Bhardwaj', role: 'V.P - Sales & Liaisoning', image: img6 },
  { name: 'Ankur Sharma', role: 'A.V.P - Sales', image: img7 },
  { name: 'Sashank Singhal ', role: 'A.V.P - Sales', image: img8 },

];

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const { setWebName } = useContext(AppContext);

  useEffect(() => {
    return () => {
      setWebName(null);
    };
  }, [setWebName]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${vidimg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            <a href="/" className="hover:text-[#20ae9b] transition">Home</a>
            <span className="text-gray-300">›</span>
            <span className="text-[#20ae9b] ">About Us</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#20ae9b]  font-semibold uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Invest in Prime Properties
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-animate
                id={`service-${service.id}`}
                className={`bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible[`service-${service.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center">
                  <div className={`relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full ${service.bg}`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-lg lg:text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-[#20ae9b]  font-semibold uppercase tracking-wide text-sm">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
              Our Foundation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-animate
                id={`value-${index}`}
                className={`bg-white rounded-xl flex justify-center flex-col items-center p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible[`value-${index}`] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#dbe5e8] rounded-lg flex items-center justify-center mb-4 text-[#20ae9b] ">
                  {value.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm  text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
   <section className="py-10 lg:py-15 bg-white relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 lg:mb-16">
      <p className="text-[#20ae9b] font-semibold uppercase tracking-wide text-sm">
        The Experts
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
        Meet Our Team
      </h2>
    </div>

    {/* Swiper Slider */}
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        navigation={{
          nextEl: ".team-swiper-next",
          prevEl: ".team-swiper-prev",
        }}
        pagination={{ clickable: true }}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="group transition-all duration-500">
              <div className="bg-gray-50 rounded-xl p-2 sm:p-2 md:p-4  text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-t-4 border-[#20ae9b]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-cover rounded-full mb-4"
                />
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#20ae9b] font-medium text-sm sm:text-base">
                  {member.role}
                </p>
                {member.about && (
                  <p className="text-gray-500 text-sm mt-2">{member.about}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Navigation Arrows */}
      <button
        className="cursor-pointer team-swiper-prev absolute left-2 sm:left-4 md:-left-10 lg:-left-16 
        top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
        bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center 
        hover:bg-white transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
      </button>

      <button
        className="cursor-pointer team-swiper-next absolute right-2 sm:right-4 md:-right-10 lg:-right-16 
        top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
        bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center 
        hover:bg-white transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
      </button>
    </div>
  </div>
</section>

      <OfficiTestimonial/>
      <Testimonial/>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl text-center lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's make your real estate dreams come true. Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-black">
              <div className="flex items-center gap-3 bg-white bg-opacity-10 rounded-lg px-4 sm:px-6 py-3 backdrop-blur-sm hover:bg-opacity-20 transition-all">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#20ae9b]" />
                <a href="tel:+919115253545" className="font-medium text-sm sm:text-base hover:text-[#20ae9b] transition-colors">+91-9115253545</a>
              </div>
              <div className="flex items-center gap-3 bg-white bg-opacity-10 rounded-lg px-4 sm:px-6 py-3 backdrop-blur-sm hover:bg-opacity-20 transition-all">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#20ae9b]" />
                <a href="mailto:info@maxpinegroup.in" className="font-medium text-sm sm:text-base hover:text-[#20ae9b] transition-colors">info@maxpinegroup.in</a>
              </div>
              <div className="flex items-center gap-3 bg-white bg-opacity-10 rounded-lg px-4 sm:px-6 py-3 backdrop-blur-sm hover:bg-opacity-20 transition-all">
                <MapPin className="w-6 h-6 md:w-5 md:h-5 text-[#20ae9b]" />
                <span className="font-medium text-sm sm:text-base">H-174, Ground Floor, Sector-63, Noida, Uttar Pradesh 201301</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}