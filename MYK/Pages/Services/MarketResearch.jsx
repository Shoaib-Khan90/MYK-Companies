import React from "react";

const MarketResearch = () => {
  const researchAreas = [
    {
      number: "01",
      title: "Market Analysis",
      description:
        "Detailed analysis and observation across commercial and residential property markets.",
    },
    {
      number: "02",
      title: "Research & Feasibility",
      description:
        "Research and feasibility studies tailored according to the requirements of each individual project.",
    },
    {
      number: "03",
      title: "Commercial Property",
      description:
        "Specialist research and analysis covering different sectors of the commercial property market.",
    },
    {
      number: "04",
      title: "Residential Property",
      description:
        "Professional research and market observations for residential property projects.",
    },
    {
      number: "05",
      title: "Project-Specific Study",
      description:
        "Each project is treated individually according to its scope, sector and client requirements.",
    },
    {
      number: "06",
      title: "Professional Advisory",
      description:
        "Timely advice, analysis and market observations to support our clientele.",
    },
  ];

  const clients = [
    "Land Owners",
    "Developers",
    "Investors",
    "Housing Associations",
    "Banks",
    "Public Sector Groups",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/28.png"
          alt="Market Research Study For Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-5xl text-center">

            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[4px] text-[#ff8d09]">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Market Research Study For Projects
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>

          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
            Research & Analysis
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Market Research Study For Projects
          </h2>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* CONTENT */}
            <div>

              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
                Our Expertise
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] leading-tight mb-6">
                Commercial & Residential Property Research
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                As specialists in commercial and residential property research,
                we provide thorough advice and analysis to our clientele.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                Our team is dedicated to their specific discipline, with
                unrivalled reputations for providing timely analysis, research
                & feasibility, and thorough observation on all sectors of the
                market.
              </p>

            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/28.png"
                alt="Property Market Research"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= RESEARCH AREAS ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center mb-12">

            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
              Research Capabilities
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a]">
              Our Market Research Expertise
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {researchAreas.map((item) => (
              <div
                key={item.number}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#ff8d09]/40 transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-full bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center font-bold mb-5 transition-colors duration-300">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= INDIVIDUAL APPROACH ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT */}
            <div>

              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
                Individual Project Approach
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                Every Project is Treated Individually
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                Each project is treated individually, whether working on behalf
                of a land owner, developer, investor, housing association, bank,
                or any other public sector group.
              </p>

            </div>

            {/* RIGHT */}
            <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-9 lg:p-10 shadow-xl">

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-7">
                Who We Work With
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-4 border border-white/10"
                  >

                    <div className="w-8 h-8 min-w-8 rounded-full bg-[#ff8d09] text-white flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>

                    <span className="text-white font-medium">
                      {client}
                    </span>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL SECTION ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">

            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[45px] border-white/5"></div>

            <div className="relative z-10 max-w-5xl">

              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Research Driven Project Insights
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                Our market research approach focuses on timely analysis,
                feasibility research and detailed market observations while
                addressing the specific requirements of each commercial and
                residential property project.
              </p>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default MarketResearch;