import { Home, Handshake, Key, Star, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

export default function WhyChoose() {
  

  return (
    <section className=" flex flex-col items-center justify-center relative min-h-screen px-1 md:px-10 bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')"
             }}>
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-15 ">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 mt-5">
          <div className="mb-0 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#20ae9b]"></div>
              <span className="text-[#20ae9b] font-medium text-sm lg:text-base">Why Choose Us</span>
              <div className="w-8 h-0.5 bg-[#20ae9b]"></div>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
              Why Maxpine Group?
            </h1>
          </div>

         
          
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          {/* Find Your Home */}
          <div className="bg-white rounded-2xl p-2 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-6 flex items-center flex-col  justify-center px-5">
              <div className="w-16 h-16  bg-red-50 rounded-full flex items-center  justify-center mb-4">
                <Home className="w-8 h-8 text-[#20ae9b]" />
              </div>
              
              <h3 className="text-xl   md:text-2xl font-bold text-gray-800 mb-4  ">Find Your Perfect Dream  Home Today</h3>
              <p className="text-gray-600 leading-relaxed">
               Discover the Home You’ve Always Dreamed Of, Today.
              </p>
            </div>
            <Link to="/blogs">
            <button className=" cursor-pointer w-full bg-[#20ae9b] hover:bg-[#257268] text-[#f8f9f6]  font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Explore Homes
            </button>
            </Link>
          </div>

          {/* Sell Property */}
          <div className="bg-white rounded-2xl p-2 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-6 flex items-center flex-col  justify-center px-5">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <Handshake className="w-8 h-8 text-[#20ae9b]" />
              </div>
              <h3 className="text-xl   md:text-2xl text-left   w-full font-bold text-gray-800 mb-4">Your Trusted Real Estate Partner</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted Experts for Every Step of Your Home Journey.
              </p>
            </div>
             <Link to="/blogs">
            <button className=" cursor-pointer  w-full bg-[#20ae9b] hover:bg-[#257167] text-[#f8f9f6]  font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Explore Homes
            </button>
             </Link>
          </div>

          {/* Rent a Home */}
          <div className="bg-white rounded-2xl p-2 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-6 flex items-center flex-col  justify-center px-5">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <Key className="w-8 h-8 text-[#20ae9b]" />
              </div>
              <h3 className="text-xl   md:text-2xl text-left   w-full  font-bold text-gray-800 mb-4">The Best Locations for the Best Returns.</h3>
              <p className="text-gray-600 leading-relaxed">
               Elite Addresses, Outstanding Investment Potential.
              </p>
            </div>
             <Link to="/blogs">
            <button className="cursor-pointer w-full bg-[#20ae9b] hover:bg-[#297067] text-[#f8f9f6]  font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Explore Homes
            </button>
             </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
     
    </section>
  );
}
