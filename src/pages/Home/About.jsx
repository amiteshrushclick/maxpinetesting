import img1 from '../../assets/maxpine-Offici.avif'

import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// src/components/About.jsx

export default function About() {
  return (
    <section className="py-16 px-4 lg:px-16 xl:px-25 bg-white">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image with Badge */}
        <div className="relative w-full lg:h-[70vh] md:h-[50vh] h-[40vh]">
          <img
            src={img1}
            alt="Modern building exterior"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg shadow-lg border-8 border-white"
          />

          {/* Badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#20ae9b] px-4 py-2 sm:px-6 sm:py-4 text-white font-semibold text-sm sm:text-base md:text-lg rounded-md shadow-lg">
            20+ years of <br className="hidden sm:block" /> experience
          </div>
        </div>


        {/* Right Content */}
        <div className="  ">
          <p className="text-[#20ae9b] uppercase tracking-wide font-semibold mb-2">
            About Us
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:pr-10" >
            Building Dreams, Shaping Communities
          </h2>
          <p className="text-lg text-gray-700 font-medium mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-[#20ae9b] mr-3"></span>
            We provide an essential service for you
          </p>
          <p className="text-gray-600 w-full  leading-relaxed mb-6 ">
            Maxpine Group is a premier real estate company with over 20 years of experience
            in developing premium residential and commercial properties. We are committed
            to delivering excellence, innovative designs, and sustainable living solutions
            that enrich communities and elevate lifestyles.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 ">
            Our portfolio includes luxury apartments, townships, and commercial spaces
            across prime locations. Every project reflects our dedication to quality,
            attention to detail, and customer satisfaction.
          </p>
          <Link to="/about-us">
          <button className="cursor-pointer bg-[#20ae9b] text-white font-medium px-8 py-3 rounded-full shadow hover:bg-[#226a61] transition">
            Read More...
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
