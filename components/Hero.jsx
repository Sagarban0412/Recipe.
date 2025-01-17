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
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
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
      <div>
        <Hero
          heading={slides[currentSlide].heading}
          description={slides[currentSlide].description}
          src={slides[currentSlide].src}
        />
        <div className=" flex gap-3 absolute top-[65%] left-1/2">
          <button onClick={prevSlide} className="font-bold text-6xl p-2 text-white">
            &#8249;
          </button>
          <button onClick={nextSlide} className="font-bold text-6xl p-2 text-white">
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
}
