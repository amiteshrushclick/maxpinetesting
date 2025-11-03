import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, Printer, Phone, Mail, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import clubLogo from '../assets/ClubFarm.webp'
import img1 from '../assets/ClubForm/1.webp'
import img2 from '../assets/ClubForm/2.webp'
import img3 from '../assets/ClubForm/3.webp'
import img4 from '../assets/ClubForm/4.webp'
import img5 from '../assets/ClubForm/5.webp'
import img6 from '../assets/ClubForm/6.webp'
import img7 from '../assets/All_home_imgs/new-update-1.webp'

export default function ClubFarm() {
    const [mainImage, setMainImage] = useState(0);
    const clubBrochure = "https://ik.imagekit.io/16pq4do9s/A4-TCF.pdf?updatedAt=1759729427107";

    const images = [
        img1, img2, img3, img4, img5, img6, img7
    ];

    return (
        <div className="min-h-screen bg-white">
            <header className="border-b">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">THE CLUB FARM</h1>
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





                         {/* Coming Soon Section */}
                <div className="mt-12 mb-8">
                    <div className="bg-gradient-to-br from-[#20ae9b] to-[#0c8070] rounded-2xl p-6 sm:p-12 text-center shadow-xl">
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                                <p className="text-white text-sm font-semibold tracking-wider">STAY TUNED</p>
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                                Coming Soon
                            </h2>
                            <p className="text-lg sm:text-xl text-white/90 mb-6">
                                Exciting new features and updates are on the way
                            </p>
                           
                        </div>
                    </div>

                       

                    </div>
                    </div>









                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-4 rounded-lg mb-6 lg:sticky lg:top-6">
                            <div className="flex items-center mb-4">
                                <div className="w-28 h-28 mr-3">
                                    <img src={clubLogo} alt="clubfarm" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl text-[#333333]">The Club Farm</h3>
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
                                    <a href="mailto:info@theclubfarm.com" className="hover:text-[#20ae9b] transition-colors">info@theclubfarm.com</a>
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0c8070] rounded-lg p-4 text-white">
                                <h4 className="text-lg font-bold mb-2">
                                    Interested in Farmland by Ganga?
                                </h4>
                                <p className="text-sm mb-4 text-blue-50">
                                    Get exclusive details about our farmland by River Ganga with White Sandalwood trees
                                </p>
                                <Link to={`/projects/the-club-farm/contact-us`}>
                                    <button className="cursor-pointer w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
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