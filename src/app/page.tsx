"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import { BookOpen, Calendar, ChefHat, Dumbbell, Handshake, Heart, HelpCircle, MessageSquare, Sparkles, Star, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Location", id: "location" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "booking"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Hospitality"
          description="Discover exceptional comfort and world-class service at Grand Vista Hotel. Where every stay becomes an unforgettable experience."
          tag="5-Star Hotel"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "booking"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
          imageAlt="Grand Vista Hotel luxury lobby"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed to elevate your stay and create lasting memories."
          tag="Luxury Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind at our full-service spa with therapeutic treatments and wellness programs.",
              icon: Heart
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our award-winning chefs using the finest locally sourced ingredients.",
              icon: ChefHat
            },
            {
              title: "Infinity Pool & Deck",
              description: "Relax by our stunning infinity pool with panoramic city views and premium poolside service.",
              icon: Waves
            },
            {
              title: "24/7 Fitness Center",
              description: "Stay active in our state-of-the-art fitness facility equipped with the latest exercise technology.",
              icon: Dumbbell
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed for ultimate comfort and style."
          tag="Premium Rooms"
          products={[
            {
              id: "deluxe",
              brand: "Grand Vista",
              name: "Deluxe King Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe King Room"
            },
            {
              id: "suite",
              brand: "Grand Vista",
              name: "Presidential Suite",
              price: "$799/night",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Suite"
            },
            {
              id: "family",
              brand: "Grand Vista",
              name: "Family Suite",
              price: "$499/night",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/6758528/pexels-photo-6758528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Family Suite"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Vista Hotel for their most important stays."
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              company: "Wanderlust Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/837129/pexels-photo-837129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Wedding Planner",
              company: "Elite Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Wilson",
              role: "Corporate Director",
              company: "International Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Wilson"
            },
            {
              id: "5",
              name: "Lisa Park",
              role: "Luxury Consultant",
              company: "Elite Lifestyle",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Park"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted Travel Partners"
          description="Book with confidence through our network of globally recognized travel and hospitality partners."
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6867964/pexels-photo-6867964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="location" data-section="location">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Vista Hotel."
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request based on availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service running every 30 minutes from 6:00 AM to 11:00 PM. Private car service is also available upon request."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Grand Vista features three dining venues: our signature restaurant, casual café, and rooftop bar. Room service is available 24/7 for your convenience."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "Yes, we offer valet parking for $35 per night and self-parking for $25 per night. Electric vehicle charging stations are available."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Standard reservations can be cancelled up to 24 hours before arrival without penalty. Suite bookings require 48-hour notice. Special event dates may have different policies."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel News & Travel Tips"
          description="Stay updated with the latest hotel news, local attractions, and expert travel advice from our team."
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Travel Guide",
              title: "Top 10 Must-Visit Attractions Near Grand Vista",
              excerpt: "Discover the best local attractions, cultural sites, and hidden gems just minutes from your hotel room.",
              imageSrc: "https://images.pexels.com/photos/34389395/pexels-photo-34389395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Local attractions guide",
              authorName: "Jessica Thompson",
              authorAvatar: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Hotel News",
              title: "New Spa Treatments Now Available",
              excerpt: "Experience our latest wellness offerings including aromatherapy massages and rejuvenating facial treatments.",
              imageSrc: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel spa treatments",
              authorName: "Marcus Rivera",
              authorAvatar: "https://images.pexels.com/photos/837129/pexels-photo-837129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "08 Jan 2025"
            },
            {
              id: "3",
              category: "Business Travel",
              title: "Perfect Business Travel at Grand Vista",
              excerpt: "Learn how our business amenities and services make Grand Vista the ideal choice for corporate travelers.",
              imageSrc: "https://images.pexels.com/photos/3201765/pexels-photo-3201765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Business travel amenities",
              authorName: "Amanda Foster",
              authorAvatar: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "02 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactCenter
          tag="Reservations"
          tagIcon={Calendar}
          title="Ready to Experience Grand Vista?"
          description="Join our exclusive newsletter for special offers, event announcements, and insider access to the finest hotel experiences."
          inputPlaceholder="Enter your email address"
          buttonText="Get Special Offers"
          termsText="By subscribing, you agree to receive marketing communications from Grand Vista Hotel. Unsubscribe anytime."
        />
      </div>
    </ThemeProvider>
  );
}