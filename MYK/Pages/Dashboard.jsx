import React, { useEffect, useState } from "react";
import "./dashboard.css";

const slides = [
  {
    image: "/Images/1.png",
    title: "Clearing &",
    title2 : "Forwarding",
  },
  {
    image: "/Images/2.png",
    title: "Stock",
    title2:"Evaluation",
  },
  {
    image: "/Images/3.jpg",
    title: "Solar Energy",
    title2: "for home and business",
  },
  {
    image: "/Images/4.png",
    title: "Asset Evaluation",
  },
  {
    image: "/Images/5.jpg",
    title: "Vehicle &",
    title2 : "Rolling Equipment",
  },
];

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <>
  
    <section className="hero-slider">

      <div
        className="slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>

            <img
              src={slide.image}
              alt={slide.title}
            />

            <div className="slide-overlay">

              <h1>{slide.title}
                 <br />
  {slide.title2}
              </h1>

              

            </div>

          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        className="slider-btn prev"
        onClick={previousSlide}
      >
        ❮
      </button>

      {/* Next */}
      <button
        className="slider-btn next"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="slider-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            className={currentSlide === index ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          />
        ))}

      </div>

    </section>
    </>
  );
};

export default Dashboard;