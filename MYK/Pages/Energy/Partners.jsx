import React, { useEffect, useState } from "react";

const Partners = () => {
  const partnerLogos = [
    "/Images/growatt-300x180.jpg",
    "/Images/huwaii-300x180.jpg",
    "/Images/inverex-300x180 (1).jpg",
    "/Images/jinko-1-300x180.jpg",
    "/Images/logo-pc-300x180.png",
    "/Images/lonji-300x180.jpg",
    "/Images/max-300x180.jpg",
    "/Images/max-300x180.jpg",
    "/Images/solectra-300x180.jpg",
    "/Images/solis-300x180.jpg",
    "/Images/sunnavo-300x180 (1).jpg",
    "/Images/trina-300x180.jpg",
    "/Images/xsola-300x180.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop par 5 logos ek sath
  const visibleItems = 5;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= partnerLogos.length - visibleItems ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? partnerLogos.length - visibleItems : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= partnerLogos.length - visibleItems ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [partnerLogos.length]);

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[430px]">
        <img
          src="/Images/3.jpg"
          alt="Partners"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/65 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#ff8d09] uppercase tracking-[4px] text-sm font-semibold">
              MYK Energy
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
              Partners
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
            Our Network
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3">
            Welcome to MYK Associates Energy Partners
          </h2>

        </div>
      </section>

      {/* ================= MAIN PARTNERS ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* DONGJIN */}
            <div className="group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

              <div className="h-[220px] flex items-center justify-center bg-slate-50 rounded-xl p-5">
                <img
                  src="/Images/don-300x180.jpg"
                  alt="Dongjin Power"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-[#0b1f3a] mt-6 text-center group-hover:text-[#ff8d09] transition-colors">
                Dongjin Power Profile
              </h3>

            </div>

            {/* KUKA */}
            <div className="group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

              <div className="h-[220px] flex items-center justify-center bg-slate-50 rounded-xl p-5">
                <img
                  src="/Images/kuka-cables.jpg"
                  alt="Kuka Special Cable"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-[#0b1f3a] mt-6 text-center group-hover:text-[#ff8d09] transition-colors">
                Kuka Special Cable
              </h3>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/*                    PARTNER SLIDER                  */}
      {/* ================================================= */}

      <section className="bg-slate-50 py-16 sm:py-20">

        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-16">

          {/* HEADING */}
          <div className="text-center mb-12">

            <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
              Trusted Brands
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-2">
              Our Technology Partners
            </h2>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>

          </div>

          {/* SLIDER CONTAINER */}
          <div className="relative px-12 sm:px-16">

            {/* VIEWPORT */}
            <div className="overflow-hidden">

              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 20}%)`,
                }}
              >

                {partnerLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="
                      w-full
                      sm:w-1/2
                      md:w-1/3
                      lg:w-1/5
                      shrink-0
                      px-2 sm:px-3
                    "
                  >

                    <div
                      className="
                        h-[145px]
                        sm:h-[155px]
                        bg-white
                        border
                        border-slate-300
                        flex
                        items-center
                        justify-center
                        p-5
                        hover:border-[#ff8d09]
                        hover:shadow-lg
                        transition-all
                        duration-300
                      "
                    >

                      <img
                        src={logo}
                        alt={`Partner ${index + 1}`}
                        className="
                          w-full
                          h-full
                          object-contain
                          transition-transform
                          duration-300
                          hover:scale-105
                        "
                      />

                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* ================= LEFT ARROW ================= */}
            <button
              onClick={prevSlide}
              aria-label="Previous partners"
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                w-11 h-11
                rounded-full
                border
                border-slate-300
                bg-white
                text-[#0b1f3a]
                text-2xl
                flex
                items-center
                justify-center
                hover:bg-[#ff8d09]
                hover:text-white
                hover:border-[#ff8d09]
                shadow-sm
                transition-all
                duration-300
                z-20
              "
            >
              &#10094;
            </button>

            {/* ================= RIGHT ARROW ================= */}
            <button
              onClick={nextSlide}
              aria-label="Next partners"
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                w-11 h-11
                rounded-full
                border
                border-slate-300
                bg-white
                text-[#0b1f3a]
                text-2xl
                flex
                items-center
                justify-center
                hover:bg-[#ff8d09]
                hover:text-white
                hover:border-[#ff8d09]
                shadow-sm
                transition-all
                duration-300
                z-20
              "
            >
              &#10095;
            </button>

          </div>

          {/* ================= DOTS ================= */}
          <div className="flex justify-center items-center gap-3 mt-9">

            {Array.from({
              length: partnerLogos.length - visibleItems + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Partner slide ${index + 1}`}
                className={`
                  w-3
                  h-3
                  rotate-45
                  border
                  transition-all
                  duration-300
                  ${
                    currentIndex === index
                      ? "bg-[#0b1f3a] border-[#0b1f3a]"
                      : "bg-white border-slate-400"
                  }
                `}
              ></button>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
};

export default Partners;