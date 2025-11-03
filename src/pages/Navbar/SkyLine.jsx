import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, Printer, Phone, Mail, MapPin, Download, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
// import skylineLogo from '../../assets/skyline/skylogo.jpeg'

export default function Skyline() {
  const [mainImage, setMainImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const skylineLogo = "https://ik.imagekit.io/16pq4do9s/assets/skyline/2.jpeg?updatedAt=1759830108680";
  const skylineBrochure = "https://ik.imagekit.io/16pq4do9s/SK+Brochure+(1)-compressed.pdf?updatedAt=1759728617770";

  const images = [
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/WhatsApp%20Image%202025-10-03%20at%2011.55.55%20AM.jpeg?updatedAt=1759830269888",
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/8.jpeg?updatedAt=1759830145317",
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/5.jpeg?updatedAt=1759830121094",
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/7.jpeg?updatedAt=1759830125988",
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/9.jpeg?updatedAt=1759830163309"
  ];

  const openImageModal = (imageSrc, imageAlt = "Skyline Aero Homes") => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">SKYLINE AERO HOMES</h1>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs sm:text-sm text-gray-600">Speaking Time : 24x7</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4 group">
                <img
                  src={images[mainImage]}
                  alt="Property"
                  className="w-full h-full object-cover object-top cursor-pointer"
                  onClick={() => openImageModal(images[mainImage], `Skyline Aero Homes - Image ${mainImage + 1}`)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openImageModal(images[mainImage], `Skyline Aero Homes - Image ${mainImage + 1}`)}
                    className="cursor-pointer opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:bg-gray-100"
                  >
                    <ZoomIn className="w-4 h-4" />
                    View Full
                  </button>
                </div>
                <button
                  onClick={() => setMainImage(mainImage > 0 ? mainImage - 1 : images.length - 1)}
                  className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-10"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setMainImage((mainImage + 1) % images.length)}
                  className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-10"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="absolute top-4 right-4 bg-[#15b0c5] text-white px-3 py-1 rounded text-xs sm:text-sm z-10">
                  Featured
                </div>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`aspect-video rounded overflow-hidden relative group ${mainImage === idx ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <img
                      src={img}
                      alt={`Skyline Aero Homes - Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setMainImage(idx)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openImageModal(img, `Skyline Aero Homes - Image ${idx + 1}`)}
                        className="cursor-pointer opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-2 py-1 rounded text-xs font-medium transition-all duration-300 flex items-center gap-1 hover:bg-gray-100"
                      >
                        <ZoomIn className="w-3 h-3" />
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-2">OVERVIEW</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Property Type</p>
                  <p className="font-semibold">Skyline Aero Homes</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-3">DESCRIPTION</h2>

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p className="text-base font-medium">Premium Residential Plots Near Noida International Airport – Skyline Aero Homes by Maxpine Group</p>

                <p>The region surrounding Noida International Airport, also known as Jewar Airport, is rapidly emerging as a hub for real estate investments. Among the top projects in the area is Skyline Aero Homes by Maxpine Group, offering premium residential plots designed to meet the needs of modern investors and homeowners.</p>

                <div>
                  <h3 className="font-semibold text-base mb-2">Why Choose Skyline Aero Homes?</h3>

                  <div className="mb-3">
                    <h4 className="font-semibold mb-1">1. Strategic Location</h4>
                    <p>Skyline Aero Homes is strategically located near Noida International Airport, offering unparalleled connectivity to Delhi NCR, Agra, and other major cities via the Yamuna Expressway. The project's prime location ensures easy access to the airport, major expressways, and industrial zones.</p>
                  </div>

                  <div className="mb-3">
                    <h4 className="font-semibold mb-1">2. High Investment Potential</h4>
                    <p>The airport project has sparked extensive infrastructural development, including metro connectivity, industrial parks, and smart city initiatives. Properties in this area are expected to see significant appreciation in value over the coming years.</p>
                  </div>

                  <div className="mb-3">
                    <h4 className="font-semibold mb-1">3. Modern Amenities & Infrastructure</h4>
                    <p className="mb-2">Skyline Aero Homes offers:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Gated community with 24/7 security</li>
                      <li>Modern infrastructure and utilities</li>
                      <li>Green spaces and landscaped areas</li>
                      <li>Easy EMI options for investors</li>
                      <li>Clear title and legal documentation</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-base mb-2">Investment Benefits</h3>
                  <p className="mb-2">Investing in Skyline Aero Homes ensures:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Long-term capital appreciation</li>
                    <li>Easy accessibility to major cities and business hubs</li>
                    <li>An opportunity to be part of a thriving, well-planned community</li>
                    <li>Enhanced quality of life with premium amenities and infrastructure</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-base mb-2">FAQs</h3>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-1">1. Why invest in Skyline Aero Homes?</h4>
                      <p>Skyline Aero Homes offers high returns due to its strategic location near Noida International Airport, excellent connectivity, and growing demand for residential spaces. The area's planned infrastructure makes it a hotspot for future growth.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">2. What makes Skyline Aero Homes unique?</h4>
                      <p>Skyline Aero Homes stands out for its prime location, modern amenities, and flexible plot options. The project offers easy EMI options and clear title documentation, making it ideal for investors.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">3. How far is Skyline Aero Homes from Noida International Airport?</h4>
                      <p>Skyline Aero Homes is located just a short drive from Noida International Airport, ensuring convenience and accessibility. The project's strategic placement near major roads enhances its connectivity.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">4. How can I book a plot at Skyline Aero Homes?</h4>
                      <p>You can book a plot by contacting our sales team or scheduling a site visit through the Contact Us page. Our team will guide you through the process and provide all necessary details.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-3">DETAILS</h2>
              <div className="bg-yellow-50 p-3 sm:p-3 rounded-lg shadow-sm overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <tbody>
                    {/* Row 1 - Updated On */}
                    <tr className="border-b border-yellow-200 flex flex-col sm:table-row">
                      <td className="py-2 text-gray-600 whitespace-nowrap">Updated on:</td>
                      <td className="py-2 font-semibold text-gray-800">
                        September 24, 2025 at 12:55 pm
                      </td>
                    </tr>

                    {/* Row 2 - Price */}
                    <tr className="flex flex-col sm:table-row">
                      <td className="py-2 text-gray-600 whitespace-nowrap">Price:</td>
                      <td className="py-2 font-semibold text-gray-800">
                        Starting from ₹32.5 Thousand
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-3">FEATURES</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Gated Community</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>24/7 Security</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Green Spaces</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Modern Infrastructure</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Easy EMI Options</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Clear Title</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Clubhouse</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Swimming Pool</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Gym</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Parks</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Kids Play Area</span>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Sports Facility</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-3">ADDRESS</h2>
              <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                <div className="flex">
                  <span className="text-gray-600 w-32">Address:</span>
                  <span className="font-semibold">Jattari, Aligarh Palwal Road, Uttar Pradesh 202137</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">State/county:</span>
                  <span className="font-semibold">Uttar Pradesh</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">Zip/Postal Code:</span>
                  <span className="font-semibold">202137</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">Area:</span>
                  <span className="font-semibold">Jattari</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-32">Country:</span>
                  <span className="font-semibold">India</span>
                </div>
              </div>
            </div>

            {/* Location map */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-3">LOCATION</h2>

              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative shadow">
                {/* Google Map Embed */}


                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d450882.527991333!2d77.669774!3d28.008586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39734c0092e80951%3A0x2a22db0dec9bebb0!2sJattari%2C%20Uttar%20Pradesh%20202137%2C%20India!5e0!3m2!1sen!2sus!4v1761415208711!5m2!1sen!2sus" className="w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                {/* Custom Marker Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-lg" />
                </div>
              </div>

              {/* Visit Site Button */}
              <div className="flex justify-center mt-4">
                <a
                  href="https://maps.google.com?q=Skyline+Aero+Homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#20ae9b] text-white px-16 py-3 rounded-lg text-sm font-medium shadow hover:bg-[#197267] transition"
                >
                  Visit Site
                </a>
              </div>
            </div>

            {/* Download pdf */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-3">PROPERTY DOCUMENTS</h2>
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center mr-3">
                      <span className="text-red-600 font-bold text-xs">PDF</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Skyline Aero Homes</p>
                      <p className="text-xs text-gray-500">Property Document</p>
                    </div>
                  </div>

                  {/* PDF Download Button */}
                  <button
                    onClick={async () => {
                      try {
                        const response = await fetch(skylineBrochure);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "Skyline-Aero-Homes.pdf";
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        window.URL.revokeObjectURL(url);
                      } catch (error) {
                        console.error("Download failed:", error);
                      }
                    }}
                    className="cursor-pointer flex items-center text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 mb-3">
                SCHEDULE A TOUR
              </h2>

              <div className="border rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50">
                <p className="text-gray-700 text-sm mb-4">
                  Plan your site visit with us and explore the property in detail.
                </p>

                <a
                  href="https://skylineaerohomes.com/"
                  rel="noopener noreferrer"
                  className="bg-[#20ae9b] text-white px-16 py-3 rounded-lg text-sm font-medium shadow hover:bg-[#25786d] transition"
                >
                  Visit Site
                </a>
              </div>
            </div>

          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-6 lg:sticky lg:top-6">
              <div className="flex items-center mb-4">
                <div className="w-28 h-28  mr-3">
                  <img src={skylineLogo} alt="skylineAeroHomes" />
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-[#333333]">Skyline Aero Homes</h3>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-2 text-gray-600" />
                  <span>
                    <a href="tel:+919266559209" className="hover:text-[#20ae9b] transition-colors">+91-9266559209</a>
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2 text-gray-600" />
                  <a href="mailto:info@skylineaerohomes.com" className="hover:text-[#20ae9b] transition-colors">info@skylineaerohomes.com</a>
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0c8070] rounded-lg p-6 text-white">
                <h4 className="text-lg font-bold mb-2">
                  Interested in Premium Plots?
                </h4>
                <p className="text-sm mb-4 text-blue-50">
                  Get exclusive details about our properties near Noida International Airport
                </p>
                <Link to={`/projects/skyline/contact-us`}>
                  <button className="cursor-pointer w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                    Contact Us Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4" onClick={closeImageModal}>
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={closeImageModal}
              className="cursor-pointer absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm text-center">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}