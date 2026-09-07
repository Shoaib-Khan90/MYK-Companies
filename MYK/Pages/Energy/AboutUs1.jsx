import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSun,
  faLightbulb,
  faChartColumn,
  faSolarPanel,
  faBatteryFull,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs1 = () => {
  const solutionsRef = useRef(null);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProgress(true);
        }
      },
      {
        threshold: 0.25,
      },
    );

    if (solutionsRef.current) {
      observer.observe(solutionsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slides = [
    {
      image: "/Images/3.jpg",
      title: "Solar Energy",
      description: "For home and business",
    },
    {
      image: "/Images/33.jpg",
      title: "Renewable Energy",
      description: "Solar panels can generate clean energy",
    },
    {
      image: "/Images/32.jpg",
      title: "Lower Energy Costs",
      description: "Solar panels can help cities reduce their energy bills",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="w-full bg-white">
      {/* ================= SLIDER ================= */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
                <div className="max-w-2xl">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <div className="w-20 h-1 bg-amber-400 mt-5 mb-5"></div>

                  <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-7">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ================= LEFT BUTTON ================= */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-3 sm:left-6
            top-1/2
            -translate-y-1/2
            z-20
            w-10 h-10
            sm:w-12 sm:h-12
            rounded-full
            bg-black/40
            hover:bg-amber-400
            text-white
            hover:text-[#0b1f3a]
            flex
            items-center
            justify-center
            text-2xl
            transition-all
            duration-300
          "
        >
          &#10094;
        </button>

        {/* ================= RIGHT BUTTON ================= */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-3 sm:right-6
            top-1/2
            -translate-y-1/2
            z-20
            w-10 h-10
            sm:w-12 sm:h-12
            rounded-full
            bg-black/40
            hover:bg-amber-400
            text-white
            hover:text-[#0b1f3a]
            flex
            items-center
            justify-center
            text-2xl
            transition-all
            duration-300
          "
        >
          &#10095;
        </button>

        {/* ================= DOTS ================= */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-amber-400 w-8"
                  : "bg-white/70 hover:bg-white w-2.5"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/*                  ABOUT MYK ENERGY                  */}
      {/* ================================================= */}

      <section className="py-14 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-[3px] text-sm mb-3">
                About Us
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] leading-tight">
                Welcome to MYK Energy
              </h2>

              <div className="w-20 h-1 bg-amber-500 mt-5 mb-6"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                At MYK ENERGY, we are committed to redefining the energy
                landscape by providing innovative and sustainable energy
                solutions tailored to meet the diverse needs of our clients. We
                strive to empower businesses and communities with reliable,
                efficient, and environmentally friendly energy options that
                drive growth and sustainability.
              </p>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative">
              {/* GOLD DECORATION */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400 rounded-xl"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/Images/34.jpg"
                  alt="MYK Energy"
                  className="
                    w-full
                    h-[280px]
                    sm:h-[350px]
                    lg:h-[420px]
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* SMALL INFO BOX */}
              <div
                className="
                absolute
                bottom-4
                left-4
                sm:-bottom-6
                sm:-left-6
                bg-[#0b1f3a]
                text-white
                px-6
                py-4
                rounded-xl
                shadow-xl
              "
              >
                <p className="text-amber-400 font-bold text-lg">Sustainable</p>

                <p className="text-sm text-slate-300">Energy Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOLAR PACKAGES SECTION ================= */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/Images/32.jpg')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-amber-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              Our Solar Packages
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Experience the Power of{" "}
              <span className="text-amber-400">Solar Energy</span>
            </h2>

            <div className="w-24 h-1 bg-amber-400 mx-auto mt-5 rounded-full"></div>
          </div>

          {/* ================= PACKAGE IMAGES ================= */}
          <div
            className="
        grid
        grid-cols-1
        min-[450px]:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6
        gap-6
        lg:gap-5
        items-end
      "
          >
            {/* PACKAGE 1 */}
            <div className="flex justify-center">
              <img
                src="/Images/35.jpg"
                alt="5KW Off Grid Solar System"
                className="
            w-full
            max-w-[190px]
            lg:max-w-[210px]
            h-auto
            rounded-lg
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-3
            hover:scale-105
          "
              />
            </div>

            {/* PACKAGE 2 */}
            <div className="flex justify-center">
              <img
                src="/Images/36.jpg"
                alt="8KW Off Grid Solar System"
                className="
            w-full
            max-w-[190px]
            lg:max-w-[210px]
            h-auto
            rounded-lg
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-3
            hover:scale-105
          "
              />
            </div>

            {/* PACKAGE 3 */}
            <div className="flex justify-center">
              <img
                src="/Images/37.jpg"
                alt="10KW On Grid Solar System"
                className="
            w-full
            max-w-[190px]
            lg:max-w-[210px]
            h-auto
            rounded-lg
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-3
            hover:scale-105
          "
              />
            </div>

            {/* PACKAGE 4 */}
            <div className="flex justify-center">
              <img
                src="/Images/38.jpg"
                alt="12KW Hybrid Solar System"
                className="
            w-full
            max-w-[190px]
            lg:max-w-[210px]
            h-auto
            rounded-lg
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-3
            hover:scale-105
          "
              />
            </div>

            {/* PACKAGE 5 */}
            <div className="flex justify-center">
              <img
                src="/Images/39.jpg"
                alt="15KW On Grid Solar System"
                className="
            w-full
            max-w-[190px]
            lg:max-w-[210px]
            h-auto
            rounded-lg
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-3
            hover:scale-105
          "
              />
            </div>

            {/* PACKAGE 6 */}
            <div className="flex justify-center">
              <img
                src="/Images/40.jpg"
                alt="20KW Hybrid Solar System"
                className="
            w-full
            max-w-[190px]
            lg:max-w-[210px]
            h-auto
            rounded-lg
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-3
            hover:scale-105
          "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE SOLUTIONS ================= */}
      <section
        ref={solutionsRef}
        className="bg-slate-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* HEADING */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              What We Provide
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a]">
              Our Comprehensive Solutions Include
            </h2>

            <div className="w-20 h-1 bg-amber-500 mx-auto mt-5"></div>
          </div>

          {/* TWO COLUMNS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* ================= LEFT SIDE ================= */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  Renewable Energy Systems
                </h3>

                <p className="text-slate-600 leading-7">
                  We specialize in solar, wind, and hydroelectric power
                  solutions, helping clients harness natural resources to reduce
                  their carbon footprint and energy costs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  Energy Storage Solutions
                </h3>

                <p className="text-slate-600 leading-7">
                  Our cutting-edge battery storage technologies enable
                  businesses to store excess energy for use during peak demand,
                  enhancing reliability and efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  Energy Efficiency Consulting
                </h3>

                <p className="text-slate-600 leading-7">
                  We offer expert assessments and strategies to optimize energy
                  use, reduce waste, and lower operational costs through smart
                  technology and best practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  Smart Grid Technology
                </h3>

                <p className="text-slate-600 leading-7">
                  Our advanced smart grid solutions with local partners enhance
                  energy distribution and management, ensuring a resilient
                  infrastructure that adapts to changing energy demands.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  Electric Vehicle (EV) Battery Solutions
                </h3>

                <p className="text-slate-600 leading-7">
                  Recognizing the rapid growth in the electric vehicle market,
                  we provide automotive and electric bike batteries. By focusing
                  heavily on research and development, we cater to the evolving
                  demands of Pakistan’s two-wheeled electric vehicle and
                  automotive battery markets.
                </p>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-9 lg:p-10 shadow-xl">
                <p className="text-amber-400 uppercase tracking-[3px] text-xs font-semibold mb-3">
                  Our Expertise
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-10">
                  Sustainable Energy Solutions
                </h3>

                <div className="space-y-9">
                  {/* 01 */}
                  <div>
                    <div className="flex justify-between gap-4 mb-3">
                      <h4 className="text-white font-semibold">
                        Renewable Energy Systems
                      </h4>

                      <span className="text-amber-400 font-bold">100%</span>
                    </div>

                    <div className="w-full h-[5px] bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-amber-400 rounded-full transition-all duration-[1500ms] ease-out ${
                          showProgress ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* 02 */}
                  <div>
                    <div className="flex justify-between gap-4 mb-3">
                      <h4 className="text-white font-semibold">
                        Energy Storage Solutions
                      </h4>

                      <span className="text-amber-400 font-bold">100%</span>
                    </div>

                    <div className="w-full h-[5px] bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-amber-400 rounded-full transition-all duration-[1700ms] ease-out ${
                          showProgress ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* 03 */}
                  <div>
                    <div className="flex justify-between gap-4 mb-3">
                      <h4 className="text-white font-semibold">
                        Energy Efficiency Consulting
                      </h4>

                      <span className="text-amber-400 font-bold">100%</span>
                    </div>

                    <div className="w-full h-[5px] bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-amber-400 rounded-full transition-all duration-[1900ms] ease-out ${
                          showProgress ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* 04 */}
                  <div>
                    <div className="flex justify-between gap-4 mb-3">
                      <h4 className="text-white font-semibold">
                        Smart Grid Technology
                      </h4>

                      <span className="text-amber-400 font-bold">100%</span>
                    </div>

                    <div className="w-full h-[5px] bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-amber-400 rounded-full transition-all duration-[2100ms] ease-out ${
                          showProgress ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* 05 */}
                  <div>
                    <div className="flex justify-between gap-4 mb-3">
                      <h4 className="text-white font-semibold">
                        Electric Vehicle (EV) Battery Solutions
                      </h4>

                      <span className="text-amber-400 font-bold">100%</span>
                    </div>

                    <div className="w-full h-[5px] bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-amber-400 rounded-full transition-all duration-[2300ms] ease-out ${
                          showProgress ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS & SERVICES ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* HEADING */}
          <div className="text-center mb-14">
            <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold mb-3">
              What We Offer
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a]">
              PRODUCTS & SERVICES
            </h2>

            <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {/* SOLAR PANELS */}
            <div className="group flex items-center gap-6">
              <div className="w-20 shrink-0 flex justify-center">
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-[53px] text-[#ff8d09] group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0b1f3a]">
                Solar Panels
              </h3>
            </div>

            {/* SMART HYBRID INVERTERS */}
            <div className="group flex items-center gap-6">
              <div className="w-20 shrink-0 flex justify-center">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-[53px] text-[#ff8d09] group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0b1f3a]">
                Smart Hybrid Inverters
              </h3>
            </div>

            {/* LEAD ACID BATTERIES */}
            <div className="group flex items-center gap-6">
              <div className="w-20 shrink-0 flex justify-center">
                <FontAwesomeIcon
                  icon={faChartColumn}
                  className="text-[53px] text-[#ff8d09] group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0b1f3a]">
                Lead – Acid Batteries
              </h3>
            </div>

            {/* BESS */}
            <div className="group flex items-center gap-6">
              <div className="w-20 shrink-0 flex justify-center">
                <FontAwesomeIcon
                  icon={faSolarPanel}
                  className="text-[53px] text-[#ff8d09] group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold leading-6 text-[#0b1f3a]">
                Battery Energy Storage Systems - BESS
                <span className="block text-base mt-1">
                  (Residential, Commercial & Industrial)
                </span>
              </h3>
            </div>

            {/* EV BATTERIES */}
            <div className="group flex items-center gap-6">
              <div className="w-20 shrink-0 flex justify-center">
                <FontAwesomeIcon
                  icon={faBatteryFull}
                  className="text-[53px] text-[#ff8d09] group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold leading-6 text-[#0b1f3a]">
                Electric Vehicles (EV) Transportation Sector Batteries
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs1;
