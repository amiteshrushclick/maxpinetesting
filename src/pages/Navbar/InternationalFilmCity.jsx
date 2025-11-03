import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../components/AppContext';

import { ChevronDown, ChevronUp, MapPin, Building, Film, Clapperboard, Clock } from 'lucide-react';
import { Music, Scissors, Zap, Tent, Theater } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/All_home_imgs/filmcity-01__1_.webp'
import img2 from '../../assets/All_home_imgs/filmcity-01_(1).png'
import img3 from '../../assets/All_home_imgs/filmcity-01__2_.webp'
import img4 from '../../assets/All_home_imgs/filmcity-01__3_.webp'
import img5 from '../../assets/All_home_imgs/present-Project-img-1__2_.webp'
import img6 from '../../assets/All_home_imgs/update-16.webp'
import { X } from 'lucide-react';
export default function InternationalFilmCity() {
  const { setWebName } = useContext(AppContext);

  useEffect(() => {
    return () => {
      setWebName(null);
    };
  }, [setWebName]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    location: false,
    infrastructure: false,
    siteplan: false,
    collaboration: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const relatedPosts = [
    "Buy Plots Near Jewar Airport - Anugrah Homes by Magpie Group",
    "A Joyous Celebration at Anugrah Homes: Family Carnival Success!",
    "Lights, Camera, Action: Progress at International Film City (NFIDA)",
    "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity",
    "A Festive Affair: Diwali at Magpie Group"
  ];

  const proposedProducts = [
    { name: "Music Dubbing Studios", icon: <Music className="w-5 h-5 text-[#29aa8a]" /> },
    { name: "Editing Studios", icon: <Scissors className="w-5 h-5 text-[#29aa8a]" /> },
    { name: "VFX Studios", icon: <Clapperboard className="w-5 h-5 text-[#29aa8a]" /> },
    { name: "Special Effects Studio", icon: <Zap className="w-5 h-5 text-[#29aa8a]" /> },
    { name: "Film Festival Arenas", icon: <Tent className="w-5 h-5 text-[#29aa8a]" /> },
    { name: "Premiere Arenas", icon: <Theater className="w-5 h-5 text-[#29aa8a]" /> }
  ];


  return (
    <div className="min-h-screen bg-gray-50">

      {/* Full Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </div>
      )}





      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#1f7777] transition">Home</a>
            <span>/</span>
            <a href="/" className="hover:text-[#1f7777] transition">Updates</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">International Film City</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 sm:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Film className="w-10 h-10 text-[#20ae9b]" />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  International Film City
                </h1>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-[#20ae9b] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15 min</div>
                  <div className="text-xs text-gray-600 mt-1">From Anugrah Homes</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <Building className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">1,000</div>
                  <div className="text-xs text-gray-600 mt-1">Acres Land</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Sector 21</div>
                  <div className="text-xs text-gray-600 mt-1">Yamuna Expressway</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <Clapperboard className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Phase 1</div>
                  <div className="text-xs text-gray-600 mt-1">Under Development</div>
                </div>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4 mb-8">
              {/* Overview Section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('overview')}
                  className="cursor-pointer w-full px-4 lg:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Only 15 Minutes Away From Anugrah Homes
                  </h3>
                  {expandedSections.overview ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.overview && (
                  <div className=" px-4 lg:px-6 pb-6">
                    <div className="space-y-4 mb-6">
                      <div className="bg-purple-50 border-l-4 border-[#20ae9b] p-4 rounded">
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-[#20ae9b] mr-2">•</span>
                            <span>The aim is to provide an integrated media infrastructure for the entire value chain spread over 1000 Acres.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#20ae9b] mr-2">•</span>
                            <span>Strategically located the proposed site is located at Sector 21 on Yamuna Expressway, 4 km from Noida International Airport.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#20ae9b] mr-2">•</span>
                            <span>POD taxi is proposed to connect Noida International Airport and the International Film City.</span>
                          </li>
                        </ul>
                      </div>

                      {/* Proposed Products Grid */}
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 lg:p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Proposed Products</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {proposedProducts.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg p-4 md:py-10
                             text-center shadow-sm hover:shadow-md transition">
                              <div className="text-3xl  flex justify-center mb-2">{product.icon}</div>
                              <div className="text-sm font-medium text-gray-700">{product.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First Image */}
                      <div className="bg-gray-100 rounded-lg overflow-hidden relative group">
                        <img
                          src={img1}
                          alt="Proposed products infrastructure"
                          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setSelectedImage(img1)}
                            className="cursor-pointer bg-[#149887] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                          >
                            View Full
                          </button>
                        </div>
                      </div>

                      {/* Second Image */}
                      <div className="bg-gray-100 rounded-lg overflow-hidden relative group">
                        <img
                          src={img2}
                          alt="Film city layout plan"
                          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setSelectedImage(img2)}
                            className="cursor-pointer bg-[#209383] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                          >
                            View Full
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Location & Government Initiative */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('location')}
                  className="cursor-pointer w-full  px-4 lg:px-6py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Government Initiative & Strategic Location
                  </h3>
                  {expandedSections.location ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.location && (
                  <div className=" px-4 lg:px-6 pb-6">
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        The Government of Uttar Pradesh (GoUP) has planned the establishment of a Film City in Sector 21 of the Yamuna Expressway Industrial Development Area (Phase 1). This initiative aligns with the region's anticipated growth and development following the construction of Noida International Airport near Jewar.
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Located in Sector 21, Yamuna Expressway</li>
                          <li>4 km from Noida International Airport</li>
                          <li>Approximately 1,000 acres identified for development</li>
                          <li>Mix of commercial and industrial purposes</li>
                          <li>Detailed Feasibility Report approved by state government</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Infrastructure & Facilities */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('infrastructure')}
                  className="cursor-pointer w-full px-4 lg:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Infrastructure & Facilities
                  </h3>
                  {expandedSections.infrastructure ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.infrastructure && (
                  <div className=" px-4 lg:px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-100 rounded-lg overflow-hidden relative group">
                        <img
                          src={img3}
                          alt="Music and dubbing studios"
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                         {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setSelectedImage(img3)}
                            className="cursor-pointer bg-[#209383] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                          >
                            View Full
                          </button>
                        </div>
                        <div className="p-3 bg-white">
                          <p className="text-sm font-medium text-gray-700">Music & Dubbing Studios</p>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded-lg overflow-hidden relative group">
                        <img
                          src={img4}
                          alt="VFX and editing studios"
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                         {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setSelectedImage(img4)}
                            className="cursor-pointer bg-[#209383] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                          >
                            View Full
                          </button>
                        </div>
                        <div className="p-3 bg-white">
                          <p className="text-sm font-medium text-gray-700">VFX & Editing Studios</p>
                        </div>
                      </div>


                    </div>
                    <p className="text-sm text-gray-600 italic">
                      State-of-the-art facilities designed to support the entire film production value chain.
                    </p>
                  </div>
                )}
              </div>

              {/* Site Plan & Land Use */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('siteplan')}
                  className="cursor-pointer w-full px-4 lg:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Site Plan & Sector Details
                  </h3>
                  {expandedSections.siteplan ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.siteplan && (
                  <div className=" px-4 lg:px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-100 rounded-lg overflow-hidden relative group">
                        <img
                          src={img2}
                          alt="Sector 21 master plan"
                          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                        />
                         {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setSelectedImage(img2)}
                            className="cursor-pointer bg-[#209383] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                          >
                            View Full
                          </button>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded-lg overflow-hidden relative group">
                        <img
                          src={img4}
                          alt="Land use and connectivity map"
                          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                        />
                         {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setSelectedImage(img4)}
                            className="cursor-pointer bg-[#209383] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                          >
                            View Full
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        The site plan showcases strategic positioning in Sector 21 with excellent connectivity to major highways and proximity to key infrastructure including Noida International Airport.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Collaboration & Development */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection('collaboration')}
                  className="cursor-pointer w-full  px-4 lg:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    Collaboration with GoUP & Development Details
                  </h3>
                  {expandedSections.collaboration ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.collaboration && (
                  <div className=" px-4 lg:px-6 pb-6">
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        In collaboration with GoUP, a site spanning approximately 1,000 acres has been identified for the Film City, designated for a mix of commercial and industrial purposes. A Detailed Feasibility Report for the project, prepared by CBRE South Asia, has received official approval from the state government.
                      </p>

                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 lg:p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Development Partners</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Government Partner</span>
                            <span className="text-gray-600">GoUP</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Feasibility Report</span>
                            <span className="text-gray-600">CBRE South Asia</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="font-medium">Development Area</span>
                            <span className="text-gray-600">Sector 21, Yamuna Expressway</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="font-medium">Total Land Area</span>
                            <span className="text-gray-600">~1,000 Acres</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gray-100 rounded-lg overflow-hidden relative group">
                          <img
                            src={img5}
                            alt="Development progress view 1"
                            className="w-full h-58 object-cover hover:scale-105 transition-transform duration-300"
                          />
                           {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setSelectedImage(img5)}
                              className="cursor-pointer bg-[#209383] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                          >
                            View Full
                          </button>
                        </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg overflow-hidden relative group">
                          <img
                            src={img6}
                            alt="Development progress view 2"
                            className="w-full h-58 object-cover hover:scale-105 transition-transform duration-300"
                          />
                           {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => setSelectedImage(img6)}
                              className="cursor-pointer bg-[#209383] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                          >
                            View Full
                          </button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Related Posts
              </h3>
              <ul className="space-y-3">
                {relatedPosts.map((post, index) => (
                  <li key={index}>
                    <a
                      href="/updates/international-film-city/media"
                      className="text-gray-700
                       hover:text-[#20ae9b] transition text-sm leading-relaxed block py-2 border-b border-gray-100 last:border-0"
                    >
                      {post}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact CTA */}
              <div className="mt-8 bg-gradient-to-br
               from-[#20ae9b] to-[#1e6c82] rounded-lg p-4 lg:p-6 text-white">
                <Film className="w-12 h-12 mb-3 text-purple-100" />
                <h4 className="text-lg font-bold mb-2">Invest Near Film City</h4>
                <p className="text-sm mb-4 text-purple-50">
                  Discover investment opportunities near International Film City
                </p>
                <Link to={"/updates/international-film-city/contact"}>

                  <button className="cursor-pointer w-full bg-white
                 text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-purple-50 transition">
                  Get Details Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}