import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../components/AppContext';

import { Home, ChevronDown, Calendar, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

import img1 from '../../../assets/Brij.V.Development/1.webp'
import img2 from '../../../assets/Brij.V.Development/2.webp'
import img3 from '../../../assets/Brij.V.Development/3.webp'
import img4 from '../../../assets/Brij.V.Development/4.webp'
import img5 from '../../../assets/Brij.V.Development/5.webp'
import img6 from '../../../assets/Brij.V.Development/7.webp'
import img7 from '../../../assets/Brij.V.Development/7.webp'
import img8 from '../../../assets/Brij.V.Development/8.webp'
import img9 from '../../../assets/Brij.V.Development/9.webp'
import img10 from '../../../assets/Brij.V.Development/10.webp'
import img11 from '../../../assets/Brij.V.Development/11.webp'
import img12 from '../../../assets/Brij.V.Development/12.webp'
import img13 from '../../../assets/Brij.V.Development/13.webp'
import img14 from '../../../assets/Brij.V.Development/14.webp'
import img15 from '../../../assets/Brij.V.Development/15.webp'
import img16 from '../../../assets/Brij.V.Development/16.webp'
import img17 from '../../../assets/Brij.V.Development/17.webp'
import img18 from '../../../assets/Brij.V.Development/18.webp'
import img19 from '../../../assets/Brij.V.Development/19.webp'
import img20 from '../../../assets/Brij.V.Development/20.webp'
import img21 from '../../../assets/Brij.V.Development/21.webp'
import img22 from '../../../assets/Brij.V.Development/22.webp'
import img23 from '../../../assets/Brij.V.Development/23.webp'
import img24 from '../../../assets/Brij.V.Development/24.webp'
import img25 from '../../../assets/Brij.V.Development/26.webp'
import img26 from '../../../assets/Brij.V.Development/28.webp'




import img27 from '../../../assets/BrijVrinda/13.webp'
import img28 from '../../../assets/BrijVrinda/14.webp'
import img29 from '../../../assets/BrijVrinda/15.webp'
import img30 from '../../../assets/BrijVrinda/16.webp'
import img31 from '../../../assets/BrijVrinda/17.webp'
import img32 from '../../../assets/BrijVrinda/18.webp'
import img33 from '../../../assets/BrijVrinda/19.webp'
import img34 from '../../../assets/BrijVrinda/21.webp'
import img35 from '../../../assets/BrijVrinda/22.webp'
import img36 from '../../../assets/BrijVrinda/23.webp'
import img37 from '../../../assets/BrijVrinda/24.webp'
import img38 from '../../../assets/BrijVrinda/25.webp'
import img39 from '../../../assets/BrijVrinda/26.webp'
import img40 from '../../../assets/BrijVrinda/27.webp'
import img41 from '../../../assets/BrijVrinda/28.webp'
import img42 from '../../../assets/BrijVrinda/29.webp'
import img43 from '../../../assets/BrijVrinda/30.webp'

export default function Development() {
  const { setWebName } = useContext(AppContext);
    const [selectedImage, setSelectedImage] = useState(null);

  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    return () => {
      setWebName(null);
    };
  }, [setWebName]);

  const updates = [
    {
      id: 1,
      title: "Project Development Images - (June 2025)",
      date: "June 2025",
      images: [img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12],
      description: "Latest construction progress showcasing structural completion and finishing work."
    },
    {
      id: 2,
      title: "Project Development Images - (Apr-2025)",
      date: "April 2025",
      images: [img1,img13,img14,img15,img27,img28,img29,img30,img31],
      description: "Mid-phase development showing interior work and facade completion."
    },
    {
      id: 3,
      title: "Project Development Images - (Mar-2025)",
      date: "March 2025",
      images: [img16,img17,img18,img19,img32,img33 ],
      description: "Foundation and structural framework completion milestones."
    },
    {
      id: 4,
      title: "Project Development Images - (Jan-2025)",
      date: "January 2025",
      images: [img20,img21,img22,img23,img34,img35,img36,img37,img38,],
      description: "Early construction phase with foundation laying and ground work."
    },
    {
      id: 5,
      title: "Project Development Images - (Dec-2024)",
      date: "December 2024",
      images: [img24,img25,img26,img22,img39,img40,img41,img42,img43],
      description: "Project initiation and site preparation activities."
    }
  ];

  const recentPosts = [
    { title: "Welcome to Brij Vrinda, a thoughtfully designed residential township where peace", link: "/developments/brij_vrinda/media" },
    { title: "Brij Vrinda is envisioned as a green sanctuary", link: "/developments/brij_vrinda/media" },
    { title: "On-ground development work is moving at a steady pace", link: "/developments/brij_vrinda/media" },
    { title: "Brij Vrinda stands at the center of future growth", link: "/developments/brij_vrinda/media" },
    { title: "A Festive Affair: Diwali at Brij Vrinda", link: "/developments/brij_vrinda/media" }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-24 py-4">
          <div className="flex items-center text-sm text-gray-600 py-4">
            <Home className="w-4 h-4 mr-2" />
            <a href="/" className="hover:text-[#20ae9b] transition-colors">Home</a>
             <span className="mx-2">/</span>
            <span className="hover:text-[#20ae9b] transition-colors">Developments</span>
            <span className="mx-2">/</span>
            <a href="#" className="text-gray-900 font-medium">Brij Vrind</a>
           
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#20ae9b] 
      to-[#0e8777] text-white py-16">
        <div className="container mx-auto px-4 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brij Vrinda</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Track our project progress with regular photo updates showcasing construction milestones and developments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-5">
          {/* Updates Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleSection(update.id)}
                    className="w-full flex items-center justify-between p-4 lg:p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#20ae9b]/10 p-3 rounded-lg">
                        <Camera className="w-6 h-6 text-[#20ae9b]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{update.date}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#20ae9b] transition-transform duration-300 ${
                        openSection === update.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openSection === update.id
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className=" px-4 lg:px-6 pb-6 border-t">
                      <p className="text-gray-600 mb-6 mt-4">{update.description}</p>
                      
                      {/* Image Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {update.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative overflow-hidden rounded-lg aspect-video cursor-pointer"
                          >
                            <img
                              src={img}
                              alt={`${update.title} - Image ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                            >
                              <button
                                onClick={() => setSelectedImage(img)}
                                className="bg-[#149887] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#178b7b] transition"
                              >
                                View Full
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 pb-10">
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6  top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#20ae9b]">
                Recent Posts
              </h2>
              <div className="space-y-4">
                {recentPosts.map((post, idx) => (
                  <a
                    key={idx}
                    href={post.link}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-[#20ae9b] flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <p className="text-sm text-gray-700 group-hover:text-[#186f63] transition-colors leading-relaxed">
                      {post.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
             <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0d8a79] rounded-lg p-4 lg:p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Connect with Brij Vrinda</h4>
                <p className="text-sm mb-4 text-blue-50">
                 Get exclusive property details, latest news
                </p>
                <Link to="/developments/brij_vrinda/contact">
                <button className="w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                  Contact Us Today
                </button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}