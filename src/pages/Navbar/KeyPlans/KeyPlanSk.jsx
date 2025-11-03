import React, { useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../../../assets/skyline/Location_Map_page-0001.webp';
import { AppContext } from '../../../components/AppContext';


const KeyPlanSk = () => {
  const [selectedImage, setSelectedImage] = useState(null);
      const { setWebName} = useContext(AppContext);
  

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Full Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-black z-50"
            >
              X
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
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
        <span className="cursor-pointer hover:text-[#20ae9b]">Home</span> &gt;{" "}
        <span className="cursor-pointer hover:text-[#20ae9b]">Projects</span> &gt;{" "}
        <span className="cursor-pointer hover:text-[#20ae9b]">Skyline Aero Homes</span>  &gt;{" "}
        <span className="text-gray-700 font-medium">Key Plan</span>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
           Skyline Aero Homes
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Layout Image */}
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-4 relative">
          <div className="relative group">
            <img
              src={pdf}
              alt="Project Layout"
              className="w-full h-auto rounded-lg object-contain cursor-pointer"
              onClick={() => setSelectedImage(pdf)}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <button
                onClick={() => setSelectedImage(pdf)}
                className="cursor-pointer bg-[#149887] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
              >
                View Full
              </button>
            </div>
          </div>

          {/* Download Button below image (not affected by hover) */}
          <div className="mt-6 flex justify-center">
            <a
              href={pdf}
              download
              className="px-6 py-3 bg-[#20ae9b] text-white font-medium rounded-lg shadow hover:bg-[#266a61] transition"
            >
              Download Current Key Plan
            </a>
          </div>
        </div>

        {/* Right - Sidebar */}
        <div className="space-y-4">
          {/* Latest Updates */}
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Latest Updates
            </h2>
            <Link to="/projects/skyline/keyplan/blogs">
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  Step into a new era of elevated living with Skyline Aero Homes
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  Where connectivity meets luxury and growth takes flight.
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                 From elegant infrastructure to eco-friendly development,
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                With major developments like Film City, Yamuna Expressway Industrial Corridor
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  A Festive Affair: Diwali at Skyline Aero Homes
                </li>
              </ul>
            </Link>
          </div>

          {/* Small Form */}
          <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0d8a79] rounded-lg p-4 text-white">
            <h4 className="text-lg font-bold mb-2">Connect with  Skyline Aero Homes</h4>
            <p className="text-sm mb-4 text-blue-50">
             Get exclusive property details, latest news
            </p>
            <Link to={`/projects/skyline/keyplan/contact-us`}>
              <button onClick={()=>setWebName("Skyline Aero Homes")} className="cursor-pointer w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPlanSk;
