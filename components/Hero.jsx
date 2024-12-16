"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Hero component
const Hero = ({ heading, description, src }) => {
  return (
    <div className="flex h-[400px] w-full relative sm:h-[625px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      >
        {/* Text Content */}
        <div className="relative z-10 w-1/2 top-32 left-12 px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">{heading}</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
            See More
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  );
};

// HeroSection component with automatic infinite carousel functionality
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: "Snacks",
      src: "./images/snacks.png",
    },
    {
      heading: "Dinner",
      src: "./images/dinner.png",
    },
    {
      heading: "Lunch",
      src: "./images/lunch.png",
    },
  ];

  // Change slide automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop to next slide
    }, 3000); // Change slide every 5 seconds

    // Cleanup on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop to next slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Loop to previous slide
  };

  return (
    <>
      <div className="relative">
        <Hero
          heading={slides[currentSlide].heading}
          description={slides[currentSlide].description}
          src={slides[currentSlide].src}
        />
         <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
      >
        &#8250;
      </button>
        </div>
    </>
  );
}
