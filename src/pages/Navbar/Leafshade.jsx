import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../components/AppContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';

import img1 from '../../assets/Leaf/leaf-1.webp'
import img2 from '../../assets/Leaf/leaf-2.webp'
import img3 from '../../assets/Leaf/leaf-3.webp'
import img4 from '../../assets/Leaf/leaf-4.webp'
import img5 from '../../assets/Leaf/leaf-5.webp'
import img6 from '../../assets/Leaf/leaf-7.webp'
import img7 from '../../assets/Leaf/leaf-6.webp'
import img8 from '../../assets/Leaf/leaf-8.webp'
import img9 from '../../assets/Leaf/leaf-10.webp'
import img10 from '../../assets/Leaf/leaf-11.webp'

export default function Leafshade() {
    const { setWebName } = useContext(AppContext);
    const [mainImage, setMainImage] = useState(0);
    
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
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
                        <h1 className="text-xl sm:text-2xl font-bold">LEAF SHADE</h1>
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
                                <div className="absolute top-4 right-4 bg-[#15b0c5] text-white px-3 py-1 rounded text-xs sm:text-sm">
                                    Featured
                                </div>
                            </div>

                            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
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
                                    <p className="font-semibold">Leaf Shade Cottages</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">DESCRIPTION</h2>
                            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                                <p className="text-base font-medium">Cottages & Resort Style Living</p>
                                <p>A unique project offering resort-style cottages and a resort-style living experience! Surrounded by lush forests, this site offers one of the best views of the pines! It is best suited for those who seek and desire solitude, away from the buzz and noise of everyday life.</p>
                                <p>The land is nearing completion with a strong water spring and all other essentials in place and being incorporated into the eco-technology. With its six-minute walking distance to the nearest private school, everything else for daily living and infrastructure lies at the neighboring resort and the small but bustling town of Dhanachuli, a quick 3-minute drive away.</p>
                                <p>This is an exceptional dream-come-true setup. The land comes with 100% clear, verified and approved title deeds.</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">DETAILS</h2>
                            <div className="bg-yellow-50 p-4 rounded overflow-x-auto">
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 text-gray-600 whitespace-nowrap">Updated on:</td>
                                            <td className="py-2 font-semibold">December 2024</td>
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
                                    <span>Greenhouse</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>WiFi</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Iron Disc Oven</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Sauna</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Jogging Track</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Swimming Pool</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Shed/Commercial</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Sleeping Areas</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">ADDRESS</h2>
                            <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Address:</span>
                                    <span className="font-semibold">Leaf Shade, Balidewat, Dhanachuli - Mukt, Mukteshwar, Nainital</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-32">State/county:</span>
                                    <span className="font-semibold">Uttarakhand</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Zip/Postal Code:</span>
                                    <span className="font-semibold">263132</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Area:</span>
                                    <span className="font-semibold">Nainital</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Country:</span>
                                    <span className="font-semibold">India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-4 rounded-lg mb-6 lg:sticky lg:top-6">
                            <div className="flex items-center mb-4">
                                <div className="w-28 h-28 bg-gray-200 rounded-lg mr-3 flex items-center justify-center">
                                    <span className="text-gray-600 font-bold">Leaf Shade</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl text-[#333333]">Leaf Shade</h3>
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
                                    <a href="mailto:info@leafshade.com" className="hover:text-[#20ae9b] transition-colors">info@leafshade.com</a>
                                </div>
                            </div>

                            <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0c8070] rounded-lg p-4 text-white">
                                <h4 className="text-lg font-bold mb-2">
                                    Interested in Leaf Shade?
                                </h4>
                                <p className="text-sm mb-4 text-blue-50">
                                    Get exclusive details about our cottages and resort-style living
                                </p>
                                <Link to="/projects/upcoming-projects/leaf-shade/contact">
                                    <button onClick={() => setWebName("Leaf Shade")} className="cursor-pointer w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
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
