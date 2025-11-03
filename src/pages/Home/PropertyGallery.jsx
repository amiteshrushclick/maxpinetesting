import { useState, useMemo } from 'react';
import OptimizedVideo from '../../components/OptimizedVideo';

// Import all images directly
// Maxpine images
import green3 from '../../assets/green-3.webp';
import green4 from '../../assets/green-4.webp';
import green5 from '../../assets/green-5.webp';
import green6 from '../../assets/green-6.webp';
import green7 from '../../assets/green-7.webp';
import green8 from '../../assets/green-8.webp';
import green9 from '../../assets/green-9.webp';
import green11 from '../../assets/green-11.webp';
import green4_4 from '../../assets/green-4__4_.webp';
import gorund5 from '../../assets/gorund-5.webp';
import group1 from '../../assets/Group-1.webp';
import people1 from '../../assets/people-1.webp';
import maxpineOffici from '../../assets/maxpine-Offici.avif';
import clubFarm from '../../assets/ClubFarm.webp';
import leafShade from '../../assets/LeafShade.webp';
import brijVrindra from '../../assets/Brij-Vrindra.webp';
import anugrahHomesLogo from '../../assets/Anugrah-Homes-logo.webp';

// Anugrah Home images
import airport1 from '../../assets/All_home_imgs/airport1.webp';
import airport2 from '../../assets/All_home_imgs/airport2.webp';
import airportConnectivity from '../../assets/All_home_imgs/airportconnectivity-2048x1321-1.webp';
import anugrahHomesLogo2 from '../../assets/All_home_imgs/Anugrah-Homes-logo.webp';
import brijVrindaImg from '../../assets/All_home_imgs/brijVrinda.webp';
import filmcity1 from '../../assets/All_home_imgs/filmcity-01__1_.webp';
import filmcity1png from '../../assets/All_home_imgs/filmcity-01__1_.webp';
import filmcity2 from '../../assets/All_home_imgs/filmcity-01__2_.webp';
import filmcity3 from '../../assets/All_home_imgs/filmcity-01__3_.webp';
import finalKeyPlan from '../../assets/All_home_imgs/Final-Key-Plan.webp';
import gate from '../../assets/All_home_imgs/Gate-1170x785.webp';
import greenWhiteModern from '../../assets/All_home_imgs/Green-and-White-Modern-Land-Plot-Sale-Promotion-Instagram-Post-1080-x-650-px-2.webp';
import logisticPark from '../../assets/All_home_imgs/logisticpark.webp';
import logo2 from '../../assets/All_home_imgs/logo-2.webp';
import newUpdate1 from '../../assets/All_home_imgs/new-update-1.webp';
import people1_2 from '../../assets/All_home_imgs/people-1.webp';
import presentProject1 from '../../assets/All_home_imgs/present-Project-img-1__1_.webp';
import presentProject1webp from '../../assets/All_home_imgs/present-Project-img-1__1_.webp';
import presentProject2 from '../../assets/All_home_imgs/present-Project-img-1__2_.webp';
import presentProject2_2 from '../../assets/All_home_imgs/present-Project-img-2.webp';
import projectDev1 from '../../assets/All_home_imgs/ProjectDevelopmentImages1.webp';
import projectDev2 from '../../assets/All_home_imgs/ProjectDevelopmentImages2.webp';
import projectDev4 from '../../assets/All_home_imgs/ProjectDevelopmentImages4.webp';
import screenshot from '../../assets/All_home_imgs/Screenshot-2024-11-22-112948.webp';
import upadate34 from '../../assets/All_home_imgs/upadate-34.webp';
import update14 from '../../assets/All_home_imgs/update--14.webp';
import update01 from '../../assets/All_home_imgs/update-01.webp';
import update012 from '../../assets/All_home_imgs/update-012.webp';
import update013 from '../../assets/All_home_imgs/update-013.webp';
import update02 from '../../assets/All_home_imgs/update-02.webp';
import update03 from '../../assets/All_home_imgs/update-03.webp';
import update04 from '../../assets/All_home_imgs/update-04.webp';
import update05 from '../../assets/All_home_imgs/update-05.webp';
import update06 from '../../assets/All_home_imgs/update-06.webp';
import update07 from '../../assets/All_home_imgs/update-07.webp';
import update08 from '../../assets/All_home_imgs/update-08.webp';
import update11 from '../../assets/All_home_imgs/update-11.webp';
import update15 from '../../assets/All_home_imgs/update-15.webp';
import update16 from '../../assets/All_home_imgs/update-16.webp';
import update17 from '../../assets/All_home_imgs/update-17.webp';
import update18 from '../../assets/All_home_imgs/update-18.webp';
import update19 from '../../assets/All_home_imgs/update-19.webp';
import update20 from '../../assets/All_home_imgs/update-20.webp';
import update22 from '../../assets/All_home_imgs/update-22.webp';
import update23 from '../../assets/All_home_imgs/update-23.webp';
import update24 from '../../assets/All_home_imgs/update-24.webp';
import update25 from '../../assets/All_home_imgs/update-25.webp';
import update28 from '../../assets/All_home_imgs/update-28.webp';
import update30 from '../../assets/All_home_imgs/update-30.webp';
import update31 from '../../assets/All_home_imgs/update-31.webp';
import update32 from '../../assets/All_home_imgs/update-32.webp';
import update33 from '../../assets/All_home_imgs/update-33.webp';
import update35 from '../../assets/All_home_imgs/update-35.webp';
import update36 from '../../assets/All_home_imgs/update-36.webp';
import update37 from '../../assets/All_home_imgs/update-37.webp';
import update38 from '../../assets/All_home_imgs/update-38.webp';
import update39 from '../../assets/All_home_imgs/update-39.webp';
import update40 from '../../assets/All_home_imgs/update-40.webp';
import videoPlaceholder from '../../assets/All_home_imgs/video-placeholder.webp';

// Skyline images
import skyline2 from '../../assets/skyline/2.webp';
import skyline2png from '../../assets/skyline/2.webp';
import skyline5 from '../../assets/skyline/5.webp';
import skyline6 from '../../assets/skyline/6.webp';
import skyline7 from '../../assets/skyline/7.webp';
import skyline8 from '../../assets/skyline/8.webp';
import skyline9 from '../../assets/skyline/9.webp';
import locationMap from '../../assets/skyline/Location_Map_page-0001.webp';
import shPriceList from '../../assets/skyline/SH_Price_List.webp';
import skylineTownship from '../../assets/skyline/Skyline_Township_Layout_Plan-Model_page-0001__1_.webp';
import skylineTownship2 from '../../assets/skyline/Skyline_Township_Layout.webp';
import skylogo from '../../assets/skyline/skylogo.webp';
import whatsapp1 from '../../assets/skyline/WhatsApp_Image_2025-10-03_at_11.55.55_AM__1_.webp';
import whatsapp2 from '../../assets/skyline/WhatsApp_Image_2025-10-03_at_11.55.55_AM.webp';

// Brij Vrinda images
import bv1_2 from '../../assets/BrijVrinda/1__2_.webp';
import bv1_3 from '../../assets/BrijVrinda/1__3_.webp';
import bv1_4 from '../../assets/BrijVrinda/1__4_.webp';
import bv1_5 from '../../assets/BrijVrinda/1__5_.webp';
import bv1_6 from '../../assets/BrijVrinda/1__6_.webp';
import bv1_7 from '../../assets/BrijVrinda/1__7_.webp';
import bv1_8 from '../../assets/BrijVrinda/1__8_.webp';
import bv1_9 from '../../assets/BrijVrinda/1__9_.webp';
import bv1 from '../../assets/BrijVrinda/1.webp';
import bv2 from '../../assets/BrijVrinda/2.webp';
import bv3 from '../../assets/BrijVrinda/3.webp';
import bv4 from '../../assets/BrijVrinda/4.webp';
import bv5 from '../../assets/BrijVrinda/5.webp';
import bv6 from '../../assets/BrijVrinda/6.webp';
import bv7 from '../../assets/BrijVrinda/7.webp';
import bv8 from '../../assets/BrijVrinda/8.webp';
import bv9 from '../../assets/BrijVrinda/9.webp';
import bv10 from '../../assets/BrijVrinda/10.webp';
import bv11 from '../../assets/BrijVrinda/11.webp';
import bv12 from '../../assets/BrijVrinda/12.webp';
import bv13 from '../../assets/BrijVrinda/13.webp';
import bv14 from '../../assets/BrijVrinda/14.webp';
import bv15 from '../../assets/BrijVrinda/15.webp';
import bv16 from '../../assets/BrijVrinda/16.webp';
import bv17 from '../../assets/BrijVrinda/17.webp';
import bv18 from '../../assets/BrijVrinda/18.webp';
import bv19 from '../../assets/BrijVrinda/19.webp';
import bv21 from '../../assets/BrijVrinda/21.webp';
import bv22 from '../../assets/BrijVrinda/22.webp';
import bv23 from '../../assets/BrijVrinda/23.webp';
import bv24 from '../../assets/BrijVrinda/24.webp';
import bv25 from '../../assets/BrijVrinda/25.webp';
import bv26 from '../../assets/BrijVrinda/26.webp';
import bv27 from '../../assets/BrijVrinda/27.webp';
import bv28 from '../../assets/BrijVrinda/28.webp';
import bv29 from '../../assets/BrijVrinda/29.webp';
import bv30 from '../../assets/BrijVrinda/30.webp';
import bv31 from '../../assets/BrijVrinda/31.webp';
import bvLogo1 from '../../assets/BrijVrinda/Brij-Vrindra-removebg-preview.webp';
import bvLogo2 from '../../assets/BrijVrinda/Brij-Vrindra-removebg-preview2.webp';
import bvPrice from '../../assets/BrijVrinda/Price.webp';

// The Club Farm images
import cf1 from '../../assets/ClubForm/1.webp';
import cf2 from '../../assets/ClubForm/2.webp';
import cf3 from '../../assets/ClubForm/3.webp';
import cf4 from '../../assets/ClubForm/4.webp';
import cf5 from '../../assets/ClubForm/5.webp';
import cf6 from '../../assets/ClubForm/6.webp';
import cf32 from '../../assets/ClubForm/32.webp';
import cf33 from '../../assets/ClubForm/33.webp';
import cf34 from '../../assets/ClubForm/34.webp';
import cf35 from '../../assets/ClubForm/35.webp';
import cf36 from '../../assets/ClubForm/36.webp';
import cf37 from '../../assets/ClubForm/37.webp';
import cf38 from '../../assets/ClubForm/38.webp';
import cf39 from '../../assets/ClubForm/39.webp';
import cf40 from '../../assets/ClubForm/40.webp';
import cf41 from '../../assets/ClubForm/41.webp';
import cf42 from '../../assets/ClubForm/42.webp';
import cf43 from '../../assets/ClubForm/43.webp';
import cf44 from '../../assets/ClubForm/44.webp';
import cfBanner from '../../assets/ClubForm/banner-CF.webp';
import cfPlan from '../../assets/ClubForm/Brijghat_PLAN_04-08-2025-Model-1__1__page-0001.webp';
import cfLogo from '../../assets/ClubForm/Club-logo.webp';
import cfFarm from '../../assets/ClubForm/ClubFarm.webp';
import cfPrice from '../../assets/ClubForm/Price-TCF.webp';










export default function PropertyGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [popupItem, setPopupItem] = useState(null);

  const INITIAL_ITEMS = 6;

  const filters = [
    { id: "all", label: "View All" },
    { id: "maxpine", label: "Maxpine" },
    { id: "anugrahHome", label: "AnugrahHome" },
    { id: "skyLine", label: "Skyline" },
    { id: "brijVrinda", label: "Brij Vrinda" },
    { id: "theClubFarm", label: "The Club Farm" }
  ];

  // Generate gallery items with imported images
  const galleryItems = useMemo(() => {
    const items = [];
    let id = 1;

    // Maxpine images
    const maxpineImages = [
      { src: green3, title: "Green Living Space" },
      { src: green4, title: "Eco-Friendly Environment" },
      { src: green5, title: "Modern Architecture" },
      { src: green6, title: "Landscape Design" },
      { src: green7, title: "Leaf Shade Design" },
      { src: green8, title: "Natural Surroundings" },
      { src: green9, title: "Green Infrastructure" },
      { src: green11, title: "Sustainable Living" },
      { src: green4_4, title: "Environmental Design" },
      { src: gorund5, title: "Ground Development" },
      { src: group1, title: "Group Development" },
      { src: people1, title: "Community Living" },
      { src: maxpineOffici, title: "Maxpine Office" },
     
      
    ];
    maxpineImages.forEach((item, index) => {
      items.push({
        id: id++,
        category: "maxpine",
        image: item.src,
        title: item.title,
        type: "image"
      });
    });

    // Anugrah Home images
    const anugrahImages = [
     
      
     
      { src: people1_2, title: "Community" },
      { src: presentProject1, title: "Project Development" },
      { src: presentProject1webp, title: "Current Progress" },
      { src: presentProject2, title: "Construction Update" },
      { src: presentProject2_2, title: "Development Status" },
      { src: projectDev1, title: "Development Phase 1" },
      { src: projectDev2, title: "Development Phase 2" },
      { src: upadate34, title: "Update 34" },
      { src: update14, title: "Update 14" },
      { src: update01, title: "Update 01" },
      { src: update012, title: "Update 012" },
      { src: update013, title: "Update 013" },
      { src: update02, title: "Update 02" },
      { src: update03, title: "Update 03" },
      { src: update04, title: "Update 04" },
      { src: update05, title: "Update 05" },
      { src: update06, title: "Update 06" },
      { src: update07, title: "Update 07" },
      { src: update08, title: "Update 08" },
      { src: update11, title: "Update 11" },
      { src: update15, title: "Update 15" },
      { src: update16, title: "Update 16" },
      { src: update17, title: "Update 17" },
      { src: update18, title: "Update 18" },
      { src: update19, title: "Update 19" },
      { src: update20, title: "Update 20" },
      { src: update22, title: "Update 22" },
      { src: update23, title: "Update 23" },
      { src: update24, title: "Update 24" },
      { src: update25, title: "Update 25" },
      { src: update28, title: "Update 28" },
      { src: update30, title: "Update 30" },
      { src: update31, title: "Update 31" },
      { src: update32, title: "Update 32" },
      { src: update33, title: "Update 33" },
      { src: update35, title: "Update 35" },
      { src: update36, title: "Update 36" },
      { src: update37, title: "Update 37" },
      { src: update38, title: "Update 38" },
      { src: update39, title: "Update 39" },
      { src: update40, title: "Update 40" },
      { src: videoPlaceholder, title: "Project Video" }
    ];
    anugrahImages.forEach((item, index) => {
      items.push({
        id: id++,
        category: "anugrahHome",
        image: item.src,
        title: item.title,
        type: "image"
      });
    });

    // Skyline images
    const skylineImages = [
     
      { src: skyline5, title: "Skyline Layout" },
      { src: skyline6, title: "Skyline Design" },
      { src: skyline7, title: "Skyline View" },
      { src: skyline8, title: "Skyline Area" },
      { src: skyline9, title: "Skyline Location" },
      { src: locationMap, title: "Location Map" },
      { src: shPriceList, title: "Price List" },
      { src: skylineTownship, title: "Skyline Township" },
      { src: skylineTownship2, title: "Township Layout" },
      { src: skylogo, title: "Skyline Logo" },
      { src: whatsapp1, title: "WhatsApp Update 1" },
      { src: whatsapp2, title: "WhatsApp Update 2" }
    ];
    skylineImages.forEach((item, index) => {
      items.push({
        id: id++,
        category: "skyLine",
        image: item.src,
        title: item.title,
        type: "image"
      });
    });

    // Brij Vrinda images
    const brijVrindaImages = [
      { src: bv1_2, title: "Brij Vrinda Development" },
      { src: bv1_3, title: "Project Layout" },
      { src: bv1_4, title: "Site Plan" },
      { src: bv1_5, title: "Master Plan" },
      { src: bv1_6, title: "Key Plan" },
      { src: bv1_7, title: "Location Map" },
      { src: bv1_8, title: "Price List" },
      { src: bv1_9, title: "Amenities" },
      { src: bv1, title: "Project Overview" },
      { src: bv2, title: "Development Phase 1" },
      { src: bv3, title: "Development Phase 2" },
      { src: bv4, title: "Construction Update" },
      { src: bv5, title: "Progress Update" },
      { src: bv6, title: "Site Development" },
      { src: bv7, title: "Infrastructure" },
      { src: bv8, title: "Landscaping" },
      { src: bv9, title: "Green Spaces" },
      { src: bv10, title: "Community Area" },
      { src: bv11, title: "Recreation Facilities" },
      { src: bv12, title: "Club House" },
      { src: bv13, title: "Swimming Pool" },
      { src: bv14, title: "Gymnasium" },
      { src: bv15, title: "Park Area" },
      { src: bv16, title: "Walking Track" },
      { src: bv17, title: "Children Play Area" },
      { src: bv18, title: "Security Gate" },
      { src: bv19, title: "Main Entrance" },
      { src: bv21, title: "Parking Area" },
      { src: bv22, title: "Road Network" },
      { src: bv23, title: "Drainage System" },
      { src: bv24, title: "Water Supply" },
      { src: bv25, title: "Power Infrastructure" },
      { src: bv26, title: "Sewage Treatment" },
      { src: bv27, title: "Fire Safety" },
      { src: bv28, title: "Emergency Services" },
      { src: bv29, title: "Maintenance Office" },
      { src: bv30, title: "Guest Parking" },
      { src: bv31, title: "Visitor Area" },
      { src: bvLogo1, title: "Brij Vrinda Logo" },
      { src: bvLogo2, title: "Project Branding" },
      { src: bvPrice, title: "Price Structure" }
    ];
    brijVrindaImages.forEach((item, index) => {
      items.push({
        id: id++,
        category: "brijVrinda",
        image: item.src,
        title: item.title,
        type: "image"
      });
    });

    // The Club Farm images
    const clubFarmImages = [
      { src: cf1, title: "Club Farm Development" },
      { src: cf2, title: "Project Layout" },
      { src: cf3, title: "Master Plan" },
      { src: cf4, title: "Site Plan" },
      { src: cf5, title: "Key Plan" },
      { src: cf6, title: "Location Map" },
      { src: cf32, title: "Development Phase 1" },
      { src: cf33, title: "Development Phase 2" },
      { src: cf34, title: "Construction Update" },
      { src: cf35, title: "Progress Update" },
      { src: cf36, title: "Site Development" },
      { src: cf37, title: "Infrastructure" },
      { src: cf38, title: "Landscaping" },
      { src: cf39, title: "Green Spaces" },
      { src: cf40, title: "Community Area" },
      { src: cf41, title: "Recreation Facilities" },
      { src: cf42, title: "Club House" },
      { src: cf43, title: "Swimming Pool" },
      { src: cf44, title: "Gymnasium" },
      { src: cfBanner, title: "Club Farm Banner" },
      { src: cfPlan, title: "Floor Plan" },
      { src: cfLogo, title: "Club Farm Logo" },
      { src: cfFarm, title: "Farm Area" },
      { src: cfPrice, title: "Price List" }
    ];
    clubFarmImages.forEach((item, index) => {
      items.push({
        id: id++,
        category: "theClubFarm",
        image: item.src,
        title: item.title,
        type: "image"
      });
    });

    return items;
  }, []);

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, INITIAL_ITEMS);

  const hasMoreItems = filteredItems.length > INITIAL_ITEMS;

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false);
  };

  return (
    <section className="md:px-10 md:py-10 py-5 lg:py-15 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-8">
            Maxpine | Anugrah | Skyline | Brij Vrinda | The Club Farm
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                    ? "bg-[#20ae9b] text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-6">
          {itemsToShow.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setPopupItem(item)} // 🔹 Open popup
              className={`cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${index % 8 === 0 || index % 8 === 3 ? "row-span-2" :
                  index % 8 === 1 || index % 8 === 6 ? "row-span-1" : "row-span-1"
                }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`relative ${index % 8 === 0 || index % 8 === 3 ? "h-80 lg:h-[90vh]" : "h-60 lg:h-72"
                }`}>
                {item.type === "image" ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <OptimizedVideo
                    src={item.src}
                    muted
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <span className="text-[#20ae9b] text-sm font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-[#20ae9b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        {hasMoreItems && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer bg-[#20ae9b] hover:bg-[#2c6c64] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {showAll ? "Show Less" : `Load More (${filteredItems.length - INITIAL_ITEMS} more)`}
            </button>
          </div>
        )}
      </div>

      {/* 🔹 Popup Modal */}
      {popupItem && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setPopupItem(null)}
        >
          <div className="relative max-w-5xl w-full px-4">
            <button
              className="cursor-pointer  absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full"
              onClick={() => setPopupItem(null)}
            >
              ✕
            </button>
            {popupItem.type === "image" ? (
              <img
                src={popupItem.image}
                alt={popupItem.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <OptimizedVideo
                src={popupItem.src}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
