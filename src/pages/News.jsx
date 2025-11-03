import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../components/AppContext';

import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/All_home_imgs/new-update-1.webp'
import img2 from '../assets/All_home_imgs/upadate-34.webp'
import img3 from '../assets/All_home_imgs/update-01.webp'
import img4 from '../assets/All_home_imgs/update-012.webp'
import img5 from '../assets/All_home_imgs/update-013.webp'
import img6 from '../assets/All_home_imgs/update-02.webp'
import img7 from '../assets/All_home_imgs/update-03.webp'
import img8 from '../assets/All_home_imgs/update-03.webp'
import img9 from '../assets/All_home_imgs/update-04.webp'
import img10 from '../assets/All_home_imgs/update-32.webp'
import imgvide from '../assets/All_home_imgs/video-placeholder.webp'

export default function News() {
  const { setWebName } = useContext(AppContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;


  useEffect(() => {
    return () => {
      setWebName(null);
    };
  }, [setWebName]);

  const blogPosts = [
    { id: 1, url:"/buy-plots-near-jewar-airport/", title: "Buy Plots Near Jewar Airport – Anugrah Homes by Maxpine Group", author: "Maxpine Group", date: "07 December, 21", excerpt: "Buy Plots Near Jewar Airport, the surrounding areas are transforming into a real estate hotspot...", image: img1, category:"business" },
    { id: 2, url:"/property/plots-near-noida-international-airport/",  title: "Plots Near Noida International Airport – Anugrah Homes by Maxpine Group", author: "Maxpine Group", date: "15 December, 21", excerpt: "The region surrounding Noida International Airport, also known as Jewar Airport...", image: img2 },
    { id: 3, url:"/nia/", title: "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity", author: "Maxpine Group", date: "10 December, 21", excerpt: "The Noida International Airport in Jewar is progressing rapidly and recently achieved...", image: img3 },
    { id: 4, url:"/updates/blogs/authority-plots-near-jewar-airport/", title: "Book Your Future Today with Premium Authority Plots Near Jewar Airport – Maxpine Group ", author: "Maxpine Group", date: "07 December, 21", excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...", image: img4 },
    { id: 5, url:"/property/plots-near-noida-international-airport/", title: "The Best Types Of Real Estate Investment Properties.", author: "Maxpine Group", date: "15 December, 21", excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...", image: img5 },
    { id: 6, url:"/nia/", title: "How Much Does Land Survey Cost in 2022?.", author: "Maxpine Group", date: "10 December, 21", excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...", image: img6 },
    { id: 7,url:"/buy-plots-near-jewar-airport/", title: "18 Best Real Estate Apps For Buyers, Sellers & Investors.", author: "Maxpine Group", date: "07 December, 21", excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...", image: img7 },
    { id: 8, url:"/property/plots-near-noida-international-airport/", title: "Ultimate Guide to Buying a Vacation Rental Property.", author: "Maxpine Group", date: "15 December, 21", excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...", image: img8 },
    { id: 9, url:"/nia/", title: "Do You Qualify For Real Estate Line Of Credit?", author: "Maxpine Group", date: "10 December, 21", excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...", image: img9 },
    { id: 10, url:"/buy-plots-near-jewar-airport/", title: "Smart Investment: Why Location Still Matters Most.", author: "Hamilton SizaMaxpine Group", date: "12 December, 21", excerpt: "Properties are most budget friendly so you have are opportunity to find are the best the best...", image: img10 },
  ];

  // Pagination logic
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imgvide})`
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-sm tracking-widest mb-4 uppercase">Our Blogs</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest Blog Post</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Huge number of properties available here for buy and sell also you can find here co-living property as you like
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image */}
              <div 
                onClick={() => navigate(`${post.url}`)}
                className="relative overflow-hidden rounded-lg mb-6 h-64"
              >
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-sm text-[#20ae9b] mb-3">
                <span className="text-gray-600">{post.author} on</span>
                <span>{post.date}</span>
              </div>

              {/* Title */}
              <h3 
                onClick={() => navigate(`${post.url}`)}
                className="text-xl  md:h-12 overflow-hidden font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#20ae9b] transition-colors"
              >
                {post.title}...
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Read More Button */}
              <button 
                onClick={() => navigate(`${post.url}`)}
                className="cursor-pointer flex items-center gap-2 text-gray-900 font-medium group-hover:text-[#20ae9b] transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="cursor-pointer w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#20ae9b] transition-colors disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={` cursor-pointer w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                currentPage === idx + 1
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="cursor-pointer w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#20ae9b] transition-colors disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}