import React, { useState  ,useContext} from 'react';
import { Link } from 'react-router-dom';
import price1 from '../../../assets/anugrah/price-2025.webp';
import price2 from '../../../assets/anugrah/Price-List-=2024.webp';
import { AppContext } from '../../../components/AppContext';


const PriceList_AH = () => {
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
        <span className="cursor-pointer hover:text-[#20ae9b]">Anugrah Homes</span>  &gt;{" "}
        <span className="text-gray-700 font-medium">Price List</span>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Anugrah Homes
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Price List Image Section */}
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-4 sm:p-6">
          {/* Responsive Images Grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Image 1 */}
            <div className="relative w-full md:w-1/2 group cursor-pointer">
              <img
                src={price1}
                alt="Project Price List 2025-2024"
                className="w-full h-auto rounded-lg object-contain"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <button
                  onClick={() => setSelectedImage(price1)}
                  className="cursor-pointer bg-[#149887] text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                >
                  View Full
                </button>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative w-full md:w-1/2 group cursor-pointer">
              <img
                src={price2}
                alt="Project Price List 2025"
                className="w-full h-auto rounded-lg object-contain"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <button
                  onClick={() => setSelectedImage(price2)}
                  className="cursor-pointer bg-[#149887] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                >
                  View Full
                </button>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href={price1}
              download
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#20ae9b] text-white font-medium rounded-lg shadow hover:bg-[#266a61] transition"
            >
              Download Price List 2025
            </a>

            <a
              href={price2}
              download
              className="w-full sm:w-auto text-center px-6 py-3 bg-[#20ae9b] text-white font-medium rounded-lg shadow hover:bg-[#266a61] transition"
            >
              Download Price List 2025-2024
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
            <Link to={"/projects/anugrahhomes/pricelist/blogs"}>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  Surrounded by Film City, Yamuna Expressway, and Tech Zone
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                 Freehold Plots with clear title
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  Gated Community with 24×7 security
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  Ready for Immediate Registry & Possession
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  A Festive Affair: Diwali at Anugrah Homes
                </li>
              </ul>
            </Link>
          </div>

          {/* Small Form */}
          <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0d8a79] rounded-lg p-4 text-white">
            <h4 className="text-lg font-bold mb-2">Interested in Plots Near Airport?</h4>
            <p className="text-sm mb-4 text-blue-50">
              Get exclusive details about our properties near Noida International Airport
            </p>
            <Link to="/projects/anugrahhomes/pricelist/contact-us">
              <button onClick={() => setWebName("Anugrah Homes")} className="cursor-pointer w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList_AH;
