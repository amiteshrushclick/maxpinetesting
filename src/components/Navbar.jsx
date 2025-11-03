import { Lock, Menu, X, ChevronDown } from 'lucide-react';

import { Link, useNavigate } from 'react-router-dom';

import { useState, useRef, useEffect, useCallback } from 'react';



export default function Navbar() {

  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mobileSubMenus, setMobileSubMenus] = useState({});

  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);

  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  

  const hoverTimeoutRef = useRef(null);

  const navbarRef = useRef(null);



  // Detect touch device

  useEffect(() => {

    const checkTouch = () => {

      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    };

    checkTouch();

  }, []);



  // Clear all timers

  const clearAllTimers = useCallback(() => {

    if (hoverTimeoutRef.current) {

      clearTimeout(hoverTimeoutRef.current);

      hoverTimeoutRef.current = null;

    }

  }, []);



  // Close all dropdowns

  const closeAllDropdowns = useCallback(() => {

    clearAllTimers();

    setActiveDesktopDropdown(null);

    setActiveSubMenu(null);

    setMobileMenuOpen(false);

    setMobileSubMenus({});

  }, [clearAllTimers]);



  // Handle outside clicks

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (navbarRef.current && !navbarRef.current.contains(event.target)) {

        closeAllDropdowns();

      }

    };

    

    document.addEventListener('mousedown', handleClickOutside);

    document.addEventListener('touchstart', handleClickOutside);

    return () => {

      document.removeEventListener('mousedown', handleClickOutside);

      document.removeEventListener('touchstart', handleClickOutside);

    };

  }, [closeAllDropdowns]);



  // Handle navigation with immediate closure

  const handleNavigation = useCallback((item, event) => {

    if (event) {

      event.preventDefault();

      event.stopPropagation();

    }

    

    // Close everything immediately

    closeAllDropdowns();

    

    // Handle navigation based on item type

    if (item.type === "download") {

      // Handle download

      try {

        const link = document.createElement('a');

        link.href = item.href;

        link.download = item.name.replace(/\s+/g, "_") + ".pdf";

        link.target = "_blank";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

      } catch {

        window.open(item.href, "_blank");

      }

    } else if (item.href?.startsWith("http")) {

      window.open(item.href, "_blank");

    } else if (item.href && item.href !== "#") {

      navigate(item.href);

    }

  }, [navigate, closeAllDropdowns]);



  // Desktop dropdown handlers

  const handleDesktopDropdownClick = useCallback((dropdownKey, event) => {

    event.preventDefault();

    event.stopPropagation();

    clearAllTimers();

    

    // Toggle the dropdown immediately

    setActiveDesktopDropdown(prev => prev === dropdownKey ? null : dropdownKey);

    setActiveSubMenu(null);

  }, [clearAllTimers]);



  const handleDesktopMouseEnter = useCallback((dropdownKey) => {

    if (isTouchDevice) return;

    clearAllTimers();

    setActiveDesktopDropdown(dropdownKey);

    setActiveSubMenu(null);

  }, [isTouchDevice, clearAllTimers]);



  const handleDesktopMouseLeave = useCallback(() => {

    if (isTouchDevice) return;

    clearAllTimers();

    hoverTimeoutRef.current = setTimeout(() => {

      setActiveDesktopDropdown(null);

      setActiveSubMenu(null);

    }, 300);

  }, [isTouchDevice, clearAllTimers]);



  // Submenu handlers

  const handleSubMenuToggle = useCallback((itemName, event) => {

    event.preventDefault();

    event.stopPropagation();

    clearAllTimers();

    setActiveSubMenu(prev => prev === itemName ? null : itemName);

  }, [clearAllTimers]);



  const handleSubMenuMouseEnter = useCallback((itemName) => {

    if (isTouchDevice) return;

    clearAllTimers();

    setActiveSubMenu(itemName);

  }, [isTouchDevice, clearAllTimers]);



  const handleSubMenuMouseLeave = useCallback(() => {

    if (isTouchDevice) return;

    clearAllTimers();

    hoverTimeoutRef.current = setTimeout(() => {

      setActiveSubMenu(null);

    }, 300);

  }, [isTouchDevice, clearAllTimers]);



  // Mobile menu handlers

  const toggleMobileMenu = useCallback(() => {

    setMobileMenuOpen(prev => !prev);

    setMobileSubMenus({});

  }, []);



  const toggleMobileSubMenu = useCallback((key) => {

    setMobileSubMenus(prev => ({

      ...prev,

      [key]: !prev[key]

    }));

  }, []);



  // Menu data

  const menuData = {

    projects: [

      {

        name: "Anugrah homes",

        href: "/projects/anugrahhomes",

        sub: [

          { name: "Visit Website", href: "https://anugrahhomes.com/" },

          { name: "Key Plan", href: "/projects/anugrahhomes/keyplan" },

          { name: "Layout", href: "/projects/anugrahhomes/layout" },

          { name: "Price List", href: "/projects/anugrahhomes/pricelist" },

          { name: "Download Brochure", href: "https://drive.google.com/file/d/15psZuZVoH9PxFbfl7k1_J_vkET6h5AAs/preview", type: "download" },

        ],

      },

      {

        name: "Skyline Aero homes",

        href: "/projects/skyline-aero-homes",

        sub: [

          { name: "Visit Website", href: "https://skylineaerohomes.com/" },

          { name: "Key Plan", href: "/projects/skyline/keyplan" },

          { name: "Layout", href: "/projects/skyline/layout" },

          { name: "Price List", href: "/projects/skyline/pricelist" },

          { name: "Download Brochure", href: "https://ik.imagekit.io/16pq4do9s/SK+Brochure+(1)-compressed.pdf?updatedAt=1759728617770", type: "download" },

        ],

      },

      {

        name: "Brij Vrinda",

        href: "/projects/brij-vrinda",

        sub: [

          { name: "Visit Website", href: "https://brijvrindafarms.com/" },

          { name: "Key Plan", href: "/projects/brij_vrinda/KeyPlan" },

          { name: "Layout", href: "/projects/brij_vrinda/layout" },

          { name: "Price List", href: "/projects/brij_vrinda/pricelist" },

          { name: "Download Brochure", href: "https://ik.imagekit.io/16pq4do9s/BV-N-links%20(1).pdf?updatedAt=1759729669991", type: "download" },

        ],

      },

      {

        name: "The Club Farm",

        href: "/projects/the-club-farm",

        sub: [

          { name: "Visit Website", href: "/comming-soon-CF" },

          { name: "Key Plan", href: "/projects/the-club-farm/keyplan" },

          { name: "Layout", href: "/projects/the-club-farm/layout" },

          { name: "Price List", href: "/projects/the-club-farm/pricelist" },

          { name: "Download Brochure", href: "https://ik.imagekit.io/16pq4do9s/A4-TCF.pdf?updatedAt=1759729427107", type: "download" },

        ],

      },

      {

        name: "Upcoming Projects",

        href: "#",

        sub: [

          { name: "Leafshade", href: "/projects/upcoming-projects/leafshade" },

        ],

      },

    ],

    developments: [

      { name: "Anugrah homes", href: "/developments/anugrahhomes" },

      { name: "Skyline Aero homes", href: "/developments/skyline-aero-homes" },

      { name: "Brij Vrinda", href: "/developments/brij_vrinda" },

      { name: "The Club Farm", href: "/developments/the_club_farm" },

    ],

    updates: [

      { name: "Blogs", href: "/updates/blogs" },

      { name: "Noida International Airport", href: "/updates/noida-international-airport" },

      { name: "International Film City", href: "/updates/international-film-city" },

      { name: "Medical Device Park", href: "/updates/medical-device-Park" },

      { name: "Logistics Park", href: "/updates/logistics-park" },

      { name: "Personal Rapid Transit - pod Taxi", href: "/updates/personal-rapid-transit" },

    ],

  };



  const navConfig = [

    { label: "Home", type: "link", url: "/" },

    { label: "About Us", type: "link", url: "/about-us" },

    { label: "Projects", type: "dropdown", key: "projects", width: "w-64" },

    { label: "Updates", type: "dropdown", key: "updates", width: "w-64" },

    { label: "Developments", type: "dropdown", key: "developments", width: "w-56" },

    { label: "Contact Us", type: "link", url: "/contact-us" },

  ];



  return (

    <header className="sticky top-0 z-50 w-full shadow-md">

      <nav className="bg-white relative" ref={navbarRef}>

        <div className="flex items-stretch min-h-[90px]">

          {/* Logo */}

          <Link to="/" onClick={closeAllDropdowns}>

            <div className=" cursor-pointer flex justify-center h-full items-center px-6 lg:px-18">

              <img src="/Maxpine_logo_2.webp" className="md:max-w-24 max-w-18" alt="Maxpine logo" />

            </div>

          </Link>



          {/* Desktop Menu */}

          <div className="hidden lg:flex flex-1">

            <div className="bg-[#20ae9b] flex items-stretch justify-center flex-1 px-4">

              <div className="flex items-stretch space-x-4 text-white font-medium">

                {navConfig.map((item, i) => 

                  item.type === "link" ? (

                    <Link 
                      key={i} 
                      to={item.url} 
                      className={`whitespace-nowrap cursor-pointer flex items-center px-4 transition-colors duration-200 hover:bg-white/10 ${item.label === "Contact Us" ? "hidden lg:hidden xl:flex" : ""
                        }`}
                      onClick={closeAllDropdowns}
                    >

                      {item.label}

                    </Link>

                  ) : (

                    <div 

                      key={i} 

                      className="relative flex items-stretch"

                      onMouseEnter={() => handleDesktopMouseEnter(item.key)}

                      onMouseLeave={handleDesktopMouseLeave}

                    >

                      {/* Main dropdown button */}

                      <button

                          className="cursor-pointer flex items-center gap-1 px-4 transition-colors duration-150 hover:bg-white/10"

                        onClick={(e) => handleDesktopDropdownClick(item.key, e)}

                        onMouseDown={(e) => e.preventDefault()}

                      >

                        {item.label}

                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDesktopDropdown === item.key ? "rotate-180" : ""}`} />

                      </button>



                      {/* Dropdown menu */}

                      {activeDesktopDropdown === item.key && (

                        <div 

                          className={`absolute top-full left-0 ${item.width} bg-white shadow-lg border-t-3 border-[#20ae9b] z-50`}

                          onMouseEnter={() => clearAllTimers()}

                          onMouseLeave={handleDesktopMouseLeave}

                        >

                          <div className="py-2">

                            {menuData[item.key].map((menuItem, j) => (

                              <div key={j} className="relative">

                                {menuItem.sub ? (

                                  /* Item with submenu */

                                  <>

                                    <div 

                                      className={`flex items-center justify-between px-6 py-3 transition-colors duration-150 cursor-pointer ${activeSubMenu === menuItem.name ? "bg-[#20ae9b] text-white" : "text-gray-700 hover:bg-gray-50"}`}

                                      onMouseEnter={() => handleSubMenuMouseEnter(menuItem.name)}

                                      onMouseLeave={handleSubMenuMouseLeave}

                                    >

                                      {/* Main item link */}

                                      {menuItem.href && menuItem.href !== "#" ? (

                                        <button

                                          className="cursor-pointer flex-1 text-left "

                                          onClick={(e) => handleNavigation(menuItem, e)}

                                          onMouseDown={(e) => e.preventDefault()}

                                        >

                                          {menuItem.name}

                                        </button>

                                      ) : (

                                        <span className="flex-1">{menuItem.name}</span>

                                      )}

                                      

                                      {/* Submenu toggle */}

                                      <button

                                        onClick={(e) => handleSubMenuToggle(menuItem.name, e)}

                                        onMouseDown={(e) => e.preventDefault()}

                                        className="cursor-pointer p-1 hover:bg-gray-200 rounded ml-2"

                                      >

                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubMenu === menuItem.name ? "rotate-180" : ""}`} />

                                      </button>

                                    </div>



                                    {/* Submenu items */}

                                    {activeSubMenu === menuItem.name && (

                                      <div

                                        className="absolute left-full top-0 w-56 bg-white shadow-lg border-l-3 border-[#20ae9b] z-10"

                                        onMouseEnter={() => handleSubMenuMouseEnter(menuItem.name)}

                                        onMouseLeave={handleSubMenuMouseLeave}

                                      >

                                        <div className="py-2">

                                          {menuItem.sub.map((subItem, k) => (

                                            <button

                                              key={k}

                                              className="cursor-pointer w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"

                                              onClick={(e) => handleNavigation(subItem, e)}

                                              onMouseDown={(e) => e.preventDefault()}

                                            >

                                              {subItem.name}

                                            </button>

                                          ))}

                                        </div>

                                      </div>

                                    )}

                                  </>

                                ) : (

                                  /* Simple menu item */

                                  <button

                                      className="inline-block cursor-pointer w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"

                                    onClick={(e) => handleNavigation(menuItem, e)}

                                    onMouseDown={(e) => e.preventDefault()}

                                  >

                                    {menuItem.name}

                                  </button>

                                )}

                              </div>

                            ))}

                          </div>

                        </div>

                      )}

                    </div>

                  )

                )}

              </div>

            </div>



            {/* Book Site Visit Button */}

            <div className="bg-white flex items-center px-5 md:px-5 lg:px-5 xl:px-10 text-black font-bold  transition-colors duration-200 text-xl hover:bg-gray-50">

              <Link to="/book-site-visit" onClick={closeAllDropdowns}>

                <div className="cursor-pointer flex items-center gap-2">

                  {/* <Lock className="w-4 h-4" /> */}

                  Book a Site Visit

                </div>

              </Link>

            </div>

          </div>



          {/* Mobile Menu Button */}

          <div className="lg:hidden flex items-center px-4 ml-auto">

            <button 

              onClick={toggleMobileMenu}

              onMouseDown={(e) => e.preventDefault()}

              className="cursor-pointer text-[#20ae9b] hover:text-[#20ae9b] transition-colors duration-200"

            >

              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}

            </button>

          </div>

        </div>



        {/* Mobile Menu */}

        {mobileMenuOpen && (

          // <div className="lg:hidden bg-[#20ae9b]">
  <div className="lg:hidden bg-[#20ae9b] max-h-[calc(100vh-90px)] overflow-y-auto">
            <div className="px-4 py-6 space-y-2">

              {navConfig.filter(item => item.type === "link" || item.type === "dropdown").map((item, i) => 

                item.type === "link" ? (

                  <Link 

                    key={i} 

                    to={item.url} 

                    className="cursor-pointer block text-white transition-colors duration-150 font-medium py-2 px-3 rounded hover:bg-white/10" 

                    onClick={closeAllDropdowns}

                  >

                    {item.label}

                  </Link>

                ) : (

                  <div key={i} className="py-1">

                    {/* Mobile dropdown header */}

                    <button 

                      onClick={() => toggleMobileSubMenu(item.key)}

                      onMouseDown={(e) => e.preventDefault()}

                        className="cursor-pointer w-full flex items-center justify-between text-white font-bold py-3 px-3 rounded transition-colors duration-150 hover:bg-white/10"

                    >

                      <span>{item.label}</span>

                      <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${mobileSubMenus[item.key] ? "rotate-180" : ""}`} />

                    </button>

                    

                    {/* Mobile dropdown items */}

                    {mobileSubMenus[item.key] && (

                      <div className="ml-4 space-y-1 mt-2">

                        {menuData[item.key].map((menuItem, j) => (

                          <div key={j}>

                            {menuItem.sub ? (

                              <div className="py-1">

                                <div className="flex items-center justify-between">

                                  {/* Main item */}

                                  {menuItem.href && menuItem.href !== "#" ? (

                                    <button

                                      onClick={(e) => handleNavigation(menuItem, e)}

                                      onMouseDown={(e) => e.preventDefault()}

                                      className=" cursor-pointer flex-1 text-white transition-colors duration-150 py-2 px-3 rounded text-sm hover:bg-white/10 text-left"

                                    >

                                      {menuItem.name}

                                    </button>

                                  ) : (

                                    <span className="flex-1 text-white py-2 px-3 text-sm">{menuItem.name}</span>

                                  )}

                                  

                                  {/* Submenu toggle */}

                                  <button 

                                    onClick={() => toggleMobileSubMenu(menuItem.name)}

                                    onMouseDown={(e) => e.preventDefault()}

                                    className="cursor-pointer p-2 text-white transition-colors duration-150 hover:bg-white/10 rounded"

                                  >

                                    <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${mobileSubMenus[menuItem.name] ? "rotate-180" : ""}`} />

                                  </button>

                                </div>

                                

                                {/* Submenu items */}

                                {mobileSubMenus[menuItem.name] && (

                                  <div className="ml-4 space-y-1 mt-1">

                                    {menuItem.sub.map((subItem, k) => (

                                      <button

                                        key={k}

                                        onClick={(e) => handleNavigation(subItem, e)}

                                        onMouseDown={(e) => e.preventDefault()}

                                        className="  cursor-pointer block w-full text-left text-white transition-colors duration-150 py-2 px-3 rounded text-xs cursor-pointer hover:bg-white/10"

                                      >

                                        {subItem.name}

                                      </button>

                                    ))}

                                  </div>

                                )}

                              </div>

                            ) : (

                              <button

                                onClick={(e) => handleNavigation(menuItem, e)}

                                onMouseDown={(e) => e.preventDefault()}

                                  className="cursor-pointer block w-full text-left text-white transition-colors duration-150 py-2 px-3 rounded text-sm cursor-pointer hover:bg-white/10"

                              >

                                {menuItem.name}

                              </button>

                            )}

                          </div>

                        ))}

                      </div>

                    )}

                  </div>

                )

              )}

              

              {/* Mobile Book Site Visit */}

              <Link to="/book-site-visit" onClick={closeAllDropdowns}>

                <div className="bg-[#272b24] px-2 py-3 flex items-center justify-center gap-2 text-white font-semibold cursor-pointer transition-colors duration-150 rounded mt-4 hover:bg-[#3a3f35]">

                  {/* <Lock className="w-4 h-4" /> */}

                  Book a Site Visit

                </div>

              </Link>

            </div>

          </div>

        )}

      </nav>

    </header>

  );

}