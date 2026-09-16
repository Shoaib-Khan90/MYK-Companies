import React from "react";

const PreInsurance = () => {
  const assets = [
    {
      number: "01",
      title: "Building Structure",
      description:
        "Evaluation of building structures for insurance coverage purposes.",
    },
    {
      number: "02",
      title: "Plant, Machinery & Equipment",
      description:
        "Assessment of plant, machinery and equipment for insurance coverage.",
    },
    {
      number: "03",
      title: "Stock Evaluation",
      description:
        "Evaluation of any stock item, whether in the form of commodities, finished goods or stocks stored in liquid and / or dry condition.",
    },
    {
      number: "04",
      title: "Vehicles & Rolling Equipment",
      description:
        "Evaluation of vehicles and rolling equipment for insurance coverage purposes.",
    },
    {
      number: "05",
      title: "Specific Assets",
      description:
        "Evaluation of any other specific asset on special request.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/19.png"
          alt="Pre Insurance Evaluation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-5xl text-center">

            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[4px] text-[#ff8d09]">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              PRE INSURANCE EVALUATION
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>

          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
            Professional Evaluation Services
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Services PRE INSURANCE EVALUATION
          </h2>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* CONTENT */}
            <div>

              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
                Our Expertise
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] leading-tight mb-6">
                Pre-Insurance Asset Evaluation
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                Insurance Companies and others request this service to find out
                the real and current value of assets before issuing insurance
                covers.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                Our evaluation assessment encompasses a range of assets for
                insurance coverage purposes.
              </p>

              {/* Small Highlight */}
              <div className="mt-7 border-l-4 border-[#ff8d09] bg-white p-5 rounded-r-xl shadow-sm">
                <p className="text-[#0b1f3a] font-semibold leading-7">
                  Assessment of the real and current value of assets before
                  insurance coverage is issued.
                </p>
              </div>

            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/19.png"
                alt="Asset Evaluation for Insurance"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ASSETS ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center mb-12">

            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
              Evaluation Coverage
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] leading-tight">
              Assets Covered in Our Evaluation
            </h2>

            <p className="text-slate-600 leading-8 mt-5">
              Our evaluation assessment encompasses the following assets for
              insurance coverage purposes:
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {assets.map((asset) => (
              <div
                key={asset.number}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#ff8d09]/40 transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-full bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center font-bold mb-5 transition-colors duration-300">
                  {asset.number}
                </div>

                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  {asset.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-7">
                  {asset.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-8 shadow-lg">
              <span className="text-[#ff8d09] text-sm font-bold">
                STEP 01
              </span>

              <h3 className="text-xl font-bold text-white mt-3 mb-4">
                Asset Identification
              </h3>

              <p className="text-slate-300 leading-7">
                Identification of the asset requiring evaluation for insurance
                coverage purposes.
              </p>
            </div>

            <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-8 shadow-lg">
              <span className="text-[#ff8d09] text-sm font-bold">
                STEP 02
              </span>

              <h3 className="text-xl font-bold text-white mt-3 mb-4">
                Current Value Assessment
              </h3>

              <p className="text-slate-300 leading-7">
                Evaluation is conducted to determine the real and current value
                of the respective asset.
              </p>
            </div>

            <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-8 shadow-lg">
              <span className="text-[#ff8d09] text-sm font-bold">
                STEP 03
              </span>

              <h3 className="text-xl font-bold text-white mt-3 mb-4">
                Insurance Coverage
              </h3>

              <p className="text-slate-300 leading-7">
                The assessment supports insurance companies and others before
                issuing insurance covers.
              </p>
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
                Professional Pre-Insurance Evaluation
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                Our pre-insurance evaluation services cover building
                structures, plant and machinery, equipment, stocks, vehicles,
                rolling equipment and other specific assets requested for
                insurance coverage purposes.
              </p>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default PreInsurance;