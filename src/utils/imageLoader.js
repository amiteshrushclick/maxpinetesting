// Dynamic image loader for PropertyGallery
export const loadImage = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(imagePath);
    img.onerror = reject;
    img.src = imagePath;
  });
};

// Image paths organized by category
export const imagePaths = {
  maxpine: [
    "/src/assets/green-3.webp",
    "/src/assets/green-4.webp", 
    "/src/assets/green-5.webp",
    "/src/assets/green-6.webp",
    "/src/assets/green-7.webp",
    "/src/assets/green-8.webp",
    "/src/assets/green-9.webp",
    "/src/assets/green-11.webp",
    "/src/assets/green-4 (4).webp",
    "/src/assets/gorund-5.webp",
    "/src/assets/Group-1.webp",
    "/src/assets/people-1.webp",
    "/src/assets/maxpine-Offici.avif",
    "/src/assets/ClubFarm.webp",
    "/src/assets/LeafShade.webp",
    "/src/assets/Brij-Vrindra.webp",
    "/src/assets/Anugrah-Homes-logo.webp"
  ],
  anugrahHome: [
    // All home imgs folder
    "/src/assets/All home imgs/airport1.webp",
    "/src/assets/All home imgs/airport2.webp",
    "/src/assets/All home imgs/airportconnectivity-2048x1321-1.webp",
    "/src/assets/All home imgs/Anugrah-Homes-logo.webp",
    "/src/assets/All home imgs/brijVrinda.webp",
    "/src/assets/All home imgs/filmcity-01 (1).webp",
    "/src/assets/All home imgs/filmcity-01 (1).webp",
    "/src/assets/All home imgs/filmcity-01 (2).webp",
    "/src/assets/All home imgs/filmcity-01 (3).webp",
    "/src/assets/All home imgs/Final-Key-Plan.webp",
    "/src/assets/All home imgs/Gate-1170x785.webp",
    "/src/assets/All home imgs/Green-and-White-Modern-Land-Plot-Sale-Promotion-Instagram-Post-1080-x-650-px-2.webp",
    "/src/assets/All home imgs/logisticpark.webp",
    "/src/assets/All home imgs/logo-2.webp",
    "/src/assets/All home imgs/new-update-1.webp",
    "/src/assets/All home imgs/people-1.webp",
    "/src/assets/All home imgs/present-Project-img-1 (1).webp",
    "/src/assets/All home imgs/present-Project-img-1 (1).webp",
    "/src/assets/All home imgs/present-Project-img-1 (2).webp",
    "/src/assets/All home imgs/present-Project-img-2.webp",
    "/src/assets/All home imgs/ProjectDevelopmentImages1.webp",
    "/src/assets/All home imgs/ProjectDevelopmentImages2.webp",
    "/src/assets/All home imgs/ProjectDevelopmentImages4.webp",
    "/src/assets/All home imgs/Screenshot-2024-11-22-112948.webp",
    "/src/assets/All home imgs/upadate-34.webp",
    "/src/assets/All home imgs/update--14.webp",
    "/src/assets/All home imgs/update-01.webp",
    "/src/assets/All home imgs/update-012.webp",
    "/src/assets/All home imgs/update-013.webp",
    "/src/assets/All home imgs/update-02.webp",
    "/src/assets/All home imgs/update-03.webp",
    "/src/assets/All home imgs/update-04.webp",
    "/src/assets/All home imgs/update-05.webp",
    "/src/assets/All home imgs/update-06.webp",
    "/src/assets/All home imgs/update-07.webp",
    "/src/assets/All home imgs/update-08.webp",
    "/src/assets/All home imgs/update-11.webp",
    "/src/assets/All home imgs/update-15.webp",
    "/src/assets/All home imgs/update-16.webp",
    "/src/assets/All home imgs/update-17.webp",
    "/src/assets/All home imgs/update-18.webp",
    "/src/assets/All home imgs/update-19.webp",
    "/src/assets/All home imgs/update-20.webp",
    "/src/assets/All home imgs/update-22.webp",
    "/src/assets/All home imgs/update-23.webp",
    "/src/assets/All home imgs/update-24.webp",
    "/src/assets/All home imgs/update-25.webp",
    "/src/assets/All home imgs/update-28.webp",
    "/src/assets/All home imgs/update-30.webp",
    "/src/assets/All home imgs/update-31.webp",
    "/src/assets/All home imgs/update-32.webp",
    "/src/assets/All home imgs/update-33.webp",
    "/src/assets/All home imgs/update-35.webp",
    "/src/assets/All home imgs/update-36.webp",
    "/src/assets/All home imgs/update-37.webp",
    "/src/assets/All home imgs/update-38.webp",
    "/src/assets/All home imgs/update-39.webp",
    "/src/assets/All home imgs/update-40.webp",
    "/src/assets/All home imgs/video-placeholder.webp"
  ],
  skyLine: [
    "/src/assets/skyline/2.webp",
    "/src/assets/skyline/2.webp",
    "/src/assets/skyline/5.webp",
    "/src/assets/skyline/6.webp",
    "/src/assets/skyline/7.webp",
    "/src/assets/skyline/8.webp",
    "/src/assets/skyline/9.webp",
    "/src/assets/skyline/Location Map_page-0001.webp",
    "/src/assets/skyline/SH Price List.webp",
    "/src/assets/skyline/Skyline Township Layout Plan-Model_page-0001 (1).webp",
    "/src/assets/skyline/Skyline Township Layout.webp",
    "/src/assets/skyline/skylogo.webp",
    "/src/assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM (1).webp",
    "/src/assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM.webp"
  ],
  brijVrinda: [
    "/src/assets/BrijVrinda/1 (2).webp",
    "/src/assets/BrijVrinda/1 (3).webp",
    "/src/assets/BrijVrinda/1 (4).webp",
    "/src/assets/BrijVrinda/1 (5).webp",
    "/src/assets/BrijVrinda/1 (6).webp",
    "/src/assets/BrijVrinda/1 (7).webp",
    "/src/assets/BrijVrinda/1 (8).webp",
    "/src/assets/BrijVrinda/1 (9).webp",
    "/src/assets/BrijVrinda/1.webp",
    "/src/assets/BrijVrinda/2.webp",
    "/src/assets/BrijVrinda/3.webp",
    "/src/assets/BrijVrinda/4.webp",
    "/src/assets/BrijVrinda/5.webp",
    "/src/assets/BrijVrinda/6.webp",
    "/src/assets/BrijVrinda/7.webp",
    "/src/assets/BrijVrinda/8.webp",
    "/src/assets/BrijVrinda/9.webp",
    "/src/assets/BrijVrinda/10.webp",
    "/src/assets/BrijVrinda/11.webp",
    "/src/assets/BrijVrinda/12.webp",
    "/src/assets/BrijVrinda/13.webp",
    "/src/assets/BrijVrinda/14.webp",
    "/src/assets/BrijVrinda/15.webp",
    "/src/assets/BrijVrinda/16.webp",
    "/src/assets/BrijVrinda/17.webp",
    "/src/assets/BrijVrinda/18.webp",
    "/src/assets/BrijVrinda/19.webp",
    "/src/assets/BrijVrinda/21.webp",
    "/src/assets/BrijVrinda/22.webp",
    "/src/assets/BrijVrinda/23.webp",
    "/src/assets/BrijVrinda/24.webp",
    "/src/assets/BrijVrinda/25.webp",
    "/src/assets/BrijVrinda/26.webp",
    "/src/assets/BrijVrinda/27.webp",
    "/src/assets/BrijVrinda/28.webp",
    "/src/assets/BrijVrinda/29.webp",
    "/src/assets/BrijVrinda/30.webp",
    "/src/assets/BrijVrinda/31.webp",
    "/src/assets/BrijVrinda/Brij-Vrindra-removebg-preview.webp",
    "/src/assets/BrijVrinda/Brij-Vrindra-removebg-preview2.webp",
    "/src/assets/BrijVrinda/Price.webp"
  ],
  theClubFarm: [
    "/src/assets/ClubForm/1.webp",
    "/src/assets/ClubForm/2.webp",
    "/src/assets/ClubForm/3.webp",
    "/src/assets/ClubForm/4.webp",
    "/src/assets/ClubForm/5.webp",
    "/src/assets/ClubForm/6.webp",
    "/src/assets/ClubForm/32.webp",
    "/src/assets/ClubForm/33.webp",
    "/src/assets/ClubForm/34.webp",
    "/src/assets/ClubForm/35.webp",
    "/src/assets/ClubForm/36.webp",
    "/src/assets/ClubForm/37.webp",
    "/src/assets/ClubForm/38.webp",
    "/src/assets/ClubForm/39.webp",
    "/src/assets/ClubForm/40.webp",
    "/src/assets/ClubForm/41.webp",
    "/src/assets/ClubForm/42.webp",
    "/src/assets/ClubForm/43.webp",
    "/src/assets/ClubForm/44.webp",
    "/src/assets/ClubForm/banner-CF.webp",
    "/src/assets/ClubForm/Brijghat PLAN 04-08-2025-Model-1 (1)_page-0001.webp",
    "/src/assets/ClubForm/Club-logo.webp",
    "/src/assets/ClubForm/ClubFarm.webp",
    "/src/assets/ClubForm/Price-TCF.webp"
  ]
};

// Video paths
export const videoPaths = {
  maxpine: [
    "/src/assets/video.mp4"
  ],
  anugrahHome: [
    "/src/assets/All home imgs/video-2.mp4"
  ],
  skyLine: [
    "/src/assets/skyline/1.mp4",
    "/src/assets/skyline/2.mp4", 
    "/src/assets/skyline/3.mp4"
  ],
  brijVrinda: [
    "/src/assets/BrijVrinda/brij-vid.mp4"
  ],
  theClubFarm: [
    "/src/assets/ClubForm/club-vid.mp4",
    "/src/assets/ClubForm/club-vid-2.mp4"
  ]
};
