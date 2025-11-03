import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../components/AppContext';
import { MapPin, Truck, Package, Building, TrendingUp, ArrowRight, CheckCircle2, Warehouse, Train, Plane, X } from 'lucide-react';

import { Link } from 'react-router-dom';

import img1 from '../../assets/All_home_imgs/logisticpark.webp'

export default function LogisticsPark() {
  const { setWebName } = useContext(AppContext);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    return () => {
      setWebName(null);
    };
  }, [setWebName]);

  const openImageModal = (imageSrc, altText) => {
    setSelectedImage({ src: imageSrc, alt: altText });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const features = [
    {
      icon: <Train className="w-6 h-6" />,
      title: "Rail & Road Connectivity",
      description: "Excellent transport links via rail and road"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Custom Clearance",
      description: "On-site custom clearance facilities"
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Storage Solutions",
      description: "State-of-the-art warehousing facilities"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Single-Window Services",
      description: "Streamlined administrative processes"
    }
  ];

  const recentPosts = [
    "Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group",
    "A Joyous Celebration at Anugrah Homes: Family Carnival Success!",
    "Lights, Camera, Action: Progress at International Film City (YEIDIA)",
    "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity",
    "A Festive Affair: Diwali at Maxpine Group"
  ];

  const benefits = [
    "Strategic location at Tappal Bajna within YEIDA",
    "Enhanced investment climate for businesses",
    "Major thrust on industrial activities",
    "Value-added logistics services",
    "Prime freight profile and development potential",
    "Storage and warehousing hub capabilities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-[#1f7777 cursor-pointer">Home</span>
            <span  className="mx-2">/</span>
            <a href="#" className="hover:text-[#1f7777] transition">Updates</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Logistics Park</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#20ae9b] via-[#11a18e] to-[#118172] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white text-[gray] bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                <Warehouse className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Logistics Park
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50 max-w-3xl mx-auto">
              Multimodal Logistics Park (MMLP) at Tappal Bajna - YEIDA's Gateway to Industrial Excellence
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Maps Section */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 sm:p-8 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-7 h-7 text-[#20ae9b]" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Strategic Location
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="bg-gray-50 rounded-xl p-4 overflow-hidden">
                  <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                    <img 
                      src={img1} 
                      alt="Connectivity Map"
                      className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                      onClick={() => openImageModal(img1, "Connectivity Map")}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openImageModal(img1, "Connectivity Map")}
                        className="cursor-pointer opacity-0 group-hover:opacity-100 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-all duration-300 transform scale-75 group-hover:scale-100"
                      >
                        <span className="text-white font-medium">View Full</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-3 font-medium">Regional Connectivity</p>
                </div>
                
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 lg:p-6 border border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="bg-[#20ae9b] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Overview Section */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-7 h-7 text-[#20ae9b]" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Project Overview</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  The Yamuna Expressway Industrial Development Authority has proposed to develop a <span className="font-semibold text-[#20ae9b]">Multimodal Logistics Park (MMLP)</span> facility at Tappal Bajna located within YEIDA. This is with the objective to optimize the present potential, enhance investment climate and promote the economic development of the area with major thrust on industrial activities.
                </p>
                <p>
                  The MMLP shall provide excellent transport links via rail and road, custom clearance facilities, single-window services, and value-added services. Given the freight profile and upcoming industrial development potential of the proposed site, the MMLP is expected to have potential to develop as a storage and warehousing hub.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-[#20ae9b] to-[#13907f] rounded-2xl p-4 lg:p-6 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-7 h-7 text-blue-300" />
                <h2 className="text-2xl sm:text-3xl font-bold">Key Benefits</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm hover:bg-opacity-15 transition-all"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#20ae9b] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Opportunity */}
            
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                Recent Updates
              </h3>
              <div className="">
                {recentPosts.map((post, index) => (
                  <a
                    key={index}
                    href="/updates/logistics-park/media"
                    className="block group"
                  >
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <ArrowRight className="w-5 h-5 text-[#20ae9b] flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 text-sm leading-relaxed group-hover:text-[#148777] transition-colors">
                        {post}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            

              {/* Quick Contact Card */}
              <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#108878] rounded-lg p-4 text-white">
                <h3 className="text-xl font-bold mb-4">Need More Information?</h3>
                <p className="text-sm mb-4 text-blue-50">
                  Get in touch with our team to learn more about investment opportunities at the Logistics Park.
                </p>
                <Link to="/updates/logistics-park/contact">
                  <button className="cursor-pointer w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeImageModal}
              className="cursor-pointer absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}