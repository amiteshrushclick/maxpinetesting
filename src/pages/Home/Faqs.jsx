import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import img1 from '../../assets/green-5.webp'
import {Link } from 'react-router-dom'

export default function Faqs() {
  const [openFAQ, setOpenFAQ] = useState(2); // Third item open by default

  const faqs = [
    {
      id: 1,
      question: "What is included in your service?",
      answer: "We provide end-to-end real estate support — from property search and valuation to legal, financing, and post-purchase assistance."
    },
    {
      id: 2,
      question: "Can I get payment terms?",
      answer: "Yes, we offer flexible payment options, including installments and mortgage plans, customized to fit your budget."
    },
    {
      id: 3,
      question: "We create sustainable growth.",
      answer: "We focus on long-term value through strategic property investments, sustainable development, and community-centered growth."
    },
    // {
    //   id: 4,
    //   question: "How long does the property buying process take?",
    //   answer: "The typical property buying process takes 30-90 days depending on various factors including property type, financing approval, inspections, and legal requirements. We streamline the process to ensure efficient and timely completion while maintaining thorough due diligence."
    // },
    // {
    //   id: 5,
    //   question: "Do you provide property management services?",
    //   answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, financial reporting, and legal compliance. Our experienced team ensures your investment property generates optimal returns with minimal hassle."
    // },
    // {
    //   id: 6,
    //   question: "What areas do you serve?",
    //   answer: "We primarily serve Kiev and surrounding regions in Ukraine, with expanding coverage to other major metropolitan areas. Our local expertise and market knowledge ensure you receive the best guidance for property transactions in these regions."
    // }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 lg:px-10 px-1 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={img1}
                alt="Professional real estate consultant"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              
              {/* Overlay with construction site background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Professional badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#20ae9b] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">△</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Expert Consultation</h4>
                    <p className="text-sm text-gray-600">Licensed Professional</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#20ae9b] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-full opacity-15 animate-bounce"></div>
          </div>

          {/* Right Side - FAQ */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#20ae9b] font-semibold text-sm uppercase tracking-wider">
                <div className="w-8 h-0.5 bg-[#20ae9b]"></div>
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              
              <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Have Any Questions
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="cursor-pointer w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#20ae9b] font-bold text-lg min-w-[2rem]">
                        {index + 1}.
                      </span>
                      <h3 className="font-semibold text-gray-800  text-sm md:text-lg">
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 ${
                      openFAQ === faq.id ? 'border-[#20ae9b] bg-[#20ae9b] text-white rotate-45' : 'hover:border-[#247c71]'
                    }`}>
                      {openFAQ === faq.id ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-6">
                      <div className="pl-12 pt-2 border-l-2 border-gray-100 ml-2">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-[#20ae9b] 
            to-[#0e786a] rounded-xl p-6 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-lg mb-1">Still have questions?</h4>
                  <p className="text-white/90 text-sm">Get in touch with our expert team</p>
                </div>
                <Link to="/contact-us">
                <button className=" cursor-pointer bg-white text-[#20ae9b] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                  Contact Us
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}