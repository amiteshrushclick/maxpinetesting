import React,{useEffect} from 'react';
import { CheckCircle, Mail, Phone, ArrowRight } from 'lucide-react';

export default function ThankYou() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17420826626/9qgMCNezsYkbEILw8vJA",
      });
    }
  }, []);
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40  opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32  opacity-10 rounded-full -ml-16 -mb-16"></div>
          
          {/* Success Icon */}
          {/* <div className="relative mb-6 inline-block">
            <div className="bg-[#20ae9b] bg-opacity-10 rounded-full p-4 inline-block animate-pulse">
              <CheckCircle className="w-20 h-20 text-[#20ae9b]" strokeWidth={2} />
            </div>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Thank You!
          </h1>

          {/* Success Messages */}
          <p className="text-gray-600 text-lg mb-2">
            Your message has been received successfully.
          </p>
          <p className="text-[#20ae9b] font-semibold text-lg mb-8">
            Maxpine Group team will call you back soon!
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-[#20ae9b] mx-auto mb-8 rounded-full"></div>

          {/* Info Cards */}
        

          {/* What's Next Section */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <ArrowRight className="w-6 h-6 text-[#20ae9b] mr-2" />
              What happens next?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="bg-[#20ae9b] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">1</span>
                <span>Our team reviews your submission carefully</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#20ae9b] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">2</span>
                <span>We'll call you to discuss your requirements</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#20ae9b] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">3</span>
                <span>Get personalized solutions tailored for you</span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-[#20ae9b] hover:bg-[#1a9584] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Return to Homepage
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-white text-sm mt-6 opacity-90">
          Need immediate assistance? Call us at <a href="tel:+919115253545" className="font-semibold hover:text-[#20ae9b] transition-colors">+91-9115253545</a>
        </p>
      </div>
    </div>
  );
}