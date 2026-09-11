import React from "react";

const VehicleRolling = () => {
  const highlights = [
    "All types of vehicles and rolling equipment",
    "Automobiles and construction equipment",
    "Trucks and trailers for logistics",
    "Earth moving machinery",
    "Nationwide specialized surveyors",
    "Physical inspection based reporting",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/21.jpg"
          alt="Vehicle and Rolling Equipment Evaluation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="text-center max-w-5xl">
            <p className="text-[#ff8d09] uppercase tracking-[4px] font-semibold text-xs sm:text-sm mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              VEHICLE AND ROLLING EQUIPMENT EVALUATION
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
            Professional Evaluation Services
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Services
          </h2>

          <p className="text-slate-500 mt-3 text-sm sm:text-base">
            Vehicle and Rolling Equipment Evaluation
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* CONTENT */}
            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
                Our Expertise
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                Vehicle Evaluation Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                In response to increasing demand from banks and leasing companies,
                we provide evaluation services for all types of vehicles and
                rolling equipment of automobiles, construction equipment, trucks
                and trailers (logistics), earth moving machinery, etc.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                We have organized a team of nationwide surveyors who specialize
                in this particular line of business with precise knowledge and
                technical know-how on the engine mechanics, specifications, body
                design, chassis, make, model, etc. required for their assessments.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                Our reports are based on physical inspections, facts collected
                during the survey and accompanied by photographs. The assessment
                is based on the factors governing the present day market value.
              </p>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/21.jpg"
                alt="Vehicle Inspection and Evaluation"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
              Evaluation Coverage
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
              What We Evaluate
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff8d09] text-white flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>

                <p className="text-[#0b1f3a] font-semibold leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= MARKET KNOWLEDGE ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">
            <div className="max-w-5xl">

              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Market Knowledge & Professional Assessment
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                Our team possesses deep insight in to the current market
                conditions and the prevalent situation to produce thorough
                evaluation reports.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-8 mt-5">
                We have also tied up with the region’s largest automobile
                dealers, agents and workshops and through this combined
                experience, we are in a position to deliver our reports on the
                best advice on local market conditions to our high professional
                standards.
              </p>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default VehicleRolling;