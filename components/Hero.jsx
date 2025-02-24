"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Hero component
const Hero = ({ heading, description, src }) => {
  return (
    <div className="flex w-auto relative h-[425px] m-6">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[30px]"
        style={{ backgroundImage: `url(${src})`, width: "automatic" }}
      >
        <div className="relative z-10 w-1/2 top-32 left-12 px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">{heading}</h1>
          {description && <p className="text-lg text-gray-300 mb-4">{description}</p>}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-transform transform hover:scale-105">
            See More
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60 rounded-[30px]"></div>
    </div>
  );
};

// HeroSection component with automatic infinite carousel functionality
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: "Snacks",
      description: "Delicious snacks for your cravings!",
      src: "./images/snacks.png",
    },
    {
      heading: "Dinner",
      description: "Wholesome dinners for every occasion.",
      src: "./images/dinner.png",
    },
    {
      heading: "Lunch",
      description: "Perfect lunch meals to energize your day.",
      src: "./images/lunch.png",
    },
  ];

  // Change slide automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Hero
        heading={slides[currentSlide].heading}
        description={slides[currentSlide].description}
        src={slides[currentSlide].src}
      />
      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-4 absolute top-[45%] left-1/2 sm:top-[65%]">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
