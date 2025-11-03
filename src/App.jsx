import { useLocation, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import "./App.css";
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SmoothScroll from './pages/SmoothScroll';
import About from './pages/About';
import UpArrow from './components/UpArrow';
import News from './pages/News';
import Contact from './pages/Contact';
import SiteVisit from './pages/SiteVisit';
import Projects from './pages/Projects';
import KeyPlayBV from './pages/Navbar/KeyPlans/KeyPlayBV';
import LayOut from './pages/Navbar/LayOuts/LayOut';
import Development from './pages/Navbar/Developments/Development';
import KeyPlanCF from './pages/Navbar/KeyPlans/KeyPlanCF';
import SkyLine from './pages/Navbar/SkyLine';
import LayOutCF from './pages/Navbar/LayOuts/LayOutCF';
// import UpcomingPJ from './pages/Navbar/UpcomingPJ';
import NoidaInternational from './pages/Navbar/NoidaInternational';
import InternationalFilmCity from './pages/Navbar/InternationalFilmCity';
import MedicalDevicePark from './pages/Navbar/MedicalDevicePark';
import LogisticsPark from './pages/Navbar/LogisticsPark';
import PersonalRapidTransit from './pages/Navbar/PersonalRapidTransit';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FloatingChatbot from './components/FloatingChatbot';
import UsePageTitle from './components/UsePageTitle';
import PerformanceMonitor from './components/PerformanceMonitor';
// import AmritGrah from './pages/Navbar/AmritGrah';
import AnugrahHome from './pages/AnugrahHome';
import BrijVrinda from './pages/BrijVrinda';
import ClubFarm from './pages/ClubFarm';
import KeyPlanSk from './pages/Navbar/KeyPlans/KeyPlanSk';
import LayOutSK from './pages/Navbar/LayOuts/LayoutSK';
import DevelopmentSK from './pages/Navbar/Developments/DevelopmentSK';
import KeyPlayAH from './pages/Navbar/KeyPlans/KeyPlanAH';
import Leafshade from './pages/Navbar/Leafshade';
import LayoutAH from './pages/Navbar/LayOuts/LayoutAH';
import PriceList_AH from './pages/Navbar/PriceLists/PriceList_AH';
import PriceList_SK from './pages/Navbar/PriceLists/PirceList_SK';
import Development_AH from './pages/Navbar/Developments/Development_AH';
import BrijVrindaProjects from './pages/UpcommingProjects/BrijVrinda';
import TheClubFarm from './pages/UpcommingProjects/TheClubFarm';
import PriceList_BV from './pages/Navbar/PriceLists/PriceList_BV';
import PriceList_CF from './pages/Navbar/PriceLists/PriceList_CF';
import Development_CF from './pages/Navbar/Developments/Development_CF';
import Page_404 from './pages/Page_404';
import ArticalDetails from './pages/Media/ArticalDetails';
import ScrollToTop from './components/ScrollToTop';
import ThankYou from './components/ThankYou';
import SecondBlog from './pages/Media/SecondBlog';
import ThirdBlog from './pages/Media/ThirdBlog';
import FourthBlog from './pages/Media/FourthBlog';

function App() {
  const location = useLocation();
  // Track page changes
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      {/* <SmoothScroll> */}
      <ScrollToTop />
      <UsePageTitle />
      <PerformanceMonitor />
      <Navbar />
      <FloatingChatbot />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        {/* <Route path="/Home" element={<Home />} /> */}


        <Route path="/blogs" element={<News />} />



        <Route path="/projects/anugrahhomes/keyplan/blogs" element={<News />} />
        <Route path="/projects/anugrahhomes/layout/blogs" element={<News />} />
        <Route path="/projects/anugrahhomes/pricelist/blogs" element={<News />} />

        <Route path="/projects/skyline/keyplan/blogs" element={<News />} />
        <Route path="/projects/skyline/layout/blogs" element={<News />} />
        <Route path="/projects/skyline/pricelist/blogs" element={<News />} />

        <Route path="/projects/brij_vrinda/KeyPlan/blogs" element={<News />} />
        <Route path="/projects/brij_vrinda/layout/blogs" element={<News />} />
        <Route path="/projects/brij_vrinda/pricelist/blogs" element={<News />} />

        <Route path="/projects/the-club-farm/keyplan/blogs" element={<News />} />
        <Route path="/projects/the-club-farm/layout/blogs" element={<News />} />
        <Route path="/projects/the-club-farm/pricelist/blogs" element={<News />} />

        <Route path="/updates/noida-international-airport/media" element={<News />} />
        <Route path="/updates/international-film-city/media" element={<News />} />
        <Route path="/updates/medical-device-Park/media" element={<News />} />
        <Route path="/updates/logistics-park/media" element={<News />} />
        <Route path="/updates/personal-rapid-transit/media" element={<News />} />

        <Route path="/developments/anugrahhomes/blogs" element={<News />} />
        <Route path="/developments/skyline/blogs" element={<News />} />
        <Route path="/developments/brij_vrinda/blogs" element={<News />} />
        <Route path="/developments/the_club_farm/blogs" element={<News />} />



        <Route path="/contact-us" element={<Contact />} />
        <Route path="/projects/anugrahhomes/contact-us" element={<Contact />} />
        <Route path="/projects/skyline/contact-us" element={<Contact />} />
        <Route path="/projects/brij_vrinda/contact-us" element={<Contact />} />
        <Route path="/projects/the-club-farm/contact-us" element={<Contact />} />


        <Route path="/projects/anugrahhomes/keyplan/contact-us" element={<Contact />} />
        <Route path="/projects/anugrahhomes/layout/contact-us" element={<Contact />} />
        <Route path="/projects/anugrahhomes/pricelist/contact-us" element={<Contact />} />

        <Route path="/projects/skyline/keyplan/contact-us" element={<Contact />} />
        <Route path="/projects/skyline/layout/contact-us" element={<Contact />} />
        <Route path="/projects/skyline/pricelist/contact-us" element={<Contact />} />

        <Route path="/projects/brij_vrinda/KeyPlan/contact-us" element={<Contact />} />
        <Route path="/projects/brij_vrinda/layout/contact-us" element={<Contact />} />
        <Route path="/projects/brij_vrinda/pricelist/contact-us" element={<Contact />} />

        <Route path="/projects/the-club-farm/keyplan/contact-us" element={<Contact />} />
        <Route path="/projects/the-club-farm/layout/contact-us" element={<Contact />} />
        <Route path="/projects/the-club-farm/pricelist/contact-us" element={<Contact />} />

        <Route path="/updates/noida-international-airport/contact" element={<Contact />} />
        <Route path="/updates/international-film-city/contact" element={<Contact />} />
        <Route path="/updates/medical-device-Park/contact" element={<Contact />} />
        <Route path="/updates/logistics-park/contact" element={<Contact />} />
        <Route path="/updates/personal-rapid-transit/contact" element={<Contact />} />

        <Route path="/developments/anugrahhomes/contact" element={<Contact />} />
        <Route path="/developments/skyline/contact" element={<Contact />} />
        <Route path="/developments/brij_vrinda/contact" element={<Contact />} />
        <Route path="/developments/the_club_farm/contact" element={<Contact />} />

        <Route path="/projects/upcoming-projects/leaf-shade/contact" element={<Contact />} />


        <Route path="/book-site-visit" element={<SiteVisit />} />
        <Route path="/about/book-site-visit" element={<SiteVisit />} />
        <Route path="/projects/anugrahhomes/book-site-visit" element={<SiteVisit />} />

        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/projects/brij_vrinda/KeyPlan" element={<KeyPlayBV />} />
        <Route path="/projects/brij_vrinda/layout" element={<LayOut />} />
        <Route path="/projects/brij_vrinda/pricelist" element={<PriceList_BV />} />



        <Route path="/projects/the-club-farm/keyplan" element={<KeyPlanCF />} />
        <Route path="/projects/the-club-farm/layout" element={<LayOutCF />} />
        <Route path="/projects/the-club-farm/pricelist" element={<PriceList_CF />} />


        <Route path="/updates/blogs" element={<News />} />
        <Route path="/updates/noida-international-airport" element={<NoidaInternational />} />
        <Route path="/noida-international-airport" element={<NoidaInternational />} />

        <Route path="/updates/international-film-city" element={<InternationalFilmCity />} />

         <Route path="/international-film-city" element={<InternationalFilmCity />} />
        <Route path="/updates/medical-device-Park" element={<MedicalDevicePark />} />
        <Route path="/medical-device-Park" element={<MedicalDevicePark />} />

        <Route path="/updates/logistics-park" element={<LogisticsPark />} />

        <Route path="/logistics-park" element={<LogisticsPark />} />
        <Route path="/updates/personal-rapid-transit" element={<PersonalRapidTransit />} />

        <Route path="/personal-rapid-transit" element={<PersonalRapidTransit />} />


        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="/amrit-grah" element={<AmritGrah />} /> */}


        <Route path="/projects/anugrahhomes" element={<AnugrahHome />} />
        <Route path="/anugrahhomes" element={<AnugrahHome />} />
        
        <Route path="/projects/skyline-aero-homes" element={<SkyLine />} />
        <Route path="/skyline-aero-homes" element={<SkyLine />} />

        <Route path="/projects/brij-vrinda" element={<BrijVrinda />} />
        <Route path="/brij-vrinda" element={<BrijVrinda />} />

        <Route path="/projects/the-club-farm" element={<ClubFarm />} />
        <Route path="/the-club-farm" element={<ClubFarm />} />


        <Route path="/projects/upcoming-projects/leafshade" element={<Leafshade />} />
        {/* <Route path="/leafshade" element={<Leafshade />} /> */}




         <Route path="/leafshade" element={<Leafshade />} />


        <Route path="/projects/skyline/keyplan" element={<KeyPlanSk />} />
        <Route path="/projects/skyline/layout" element={<LayOutSK />} />
        <Route path="/projects/skyline/pricelist" element={<PriceList_SK />} />


        <Route path="/developments/anugrahhomes" element={<Development_AH />} />
        <Route path="/developments/skyline-aero-homes" element={<DevelopmentSK />} />
        <Route path="/developments/brij_vrinda" element={<Development />} />
        <Route path="/developments/the_club_farm" element={<Development_CF />} />

        <Route path="/projects/anugrahhomes/keyplan" element={<KeyPlayAH />} />
        <Route path="/projects/anugrahhomes/layout" element={<LayoutAH />} />
        <Route path="/projects/anugrahhomes/pricelist" element={<PriceList_AH />} />

        <Route path="/comming-soon" element={<BrijVrindaProjects />} />
        <Route path="/comming-soon-CF" element={<TheClubFarm />} />
        <Route path="/thankyou" element={<ThankYou />} />



        {/* Blogs */}
        <Route path="/buy-plots-near-jewar-airport/" element={<ArticalDetails />} />
        <Route path="/property/plots-near-noida-international-airport/" element={<SecondBlog />} />
        <Route path="/nia/" element={<ThirdBlog />} />
        <Route path="/updates/blogs/authority-plots-near-jewar-airport/" element={<FourthBlog />} />


        <Route path="*" element={<Page_404 />} />







      </Routes>
      <Footer />
      <UpArrow />
      {/* </SmoothScroll> */}
    </>
  );
}

export default App;
