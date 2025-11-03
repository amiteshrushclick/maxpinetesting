// SEO Configuration for all pages
export const seoConfig = {
  home: {
    title: "Plots Near Airport | Maxpine Group Homes",
    description: "Premium residential plots near Noida International Airport. Anugrah Homes, Skyline Aero Homes, Brij Vrinda & Club Farm projects with modern amenities.",
    keywords: "plots near airport, residential plots Noida, Anugrah Homes, Skyline Aero Homes, Brij Vrinda, Club Farm, real estate Noida, airport connectivity",
    canonical: "https://www.maxpinegroup.in/",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in",
        "logo": "https://www.maxpinegroup.in/maxpine_logo.webp",
        "description": "Premium real estate developer offering residential plots near Noida International Airport",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "H-174, Ground Floor, Sector-63",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201301",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9115253545",
            "contactType": "customer service",
            "email": "info@maxpinegroup.in",
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-1204107573",
            "contactType": "reception",
            "email": "info@maxpinegroup.in",
            "availableLanguage": "English"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/maxpinegroupofficial",
          "https://www.instagram.com/maxpinegroupofficial/",
          "https://www.linkedin.com/company/maxpinegroup-official/",
          "https://www.youtube.com/@Maxpinegroupofficial"
        ],
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "areaServed": {
          "@type": "Place",
          "name": "Noida, Uttar Pradesh, India"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in",
        "description": "Premium residential plots near Noida International Airport",
        "publisher": {
          "@type": "Organization",
          "name": "Maxpine Group Homes"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.maxpinegroup.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in",
        "description": "Premium real estate developer specializing in residential plots near Noida International Airport",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "H-174, Ground Floor, Sector-63",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201301",
          "addressCountry": "IN"
        },
        "telephone": "+91-9115253545",
        "email": "info@maxpinegroup.in",
        "areaServed": {
          "@type": "Place",
          "name": "Noida, Uttar Pradesh"
        }
      }
    ]
  },
  
  about: {
    title: "About Maxpine Group | Real Estate Developer",
    description: "Learn about Maxpine Group's mission to provide premium residential plots near Noida International Airport with world-class amenities.",
    keywords: "about Maxpine Group, real estate developer Noida, company profile, residential projects",
    canonical: "https://www.maxpinegroup.in/about-us",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  contact: {
    title: "Contact Maxpine Group | Get in Touch",
    description: "Contact Maxpine Group for inquiries about residential plots near Noida International Airport. Call +91-9115253545 or email info@maxpinegroup.in",
    keywords: "contact Maxpine Group, real estate inquiry, plot booking, customer support",
    canonical: "https://www.maxpinegroup.in/contact-us",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Maxpine Group",
      "description": "Contact Maxpine Group for inquiries about residential plots near Noida International Airport",
      "url": "https://www.maxpinegroup.in/contact-us",
      "mainEntity": {
        "@type": "Organization",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "H-174, Ground Floor, Sector-63",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201301",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9115253545",
            "contactType": "customer service",
            "email": "info@maxpinegroup.in",
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-1204107573",
            "contactType": "reception",
            "email": "info@maxpinegroup.in",
            "availableLanguage": "English"
          }
        ]
      }
    }
  },

  anugrahHomes: {
    title: "Anugrah Homes | Plots Near Airport Noida",
    description: "Anugrah Homes offers premium residential plots near Noida International Airport. Modern amenities, excellent connectivity, and investment opportunities.",
    keywords: "Anugrah Homes, plots near airport, residential plots Noida, airport connectivity, modern amenities",
    canonical: "https://www.maxpinegroup.in/anugrahhomes",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    breadcrumbs: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.maxpinegroup.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.maxpinegroup.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Anugrah Homes",
        "item": "https://www.maxpinegroup.in/anugrahhomes"
      }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "RealEstateProject",
      "name": "Anugrah Homes",
      "description": "Premium residential plots near Noida International Airport with modern amenities and excellent connectivity",
      "url": "https://www.maxpinegroup.in/anugrahhomes",
      "image": "https://www.maxpinegroup.in/maxpine_logo.webp",
      "developer": {
        "@type": "Organization",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in"
      },
      "location": {
        "@type": "Place",
        "name": "Near Noida International Airport",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Airport Connectivity",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Modern Amenities",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Security",
          "value": true
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9115253545",
        "contactType": "sales",
        "email": "info@anugrahhomes.com"
      }
    }
  },

  skylineAeroHomes: {
    title: "Skyline Aero Homes | Airport Proximity Plots",
    description: "Skyline Aero Homes provides luxury residential plots with direct airport connectivity. Premium location near Noida International Airport.",
    keywords: "Skyline Aero Homes, airport proximity plots, luxury residential, Noida airport connectivity",
    canonical: "https://www.maxpinegroup.in/skyline-aero-homes",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    breadcrumbs: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.maxpinegroup.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.maxpinegroup.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Skyline Aero Homes",
        "item": "https://www.maxpinegroup.in/skyline-aero-homes"
      }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "RealEstateProject",
      "name": "Skyline Aero Homes",
      "description": "Luxury residential plots with direct airport connectivity near Noida International Airport",
      "url": "https://www.maxpinegroup.in/skyline-aero-homes",
      "image": "https://www.maxpinegroup.in/maxpine_logo.webp",
      "developer": {
        "@type": "Organization",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in"
      },
      "location": {
        "@type": "Place",
        "name": "Near Noida International Airport",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Direct Airport Connectivity",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Luxury Amenities",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Premium Location",
          "value": true
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9266559209",
        "contactType": "sales",
        "email": "info@skylineaerohomes.com"
      }
    }
  },

  brijVrinda: {
    title: "Brij Vrinda | Premium Farm Plots Noida",
    description: "Brij Vrinda offers premium farm plots and residential properties near Noida International Airport with natural surroundings.",
    keywords: "Brij Vrinda, farm plots Noida, premium residential, natural surroundings, airport proximity",
    canonical: "https://www.maxpinegroup.in/brij-vrinda",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    breadcrumbs: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.maxpinegroup.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.maxpinegroup.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Brij Vrinda",
        "item": "https://www.maxpinegroup.in/brij-vrinda"
      }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "RealEstateProject",
      "name": "Brij Vrinda",
      "description": "Premium farm plots and residential properties near Noida International Airport with natural surroundings",
      "url": "https://www.maxpinegroup.in/brij-vrinda",
      "image": "https://www.maxpinegroup.in/maxpine_logo.webp",
      "developer": {
        "@type": "Organization",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in"
      },
      "location": {
        "@type": "Place",
        "name": "Near Noida International Airport",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Natural Surroundings",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Farm Plots",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Airport Proximity",
          "value": true
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9115253545",
        "contactType": "sales",
        "email": "info@maxpinegroup.in"
      }
    }
  },

  clubFarm: {
    title: "The Club Farm | Luxury Farmhouse Plots",
    description: "The Club Farm provides luxury farmhouse plots near Noida International Airport with exclusive club amenities and premium facilities.",
    keywords: "The Club Farm, luxury farmhouse plots, club amenities, premium facilities, Noida airport",
    canonical: "https://www.maxpinegroup.in/the-club-farm",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    breadcrumbs: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.maxpinegroup.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.maxpinegroup.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "The Club Farm",
        "item": "https://www.maxpinegroup.in/the-club-farm"
      }
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "RealEstateProject",
      "name": "The Club Farm",
      "description": "Luxury farmhouse plots near Noida International Airport with exclusive club amenities and premium facilities",
      "url": "https://www.maxpinegroup.in/the-club-farm",
      "image": "https://www.maxpinegroup.in/maxpine_logo.webp",
      "developer": {
        "@type": "Organization",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in"
      },
      "location": {
        "@type": "Place",
        "name": "Near Noida International Airport",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Exclusive Club Amenities",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Luxury Farmhouse Plots",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Premium Facilities",
          "value": true
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9115253545",
        "contactType": "sales",
        "email": "info@maxpinegroup.in"
      }
    }
  },

  siteVisit: {
    title: "Book Site Visit | Maxpine Group",
    description: "Schedule a site visit to explore our premium residential plots near Noida International Airport. Free site visits available.",
    keywords: "site visit booking, plot inspection, property tour, Noida airport plots",
    canonical: "https://www.maxpinegroup.in/book-site-visit",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Site Visit Booking",
      "description": "Schedule a site visit to explore premium residential plots near Noida International Airport",
      "url": "https://www.maxpinegroup.in/book-site-visit",
      "provider": {
        "@type": "Organization",
        "name": "Maxpine Group Homes",
        "url": "https://www.maxpinegroup.in"
      },
      "serviceType": "Real Estate Site Visit",
      "areaServed": {
        "@type": "Place",
        "name": "Noida, Uttar Pradesh"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Free site visit"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9115253545",
        "contactType": "booking",
        "email": "info@maxpinegroup.in"
      }
    }
  },

  blogs: {
    title: "Real Estate Blog | Maxpine Group",
    description: "Latest updates on real estate trends, Noida International Airport developments, and investment opportunities in residential plots.",
    keywords: "real estate blog, Noida airport updates, property investment, residential plots news",
    canonical: "https://www.maxpinegroup.in/blogs",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  privacyPolicy: {
    title: "Privacy Policy | Maxpine Group",
    description: "Maxpine Group's privacy policy outlining how we collect, use, and protect your personal information.",
    keywords: "privacy policy, data protection, Maxpine Group privacy",
    canonical: "https://www.maxpinegroup.in/privacy-policy",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  noidaInternationalAirport: {
    title: "Noida Airport Updates | Maxpine Group",
    description: "Latest updates on Noida International Airport development and its impact on nearby residential plots and property values.",
    keywords: "Noida airport updates, airport development, property values, residential plots",
    canonical: "https://www.maxpinegroup.in/noida-international-airport",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  internationalFilmCity: {
    title: "International Film City | Noida Updates",
    description: "Updates on International Film City development near Noida International Airport and its impact on local real estate.",
    keywords: "International Film City, film city Noida, real estate updates, airport proximity",
    canonical: "https://www.maxpinegroup.in/international-film-city",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  medicalDevicePark: {
    title: "Medical Device Park | Noida Development",
    description: "Latest updates on Medical Device Park development near Noida International Airport and investment opportunities.",
    keywords: "Medical Device Park, Noida development, medical hub, investment opportunities",
    canonical: "https://www.maxpinegroup.in/medical-device-Park",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  logisticsPark: {
    title: "Logistics Park | Noida Updates",
    description: "Updates on Logistics Park development near Noida International Airport and its impact on commercial real estate.",
    keywords: "Logistics Park, commercial real estate, Noida logistics, airport connectivity",
    canonical: "https://www.maxpinegroup.in/logistics-park",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  personalRapidTransit: {
    title: "Personal Rapid Transit | Noida Updates",
    description: "Latest updates on Personal Rapid Transit system near Noida International Airport and connectivity improvements.",
    keywords: "Personal Rapid Transit, PRT Noida, airport connectivity, transportation updates",
    canonical: "https://www.maxpinegroup.in/personal-rapid-transit",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  leafshade: {
    title: "Leaf Shade | Upcoming Project",
    description: "Leaf Shade - upcoming premium residential project by Maxpine Group with modern amenities and airport connectivity.",
    keywords: "Leaf Shade, upcoming project, premium residential, Maxpine Group",
    canonical: "https://www.maxpinegroup.in/leafshade",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  thankyou: {
    title: "Thank You | Maxpine Group",
    description: "Thank you for your inquiry. Our team will contact you soon regarding your interest in our residential plots.",
    keywords: "thank you, inquiry received, Maxpine Group contact",
    canonical: "https://www.maxpinegroup.in/thankyou",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  // Project Sub-pages
  anugrahHomesKeyPlan: {
    title: "Anugrah Homes Key Plan | Layout Details",
    description: "View detailed key plan and layout for Anugrah Homes residential plots near Noida International Airport.",
    keywords: "Anugrah Homes key plan, layout details, residential plots layout",
    canonical: "https://www.maxpinegroup.in/projects/anugrahhomes/keyplan",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    breadcrumbs: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.maxpinegroup.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.maxpinegroup.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Anugrah Homes",
        "item": "https://www.maxpinegroup.in/anugrahhomes"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Key Plan",
        "item": "https://www.maxpinegroup.in/projects/anugrahhomes/keyplan"
      }
    ]
  },

  anugrahHomesLayout: {
    title: "Anugrah Homes Layout | Site Plan",
    description: "Detailed layout and site plan for Anugrah Homes residential project near Noida International Airport.",
    keywords: "Anugrah Homes layout, site plan, residential project layout",
    canonical: "https://www.maxpinegroup.in/projects/anugrahhomes/layout",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    breadcrumbs: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.maxpinegroup.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.maxpinegroup.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Anugrah Homes",
        "item": "https://www.maxpinegroup.in/anugrahhomes"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Layout",
        "item": "https://www.maxpinegroup.in/projects/anugrahhomes/layout"
      }
    ]
  },

  anugrahHomesPriceList: {
    title: "Anugrah Homes Price List | Plot Rates",
    description: "Current price list and rates for Anugrah Homes residential plots near Noida International Airport.",
    keywords: "Anugrah Homes price list, plot rates, residential plot prices",
    canonical: "https://www.maxpinegroup.in/projects/anugrahhomes/pricelist",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp",
    breadcrumbs: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.maxpinegroup.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.maxpinegroup.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Anugrah Homes",
        "item": "https://www.maxpinegroup.in/anugrahhomes"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Price List",
        "item": "https://www.maxpinegroup.in/projects/anugrahhomes/pricelist"
      }
    ]
  },

  skylineKeyPlan: {
    title: "Skyline Aero Homes Key Plan | Layout",
    description: "Detailed key plan and layout for Skyline Aero Homes luxury residential plots near airport.",
    keywords: "Skyline key plan, luxury residential layout, airport proximity plots",
    canonical: "https://www.maxpinegroup.in/projects/skyline/keyplan",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  skylineLayout: {
    title: "Skyline Aero Homes Layout | Site Plan",
    description: "Comprehensive layout and site plan for Skyline Aero Homes luxury residential project.",
    keywords: "Skyline layout, luxury residential site plan, airport connectivity",
    canonical: "https://www.maxpinegroup.in/projects/skyline/layout",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  skylinePriceList: {
    title: "Skyline Aero Homes Price List | Rates",
    description: "Current price list and rates for Skyline Aero Homes luxury residential plots.",
    keywords: "Skyline price list, luxury plot rates, residential plot prices",
    canonical: "https://www.maxpinegroup.in/projects/skyline/pricelist",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  brijVrindaKeyPlan: {
    title: "Brij Vrinda Key Plan | Farm Plot Layout",
    description: "Detailed key plan and layout for Brij Vrinda premium farm plots near Noida International Airport.",
    keywords: "Brij Vrinda key plan, farm plot layout, premium residential plots",
    canonical: "https://www.maxpinegroup.in/projects/brij_vrinda/KeyPlan",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  brijVrindaLayout: {
    title: "Brij Vrinda Layout | Site Plan",
    description: "Comprehensive layout and site plan for Brij Vrinda premium farm plot project.",
    keywords: "Brij Vrinda layout, farm plot site plan, premium residential",
    canonical: "https://www.maxpinegroup.in/projects/brij_vrinda/layout",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  brijVrindaPriceList: {
    title: "Brij Vrinda Price List | Farm Plot Rates",
    description: "Current price list and rates for Brij Vrinda premium farm plots near airport.",
    keywords: "Brij Vrinda price list, farm plot rates, premium plot prices",
    canonical: "https://www.maxpinegroup.in/projects/brij_vrinda/pricelist",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  clubFarmKeyPlan: {
    title: "Club Farm Key Plan | Luxury Layout",
    description: "Detailed key plan and layout for The Club Farm luxury farmhouse plots with exclusive amenities.",
    keywords: "Club Farm key plan, luxury farmhouse layout, exclusive amenities",
    canonical: "https://www.maxpinegroup.in/projects/the-club-farm/keyplan",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  clubFarmLayout: {
    title: "Club Farm Layout | Site Plan",
    description: "Comprehensive layout and site plan for The Club Farm luxury farmhouse project.",
    keywords: "Club Farm layout, luxury farmhouse site plan, exclusive facilities",
    canonical: "https://www.maxpinegroup.in/projects/the-club-farm/layout",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  clubFarmPriceList: {
    title: "Club Farm Price List | Luxury Rates",
    description: "Current price list and rates for The Club Farm luxury farmhouse plots with club amenities.",
    keywords: "Club Farm price list, luxury farmhouse rates, exclusive plot prices",
    canonical: "https://www.maxpinegroup.in/projects/the-club-farm/pricelist",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  // Development pages
  anugrahHomesDevelopment: {
    title: "Anugrah Homes Development | Updates",
    description: "Latest development updates and progress for Anugrah Homes residential project near airport.",
    keywords: "Anugrah Homes development, project updates, construction progress",
    canonical: "https://www.maxpinegroup.in/developments/anugrahhomes",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  skylineDevelopment: {
    title: "Skyline Development | Project Updates",
    description: "Latest development updates and progress for Skyline Aero Homes luxury residential project.",
    keywords: "Skyline development, luxury project updates, construction progress",
    canonical: "https://www.maxpinegroup.in/developments/skyline",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  brijVrindaDevelopment: {
    title: "Brij Vrinda Development | Farm Updates",
    description: "Latest development updates and progress for Brij Vrinda premium farm plot project.",
    keywords: "Brij Vrinda development, farm project updates, construction progress",
    canonical: "https://www.maxpinegroup.in/developments/brij_vrinda",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  },

  clubFarmDevelopment: {
    title: "Club Farm Development | Luxury Updates",
    description: "Latest development updates and progress for The Club Farm luxury farmhouse project.",
    keywords: "Club Farm development, luxury project updates, construction progress",
    canonical: "https://www.maxpinegroup.in/developments/the_club_farm",
    ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
  }
};

export default seoConfig;
