import React from "react";

const Efficiencies = () => {
  const solutions = [
    {
      image: "/Images/off-grid-700x500.jpg",
      title: "OFF-GRID SYSTEM",
      description:
        "Off-Grid systems are advanced solar solutions that operate independently of the electricity grid by utilizing battery storage. We design your system to meet your annual power needs, ensuring sufficient battery backup even on cloudy days. While the initial cost may be higher, the efficiency and energy independence they provide are unmatched.",
    },
    {
      image: "/Images/on-grid-700x500.jpg",
      title: "ON-GRID SYSTEM",
      description:
        "On-Grid solar systems, designed for commercial and residential users, are connected to the public grid using solar inverters. Excess energy can be exported to the grid for credits, optimizing energy usage and reducing electricity costs. These systems efficiently balance energy production and consumption without the need for batteries, utilizing Net Metering.",
    },
    {
      image: "/Images/hybrid-new-700x500.jpg",
      title: "HYBRID SYSTEM",
      description:
        "Hybrid systems combine On-Grid and Off-Grid Solar Systems, using both grid power and batteries. Ideal for commercial and residential use, the system stores daytime energy for nighttime use and charges batteries with off-peak electricity. MYK Energy offers comprehensive energy solutions, from efficient plans to lifelong solar system maintenance.",
    },
    {
      image: "/Images/vfd.jpg",
      title: "VFD-BASED SOLUTIONS",
      description:
        "We specialize in Variable Frequency Drive (VFD) solutions to optimize industrial performance and energy efficiency. VFD technology offers precise motor control, leading to energy savings, reduced costs, and enhanced reliability. Our expert team designs and implements tailored VFD systems for HVAC, pumps, and conveyor belts, ensuring seamless integration and superior performance.",
    },
    {
      image: "/Images/storage.jpg",
      title: "BATTERY ENERGY STORAGE SYSTEMS (BESS)",
      description:
        "These systems refer to the use of batteries to store energy for later use, helping to balance supply and demand on the electrical grid. Our BESS solutions are integrated with renewable energy sources, such as solar or wind power, to store excess energy generated during peak production times and release it during periods of high demand or low production. BESS is increasingly popular in both residential and commercial settings, as it enhances energy reliability, provides backup power, and facilitates the efficient use of renewable energy.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[430px]">
        <img
          src="/Images/19.png"
          alt="Efficiencies"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/65 flex items-center justify-center">
          <div className="text-center px-5">

            <p className="text-[#ff8d09] uppercase tracking-[4px] text-sm font-semibold mb-3">
              MYK Energy
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Efficiencies
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>

          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold mb-3">
            Energy Solutions
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Energy
          </h2>

          <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 mb-6"></div>

          <p className="max-w-4xl mx-auto text-slate-600 text-base sm:text-lg leading-8">
            At MYK Energy, we guarantee uninterrupted power supply. Our skilled
            team assists you in selecting the most efficient solar system
            tailored to your energy needs. We offer three types of solar
            solutions: Off-Grid, On-Grid, and Hybrid.
          </p>

        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">

            <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
              Our Expertise
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3">
              Efficient Energy Solutions
            </h2>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {solutions.map((solution, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-slate-200
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                {/* IMAGE */}
                <div className="relative h-[240px] overflow-hidden">

                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/80 via-transparent to-transparent"></div>

                  {/* NUMBER */}
                  <div className="absolute top-4 left-4 w-11 h-11 bg-[#ff8d09] text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-7">

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f3a] group-hover:text-[#ff8d09] transition-colors">
                    {solution.title}
                  </h3>

                  <div className="w-14 h-[3px] bg-[#ff8d09] mt-4 mb-5"></div>

                  <p className="text-slate-600 leading-7 text-sm sm:text-base">
                    {solution.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SYSTEM TYPES ================= */}
      <section className="bg-[#0b1f3a] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">

            <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
              Solar Systems
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Choose the Right Solar Solution
            </h2>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* OFF GRID */}
            <div className="bg-white/10 border border-white/10 rounded-2xl p-7 text-center hover:bg-white transition-all duration-300 group">

              <div className="text-[#ff8d09] text-4xl font-bold mb-4">
                01
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#0b1f3a]">
                Off-Grid
              </h3>

              <p className="text-slate-300 group-hover:text-slate-600 mt-3 leading-7 text-sm">
                Independent solar power with battery backup for maximum energy
                independence.
              </p>

            </div>

            {/* ON GRID */}
            <div className="bg-white/10 border border-white/10 rounded-2xl p-7 text-center hover:bg-white transition-all duration-300 group">

              <div className="text-[#ff8d09] text-4xl font-bold mb-4">
                02
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#0b1f3a]">
                On-Grid
              </h3>

              <p className="text-slate-300 group-hover:text-slate-600 mt-3 leading-7 text-sm">
                Grid-connected solar power designed to reduce electricity costs
                through efficient energy production.
              </p>

            </div>

            {/* HYBRID */}
            <div className="bg-white/10 border border-white/10 rounded-2xl p-7 text-center hover:bg-white transition-all duration-300 group">

              <div className="text-[#ff8d09] text-4xl font-bold mb-4">
                03
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#0b1f3a]">
                Hybrid
              </h3>

              <p className="text-slate-300 group-hover:text-slate-600 mt-3 leading-7 text-sm">
                Combines grid connectivity and battery storage for greater
                reliability and flexibility.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">

          <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
            Powering the Future
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3">
            Reliable. Efficient. Sustainable.
          </h2>

          <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>

          <p className="text-slate-600 leading-8 mt-6 max-w-3xl mx-auto">
            MYK Energy provides efficient solutions designed to support
            residential, commercial and industrial energy requirements.
          </p>

        </div>
      </section>

    </main>
  );
};

export default Efficiencies;