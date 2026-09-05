import React from "react";

const MissionVision = () => {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/Images/14.png"
          alt="Mission & Vision"
          className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Mission & Vision
            </h1>

            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-8">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[3px] text-amber-600 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Our Mission & Vision
          </h2>

          <p className="mt-4 text-slate-500">
            Welcome to MYK Associates About Us — Mission & Vision
          </p>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-5"></div>
        </div>

      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10">

          {/* ================= MISSION ================= */}
          <div
            className="
              group
              relative
              bg-white
              border border-slate-200
              rounded-2xl
              p-7 sm:p-9 lg:p-10
              shadow-sm
              overflow-hidden
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
            "
          >

            {/* Number */}
            <div className="w-14 h-14 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center text-xl font-bold mb-6">
              01
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a] mb-4">
              MISSION
            </h2>

            <div className="w-14 h-[3px] bg-amber-500 mb-6"></div>

            <p className="text-slate-600 leading-8 text-[15px] sm:text-base">
              “Dedicated to our clientele by providing seamless services.
              Driven by excellence in professionalism and high standards.”
            </p>

            {/* Decoration */}
            <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-amber-400/10 rounded-full"></div>

          </div>


          {/* ================= VISION ================= */}
          <div
            className="
              group
              relative
              bg-[#0b1f3a]
              rounded-2xl
              p-7 sm:p-9 lg:p-10
              shadow-lg
              overflow-hidden
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            {/* Number */}
            <div className="w-14 h-14 rounded-full bg-amber-400 text-[#0b1f3a] flex items-center justify-center text-xl font-bold mb-6">
              02
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              VISION
            </h2>

            <div className="w-14 h-[3px] bg-amber-400 mb-6"></div>

            <p className="text-slate-300 leading-8 text-[15px] sm:text-base">
              “To be the preferred service provider by continuing services in
              a responsive, professional manner through superior quality and
              commitment.”
            </p>

            {/* Decoration */}
            <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-white/5 rounded-full"></div>

          </div>

        </div>
      </section>


      {/* ================= BOTTOM STATEMENT ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16">

        <div className="bg-white rounded-2xl border-l-4 border-amber-500 shadow-sm p-6 sm:p-8 text-center">

          <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-3">
            Excellence Through Professionalism
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 leading-7">
            Our mission and vision reflect our commitment to delivering
            professional, responsive and high-quality services to our valued
            clientele.
          </p>

        </div>

      </section>

    </main>
  );
};

export default MissionVision;