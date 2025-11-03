import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, Printer, Phone, Mail, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import anugrh from '../assets/All_home_imgs/logo-2.webp'

import img1 from '../assets/anugrah/gate-1.webp'
import img2 from '../assets/anugrah/park-1.webp'
import img3 from '../assets/anugrah/park-11.webp'
import img4 from '../assets/anugrah/road-1.webp'
import img5 from '../assets/anugrah/walking.webp'
import img6 from '../assets/anugrah/park-4.webp'
import img7 from '../assets/anugrah/park-9.webp'


export default function PropertyListing() {
    const [mainImage, setMainImage] = useState(0);
    const anugrah = "https://ik.imagekit.io/16pq4do9s/assets/anugrah/Anugrah-Homes-Brochure.pdf?updatedAt=1760004638901";

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
    ];

    // Auto-swipe functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setMainImage((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen bg-white">
            <header className="border-b">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">ANUGRAH HOMES </h1>

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
                            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                                <img
                                    src={images[mainImage]}
                                    alt="Property"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setMainImage(mainImage > 0 ? mainImage - 1 : images.length - 1)}
                                    className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                                >
                                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                                <button
                                    onClick={() => setMainImage((mainImage + 1) % images.length)}
                                    className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                                >
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                                <div className=" absolute top-4 right-4 bg-[#15b0c5] text-white px-3 py-1 rounded text-xs sm:text-sm">
                                    Featured
                                </div>
                            </div>

                            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setMainImage(idx)}
                                        className={`cursor-pointer aspect-video rounded overflow-hidden ${mainImage === idx ? 'ring-2 ring-blue-500' : ''}`}
                                    >
                                        <img src={img} alt="images" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-2">OVERVIEW</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Property Type</p>
                                    <p className="font-semibold">Anugrah Homes</p>
                                </div>
                                {/* <div>
                                    <p className="text-sm text-gray-600">Acre</p>
                                    <p className="font-semibold">UP TO 300</p>
                                </div> */}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">DESCRIPTION</h2>

                            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                                <p className="text-base font-medium">Plots Near Noida International Airport – Anugrah Homes by Maxpine Group</p>

                                <p>The region surrounding Noida International Airport, also known as Jewar Airport, is rapidly emerging as a hub for real estate investments. Among the top projects in the area is Anugrah Homes by Maxpine Group, offering premium residential and commercial plots designed to meet the needs of modern investors and homeowners.</p>

                                <div>
                                    <h3 className="font-semibold text-base mb-2">Why Choose Plots Near Noida International Airport?</h3>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">1. Strategic Connectivity</h4>
                                        <p>Noida International Airport is set to be a game-changer for the region, offering world-class connectivity to Delhi NCR, Agra, and other major cities via the Yamuna Expressway. Plots near Noida International Airport are ideally located for both living and investment purposes. Additionally, the proposed metro extension will further enhance connectivity, making it convenient for daily commuters and businesses alike.</p>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">2. High Appreciation Potential</h4>
                                        <p>The airport project has sparked extensive infrastructural development, including metro connectivity, industrial parks, and smart city initiatives. Properties in this area are expected to see a significant appreciation in value over the coming years. Experts predict that the demand for residential and commercial plots near Noida International Airport will continue to rise, driven by economic growth and urbanization.</p>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">3. Thriving Infrastructure and Lifestyle Amenities</h4>
                                        <p className="mb-2">Living near Noida International Airport means access to:</p>
                                        <ul className="list-disc list-inside space-y-1 ml-2">
                                            <li>High-quality healthcare and education facilities</li>
                                            <li>Entertainment and shopping hubs</li>
                                            <li>Excellent road and public transport connectivity</li>
                                            <li>Planned business hubs and corporate spaces</li>
                                        </ul>
                                        <p className="mt-2">Moreover, the region is set to become a vibrant mix of urban and green spaces, ensuring a balanced lifestyle for residents.</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-base mb-2">Anugrah Homes – A Premium Choice</h3>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">1. Prime Location</h4>
                                        <p>Situated near the Noida International Airport, Anugrah Homes offers unparalleled location advantages, combining accessibility with a peaceful environment. The project's strategic placement ensures proximity to the airport, major expressways, and industrial zones, making it an ideal choice for investors and homeowners.</p>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">2. World-Class Amenities</h4>
                                        <p className="mb-2">Anugrah Homes is designed to provide a premium lifestyle with features like:</p>
                                        <ul className="list-disc list-inside space-y-1 ml-2">
                                            <li>Gated community with round-the-clock security</li>
                                            <li>Clubhouse with recreational facilities</li>
                                            <li>Landscaped parks and open spaces</li>
                                            <li>Close proximity to schools, hospitals, and commercial centers</li>
                                            <li>Dedicated jogging tracks and children's play areas</li>
                                        </ul>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">3. Versatile Plot Options</h4>
                                        <p>Anugrah Homes caters to a wide range of needs with flexible plot sizes, perfect for both residential and commercial purposes. Whether you're planning to build your dream home or start a business, these plots offer the flexibility to suit your goals.</p>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">4. Sustainable Living</h4>
                                        <p>The project incorporates eco-friendly practices, including rainwater harvesting, energy-efficient street lighting, and ample green spaces to promote a sustainable lifestyle.</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-base mb-2">Investment Benefits</h3>
                                    <p className="mb-2">Owning plots near Noida International Airport ensures:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>Long-term capital appreciation</li>
                                        <li>Easy accessibility to major cities and business hubs</li>
                                        <li>An opportunity to be part of a thriving, well-planned community</li>
                                        <li>Enhanced quality of life with premium amenities and infrastructure</li>
                                    </ul>
                                    <p className="mt-2">With Noida International Airport poised to become a global aviation hub, properties in its vicinity are expected to attract both domestic and international investors, further boosting the area's economic profile.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-base mb-2">Related Project Information</h3>
                                    <p>Anugrah Homes is part of Maxpine Group's vision of creating premium residential and commercial developments. Explore more details on the Anugrah Homes Development Page. You'll find insights into the project's overarching goals, location benefits, and investment opportunities.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-base mb-2">FAQs</h3>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold mb-1">1. Why invest in plots near Noida International Airport?</h4>
                                            <p>Investing in plots near Noida International Airport offers high returns due to rapid development, excellent connectivity, and growing demand for residential and commercial spaces. Additionally, the area's planned infrastructure and proximity to industrial hubs make it a hotspot for future growth.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">2. What makes Anugrah Homes unique?</h4>
                                            <p>Anugrah Homes stands out for its prime location, world-class amenities, and flexible plot options tailored to various needs. The integration of sustainable practices further enhances its appeal for modern investors and families.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">3. How far is Anugrah Homes from Noida International Airport?</h4>
                                            <p>Anugrah Homes is located just a short drive from Noida International Airport, ensuring convenience and accessibility. The project's strategic placement near major roads and expressways further enhances its connectivity.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">4. How can I book a plot at Anugrah Homes?</h4>
                                            <p>You can book a plot by contacting our sales team or scheduling a site visit through the Contact Us. Our team will guide you through the process and provide all necessary details.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">DETAILS</h2>
                            <div className="bg-yellow-50 p-4 sm:p-2 md:p-4 rounded-lg shadow-sm overflow-x-auto">
                                <table className="w-full text-sm md:text-base">
                                    <tbody>
                                        {/* Row 1: Updated on */}
                                        <tr className="border-b border-yellow-200 flex flex-col sm:table-row">
                                            <td className="py-2 text-gray-600 whitespace-nowrap">Updated on:</td>
                                            <td className="py-2 font-semibold text-gray-800">
                                                September 24, 2025 at 12:55 pm
                                            </td>
                                        </tr>

                                        {/* Row 2: Price */}
                                        <tr className="flex flex-col sm:table-row">
                                            <td className="py-2 text-gray-600 whitespace-nowrap">Price:</td>
                                            <td className="py-2 font-semibold text-gray-800">
                                                Starting from ₹52.5 lakh
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
                                    <span>24X7 CCTV surveillance</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>30 & 40 Feet Internal Road</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>50 Feet Wide Roads</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>80 Acre Project Area</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Commercial Complex</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Electrification</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Fountains</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Gated Society</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Group Housing</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Gym</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Hospital</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Jogging Track</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Kids Play Area</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>School</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">ADDRESS</h2>
                            <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Address:</span>
                                    <span className="font-semibold">2JGW+JG3, Aligarh - Palwal Rd, Jattari, Uttar Pradesh</span>
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
                                    <span className="font-semibold">Jewar</span>
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
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7043.863418321306!2d77.646313!3d28.026563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39734b5ad060e16d%3A0xd0adf8503a7b53fd!2sAnugrah%20Homes!5e0!3m2!1sen!2sin!4v1759420301192!5m2!1sen!2sin"
                                    className="w-full h-full border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                                {/* Custom Marker Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-lg" />
                                </div>
                            </div>

                            {/* Visit Site Button */}
                            <div className="flex justify-center mt-4">
                                <a
                                    href="https://maps.google.com?q=Anugrah+Homes" // 🔹 Actual location link
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
                                            <p className="font-semibold text-sm">Anugrah Homes</p>
                                            <p className="text-xs text-gray-500">Property Document</p>
                                        </div>
                                    </div>

                                    {/*  PDF Download Button */}
                                    <button
                                        onClick={async () => {
                                            try {
                                                const response = await fetch(anugrah);
                                                const blob = await response.blob();
                                                const url = window.URL.createObjectURL(blob);
                                                const a = document.createElement("a");
                                                a.href = url;
                                                a.download = "Anugrah-Homes.pdf"; // ✅ file name
                                                document.body.appendChild(a);
                                                a.click();
                                                a.remove();
                                                window.URL.revokeObjectURL(url);
                                            } catch (error) {
                                                console.error("Download failed:", error);
                                            }
                                        }}
                                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
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
                                    href="/projects/anugrahhomes/book-site-visit" // 🔹 yaha apna actual site/location link dal do

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
                                    <img src={anugrh} alt="anugrahhomes"  />
                                </div>
                                <div>
                                    <h3 className="font-bold  text-2xl text-[#333333]">Anugrah Homes</h3>

                                </div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center text-sm">
                                    <Phone className="w-4 h-4 mr-2 text-gray-600" />
                                    <span>
                                        <a href="tel:+911204107573" className="hover:text-[#20ae9b] transition-colors">+91-1204107573</a>, 
                                        <a href="tel:+919115253545" className="hover:text-[#20ae9b] transition-colors"> +91-9115253545</a>
                                    </span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Mail className="w-4 h-4 mr-2 text-gray-600" />
                                    <a href="mailto:info@anugrahhomes.com" className="hover:text-[#20ae9b] transition-colors">info@anugrahhomes.com</a>
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0c8070] rounded-lg p-6 text-white">
                                <h4 className="text-lg font-bold mb-2">
                                    Interested in Plots Near Airport?
                                </h4>
                                <p className="text-sm mb-4 text-blue-50">
                                    Get exclusive details about our properties near Noida International Airport
                                </p>
                                <Link to={`/projects/anugrahhomes/contact-us`}>
                                    <button className="cursor-pointer  w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                                        Contact Us Today
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