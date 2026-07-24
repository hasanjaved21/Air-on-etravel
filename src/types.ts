export interface TourPackage {
  id: string;
  destination: string;
  country: string;
  duration: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviewsCount: number;
  category: 'Popular' | 'Family' | 'Honeymoon' | 'Luxury' | 'Budget';
  included: string[];
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  category: 'Flights' | 'Visas' | 'Holidays' | 'Pilgrimage' | 'Corporate';
  features: string[];
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  packageType?: string;
  travelDate?: string;
  passengers?: number;
  message: string;
  timestamp: string;
  status: 'New' | 'In Progress' | 'Contacted';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  packageName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TravelTip {
  title: string;
  description: string;
  category: string;
  readTime: string;
}

export interface PromoOffer {
  id: string;
  title: string;
  discount: string;
  code: string;
  expiry: string;
  destination: string;
  bgGradient: string;
}
