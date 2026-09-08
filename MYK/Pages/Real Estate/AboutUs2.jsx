import React, { useEffect, useRef, useState } from "react";
const AboutUs2 = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const values = [
    {
      title: "We do the right thing",
      description: "We act with integrity and put our clients first.",
    },
    {
      title: "We provide opportunities for growth",
      description:
        "We foster an environment that provides flexibility and opportunity for growth, while also requiring accountability.",
    },
    {
      title: "We think for the long term",
      description:
        "We engage in thoughtful decision making and believe that investment excellence should drive our decisions.",
    },
    {
      title: "We are community minded",
      description:
        "We support philanthropic giving and encourage employee volunteerism in the best interest of our clients and employees.",
    },
    {
      title: "We work together to achieve common goals",
      description:
        "We show respect and humility towards each other and our clients. We believe in creating a supportive work environment that fosters teamwork, collegiality, and effective communication.",
    },
    {
      title: "We work together to achieve common goals",
      description:
        "We show respect and humility towards each other and our clients. We believe in creating a supportive work environment that fosters teamwork, collegiality, and effective communication.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);

          // Ek dafa animation hone ke baad dobara observe nahi karega
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      },
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const slides = [
    {
      image: "/Images/real-banner2.jpg",
      title: "MYK Real Estate Advisory",
      description:
        "Investment Consultants, Equity & Real Estate Offers Consultancy",
    },
    {
      image: "/Images/real-banner1.jpg",
      title: "Advising Corporates",
      description:
        "Financial entities and high net worth individuals on equity portfolios",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto change after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <main className="w-full">
      {/* ================= SLIDER ================= */}
      <section className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden">
        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#07182d]/65"></div>

            {/* Left gradient for better text visibility */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#07182d]/80
                via-[#07182d]/35
                to-transparent
              "
            ></div>
          </div>
        ))}

        {/* ================= TEXT ================= */}
        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
          <div
            className="
              w-full
              max-w-7xl
              mx-auto

              pl-16
              pr-12

              sm:pl-24
              sm:pr-20

              lg:pl-32
              lg:pr-28

              xl:pl-36
              xl:pr-32
            "
          >
            <div key={currentSlide} className="max-w-[720px] slider-text-enter">
              <p
                className="
                  text-[#ff8d09]
                  uppercase
                  tracking-[3px]
                  sm:tracking-[4px]
                  text-xs
                  sm:text-sm
                  font-bold
                  mb-4
                "
              >
                MYK Real Estate
              </p>

              <h1
                className="
                  text-white
                  text-3xl
                  sm:text-5xl
                  lg:text-6xl
                  font-bold
                  leading-[1.15]
                "
              >
                {slides[currentSlide].title}
              </h1>

              <div className="w-24 h-1 bg-[#ff8d09] mt-6 mb-6 rounded-full"></div>

              <p
                className="
                  text-white/90
                  text-base
                  sm:text-lg
                  lg:text-xl
                  leading-7
                  sm:leading-8
                  max-w-[650px]
                "
              >
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        {/* ================= PREVIOUS ================= */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            absolute
            z-30
            left-3
            sm:left-5
            lg:left-7
            top-1/2
            -translate-y-1/2

            w-11
            h-11
            sm:w-12
            sm:h-12

            rounded-full
            bg-[#0b1f3a]/70
            border
            border-white/30

            text-white
            text-2xl

            flex
            items-center
            justify-center

            hover:bg-[#ff8d09]
            hover:border-[#ff8d09]

            transition-all
            duration-300
          "
        >
          ‹
        </button>

        {/* ================= NEXT ================= */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            z-30
            right-3
            sm:right-5
            lg:right-7
            top-1/2
            -translate-y-1/2

            w-11
            h-11
            sm:w-12
            sm:h-12

            rounded-full
            bg-[#0b1f3a]/70
            border
            border-white/30

            text-white
            text-2xl

            flex
            items-center
            justify-center

            hover:bg-[#ff8d09]
            hover:border-[#ff8d09]

            transition-all
            duration-300
          "
        >
          ›
        </button>

        {/* ================= DOTS ================= */}
        <div
          className="
            absolute
            z-30
            bottom-7
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-3
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-9 bg-[#ff8d09]"
                  : "w-3 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes textFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slider-text-enter {
          animation: textFromLeft 1s ease-out forwards;
        }
      `}</style>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-20">
          {/* ================= ABOUT SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* CONTENT */}
            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold mb-3">
                About Us
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] leading-tight">
                MYK Real Estate Advisory
              </h1>

              <div className="w-20 h-1 bg-[#ff8d09] mt-5 mb-6 rounded-full"></div>

              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 leading-8 mb-5">
                Investment Consultants, Equity & Real Estate offers consultancy
                as a one window operation in your investment portfolio.
              </h2>

              <p className="text-slate-600 leading-8 text-sm sm:text-base">
                Our advice on stocks and shares is research based and our
                experts have deep understanding of the market with our main aim
                of ensuring maximum returns. Our team with an experience of more
                than two decades has been involved with capital and property
                market investments in various capacities. By forming an
                investment strategy and develop long term working relationships,
                we actively monitor our clienteles’ investments and continue to
                work with them as their financial objectives change over time.
                Our investment approach is contrarian and value enriched with
                mid to long term investment horizons.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ff8d09]/20 rounded-2xl"></div>

              <img
                src="/Images/real-about.jpg"
                alt="MYK Real Estate Advisory"
                className="relative w-full h-[320px] sm:h-[420px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* ================= ADVISORY SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-[260px] overflow-hidden">
                <img
                  src="/Images/advicing.jpg"
                  alt="Advising Corporates"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-[#ff8d09] uppercase tracking-[2px] text-xs font-semibold mb-3">
                  Corporate Advisory
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a] leading-tight">
                  We are currently advising corporates, financial entities and
                  high net worth individuals on equity portfolios.
                </h2>

                <div className="w-16 h-[3px] bg-[#ff8d09] mt-5 mb-5"></div>

                <p className="text-slate-600 leading-8 text-sm sm:text-base">
                  Also, over the years we have gained in-depth experience of the
                  Real Estate Market in various areas. We advise our clientele
                  upon their requirement for purely investment purposes or for
                  their own usage. These may be Residential, Commercial, and
                  Industrial in nature. We operate in all sectors of DHA,
                  Clifton, Bahria Town, and DHA City. For Industrial plots, our
                  expertise lies in Korangi Industrial Area, SITE Area, Port
                  Qasim, Nooriabad and SITE Super Highway. We also give advice
                  on buying and or selling plots for residential and commercial
                  purposes in the city. We always make sure that the price is
                  competitive with proper documentation and the parties involved
                  in the transactions are genuine.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-[260px] overflow-hidden">
                <img
                  src="/Images/real-state-investment.jpg"
                  alt="Real Estate Investment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-[#ff8d09] uppercase tracking-[2px] text-xs font-semibold mb-3">
                  Investment Strategy
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a] leading-tight">
                  We strongly recommend that investments should be made in safe
                  venues to maximize returns whilst spreading the risk.
                </h2>

                <div className="w-16 h-[3px] bg-[#ff8d09] mt-5 mb-5"></div>

                <p className="text-slate-600 leading-8 text-sm sm:text-base">
                  Be rest assured that being professional and proficient
                  consultants, we will always attempt to deliver the highest
                  rate of return on your investment by being on the forefront
                  for the highest standards. The team at MYK Real Estate
                  Advisory is guided by our principles and strives to learn and
                  improve every day. We have a passion for guiding our clientele
                  to maximize portfolios whilst mitigating risk.
                </p>
              </div>
            </div>
          </div>

          {/* ================= VISION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200">
            {/* CONTENT */}
            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold mb-3">
                Our Direction
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
                Our VISION
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mt-5 mb-5"></div>

              <p className="text-slate-600 leading-8 text-base sm:text-lg">
                Our vision is to be a trusted partner for our clients and a
                respected leader as investment consultants.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src="/Images/42.jpg"
                alt="Our Vision"
                className="w-full h-[300px] sm:h-[360px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* ================= MISSION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-[#0b1f3a] rounded-2xl p-6 sm:p-8 lg:p-10">
            {/* IMAGE */}
            <div>
              <img
                src="/Images/41.jpg"
                alt="Our Mission"
                className="w-full h-[300px] sm:h-[360px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold mb-3">
                Our Purpose
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Our MISSION
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mt-5 mb-5"></div>

              <p className="text-slate-300 leading-8 text-base sm:text-lg">
                Our mission is to add value by helping our clients reach their
                long-term financial goals. We achieve this through our
                investment strategies by adhering to our values and investment
                principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="bg-[#0b1f3a] py-16 sm:py-20 mb-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* HEADING */}
          <div className="text-center mb-14 lg:mb-16">
            <p className="text-[#ff8d09] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              What Defines Us
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              OUR VALUES
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>

          {/* VALUES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-14">
            {values.map((value, index) => (
              <div key={index}>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {value.title}
                </h2>

                {/* ================= LINE ================= */}
                <div className="relative w-full h-[4px] bg-white/20 mt-5 mb-5 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#ff8d09] rounded-full"
                    style={{
                      width: startAnimation ? "100%" : "0%",
                      transition: "width 1.5s ease",
                      transitionDelay: `${index * 200}ms`,
                    }}
                  ></div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-7 sm:leading-8">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs2;
