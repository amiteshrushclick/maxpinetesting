import React, { useState ,useContext } from 'react';
import img from '../../../assets/anugrah/location.webp';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../components/AppContext';


const KeyPlayAH = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    const { setWebName} = useContext(AppContext);

  //  Force image download
  const handleDownload = async () => {
    const imageUrl = img;
    const fileName = "Anugrah-Key-Plan.webp";

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
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
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
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
        <span className="cursor-pointer hover:text-[#20ae9b]">Home</span> &gt;{" "}
         <span className="cursor-pointer hover:text-[#20ae9b]">Projects</span> &gt;{" "}
         <span className="cursor-pointer hover:text-[#20ae9b]">Anugrah Homes</span>&gt;{" "}

        <span className="text-gray-700 font-medium">Key Plan</span>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
         Anugrah  Homes 
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Image Section */}
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-4 relative">
          {/* Image */}
          <div className="relative group">
            <img
              src={img}
              alt="Key Plan Map"
              className="w-full h-auto rounded-lg object-cover"
            />

            {/* Hover Overlay for "View Full" only */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer bg-[#149887] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
              >
                View Full
              </button>
            </div>
          </div>

          {/* Download Button – always visible below image */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleDownload}
              className="cursor-pointer px-6 py-3 bg-[#20ae9b] text-white font-medium rounded-lg shadow hover:bg-[#178b7b] transition"
            >
              Download Key Plan
            </button>
          </div>
        </div>


        {/* Right - Sidebar */}
        <div className="relative bg-white shadow rounded-xl p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Latest Updates
            </h2>
            <Link to="/projects/anugrahhomes/keyplan/blogs">
            
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                A Joyous Celebration at Anugrah Homes – Relive the excitement of our Family Carnival.
              </li>
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                Residential Plots Near Noida International Airport – Unlock your dream lifestyle with 
              </li>
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                estive Moments at Maxpine Group – A vibrant Diwali celebration reflecting our commitment to culture
              </li>
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                Residential Plots Near Noida International Airport: A New Gateway
                to Global Connectivity
              </li>
              <li className="hover:text-[#20ae9b] cursor-pointer transition">
                A Festive Affair: Diwali at Anugrah Homes
              </li>
            </ul>
            </Link>

            {/* CTA Box */}
            <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0c8070] rounded-lg p-4 text-white">
              <h4 className="text-lg font-bold mb-2">
                Interested in Plots Near Airport?
              </h4>
              <p className="text-sm mb-4 text-blue-50">
                Get exclusive details about our properties near Noida International Airport
              </p>
              <Link to={`/projects/anugrahhomes/keyplan/contact-us`}>
                <button onClick={()=>setWebName("Anugrah Homes")} className="cursor-pointer w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default KeyPlayAH;
