import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { images } from "../assets/assests";

const ImageSlider = () => {
  const slides = [
    images.img1,
    images.img2,
    images.img3,
    images.img4,
    images.img5,
    images.img6,
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-4">

      {/* Image */}
      <img
        src={slides[current]}
        className="w-full h-[450px] object-contain rounded-lg transition-all duration-700"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 text-white bg-black/50 p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 text-white bg-black/50 p-2 rounded-full"
      >
        <FaArrowRight />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-purple-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
