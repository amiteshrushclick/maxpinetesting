import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { useState } from 'react';
import SEO from '../../components/SEO';
// import blog1 from '../../assets/BrijVrinda/6.webp'
// import blog2 from '../../assets/BrijVrinda/1.webp'


// import img1 from '../../assets/All_home_imgs/Gate-1170x785.webp'
import img2 from '../../assets/All_home_imgs/upadate-34.webp'
import img3 from '../../assets/All_home_imgs/update-05.webp'
import img4 from '../../assets/All_home_imgs/update-23.webp'

export default function SecondBlog() {
//   const { id } = useParams();
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Sample blog data - Replace this with your actual blog data or API call
  const blogData = {
   
    1: {
      title: "Plots Near Noida International Airport – Anugrah Homes by Maxpine Group",
      author: "Maxpine Group",
      date: "March 10, 2024",
      readTime: "30 min read",
      category: "Investment",
      image: img2,
      content: `
        <p>The region surrounding <strong>Noida International Airport (Jewar Airport)</strong> is rapidly transforming into a major hub for real estate investment. With world-class infrastructure, expressway connectivity, and upcoming business zones, this location promises long-term growth and prosperity. Among the most promising projects in this area is <strong>Anugrah Homes by Maxpine Group</strong> — offering premium residential and commercial plots tailored for modern investors and families.</p>

<h2>Why Choose Plots Near Noida International Airport?</h2>

<h3>1. Strategic Connectivity</h3>
<p>The <strong>Noida International Airport</strong> will be a game-changer for Delhi NCR, offering global connectivity to Agra, Mathura, Noida, and Greater Noida through the <strong>Yamuna Expressway</strong> and the <strong>Delhi-Mumbai Expressway</strong>. The upcoming <strong>metro extension</strong> and the <strong>proposed Film City</strong> near the area further enhance accessibility and employment opportunities, making this location perfect for both living and investment.</p>

<h3>2. High Appreciation Potential</h3>
<p>The ongoing development around the airport has fueled demand for residential and commercial plots. With new industrial parks, IT corridors, and smart city initiatives in progress, properties near <strong>Noida International Airport</strong> are expected to experience strong capital appreciation in the coming years. Real estate experts consider this area as the next major growth center after Noida and Greater Noida.</p>

<h3>3. Thriving Infrastructure and Lifestyle Amenities</h3>
<p>Living near Noida International Airport provides access to world-class amenities and a balanced lifestyle. Residents will enjoy proximity to:</p>
<ul>
  <li>High-quality healthcare and educational institutions</li>
  <li>Entertainment and shopping hubs</li>
  <li>Excellent road and public transport connectivity</li>
  <li>Planned corporate and business centers</li>
</ul>
<p>This well-planned region ensures a perfect mix of modern conveniences and green, peaceful surroundings for residents and investors alike.</p>

<h2>Anugrah Homes – A Premium Choice by Maxpine Group</h2>

<h3>1. Prime Location</h3>
<p><strong>Anugrah Homes</strong> is strategically situated near the <strong>Noida International Airport</strong>, offering unmatched accessibility and connectivity. Located close to key expressways, industrial corridors, and proposed metro lines, the project provides convenience while maintaining a peaceful, eco-friendly atmosphere.</p>

<h3>2. World-Class Amenities</h3>
<p>The project promises a premium lifestyle with top-notch facilities such as:</p>
<ul>
  <li>Gated community with 24x7 security and CCTV surveillance</li>
  <li>Modern clubhouse and recreational spaces</li>
  <li>Landscaped parks, jogging tracks, and open green areas</li>
  <li>Proximity to schools, hospitals, and shopping centers</li>
  <li>Dedicated children’s play areas and fitness facilities</li>
</ul>

<h3>3. Versatile Plot Options</h3>
<p>Anugrah Homes offers flexible plot sizes suitable for both <strong>residential and commercial purposes</strong>. Whether you wish to construct your dream home or establish a business, these freehold plots provide complete flexibility to match your goals.</p>

<h3>4. Sustainable Living</h3>
<p>Committed to sustainability, Anugrah Homes includes eco-friendly features like <strong>rainwater harvesting</strong>, <strong>solar-powered street lighting</strong>, and <strong>ample green zones</strong> to promote a healthier lifestyle for all residents.</p>

<h2>Investment Benefits</h2>
<p>Owning a plot near Noida International Airport brings unmatched advantages, including:</p>
<ul>
  <li>Long-term <strong>capital appreciation</strong></li>
  <li>Easy access to Delhi, Agra, Mathura, and NCR cities</li>
  <li>Thriving business and industrial growth potential</li>
  <li>Enhanced lifestyle with modern infrastructure and amenities</li>
  <li>Part of a well-planned and rapidly developing community</li>
</ul>

<p>With <strong>Noida International Airport</strong> expected to become a global aviation hub, both domestic and international investors are eyeing nearby properties — ensuring steady demand and promising returns.</p>

<h2>About Maxpine Group</h2>
<p><strong>Maxpine Group</strong> is a reputed real estate developer known for its integrity, innovation, and commitment to quality. With years of experience in residential and commercial development, the group focuses on creating communities that deliver long-term value and satisfaction to investors and homeowners alike.</p>
<p><strong>Anugrah Homes</strong> embodies Maxpine’s vision of offering <strong>affordable luxury and secure investments</strong>. The project blends modern design, reliable infrastructure, and nature-friendly surroundings to create an ideal living environment.</p>

<h2>Project Details</h2>
<ul>
  <li><strong>Property Name:</strong> Anugrah Homes by Maxpine Group</li>
  <li><strong>Location:</strong> 2JGW+JG3, Aligarh - Palwal Rd, Jattari, Uttar Pradesh</li>
  <li><strong>Area:</strong> Jewar, Uttar Pradesh</li>
  <li><strong>Land Area:</strong> 80 Acres (Total Project Size Up to 300 Acres)</li>
  <li><strong>Price:</strong> Starting from ₹52.5 Lakh</li>
  <li><strong>Property Type:</strong> Residential & Commercial Plots</li>
  <li><strong>Status:</strong> For Sale</li>
</ul>

<h2>Payment Plan</h2>
<ul>
  <li><strong>Booking Amount:</strong> 10%</li>
  <li><strong>Within 15 Days:</strong> 40%</li>
  <li><strong>Within 60 Days or Registry:</strong> 50%</li>
</ul>

<h2>Features & Amenities</h2>
<ul>
  <li>24x7 CCTV Surveillance</li>
  <li>30 & 40 Feet Internal Roads</li>
  <li>50 Feet Wide Main Roads</li>
  <li>Gated Society with Controlled Access</li>
  <li>Modern Electrification System</li>
  <li>Commercial Complex within the Project</li>
  <li>Fountains and Green Landscaping</li>
  <li>Group Housing Area and Clubhouse</li>
  <li>Hospital, School, and Gym within reach</li>
  <li>Jogging Track and Kids Play Area</li>
  <li>Swimming Pool and Recreational Facilities</li>
  <li>Proper Drainage and Sewage System</li>
  <li>Sidewalks and Walking Paths</li>
  <li>Excellent Connectivity to Major Highways</li>
</ul>

<h2>FAQs</h2>

<h3>1. Why invest in plots near Noida International Airport?</h3>
<p>Investing in plots near the airport ensures high returns due to rapid infrastructure development, excellent connectivity, and growing demand. The area’s proximity to industrial zones and smart city projects makes it one of the most promising investment destinations in NCR.</p>

<h3>2. What makes Anugrah Homes unique?</h3>
<p>Anugrah Homes stands out for its prime location, sustainable design, and world-class amenities. The project offers flexible plot sizes, modern infrastructure, and eco-friendly features, making it ideal for both investors and families.</p>

<h3>3. How far is Anugrah Homes from Noida International Airport?</h3>
<p>Anugrah Homes is located just a short drive from Noida International Airport, offering unmatched convenience for travelers, professionals, and business owners. The project’s excellent road network ensures quick access to nearby cities and expressways.</p>

<h3>4. How can I book a plot at Anugrah Homes?</h3>
<p>You can book a plot by contacting our <strong>sales team</strong> or scheduling a <strong>site visit</strong> through the official <strong>Contact Us</strong> page. Our representatives will guide you through the booking process and provide all necessary details and documentation.</p>

<h2>Conclusion</h2>
<p><strong>Anugrah Homes by Maxpine Group</strong> offers more than just plots — it offers an opportunity to build your future in one of India's fastest-growing regions. With strategic connectivity, top-class amenities, and a developer you can trust, this project is the perfect blend of investment and lifestyle. Book your plot today and be part of the future near <strong>Noida International Airport (Jewar)</strong>.</p>

<div class="bg-gradient-to-r from-[#20ae9b] to-[#108878] rounded-lg p-6 text-white my-8">
  <h3 class="text-xl font-bold mb-3">🏠 Secure Your Plot Today</h3>
  <p class="mb-4">Join hundreds of smart investors who have already secured their plots near Noida International Airport. Limited plots available!</p>
  <div class="flex flex-col sm:flex-row gap-3">
    <a href="/projects/anugrahhomes" class="bg-white text-[#20ae9b] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors">View Anugrah Homes</a>
    <a href="/book-site-visit" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-[#20ae9b] transition-colors">Book Site Visit</a>
  </div>
</div>

      `,
      tags: ["Investment", "Property", "Finance", "Guide"]
    },
    2: {
      title: "Residential Plots Near Noida International Airport: A New Gateway to Global Connectivity",
      author: "Maxpine Group",
      date: "March 10, 2024",
      readTime: "30 min read",
      category: "Investment",
      image: img3,
      content: `
        <p>The region surrounding <strong>Noida International Airport (Jewar Airport)</strong> is transforming into a powerful hub for real estate and economic growth. With recent milestones such as the successful <strong>flight validation test conducted on December 9, 2024</strong>—where an IndiGo aircraft completed landing and operational checks—the airport is on track for its <strong>official opening in April 2025</strong>.</p>
        
        <p>This massive infrastructure project is expected to decongest Delhi Airport and connect northern India to global destinations, creating unprecedented investment opportunities. Among the most promising developments in the region is <strong>Anugrah Homes by Maxpine Group</strong>, offering premium residential and commercial plots designed for future-ready living.</p>

<h2>Why Choose Plots Near Noida International Airport?</h2>

<h3>1. Strategic Connectivity</h3>
<p>The <strong>Noida International Airport</strong> at Jewar will serve as one of Asia’s largest aviation hubs, connecting Delhi NCR with Agra, Mathura, and other key cities through the <strong>Yamuna Expressway</strong> and the <strong>Delhi–Mumbai Expressway</strong>. With the <strong>proposed metro expansion</strong>, <strong>Film City project</strong>, and the upcoming <strong>Industrial Corridor</strong>, this location is ideal for homeowners, investors, and business professionals seeking long-term growth and easy access to major transportation routes.</p>

<h3>2. High Appreciation Potential</h3>
<p>Massive infrastructure projects such as <strong>expressways, logistics parks, IT hubs, and smart city zones</strong> are driving high property demand in the Jewar region. Real estate experts project that land values near the airport will experience a sharp rise over the next few years, making it a prime opportunity for both short-term and long-term investors. The completion of the 3.9 km runway and the near-ready terminal building further underline the airport’s readiness and its impact on surrounding property markets.</p>

<h3>3. Thriving Infrastructure and Lifestyle Amenities</h3>
<p>Living near Noida International Airport offers a perfect mix of modern convenience and natural surroundings. The region is being developed with top-tier amenities and facilities, including:</p>
<ul>
  <li>World-class healthcare and educational institutions</li>
  <li>Entertainment centers, malls, and multiplexes</li>
  <li>Business hubs and industrial clusters</li>
  <li>Well-connected public transport and expressways</li>
  <li>Green landscapes and open recreational spaces</li>
</ul>
<p>This perfect balance of urban development and peaceful living makes it one of the most desirable locations for families and professionals alike.</p>

<h2>Anugrah Homes – A Premium Choice by Maxpine Group</h2>

<h3>1. Prime Location</h3>
<p><strong>Anugrah Homes</strong> by <strong>Maxpine Group</strong> is strategically positioned near Noida International Airport, offering easy connectivity while maintaining a serene environment. Its close proximity to key expressways, metro routes, and industrial corridors ensures high accessibility and strong appreciation potential. Whether you’re an investor or end-user, Anugrah Homes offers the perfect location advantage.</p>

<h3>2. World-Class Amenities</h3>
<p>The project is equipped with premium features designed for a luxurious and secure lifestyle:</p>
<ul>
  <li>Gated community with 24×7 CCTV surveillance</li>
  <li>Modern clubhouse with recreational and fitness facilities</li>
  <li>Landscaped gardens and jogging tracks</li>
  <li>Children’s play areas and open green zones</li>
  <li>Proximity to schools, hospitals, and shopping complexes</li>
  <li>Energy-efficient lighting and eco-friendly systems</li>
</ul>

<h3>3. Versatile Plot Options</h3>
<p>Anugrah Homes offers <strong>freehold residential and commercial plots</strong> in various sizes, perfect for building homes, offices, or retail spaces. Each plot comes with planned infrastructure, proper drainage, and excellent connectivity, making it ideal for both personal and business development.</p>

<h3>4. Sustainable Living</h3>
<p>With a focus on environmental responsibility, Anugrah Homes incorporates <strong>rainwater harvesting</strong>, <strong>solar-powered street lighting</strong>, and <strong>green landscaping</strong> to promote a sustainable lifestyle and reduce carbon footprint.</p>

<h2>Investment Benefits</h2>
<p>Owning a plot near Noida International Airport means securing your future in one of India’s fastest-developing regions. Benefits include:</p>
<ul>
  <li>High capital appreciation potential</li>
  <li>Seamless connectivity to Delhi NCR, Agra, and beyond</li>
  <li>Growing demand for residential and commercial properties</li>
  <li>Part of a government-supported development zone</li>
  <li>Opportunity to invest before full-scale airport operations begin</li>
</ul>

<h2>About Maxpine Group</h2>
<p><strong>Maxpine Group</strong> is a trusted name in real estate, known for delivering quality, innovation, and customer satisfaction. With a focus on affordability, transparency, and modern design, the group has earned a strong reputation in the NCR region. <strong>Anugrah Homes</strong> reflects their commitment to offering investors and families an unmatched combination of comfort, security, and long-term value.</p>

<h2>Project Details</h2>
<ul>
  <li><strong>Property Name:</strong> Anugrah Homes by Maxpine Group</li>
  <li><strong>Location:</strong> 2JGW+JG3, Aligarh - Palwal Rd, Jattari, Uttar Pradesh</li>
  <li><strong>Area:</strong> Jewar, Uttar Pradesh</li>
  <li><strong>Land Area:</strong> 80 Acres (Total Project Size Up to 300 Acres)</li>
  <li><strong>Price:</strong> Starting from ₹52.5 Lakh</li>
  <li><strong>Property Type:</strong> Residential & Commercial Plots</li>
  <li><strong>Status:</strong> For Sale</li>
</ul>

<h2>Payment Plan</h2>
<ul>
  <li><strong>Booking Amount:</strong> 10%</li>
  <li><strong>Within 15 Days:</strong> 40%</li>
  <li><strong>Within 60 Days or Registry:</strong> 50%</li>
</ul>

<h2>Features & Amenities</h2>
<ul>
  <li>24×7 CCTV Surveillance</li>
  <li>30 & 40 Feet Internal Roads</li>
  <li>50 Feet Wide Main Roads</li>
  <li>Gated Society with Controlled Access</li>
  <li>Modern Electrification and Drainage System</li>
  <li>On-site Commercial Complex</li>
  <li>Clubhouse and Recreational Zone</li>
  <li>Group Housing & Open Green Parks</li>
  <li>Hospital, Gym, and School within reach</li>
  <li>Jogging Track & Kids Play Area</li>
  <li>Swimming Pool & Fountains</li>
  <li>Eco-friendly Development with Sidewalks and Trees</li>
</ul>

<h2>FAQs</h2>

<h3>1. Why invest in plots near Noida International Airport?</h3>
<p>The region is witnessing exponential growth due to the upcoming airport, new expressways, and smart city development. Property values are expected to rise sharply, making this one of the best long-term investments in North India.</p>

<h3>2. What makes Anugrah Homes unique?</h3>
<p>Anugrah Homes offers a rare combination of prime location, sustainable design, and world-class amenities. The project is ideal for investors seeking high ROI and families looking for a modern, peaceful living environment.</p>

<h3>3. How far is Anugrah Homes from Noida International Airport?</h3>
<p>Anugrah Homes is just a short drive from Noida International Airport, ensuring easy access for travelers and professionals. The project’s connectivity to the Yamuna Expressway and upcoming metro lines adds unmatched convenience.</p>

<h3>4. How can I book a plot at Anugrah Homes?</h3>
<p>To book a plot, contact the <strong>Maxpine Group sales team</strong> or schedule a <strong>site visit</strong> via the official <strong>Contact Us</strong> page. Our representatives will guide you through the booking and registration process.</p>

<h2>Conclusion</h2>
<p><strong>Anugrah Homes by Maxpine Group</strong> is more than a property—it’s a gateway to future growth, prosperity, and global connectivity. With world-class infrastructure, modern amenities, and a developer you can trust, this project stands as one of the finest real estate opportunities near <strong>Noida International Airport (Jewar)</strong>. Secure your plot today and be part of India’s next major development hub.</p>


      `,
      tags: ["Investment", "Property", "Finance", "Guide"]
    },
     3: {
      title: "The Home Buying Process: A Comprehensive Step-by-Step Guide",
      author: "Maxpine Group",
      date: "March 10, 2024",
      readTime: "30 min read",
      category: "Investment",
      image: img4,
      content: `
        <h2>The Home Buying Process: A Comprehensive Step-by-Step Guide</h2> <p>Buying a home or plot is one of the most important financial decisions of your life. Whether you are a first-time buyer or an experienced investor, understanding the complete process helps you make smart and confident choices. Projects like <strong>Anugrah Homes by Maxpine Group</strong> near <strong>Noida International Airport (Jewar Airport)</strong> make this journey seamless and rewarding with transparency, location advantage, and trusted development.</p> <h3>1. Define Your Budget and Goals</h3> <p>Start by evaluating your finances and setting a realistic budget. Decide whether you want a <strong>residential plot</strong> to build your dream home or a <strong>commercial plot</strong> for long-term returns. Always include an additional 10–15% for registration, taxes, and other charges.</p> <h3>2. Research the Location</h3> <p>Location is the foundation of real estate success. Areas surrounding <strong>Noida International Airport (Jewar)</strong> are rapidly developing with expressways, metro connectivity, and industrial projects. This ensures strong appreciation and high return on investment. <strong>Anugrah Homes</strong> enjoys proximity to:</p> <ul> <li>Yamuna Expressway and Delhi–Mumbai Expressway</li> <li>Upcoming Film City and Metro Expansion</li> <li>Educational and business hubs</li> <li>Green and peaceful surroundings</li> </ul> <h3>3. Shortlist Trusted Developers</h3> <p>Always choose reputed builders with a proven record. <strong>Maxpine Group</strong> stands out for delivering quality projects, clear documentation, and transparent dealings. Their project, <strong>Anugrah Homes</strong>, offers freehold plots designed for investors and homeowners alike.</p> <h3>4. Visit the Site</h3> <p>Visiting the property personally helps you evaluate ground reality. Observe road access, surrounding developments, and nearby amenities. <strong>Anugrah Homes</strong> offers well-planned internal roads, gated security, green parks, and close proximity to schools, hospitals, and commercial zones.</p> <h3>5. Verify Legal Documents</h3> <p>Before investing, ensure all approvals and legal papers are clear:</p> <ul> <li>RERA registration</li> <li>Land ownership and title deeds</li> <li>Layout and government approvals</li> <li>Payment and possession terms</li> </ul> <p><strong>Anugrah Homes</strong> maintains complete transparency with verified legal documentation and freehold ownership.</p> <h3>6. Booking and Payment Process</h3> <p>Once satisfied with the project, proceed with the booking. The payment plan at <strong>Anugrah Homes</strong> is customer-friendly:</p> <ul> <li><strong>Booking Amount:</strong> 10%</li> <li><strong>Within 15 Days:</strong> 40%</li> <li><strong>Within 60 Days or at Registry:</strong> 50%</li> </ul> <p>This structured plan helps you manage finances comfortably while securing your plot early.</p> <h3>7. Registration and Handover</h3> <p>After payment, registration takes place at the sub-registrar office. Once the property is registered in your name, you become the legal owner of your plot. <strong>Anugrah Homes</strong> ensures a smooth handover with complete paperwork and possession assistance.</p> <h3>8. Plan Your Dream Home</h3> <p>After possession, you can design and construct your dream home or set up your business space. The site offers modern infrastructure including:</p> <ul> <li>30 & 40 feet wide internal roads</li> <li>Clubhouse, jogging tracks, and landscaped parks</li> <li>24×7 security and gated community</li> <li>Eco-friendly features like rainwater harvesting and solar lighting</li> </ul> <h3>9. Monitor Growth and Appreciation</h3> <p>The <strong>Jewar Airport region</strong> is expected to become one of North India’s biggest economic zones. With every phase of airport expansion, road improvement, and metro development, property prices are set to grow significantly. Early investors will benefit from strong appreciation and rental potential.</p> <h2>Why Buy with Maxpine Group?</h2> <p><strong>Maxpine Group</strong> has built a reputation for reliability, modern design, and customer trust. Their project, <strong>Anugrah Homes</strong>, provides a balanced lifestyle combining convenience, sustainability, and investment value.</p> <ul> <li>Prime location near Noida International Airport</li> <li>Premium residential and commercial plots</li> <li>World-class amenities and infrastructure</li> <li>Eco-friendly, sustainable planning</li> <li>High ROI and long-term appreciation</li> </ul> <h2>Conclusion</h2> <p>Buying a home or plot doesn’t have to be complicated — it just needs the right guidance and developer. <strong>Anugrah Homes by Maxpine Group</strong> simplifies every step, from selection to possession, ensuring a secure, transparent, and profitable investment. With its unbeatable location near <strong>Noida International Airport (Jewar)</strong>, modern infrastructure, and growing demand, this is your chance to own a piece of India’s most promising real estate destination.</p>


      `,
      tags: ["Investment", "Property", "Finance", "Guide"]
    }
  };

  const blog =  blogData[1];

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = blog.title;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <>
      <SEO
        title="Plots Near Noida International Airport – Anugrah Homes by Maxpine Group"
        description="Premium residential plots near Noida International Airport (Jewar Airport). Anugrah Homes by Maxpine Group offers strategic connectivity, world-class amenities, and high ROI potential."
        keywords="plots near airport, residential plots Noida, Anugrah Homes, Noida International Airport, Jewar Airport, Maxpine Group, real estate investment"
        canonicalUrl="https://www.maxpinegroup.in/updates/blogs/plots-near-noida-international-airport/"
        ogImage={blog.image}
        ogType="article"
        twitterCard="summary_large_image"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] bg-gray-900">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover object-bottom opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg transition-all duration-200 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium hidden sm:inline">Back</span>
        </button>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
          <span className="bg-[#20ae9b] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
            Maxpine Group
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 -mt-16 sm:-mt-24 md:-mt-32 relative z-10">
        {/* Article Card */}
        <article className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
          {/* Article Header */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-gray-600 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#20ae9b]" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#20ae9b]" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#20ae9b]" />
                <span>{blog.readTime}</span>
              </div>
              
              {/* Share Button */}
              <div className="relative sm:ml-auto mt-2 sm:mt-0">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 bg-[#20ae9b] hover:bg-[#1a9a88] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 text-sm sm:text-base"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>

                {/* Share Menu */}
                {showShareMenu && (
                  <div className="absolute right-0 sm:right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20 w-44 sm:w-48">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                    >
                      <Facebook className="w-4 h-4 text-blue-600" />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                    >
                      <Twitter className="w-4 h-4 text-sky-500" />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                    >
                      <Linkedin className="w-4 h-4 text-blue-700" />
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700"
                    >
                      <Link2 className="w-4 h-4 text-gray-600" />
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-sm sm:prose-base md:prose-lg max-w-none px-2 sm:px-0"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{
                '--tw-prose-headings': '#1f2937',
                '--tw-prose-links': '#20ae9b',
              }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-[#20ae9b] hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="bg-gradient-to-r from-[#20ae9b] to-[#1a9a88] p-8 md:p-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#20ae9b] font-bold text-xl">
                {blog.author.charAt(0)}
              </div>
              <div className="text-white">
                <h3 className="font-bold text-xl mb-1">Written by {blog.author}</h3>
                <p className="opacity-90">Content Creator & Real Estate Expert</p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
      
      </div>

      <style>{`
        .prose h2 {
          color: #1f2937;
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          color: #4b5563;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }
        .prose a {
          color: #20ae9b;
          text-decoration: none;
        }
        .prose a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
    </>
  );
}