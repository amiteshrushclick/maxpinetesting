import { useState, useContext, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Home, X, CheckCircle } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import img from '../assets/All_home_imgs/people-1.webp'
import { AppContext } from '../components/AppContext';

export default function Contact() {
  // const { id } = useParams();
  const nav = useNavigate();
  const { webName } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    customProperty: '',
    projectName: '',
    message: ''
  });
  // const [submitted, setSubmitted] = useState(false);
  // const [checkdata, setCheckdata] = useState(false);

  // const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set projectName when webName changes
  useEffect(() => {
    if (webName) {
      setFormData(prev => ({ ...prev, projectName: webName }));
    }
  }, [webName]);


  // useEffect(() => {
  //   return () => {
  //     setWebName(null);
  //   };
  // }, [setWebName]);



  const EMAILJS_SERVICE_ID = 'service_cnlusd3';
  const EMAILJS_TEMPLATE_ID = 'template_fvbpbue';
  const EMAILJS_PUBLIC_KEY = 'jr9fqioLswz6tdy46';







  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number - only allow digits
    if (name === 'phone') {
      // Allow only digits, remove all other characters
      const phoneOnly = value.replace(/[^\d]/g, '');
      setFormData({ ...formData, [name]: phoneOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    // Property type validation
    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property type';
    }

    // Custom property validation if selected
    if (formData.propertyType === 'custom' && !formData.customProperty.trim()) {
      newErrors.customProperty = 'Please specify your custom requirement';
    }

    // Project name validation (only if webName is not set)
    if (!webName && !formData.projectName) {
      newErrors.projectName = 'Please select a project';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const date = new Date();
  const userDate = date.toLocaleDateString();
  const userTime = date.toLocaleTimeString();

  const userData = {
    from_name: "Maxpine Group",
    web_name: "Maxpine Group",
    message: `
  Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}  
  subsource: Contact Us,
  Project Interested In: ${formData.projectName}
  Property Type: ${formData.propertyType === 'custom' ? formData.customProperty : formData.propertyType}
  Message: ${formData.message}
  Date: ${userDate}
  Time: ${userTime}
      `,
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      
      
      // Send via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,       // replace with your EmailJS service ID
        EMAILJS_TEMPLATE_ID,      // replace with your EmailJS template ID
        userData,
        EMAILJS_PUBLIC_KEY        // replace with your EmailJS public key
      );

      // Send via your API
      const apiUrl = 'https://rushclick-crm.onrender.com/api/website-lead/leads/max_mugcj40q';
      
      const apiData = {
        name: formData.name,
        phone: formData.phone,
        ad_platform: "website",
        project_interested:formData.projectName,
        email: formData.email,
        lead_source: "Maxpine Website",
        message: formData.message,
        area_in_yards: formData.propertyType === 'custom' ? formData.customProperty : formData.propertyType,
        subsource: "Contact Us",
        website: window.location.origin,
        web_page: window.location.origin + window.location.pathname + window.location.search
      };
      
      const _response = await axios.post(apiUrl, apiData);

      // setShowPopup(true);
      nav("/thankyou");

      setFormData({ name: '', email: '', phone: '', propertyType: '', customProperty: '', projectName: '', message: '' });
    } catch (error) {
      console.error("Error sending form:", error);
      console.error("Error details:", {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        config: error.config
      });
      
      if (error.response?.status === 404) {
        alert("API endpoint not found. Please check the server configuration.");
      } else if (error.response?.status >= 500) {
        alert("Server error. Please try again later.");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">


      {/* Hero Header */}
      <div className="relative h-96">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>

          <div className="flex items-center gap-3 text-lg">
            <a href="/" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <span>›</span>
            <span className="text-[#20ae9b]">Contact Us</span>
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-6">
            {/* Office Card */}

            <div className="bg-white flex items-center flex-col rounded-xl shadow-md p-6  md:py-10 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#afcdd5] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#20ae9b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Corporate Office</h3>

              <p className="text-slate-600 md:px-10 text-center">
                H-174, Ground Floor, Sector-63, Noida, Uttar Pradesh 201301
              </p>
            </div>



            <div className="bg-white flex items-center flex-col rounded-xl shadow-md p-6 md:py-10 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#afcdd5] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#20ae9b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Branch Office</h3>

              <p className="text-slate-600 md:px-10 text-center">
                Shahdra office - 1/6966 Shivaji Park, Shahdara 110032
              </p>
            </div>




            {/* Office Card */}
            <div className="bg-white md:py-10 flex items-center flex-col rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#afcdd5] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#20ae9b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Sales Office</h3>

              <p className="text-slate-600 md:px-10 text-center">
                CS-9,  First Floor, Gyan Khand 2, Indrapuram
              </p>
            </div>


            <div className="bg-white md:py-10 flex items-center flex-col rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#afcdd5] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#20ae9b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Sales Office</h3>

              <p className="text-slate-600 md:px-10 text-center">
                Kasana tower-1,
                4th floor,
                Near Alpha - Metro Station
                Greater Noida( UP)
              </p>
            </div>




            <div className="bg-white md:py-10 flex items-center flex-col rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#e2eef1] rounded-lg flex items-center justify-center ">
                <MapPin className="w-6 h-6 text-[#20ae9b]" />
              </div>
              <p className='text-lg font-semibold text-gray-800'>
                Contact Us
              </p>

              <p className="text-slate-600 gap-1.5 md:px-1 text-center">
                <a href="tel:+919115253545" className="hover:text-[#20ae9b] transition-colors">+91-9115253545</a> <br /> 
                <a href="tel:+911204107573" className="hover:text-[#20ae9b] transition-colors">+91-1204107573</a>
              </p>
            </div>





          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-3 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

              <div className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength="20"
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-[#20ae9b] outline-none transition`}
                      placeholder="Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-[#20ae9b] outline-none transition`}
                      placeholder="abc@gmail.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Property Type */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 space-x-1.5 ">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength="10"
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-[#20ae9b] outline-none transition`}
                      placeholder="9876543210"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">I'm Interested In *</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.propertyType ? 'border-red-500' : 'border-slate-300'}   rounded-lg focus:ring-2 focus:ring-[#20ae9b] outline-none transition`}
                    >
                      <option value="">Select Option</option>
                      <option value="buy">100 Sq. Yards Plot</option>
                      <option value="sell">200 Sq. Yards Plot</option>
                      <option value="rent">300 Sq. Yards Plot</option>
                      <option value="invest">400 Sq. Yards Plot</option>
                      <option value="custom">Custom</option>
                    </select>
                    {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}

                    {formData.propertyType === "custom" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          name="customProperty"
                          value={formData.customProperty || ""}
                          onChange={handleChange}
                          maxLength="30"
                          placeholder="Enter your custom requirement"
                          className={`w-full px-4 py-3 border ${errors.customProperty ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-[#20ae9b] outline-none transition`}
                        />
                        {errors.customProperty && <p className="text-red-500 text-sm mt-1">{errors.customProperty}</p>}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Interested In *
                    </label>

                    <select
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      disabled={!!webName} // ✅ Disable if webName exists
                      className={`w-full px-4 py-3 border rounded-lg text-slate-600 ${webName
                          ? "bg-gray-100 text-gray-600 cursor-not-allowed"
                          : "focus:ring-2 focus:ring-[#20ae9b] outline-none transition"
                        }`}
                    >
                      {/* ✅ If webName exists, show it as the only option */}
                      {webName ? (
                        <option value={webName}>{webName}</option>
                      ) : (
                        <>
                          <option value="">Select Project</option>
                          {/* <option value="Maxpine Group">Maxpine Group</option> */}
                          <option value="Anugrah Homes">Anugrah Homes</option>
                          <option value="Skyline Aero Homes">Skyline Aero Homes</option>
                          <option value="Brij Vrinda">Brij Vrinda</option>
                          <option value="The Club Farm">The Club Farm</option>
                        </>
                      )}
                    </select>
                    {!webName && errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
                  </div>

                </div>




                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    maxLength="1500"
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-[#20ae9b] outline-none transition resize-none`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#20ae9b] hover:bg-[#2b877a] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="relative w-4 h-4">
                          <div className="absolute inset-0 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      </div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d448266.48399162124!2d77.3798317!3d28.6273072!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef986ec80253%3A0xcda30717d6f6e933!2sMAXPINE%20GROUP%20H-174%2C%20Ground%20Floor%20Sector%2063%20Noida%2C%20Uttar%20Pradesh%20201309!3m2!1d28.627307199999997!2d77.3798317!5e0!3m2!1sen!2sin!4v1759313308812!5m2!1sen!2sin"
                width="100%"
                height="540"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maxpine Group Location"
              ></iframe>
            </div>


          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}