export type SampleProject = {
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  source: string;
  sourceLabel: string;
};

export type PortfolioCategory = {
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  projects: SampleProject[];
};

const photo = (src: string) => src;

export const portfolio: Record<string, PortfolioCategory> = {
  residential: {
    title: "Residential",
    description: "Homes shaped around daily life, local climate and the character of their setting.",
    heroImage: photo("/project-images/RIVERVIEW-16.jpg"),
    heroAlt: "Contemporary home in Kenya",
    projects: [
      { title: "Garden Courtyard House", location: "Karen, Nairobi", description: "A family home organized around a sheltered courtyard and a generous garden connection.", image: "/project-images/RIVERVIEW-16.jpg", imageAlt: "Contemporary Nairobi residence", source: "https://propscout.co.ke/properties/12358/luxurious-5-bedroom-ensuite-villa-for-sale-karen", sourceLabel: "Photo source: Propscout" },
      { title: "Kiambu Hillside Residence", location: "Kiambu County", description: "A hillside residence opening to long views, natural daylight and its sloping site.", image: "/project-images/RIVERVIEW-16.jpg", imageAlt: "Kenyan villa building photograph", source: "https://newpointproperties.co.ke/property/5-bedroom-villas-for-sale-in-lower-kabete/", sourceLabel: "Photo source: Newpoint Properties" },
      { title: "Muthaiga Garden Home", location: "Muthaiga, Nairobi", description: "Indoor and outdoor living framed by mature planting and shaded terraces.", image: "https://kaa.co.za/wp-content/uploads/2020/08/muthaiga-nairobi-banner-02-1200x627-1.jpg", imageAlt: "Muthaiga residence building photograph", source: "https://kaa.co.za/portfolio/single-residential/house-muthaiga/", sourceLabel: "Photo source: KAA" },
      { title: "Nairobi Green Residence", location: "Nairobi", description: "A private family residence with generous daylight and planted outdoor spaces.", image: "/project-images/RIVERVIEW-16.jpg", imageAlt: "Contemporary residence in Nairobi", source: "https://newpointproperties.co.ke/property/5-bedroom-villas-for-sale-in-lower-kabete/", sourceLabel: "Photo source: Newpoint Properties" },
      { title: "Urban Family Villa", location: "Nairobi", description: "A contemporary family villa with shaded terraces and garden views.", image: "/project-images/nairobi-family-villa.jpg", imageAlt: "Contemporary Nairobi house building photograph", source: "https://propscout.co.ke/properties/12358/luxurious-5-bedroom-ensuite-villa-for-sale-karen", sourceLabel: "Photo source: Propscout" },
    ],
  },
  offices: {
    title: "Offices",
    description: "Workplaces that support people, operations and the communities around them.",
    heroImage: photo("https://resources.pamgolding.co.za/content/properties/202408/2103942/h/2103942_H_25.jpg"),
    heroAlt: "Nairobi commercial office building photograph",
    projects: [
      { title: "Westlands Business Centre", location: "Westlands, Nairobi", description: "Flexible office floors in a growing business district.", image: "https://resources.pamgolding.co.za/content/properties/202408/2103942/h/2103942_H_25.jpg", imageAlt: "Office tower in Westlands, Nairobi", source: "https://www.pamgolding.co.za/property-details/commercial-office-to-rent-westlands-kenya/3ke1666960", sourceLabel: "Photo source: Pam Golding" },
      { title: "Nairobi Skyline Offices", location: "Nairobi", description: "Clear circulation and flexible workplace floors support a range of teams.", image: "https://www.coolxtreme.com/assets/img/portfolio/GTC-1.png", imageAlt: "GTC office tower in Nairobi", source: "https://coolxtreme.com/", sourceLabel: "Photo source: Coolxtreme" },
      { title: "Upper Hill Workspaces", location: "Upper Hill, Nairobi", description: "Workplace interiors balancing collaborative areas with quieter focused zones.", image: "https://www.capitalfm.co.ke/lifestyle/files/2022/02/GTC-012.jpg", imageAlt: "Nairobi office and hotel complex reference image", source: "https://www.capitalfm.co.ke/lifestyle/2022/02/23/exclusive-grand-tour-of-nairobi-gtc-east-africas-tallest-office-tower/", sourceLabel: "Photo source: Capital Lifestyle" },
      { title: "City Edge Offices", location: "Nairobi", description: "A compact urban workplace with a welcoming street-level entrance.", image: "https://resources.pamgolding.co.za/content/properties/202408/2103942/h/2103942_H_24.jpg", imageAlt: "Nairobi commercial tower building photograph", source: "https://www.pamgolding.co.za/property-details/commercial-office-to-rent-westlands-kenya/3ke1666960", sourceLabel: "Photo source: Pam Golding" },
      { title: "Kiambu Professional Suites", location: "Kiambu Town", description: "Adaptable professional suites in a contemporary commercial setting.", image: "https://awemac.co.ke/wp-content/uploads/2022/07/GTC-018-1024x682-1-960x608_c.jpeg", imageAlt: "Nairobi skyline building photograph", source: "https://awemac.co.ke/", sourceLabel: "Photo source: Awemac" },
    ],
  },
  hotels: {
    title: "Hotels",
    description: "Hospitality spaces that express their setting and make every arrival feel considered.",
    heroImage: photo("https://theholidaydealers.com/wp-content/uploads/2023/03/Diani-Reef-Beach-Resort-and-Spa-4.jpg"),
    heroAlt: "Kenyan coastal hotel building photograph",
    projects: [
      { title: "Coastal Garden Retreat", location: "Diani Beach, Kenya", description: "A coastal retreat set among tropical gardens and quiet guest spaces.", image: "https://theholidaydealers.com/wp-content/uploads/2023/03/Diani-Reef-Beach-Resort-and-Spa-4.jpg", imageAlt: "Coastal hotel building photograph from Diani", source: "https://theholidaydealers.com/destinations/kenya/diani/diani-reef-beach-resort-spa/", sourceLabel: "Diani Reef Beach Resort" },
      { title: "Nairobi City Hotel", location: "Nairobi", description: "A city hotel pairing guest comfort with convenient access across Nairobi.", image: "https://www.panarihotels.com/img/hotel-banner1.jpg", imageAlt: "Panari Hotel Nairobi building photograph", source: "https://www.panarihotels.com/hotel-nairobi/gallery/", sourceLabel: "Panari Hotel" },
      { title: "Diani Beach Stay", location: "Diani Beach, Kenya", description: "Shaded balconies and garden outlooks shape this coastal stay.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/5b/e9/81/caption.jpg?h=1100&s=1&w=1100", imageAlt: "PrideInn Hotel Diani building photograph", source: "https://www.tripadvisor.com/Hotel_Review-g775870-d6779418-Reviews-PrideInn_Hotel_Diani-Diani_Beach_Ukunda_Coast_Province.html", sourceLabel: "Photo source: Tripadvisor" },
      { title: "Swahili Coast Lodge", location: "Kenyan Coast", description: "A coastal lodge with open-air spaces and locally inspired forms.", image: "https://sncdn.com/imagecache/db/id/1126607/1966872a.jpg", imageAlt: "Papillon Lagoon Reef Hotel building photograph", source: "https://hotel.travelstart.com/go/papillonlagoonreefhoteldianibeach/", sourceLabel: "Photo source: Travelstart" },
      { title: "Mombasa Heritage Hotel", location: "Mombasa, Kenya", description: "A city hotel reflecting the distinctive character of the Kenyan coast.", image: "https://imaginoso.com/files/kenya/mombasa/2401-castle-royal-hotel-north-elevation-3486.jpg", imageAlt: "Historic Mombasa hotel building photograph", source: "https://imaginoso.com/kenya/mombasa/castle-royal-hotel-north-elevation-0", sourceLabel: "Photo source: Imaginoso" },
    ],
  },
};
