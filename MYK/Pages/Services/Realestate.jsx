import React from "react";

const Realestate = () => {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/46.png"
          alt="Real Estate Investment Trust Consultancy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="text-center max-w-5xl">

            <p className="text-[#ff8d09] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Real Estate Investment Trust (REIT) Consultancy
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>

          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
            Professional Real Estate Consultancy
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a] leading-tight">
            Welcome to MYK Associates Real Estate Investment Trust (REIT)
            Consultancy
          </h2>

        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* TEXT */}
            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
                Our Expertise
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                REIT Consultancy Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                We provide Real Estate Investment Trust (REIT) Consultancy to
                the clients who are interested in becoming a part of a Real
                Estate Corporate Sector of the Country.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                Being associated with AHG, we conduct in depth market study,
                area research, analysis & feasibility, IRRs, FARs, project
                estimation costing, rentals, and sale projections.
              </p>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/46.png"
                alt="REIT Consultancy"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">

            <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
              Consultancy Scope
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
              Our REIT Consultancy Includes
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Market Study",
              "Area Research",
              "Analysis & Feasibility",
              "IRRs",
              "FARs",
              "Project Estimation Costing",
              "Rental Projections",
              "Sale Projections",
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#ff8d09]/40 transition-all duration-300"
              >
                <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center font-bold transition-colors duration-300">
                  {index + 1}
                </div>

                <h3 className="text-[#0b1f3a] font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= BOTTOM SECTION ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">

            <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Strategic Real Estate Advisory
            </h2>

            <p className="text-slate-300 leading-8 text-sm sm:text-base max-w-5xl">
              Our consultancy approach focuses on detailed market research,
              feasibility analysis, project costing and revenue projections to
              support informed real estate investment decisions.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Realestate;