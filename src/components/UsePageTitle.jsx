import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import seoConfig from '../config/seoConfig';

export default function UsePageTitle() {
  const location = useLocation();

  const getSEOConfig = () => {
    switch (location.pathname) {
      case "/":
        return seoConfig.home;
      case "/about-us":
        return seoConfig.about;
      case "/contact-us":
        return seoConfig.contact;
      case "/anugrahhomes":
      case "/projects/anugrahhomes":
        return seoConfig.anugrahHomes;
      case "/skyline-aero-homes":
      case "/projects/skyline-aero-homes":
        return seoConfig.skylineAeroHomes;
      case "/brij-vrinda":
      case "/projects/brij-vrinda":
        return seoConfig.brijVrinda;
      case "/the-club-farm":
      case "/projects/the-club-farm":
        return seoConfig.clubFarm;
      case "/book-site-visit":
        return seoConfig.siteVisit;
      case "/blogs":
        return seoConfig.blogs;
      case "/privacy-policy":
        return seoConfig.privacyPolicy;
      case "/noida-international-airport":
      case "/updates/noida-international-airport":
        return seoConfig.noidaInternationalAirport;
      case "/international-film-city":
      case "/updates/international-film-city":
        return seoConfig.internationalFilmCity;
      case "/medical-device-Park":
      case "/updates/medical-device-Park":
        return seoConfig.medicalDevicePark;
      case "/logistics-park":
      case "/updates/logistics-park":
        return seoConfig.logisticsPark;
      case "/personal-rapid-transit":
      case "/updates/personal-rapid-transit":
        return seoConfig.personalRapidTransit;
      case "/leafshade":
      case "/projects/upcoming-projects/leafshade":
        return seoConfig.leafshade;
      case "/thankyou":
        return seoConfig.thankyou;
      
      // Project Sub-pages
      case "/projects/anugrahhomes/keyplan":
        return seoConfig.anugrahHomesKeyPlan;
      case "/projects/anugrahhomes/layout":
        return seoConfig.anugrahHomesLayout;
      case "/projects/anugrahhomes/pricelist":
        return seoConfig.anugrahHomesPriceList;
      
      case "/projects/skyline/keyplan":
        return seoConfig.skylineKeyPlan;
      case "/projects/skyline/layout":
        return seoConfig.skylineLayout;
      case "/projects/skyline/pricelist":
        return seoConfig.skylinePriceList;
      
      case "/projects/brij_vrinda/KeyPlan":
        return seoConfig.brijVrindaKeyPlan;
      case "/projects/brij_vrinda/layout":
        return seoConfig.brijVrindaLayout;
      case "/projects/brij_vrinda/pricelist":
        return seoConfig.brijVrindaPriceList;
      
      case "/projects/the-club-farm/keyplan":
        return seoConfig.clubFarmKeyPlan;
      case "/projects/the-club-farm/layout":
        return seoConfig.clubFarmLayout;
      case "/projects/the-club-farm/pricelist":
        return seoConfig.clubFarmPriceList;
      
      // Development pages
      case "/developments/anugrahhomes":
        return seoConfig.anugrahHomesDevelopment;
      case "/developments/skyline":
        return seoConfig.skylineDevelopment;
      case "/developments/brij_vrinda":
        return seoConfig.brijVrindaDevelopment;
      case "/developments/the_club_farm":
        return seoConfig.clubFarmDevelopment;
      default:
        return {
          title: "Maxpine Group Homes",
          description: "Premium real estate developer offering residential plots near Noida International Airport",
          keywords: "Maxpine Group, real estate, residential plots, Noida airport",
          canonical: `https://www.maxpinegroup.in${location.pathname}`,
          ogImage: "https://www.maxpinegroup.in/maxpine_logo.webp"
        };
    }
  };

  const seoData = getSEOConfig();

  return <SEO {...seoData} />;
}
