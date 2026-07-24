import { TourPackage, ServiceItem, Testimonial, FAQItem, TravelTip, PromoOffer } from '../types';

export const tourPackages: TourPackage[] = [
  {
    id: 'pkg-dubai',
    destination: 'Dubai Express & Desert Dunes',
    country: 'United Arab Emirates',
    duration: '5 Days, 4 Nights',
    price: 'PKR 145,000',
    originalPrice: 'PKR 160,000',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 142,
    category: 'Budget',
    included: ['4★ Hotel Stay', 'Daily Breakfast', 'Desert Safari with Dinner', 'Dubai City Tour', 'Burj Khalifa Entry ticket', 'Return Airport Transfers'],
    description: 'Experience the glitz and glamour of Dubai. Witness the architectural wonders, indulge in a dune bashing desert safari adventure, and shop in the world’s largest mall.',
    highlights: ['Burj Khalifa Observation Deck', 'Desert Safari & BBQ Dinner', 'Traditional Dhow Cruise', 'Dubai Marina Walk']
  },
  {
    id: 'pkg-turkey',
    destination: 'Wonders of Turkey & Cappadocia',
    country: 'Turkey',
    duration: '8 Days, 7 Nights',
    price: 'PKR 295,000',
    originalPrice: 'PKR 320,000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHB7JKQiUWHiqlgVLUAWR4iDRBM_3ACBEx4vMrQA15-4b2gKaycxQkYQb0&s=10',
    rating: 4.9,
    reviewsCount: 188,
    category: 'Popular',
    included: ['4★ Boutique Hotels', 'Daily Breakfast', 'Domestic Flights', 'Bosphorus Cruise', 'Cappadocia Balloon Tour Option', 'English Speaking Guide'],
    description: 'Immerse yourself in history and surreal landscapes where Europe meets Asia. Explore ancient Istanbul palaces, the thermal springs of Pamukkale, and the magical fairy chimneys of Cappadocia.',
    highlights: ['Blue Mosque & Hagia Sophia', 'Hot Air Balloon Ride over Cappadocia', 'Bosphorus Dinner Cruise', 'Underground Cave Cities']
  },
  {
    id: 'pkg-thailand',
    destination: 'Tropical Paradise Phuket & Bangkok',
    country: 'Thailand',
    duration: '7 Days, 6 Nights',
    price: 'PKR 165,000',
    originalPrice: 'PKR 185,000',
    image: 'https://backpackbob.com/_next/image?url=https%3A%2F%2Futtdvvhicyixzpdpenyk.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fbackpack-bob-assets%2Fposts%2Fthings-to-do-in-thailand%2Fthailand-the-grand-palace-bangkok-min.jpg&w=1920&q=75',
    rating: 4.7,
    reviewsCount: 124,
    category: 'Honeymoon',
    included: ['Beachfront Resort', 'Daily Buffet Breakfast', 'Phi Phi Island Speedboat Tour', 'Bangkok Temple Tour', 'Professional Guide', 'All Transfers'],
    description: 'A perfect blend of islands and city action. Relax on the legendary white sand beaches of Phuket, tour pristine lagoons by speedboat, and experience Bangkok’s golden temples and vibrant street life.',
    highlights: ['Phi Phi Island Speedboat Tour with Lunch', 'James Bond Island Sightseeing', 'Bangkok City & Temple Tour', 'Traditional Thai Massage']
  },
  {
    id: 'pkg-malaysia',
    destination: 'Kuala Lumpur & Langkawi Escape',
    country: 'Malaysia',
    duration: '6 Days, 5 Nights',
    price: 'PKR 175,000',
    image: 'https://media.istockphoto.com/id/466842820/photo/petronas-towers.jpg?s=612x612&w=0&k=20&c=X_Kl-W_ulJEzjvaaT8gRNTQWHboyLKaedXol5EPhGdI=',
    rating: 4.6,
    reviewsCount: 96,
    category: 'Family',
    included: ['4★ Premium Hotels', 'Daily Breakfast', 'Kuala Lumpur City Tour', 'Batu Caves Visit', 'Langkawi Island Hopping Boat', 'Airport Transfers'],
    description: 'Ideal for families seeking a mixture of modern city wonders and serene tropical nature. Witness the Petronas Twin Towers, visit sacred cave temples, and sail the turquoise waters of Langkawi.',
    highlights: ['Petronas Twin Towers Skybridge', 'Batu Caves Sacred Sanctuary', 'Langkawi Island Hopping & Eagle Feeding', 'Genting Highlands Day Trip']
  },
  {
    id: 'pkg-saudi',
    destination: 'Premium Umrah Package with Guidance',
    country: 'Saudi Arabia',
    duration: '10 Days, 9 Nights',
    price: 'PKR 240,000',
    originalPrice: 'PKR 265,000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIrLAXR9JQXMczlhu1YOZoCy5w_G_DLlXuJFyeOvKbBb_zPQgi96eiXtq&s=10',
    rating: 5.0,
    reviewsCount: 310,
    category: 'Luxury',
    included: ['5★ Clock Tower Hotel (Makkah)', '4★ Madinah Hotel near Masjid Nabawi', 'Full Fast-Track Umrah Visa', 'Private Transport (Jeddah-Makkah-Madinah)', 'Ziyarats in Makkah & Madinah', 'Umrah Kit & Guidance Booklet'],
    description: 'Perform your sacred pilgrimage with peace of mind. We provide direct premium accommodations close to the Holy Harams, professional religious guides, and absolute convenience at every step.',
    highlights: ['Stay adjacent to Masjid al-Haram (Makkah)', 'Accommodations near Holy Nabawi Gate (Madinah)', 'Historical Ziyarat sites with scholarly narrative', '24/7 dedicated support representative']
  },
  {
    id: 'pkg-baku',
    destination: 'Baku Land of Fire Adventure',
    country: 'Azerbaijan',
    duration: '5 Days, 4 Nights',
    price: 'PKR 135,000',
    originalPrice: 'PKR 150,000',
    image: 'https://traveltalk24.com/_next/image?url=%2Fblog%2Fazerbaijan-cover.png&w=3840&q=75',
    rating: 4.5,
    reviewsCount: 88,
    category: 'Budget',
    included: ['Central Baku Hotel Stay', 'Daily Breakfast', 'Baku Old City Guided Walking Tour', 'Gobustan & Mud Volcanoes Trip', 'Fire Temple (Ateshgah) Tour', 'Airport Transfers'],
    description: 'Explore Baku, where medieval history blends with ultra-modern skyscrapers. Visit ancient walled cities, witness boiling mud volcanoes, and experience rich Caspian food culture.',
    highlights: ['Flame Towers illumination display', 'Gobustan Rock Art & Mud Volcanoes', 'Ateshgah Fire Temple & Yanar Dag Burning Mountain', 'Baku Eye & Caspian Sea Promenade']
  },
  {
    id: 'pkg-maldives',
    destination: 'Ultimate Luxury Water Villa Retreat',
    country: 'Maldives',
    duration: '5 Days, 4 Nights',
    price: 'PKR 480,000',
    originalPrice: 'PKR 520,000',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 74,
    category: 'Luxury',
    included: ['5★ Luxury Overwater Villa', 'All-Inclusive Meals & Drinks', 'Speedboat Airport Transfers', 'Complimentary Snorkeling Gear', 'Sunset Dolphin Cruise', 'Private Butler Service'],
    description: 'Unrivaled tropical romance. Wake up to direct steps into the warm ocean turquoise lagoon, dine on premium chef-crafted meals, and experience world-class marine life in absolute seclusion.',
    highlights: ['Overwater villa with private infinity pool', 'Snorkeling with sea turtles & manta rays', 'Romantic sunset cruise with dolphins', 'Couples massage at under-ocean spa']
  },
  {
    id: 'pkg-pakistan',
    destination: 'Majestic Hunza & Attabad Lake',
    country: 'Northern Pakistan',
    duration: '8 Days, 7 Nights',
    price: 'PKR 115,000',
    originalPrice: 'PKR 130,000',
    image: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 215,
    category: 'Family',
    included: ['Luxury Mountain Resorts', 'Daily Breakfast & Dinner', 'Private 4x4 Prado/Jeep for excursions', 'Tour Guide & Driver', 'Bonfire Night with Local Musician', 'All Entry Tickets'],
    description: 'Uncover the breathtaking roof of the world. Travel the spectacular Karakoram Highway, witness Hunza’s ancient forts, and sail across the turquoise pristine Attabad Lake surrounded by giant snow peaks.',
    highlights: ['Turquoise Attabad Lake boat cruise', 'Historic Altit & Baltit Fort tours', 'Khunjerab Pass (China Border) altitude drive', 'Golden hour at Eagle’s Nest viewpoint']
  }
];

export const services: ServiceItem[] = [
  {
    id: 'srv-intl-flight',
    title: 'International Flight Booking',
    description: 'Guaranteed lowest rates across leading global airlines with flexible rebooking.',
    longDescription: 'We coordinate with major international flight carriers including Emirates, Qatar Airways, Saudi Airlines, Turkish Airlines, and flydubai to offer optimized flight routes, secret discounts, group ticket benefits, and hassle-free date modification services.',
    iconName: 'PlaneTakeoff',
    category: 'Flights',
    features: ['Direct Airline API Rates', '24/7 Rebooking & Support', 'Seat & Meal Personalization', 'Frequent Flyer Milestone Points']
  },
  {
    id: 'srv-dom-flight',
    title: 'Domestic Flights',
    description: 'Fast booking on PIA, AirSial, Serene Air, and Fly Jinnah at local promo pricing.',
    longDescription: 'Travelling within Pakistan? Get instant ticketing on PIA, AirSial, Serene Air, Fly Jinnah, and more. Benefit from special bulk allocations and exclusive instant flight confirmation even during peak summer and holiday seasons.',
    iconName: 'Plane',
    category: 'Flights',
    features: ['Instant Ticket Generation', 'No Hidden Service Fees', 'Flexible Luggage Allowances', 'Last-Minute Seat Bookings']
  },
  {
    id: 'srv-visit-visa',
    title: 'Visit Visa',
    description: 'Streamlined visit visa preparation and submission with maximum approval rate.',
    longDescription: 'Simplify your foreign visit applications. We manage everything from file preparation, translation authentication, appointment schedules to bank statement reviews for top global travel destinations.',
    iconName: 'FileCheck',
    category: 'Visas',
    features: ['Thorough Documentation Check', 'Custom Cover Letter Writing', 'Appointment Slots Securing', 'Mock Visa Interviews']
  },
  {
    id: 'srv-tourist-visa',
    title: 'Tourist Visa Packages',
    description: 'Stress-free tourist visa services for UAE, Turkey, Schengen, UK, and USA.',
    longDescription: 'Our team of experienced visa legal executives assists with complex tourist visa application packages. We maintain an outstanding success rate for Schengen, United Kingdom, USA, Canada, and East Asia tourist entries.',
    iconName: 'Globe',
    category: 'Visas',
    features: ['98% UAE & Gulf Approval Rate', 'Schengen File Formulation', 'Certified Translation Services', 'Real-Time Application Status Tracker']
  },
  {
    id: 'srv-student-visa',
    title: 'Student Visa Guidance',
    description: 'Academic route consultation, university admissions and visa counseling.',
    longDescription: 'Navigate the complex landscape of international education. We offer expert coaching, document checks, and visa file structuring for students pursuing degrees in the United Kingdom, Canada, Australia, and European nations.',
    iconName: 'GraduationCap',
    category: 'Visas',
    features: ['University Acceptance Checks', 'Scholarship Application Prep', 'Spouse Visa Integration', 'Pre-Departure Orientation Sessions']
  },
  {
    id: 'srv-business-visa',
    title: 'Business Visa Processing',
    description: 'Expedited executive fast-track entry documents for trade and meetings.',
    longDescription: 'Designed for corporate leaders and entrepreneurs. We provide priority visa processing, commercial delegation invitation paperwork, and rapid appointments for high-value business trips.',
    iconName: 'Briefcase',
    category: 'Visas',
    features: ['Fast-track Executive Appointments', 'Company Invitation Coordination', 'Multi-entry Business Visa Strategy', 'Tax and Declaration Advisory']
  },
  {
    id: 'srv-hotel',
    title: 'Hotel Reservations',
    description: 'Global database access to 500,000+ luxury resorts, villas, and budget stays.',
    longDescription: 'From cozy budget homestays to ultra-luxury water villas in the Maldives or premium clock-tower hotels in Makkah, we offer competitive direct-contract pricing that you won’t find on standard booking platforms.',
    iconName: 'Hotel',
    category: 'Holidays',
    features: ['Up to 30% Off Online Rates', 'Complimentary Room Upgrades', 'Late Checkout Guarantees', 'Breakfast-Included Rates']
  },
  {
    id: 'srv-custom-tours',
    title: 'Customized Holiday Tours',
    description: 'Bespoke itineraries engineered to match your style, pace, and interests.',
    longDescription: 'Don’t settle for generic packages. Our travel planners sit down with you to construct custom, minute-by-minute travel experiences suited for solo travelers, groups of friends, or bespoke adventure seekers.',
    iconName: 'Compass',
    category: 'Holidays',
    features: ['Personalized Travel Planners', 'Tailored Excursion Selections', 'Flexible Travel Pace', 'Dedicated Private Tour Drivers']
  },
  {
    id: 'srv-honeymoon',
    title: 'Honeymoon Packages',
    description: 'Romantic couples retreats with candlelight dinners and premium upgrades.',
    longDescription: 'Celebrate your love in absolute luxury. Our honeymoon bundles feature ocean resorts, custom welcome setups, candlelit private beach dinners, professional photoshoot sessions, and romantic spa experiences.',
    iconName: 'Heart',
    category: 'Holidays',
    features: ['Complimentary Champagne & Cake', 'Private Couples Wellness Rituals', 'Picturesque Oceanfront Suites', 'Custom Memories Photography']
  },
  {
    id: 'srv-corporate',
    title: 'Corporate Travel Management',
    description: 'Turnkey logistics and retreats for modern business teams and conferences.',
    longDescription: 'Streamline your corporate travel budget. We handle flights, hotels, conference rooms, team-building excursions, and ground transportation with dedicated accounts and priority invoicing.',
    iconName: 'Building2',
    category: 'Corporate',
    features: ['Dedicated Corporate Desk Manager', 'Monthly Consolidated Billing', 'Corporate Retreat Planning', 'VIP Airport Lounge Services']
  },
  {
    id: 'srv-insurance',
    title: 'Travel Insurance',
    description: 'Comprehensive medical and flight cancelation protection for peace of mind.',
    longDescription: 'Protect your travel investment against unexpected events. Our partner-backed insurance plans cover international medical emergencies, baggage loss, passport theft, and sudden trip cancelation fees.',
    iconName: 'ShieldCheck',
    category: 'Corporate',
    features: ['COVID-19 Comprehensive Coverage', 'Direct Cashless Hospitalization', 'Baggage & Delay Reimbursement', 'Instant PDF Policy Delivery']
  },
  {
    id: 'srv-airport',
    title: 'Airport Assistance',
    description: 'Fast-track immigration, VIP lounge access, and luggage handling assistance.',
    longDescription: 'Skip the stress at crowded airports. Enjoy premium CIP lounge access, meet-and-assist services at arrivals and departures, fast-track immigration counters, and professional baggage porter services.',
    iconName: 'Sparkles',
    category: 'Corporate',
    features: ['Meet & Greet at Terminal Entry', 'VIP CIP Lounge Invitations', 'Express Customs Clearance', 'Luxury Chauffeur Service Airport Transfers']
  },
  {
    id: 'srv-umrah',
    title: 'Umrah Packages',
    description: 'Blessed journeys with nearby luxury hotels, visas, and group guides.',
    longDescription: 'Embark on a spiritual journey of a lifetime. Our Umrah packages cover premium hotels right in front of the Holy Mosques in Makkah and Madinah, direct visa acquisition, smooth luxury transport, and guided Ziyarats.',
    iconName: 'Moon',
    category: 'Pilgrimage',
    features: ['Hotels adjacent to Harams', 'Scholarly Umrah Seminar & Kit', 'Comprehensive Medical Coverage', 'Experienced Group Coordinator Assistance']
  },
  {
    id: 'srv-hajj',
    title: 'Hajj Packages',
    description: 'Gold-tier Hajj planning under government quota with complete comfort.',
    longDescription: 'Your ultimate obligation fulfilled in absolute tranquility. We offer highly sought-after high-tier Hajj packages featuring premium Maktab camps in Mina, fully-catered premium buffet services, and scholars offering constant guidance.',
    iconName: 'Sun',
    category: 'Pilgrimage',
    features: ['Elite Maktabs close to Jamarat', 'Air-Conditioned VIP Mina Tents', 'Comprehensive Religious Lectures', 'Private Medical Staff accompanying group']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Muhammad Ali',
    location: 'Lahore, Pakistan',
    rating: 5,
    text: 'Highly professional services! I booked my family Umrah through Air One Travels. The hotels were literally a 2-minute walk from Masjid al-Haram, and the transport was brand new. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    packageName: 'Premium Umrah Package'
  },
  {
    id: 't2',
    name: 'Ayesha Khan',
    location: 'Karachi, Pakistan',
    rating: 5,
    text: 'Getting a Schengen visa seemed impossible, but the team at Air One Travels processed my documents so meticulously. I received my Turkish and Schengen visas without a single hitch!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    packageName: 'Wonders of Turkey'
  },
  {
    id: 't3',
    name: 'Zainab Fatima',
    location: 'Islamabad, Pakistan',
    rating: 5,
    text: 'We went on our honeymoon to the Maldives through Air One. The overwater villa package they secured was almost 35% cheaper than the online prices. Truly unforgettable experience!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    packageName: 'Luxury Maldives Overwater Retreat'
  },
  {
    id: 't4',
    name: 'Kamran Shah',
    location: 'Peshawar, Pakistan',
    rating: 5,
    text: 'Best flight deals in the market! I travel frequently to Dubai for business, and Air One Travels consistently beats all online platforms with their secret offline rates. Excellent customer support too.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    packageName: 'Dubai Flight Booking'
  }
];

export const faqs: FAQItem[] = [
  {
    question: 'How do I initiate a visa application with Air One Travels?',
    answer: 'Simply fill out the inquiry form on our Contact Page or message us on WhatsApp with your desired destination. Our visa experts will call you to review your eligibility, provide a customized document checklist, and schedule your appointment.',
    category: 'Visa Assistance'
  },
  {
    question: 'Are flight ticket prices refundable or changeable?',
    answer: 'Yes, most of our tickets can be rescheduled or refunded according to individual airline policies. When booking, our representative will outline the exact date-change fees and cancellation terms for your specific flight class.',
    category: 'Flight Bookings'
  },
  {
    question: 'Do you offer customized tour packages for families?',
    answer: 'Absolutely! Customized private holiday packages are our specialty. We can modify any tour package in our catalog to fit your specific budget, hotel preferences, dietary requirements, and child-friendly excursions.',
    category: 'Tour Packages'
  },
  {
    question: 'What is included in the premium Umrah packages?',
    answer: 'Our standard packages include approved Umrah visa processing, premium hotel accommodation within walking distance of the Harams, comfortable ground transportation, historical Ziyarats, and 24/7 on-ground customer support.',
    category: 'Umrah & Hajj'
  },
  {
    question: 'How far in advance should I book my holiday package?',
    answer: 'We recommend booking international holiday tours at least 4 to 6 weeks before your intended travel date. This allows ample time to secure cheap flight rates, book premium hotels, and complete any necessary visa processing.',
    category: 'Tour Packages'
  }
];

export const travelTips: TravelTip[] = [
  {
    title: 'Essential Checklist Before Going Abroad',
    description: 'A complete step-by-step checklist containing passport validity rules, digital copies of tickets, global SIM options, and dynamic travel insurance policies.',
    category: 'Preparation',
    readTime: '4 min read'
  },
  {
    title: 'How to Secure Best Seat Upgrades on Long-Haul Flights',
    description: 'Expert insider secrets on frequent flyer milestone systems, check-in timings, and polite lounge tricks that maximize your chances of free business upgrades.',
    category: 'Flight Hacks',
    readTime: '3 min read'
  },
  {
    title: 'Navigating Saudi Arabia for Umrah: A Packing Guide',
    description: 'Dedicated guide for pilgrims, packing lightweight cotton Ihrams, comfortable footwear, medication, essential apps like Nusuk, and offline pocket guides.',
    category: 'Pilgrimage',
    readTime: '5 min read'
  }
];

export const promoOffers: PromoOffer[] = [
  {
    id: 'o1',
    title: 'Premium Umrah Discount',
    discount: 'SAVE PKR 20,000',
    code: 'AIR1UMRAH24',
    expiry: 'Valid till Aug 31, 2026',
    destination: 'Saudi Arabia',
    bgGradient: 'from-brand-navy-900 to-emerald-950'
  },
  {
    id: 'o2',
    title: 'Early Bird Summer Holiday Offer',
    discount: '15% OFF LAND PACKAGES',
    code: 'AIR1SUMMER',
    expiry: 'Valid till Jul 31, 2026',
    destination: 'Turkey & Thailand',
    bgGradient: 'from-brand-navy-900 to-brand-red-800'
  },
  {
    id: 'o3',
    title: 'Zero Service Fee Flight Tuesdays',
    discount: 'SAVE PKR 5,000 PER TICKET',
    code: 'AIR1FLYSAFE',
    expiry: 'Limited Offer',
    destination: 'All Flights',
    bgGradient: 'from-brand-navy-900 to-brand-navy-700'
  }
];
