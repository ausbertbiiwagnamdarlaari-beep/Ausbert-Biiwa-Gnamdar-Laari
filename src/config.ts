import { ServiceItem, PortfolioItem, QualificationItem } from './types';
import logoDarkUrl from './assets/images/ausbert_logo_dark_1786629083487.jpg';
import logoIconUrl from './assets/images/ausbert_logo_icon_1786629099891.jpg';

/**
 * =========================================================================
 * AUSBERT BIIWA GNAMDAR LAARI - PORTFOLIO CONFIGURATION
 * =========================================================================
 * Replace placeholder values below with your actual details.
 * All areas marked with comments are easy to customize!
 */

// --- BRAND LOGO ASSETS ---
export const BRAND_LOGOS = {
  // Official Dark Emblem Logo
  DARK_EMBLEM: logoDarkUrl,
  // Icon / Light Mark Logo
  ICON_MARK: logoIconUrl
};

// --- PERSONAL & CONTACT DETAILS ---
export const AUSBERT_CONFIG = {
  // Your Full Name
  NAME: "Ausbert Biiwa Gnamdar Laari",
  
  // Professional Positioning Title
  TITLE: "Digital Skills Professional & Digital Creative",
  
  // Location
  LOCATION: "Tamale, Ghana",
  
  // Your Email Address (Where form messages will be sent if using Web3Forms or direct mail)
  // REPLACE "YOUR_EMAIL_HERE@example.com" with your real email (e.g. ausbertbiiwagnamdarlaari@gmail.com)
  AUSBERT_EMAIL: "ausbertbiiwagnamdarlaari@gmail.com",
  
  // Your Phone / WhatsApp Number with country code (e.g., +233500000000)
  // REPLACE with your real phone number!
  AUSBERT_WHATSAPP: "+233240596227",
  AUSBERT_PHONE_DISPLAY: "+233 (0) 24 059 6227",
  
  // Web3Forms Free API Key (Get a free key instantly at https://web3forms.com by entering your email)
  // Once pasted here, messages submitted on the website will land directly in your email inbox!
  WEB3FORMS_ACCESS_KEY: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",

  // Profile Avatar / Portrait Image URL
  // Leave empty to display the styled professional portrait placeholder
  PROFILE_IMAGE_URL: "",

  // Hero Section Wording
  HERO_HEADLINE: "Helping Businesses Look Better, Get Noticed & Grow Online.",
  HERO_SUBTITLE: "Connecting local businesses in Tamale and beyond with professional websites, high-converting marketing flyers, and engaging short-form video content.",
  
  // Confident Confirmed About Me Wording
  ABOUT_TEXT: "Hi, I'm Ausbert Biiwa Gnamdar Laari, a digital skills professional from Tamale, Ghana. I use modern digital tools and creative skills to help businesses build a stronger online presence, communicate their offers effectively, and connect with more customers."
};

// --- SOCIAL MEDIA LINKS ---
// Replace placeholders with your actual social profile links!
export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/233240596227?text=${encodeURIComponent("Hello Ausbert, I would like to inquire about your digital services for my business.")}`,
  facebook: "https://facebook.com/YOUR_FACEBOOK_USERNAME",
  instagram: "https://instagram.com/YOUR_INSTAGRAM_USERNAME",
  tiktok: "https://tiktok.com/@YOUR_TIKTOK_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
};

// --- QUALIFICATIONS & DIGITAL SKILLS PLACEHOLDERS ---
// As instructed, these placeholders do NOT invent fake certificates, grades or years.
// You can replace these placeholders with your actual certificates when ready!
export const INITIAL_QUALIFICATIONS: QualificationItem[] = [
  {
    id: "qual-1",
    title: "[ Qualification / Certificate 1 ]",
    description: "Digital skills certification / academic qualification placeholder",
    isPlaceholder: true
  },
  {
    id: "qual-2",
    title: "[ Qualification / Certificate 2 ]",
    description: "Specialized training / technical skills certification placeholder",
    isPlaceholder: true
  },
  {
    id: "qual-3",
    title: "[ Digital Skills Training ]",
    description: "Hands-on web, graphic design, and media content production training",
    isPlaceholder: true
  },
  {
    id: "qual-4",
    title: "[ Other Relevant Certification ]",
    description: "Additional digital marketing, media or professional development program",
    isPlaceholder: true
  }
];

// --- EXACTLY THREE SERVICES ONLY ---
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "service-website-design",
    title: "Business Website Design",
    shortDescription: "Create modern, mobile-responsive websites for small and medium-sized businesses that want a professional online presence and more client inquiries.",
    targetClients: [
      "Restaurants & Cafes",
      "Hotels & Guesthouses",
      "Schools & Training Centers",
      "Salons & Barbershops",
      "Fashion Boutiques & Shops",
      "Real Estate Agencies",
      "Professional Services"
    ],
    keyBenefits: [
      "100% Mobile-Friendly & Fast Loading",
      "Clean Layouts Tailored to Your Brand",
      "Clear Contact & WhatsApp Ordering Buttons",
      "Easy for Customers to Find & Contact You"
    ],
    iconName: "Globe"
  },
  {
    id: "service-flyer-design",
    title: "Social Media Flyer & Marketing Design",
    shortDescription: "Create attractive promotional flyers, social media graphics, advertisements, event banners, and marketing materials that capture attention and drive sales.",
    targetClients: [
      "Facebook Pages",
      "Instagram Shops",
      "WhatsApp Business Status",
      "Event Organizers & Churches",
      "Retailers & Local Businesses"
    ],
    keyBenefits: [
      "Eye-Catching Visual Hierarchy & Color",
      "Optimized for WhatsApp Status & Instagram Feeds",
      "High Resolution Printing & Digital Sharing",
      "Quick Turnaround for Sales & Announcements"
    ],
    iconName: "Palette"
  },
  {
    id: "service-video-content",
    title: "Short-Form Video & Social Media Content",
    shortDescription: "Create engaging short promotional videos and social media reels tailored for platforms like TikTok, Instagram Reels, Facebook, and WhatsApp Status.",
    targetClients: [
      "Product Promotions",
      "Special Discounts & Flash Sales",
      "Event Banners & Brand Stories",
      "Business Spotlights & Customer Testimonials"
    ],
    keyBenefits: [
      "Dynamic Motion Graphics & Modern Music",
      "Formatted Perfectly for Mobile Screen Viewing",
      "Designed to Hold Attention & Boost Engagement",
      "Drives Instant WhatsApp Inquiries & Direct Messages"
    ],
    iconName: "Video"
  }
];

// --- PORTFOLIO SAMPLE PROJECTS ---
// Clearly labeled DEMO / SAMPLE projects demonstrating capacity without fake client claims
export const PORTFOLIO_SAMPLES: PortfolioItem[] = [
  {
    id: "port-web-1",
    title: "Savannah Breeze Restaurant Website",
    category: "websites",
    badgeLabel: "Demo Project",
    description: "Modern, mouth-watering restaurant web design featuring an online food menu, direct WhatsApp order placement, and location map integration for diners in Tamale.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "#demo-restaurant",
    tags: ["Website Design", "Restaurant", "WhatsApp Ordering", "Responsive"],
    aspectRatio: "landscape"
  },
  {
    id: "port-web-2",
    title: "Tamale Crafted Fashion & Boutique Showcase",
    category: "websites",
    badgeLabel: "Demo Project",
    description: "Elegant e-catalog style website tailored for local fashion designers and clothing boutiques to display seasonal lookbooks and collect customer orders.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "#demo-fashion",
    tags: ["Website Design", "Fashion Boutique", "Product Catalog"],
    aspectRatio: "landscape"
  },
  {
    id: "port-flyer-1",
    title: "Gourmet Restaurant Weekend Special Flyer",
    category: "flyers",
    badgeLabel: "Sample Design",
    description: "Vibrant social media promo graphic highlighting special dishes, pricing, and contact numbers for weekend dining campaigns on WhatsApp & Instagram.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    tags: ["Flyer Design", "Food & Restaurant", "WhatsApp Promo"],
    aspectRatio: "square"
  },
  {
    id: "port-flyer-2",
    title: "Boutique Grand Opening & Fashion Discount",
    category: "flyers",
    badgeLabel: "Sample Design",
    description: "High-contrast, stylish retail advertisement created to announce new arrival collections and limited-time discount vouchers.",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    tags: ["Marketing Graphics", "Fashion Sale", "Instagram Feed"],
    aspectRatio: "square"
  },
  {
    id: "port-flyer-3",
    title: "Real Estate Property Open House Graphic",
    category: "flyers",
    badgeLabel: "Sample Design",
    description: "Clean, professional property feature banner designed for land and residential agents showcasing location highlights, price, and inquiry details.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tags: ["Flyer Design", "Real Estate", "Professional Services"],
    aspectRatio: "square"
  },
  {
    id: "port-flyer-4",
    title: "Tech Hub Launch & Skill Workshop Promo",
    category: "flyers",
    badgeLabel: "Sample Design",
    description: "Modern tech-focused event banner formatted for Facebook & WhatsApp distribution highlighting schedule, key speakers, and registration link.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["Event Banner", "Skill Workshop", "Social Media"],
    aspectRatio: "square"
  },
  {
    id: "port-video-1",
    title: "Restaurant Culinary Showcase Reel",
    category: "videos",
    badgeLabel: "Sample Video",
    description: "15-second dynamic promotional video reel featuring appetizing food close-ups, energetic background beat, and clear call-to-action for orders.",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-plate-of-food-41225-large.mp4",
    tags: ["Short-Form Video", "TikTok / Reels", "Restaurant Promo"],
    aspectRatio: "portrait"
  },
  {
    id: "port-video-2",
    title: "Apparel Collection Promo Reel",
    category: "videos",
    badgeLabel: "Sample Video",
    description: "Fast-paced TikTok / Reel style video showcasing clothing line details, text overlays with pricing, and a direct WhatsApp status call-to-action.",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-modelling-a-dress-41551-large.mp4",
    tags: ["Short-Form Video", "Fashion Reel", "WhatsApp Status"],
    aspectRatio: "portrait"
  },
  {
    id: "port-web-3",
    title: "Tamale Local Services WhatsApp Catalog Hub",
    category: "websites",
    badgeLabel: "Demo Project",
    description: "Lightweight single-page business directory concept connecting clients directly with verified local trades and service providers via one click.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "#demo-services-hub",
    tags: ["Digital Project", "Service Directory", "Local Business"],
    aspectRatio: "landscape"
  }
];

// --- WHY WORK WITH ME BENEFITS ---
export const WHY_WORK_WITH_ME = [
  {
    title: "Professional & Creative",
    description: "Combining modern design aesthetics with attention to detail so your brand looks polished, reliable, and visually distinctive.",
    iconName: "Sparkles"
  },
  {
    title: "Business-Focused",
    description: "Every design, website layout, and video hook is crafted with one goal in mind: helping your business attract inquiries and grow.",
    iconName: "TrendingUp"
  },
  {
    title: "Mobile-Friendly Solutions",
    description: "In Ghana, most customers browse on smartphones. All websites and social content are optimized for fast loading on mobile devices.",
    iconName: "Smartphone"
  },
  {
    title: "Easy Communication",
    description: "Accessible, friendly, and straightforward communication via WhatsApp or phone, ensuring your project runs smoothly from start to finish.",
    iconName: "MessageSquareCode"
  }
];
