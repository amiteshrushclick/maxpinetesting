import React, { useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../components/AppContext';


const LayoutAH = () => {
  const [selectedImage, setSelectedImage] = useState(null);
      const { setWebName} = useContext(AppContext);
  

  const img = "https://i.postimg.cc/DfLrPnzT/Layout-img-2.webp";

  // Force image download
  const handleDownload = async () => {
    const imageUrl = img;
    const fileName = "Anugrah-Homes-Layout.webp";

    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

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
              alt="Full Layout"
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
        <span className="cursor-pointer hover:text-[#20ae9b]">Home</span> &gt;{" "}
        <span className="cursor-pointer hover:text-[#20ae9b]">Projects</span> &gt;{" "}
        <span className="cursor-pointer hover:text-[#20ae9b]">Anugrah Homes</span> &gt;{" "} <span className="text-gray-700 font-medium">Layout</span>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
         Anugrah Homes
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Layout Image */}
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-4">
          <div className="relative group">
            <img
              src={img}
              alt="Project Layout"
              className="w-full h-auto rounded-lg object-contain"
            />

            {/* Hover Overlay for View Full */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer bg-[#149887] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
              >
                View Full
              </button>
            </div>
          </div>

          {/* Download Button below image */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleDownload}
              className="cursor-pointer px-6 py-3 bg-[#20ae9b] text-white font-medium rounded-lg shadow hover:bg-[#266a61] transition"
            >
              Download Current 
            </button>
          </div>
        </div>

        {/* Right - Sidebar */}
        <div className="space-y-4">
          {/* Latest Updates */}
          <Link to={"/projects/anugrahhomes/layout/blogs"}>
            <div className="bg-white shadow rounded-xl p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Latest Updates
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                   A Joyous Celebration at Anugrah Homes – Relive the excitement of our Family Carnival.
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                 Residential Plots Near Noida International Airport – Unlock your dream lifestyle with 
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  estive Moments at Maxpine Group – A vibrant Diwali celebration reflecting 
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  Residential Plots Near Noida International Airport: A New Gateway
                  to Global Connectivity
                </li>
                <li className="hover:text-[#20ae9b] cursor-pointer transition">
                  A Festive Affair: Diwali at Anugrah Homes
                </li>
              </ul>
            </div>
          </Link>

          {/* CTA Box */}
          <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0d8a79] rounded-lg p-4 text-white">
            <h4 className="text-lg font-bold mb-2">
              Interested in Plots Near Airport?
            </h4>
            <p className="text-sm mb-4 text-blue-50">
              Get exclusive details about our properties near Noida International Airport
            </p>
            <Link to="/projects/anugrahhomes/layout/contact-us">
              <button  onClick={()=>setWebName("Anugrah Homes")} className="cursor-pointer w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAH;
