"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Master the Art of Professional Makeup",
    subtitle: "Transform Your Passion Into a Rewarding Career",
    description:
      "Learn from industry experts and become a certified makeup artist with hands-on training and real-world experience.",
    image: "https://lakmeacademybangalore.in/images/lakme-academy-hero-1.png",
    mobileImage:
      "https://lakmeacademybangalore.in/course-images/hero-mobile-1.png",
    cta: "Explore Makeup Courses",
  },
  {
    id: 2,
    title: "Advanced Hair Styling & Cutting Techniques",
    subtitle: "Create Stunning Hairstyles That Turn Heads",
    description:
      "Master cutting-edge hair styling techniques, color theory, and salon management skills for a successful career.",
    image: "https://lakmeacademybangalore.in/images/lakme-academy-hero-2.png",
    mobileImage:
      "https://lakmeacademybangalore.in/course-images/mobile-hero-2.png",
    cta: "View Hair Courses",
  },
  {
    id: 3,
    title: "Complete Cosmetology & Beauty Therapy",
    subtitle: "Your Gateway to the Beauty Industry",
    description:
      "Comprehensive training in skincare, nail art, beauty therapy, and salon operations for complete expertise.",
    image: "https://lakmeacademybangalore.in/images/lakme-academy-hero-3.png",
    mobileImage:
      "https://lakmeacademybangalore.in/course-images/mobile-hero-3.png",
    cta: "Start Your Journey",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById("enquiry-form");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const isMobile = window.innerWidth < 768;
    const interval = setInterval(
      () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      },
      isMobile ? 3000 : 5000
    );

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false); // pause on touch
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > 50) {
      nextSlide(); // swipe left
    } else if (distance < -50) {
      prevSlide(); // swipe right
    }

    setTouchStartX(null);
    setTouchEndX(null);
    setIsAutoPlaying(true); // resume after swipe
  };

  return (
    <div
      className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-pink-50"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
          }`}>
          {/* Mobile Image - visible only on small screens */}
          <div className="relative block md:hidden w-full h-[680px]">
            <Image
              src={slide.mobileImage || "/placeholder.svg"}
              alt={`${slide.title} Mobile`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 h-full">
            {/* Content */}
            <div className="flex items-center justify-center p-8 lg:p-16 bg-white md:bg-transparent">
              <div className="max-w-lg text-center lg:text-left">
                <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
                  Professional Beauty Training
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-pink-600 font-semibold mb-4">
                  {slide.subtitle}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                    onClick={scrollToEnquiry}>
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>

            {/* Image - Hidden on mobile, visible on tablet and desktop */}
            <div className="relative hidden md:block">
              <div className="h-48 md:h-64 lg:h-full relative">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-pink-600/10">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Professional+Makeup+Artist+at+Work"
                    alt="Professional makeup artist applying makeup"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10">
        <ChevronLeft className="w-6 h-6" />
      </button> */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10">
        <ChevronLeft className="w-6 h-6" />
      </button>
      {/* <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10">
        <ChevronRight className="w-6 h-6" />
      </button> */}
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-pink-600 scale-125"
                : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
