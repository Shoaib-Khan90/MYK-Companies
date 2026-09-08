import React from "react";

const Products = () => {
  const packages = [
    {
      image: "/Images/35.jpg",
      alt: "5KW Off Grid Solar System",
    },
    {
      image: "/Images/36.jpg",
      alt: "8KW Off Grid Solar System",
    },
    {
      image: "/Images/37.jpg",
      alt: "10KW On Grid Solar System",
    },
    {
      image: "/Images/38.jpg",
      alt: "12KW Hybrid Solar System",
    },
    {
      image: "/Images/39.jpg",
      alt: "15KW On Grid Solar System",
    },
    {
      image: "/Images/40.jpg",
      alt: "20KW Hybrid Solar System",
    },
  ];

  return (
    <main className="w-full mb-20.5">

      {/* ================= SOLAR PACKAGES ================= */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/Images/32.jpg')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">

          {/* HEADING */}
          <div className="text-center mb-12 lg:mb-16">

            <p className="text-[#ff8d09] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              Our Solar Packages
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Experience the Power of{" "}
              <span className="text-[#ff8d09]">
                Solar Energy
              </span>
            </h1>

            <div className="w-24 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>

          </div>

          {/* ================= PACKAGE GRID ================= */}
          <div className="
            grid
            grid-cols-1
            min-[450px]:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-6
            gap-6
            xl:gap-5
            items-end
          ">

            {packages.map((item, index) => (
              <div
                key={index}
                className="flex justify-center"
              >
                <div className="
                  group
                  relative
                  w-full
                  max-w-[210px]
                  rounded-xl
                  overflow-hidden
                  shadow-2xl
                  bg-white
                  border
                  border-white/20
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                ">

                  <img
                    src={item.image}
                    alt={item.alt}
                    className="
                      w-full
                      h-auto
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
};

export default Products;