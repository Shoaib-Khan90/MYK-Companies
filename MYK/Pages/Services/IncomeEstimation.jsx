import React from "react";

const IncomeEstimation = () => {
  const processSteps = [
    {
      number: "01",
      title: "Profile Assessment",
      text: "Pertinent details are collected to develop a complete profile of the individual or company whose income is being estimated.",
    },
    {
      number: "02",
      title: "Income Sources",
      text: "The background is reviewed and all relevant sources of income are identified.",
    },
    {
      number: "03",
      title: "Payment Record",
      text: "Payment history is checked to establish whether the individual or company is a prompt payer.",
    },
    {
      number: "04",
      title: "Expense Calculation",
      text: "Relevant expenses are calculated as part of the overall income assessment.",
    },
    {
      number: "05",
      title: "Income Estimation",
      text: "Income is estimated through our methodology with supporting sources and calculations.",
    },
    {
      number: "06",
      title: "Final Report",
      text: "A comprehensive income estimation report is prepared based on due diligence.",
    },
  ];

  const reportFeatures = [
    "Complete borrower profile",
    "Identification of income sources",
    "Background assessment",
    "Payment record verification",
    "Expense calculation",
    "Income estimation methodology",
    "Supporting source identification",
    "Due diligence based reporting",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/14.png"
          alt="Income Estimation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
          <div className="max-w-4xl">

            <p className="text-[#ff8d09] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Income Estimation
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mt-6"></div>

          </div>
        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* CONTENT */}
            <div>

              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-bold">
                Welcome to MYK Associates
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
                Professional Income Estimation Services
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mb-7"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                At times, banks wish to provide funding facilities to clients
                who have the ability to service their borrowings but do not
                have documented revenue projections.
              </p>

              <p className="text-slate-600 leading-8 mt-5">
                In such cases, the bank needs our services to estimate the
                income of borrowers. We are fully equipped to provide such
                services through a structured assessment and due diligence
                process.
              </p>

            </div>


            {/* IMAGE */}
            <div className="relative">

              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#ff8d09] rounded-xl"></div>

              <img
                src="/Images/14.png"
                alt="MYK Associates Income Estimation"
                className="relative z-10 w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover rounded-xl shadow-xl"
              />

            </div>

          </div>
        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="py-14 sm:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mx-auto text-center mb-12">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Our Methodology
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
              Income Estimation Process
            </h2>

            <p className="text-slate-600 leading-7">
              We have devised necessary formats which are completed with
              pertinent details to establish the profile, income sources,
              payment history and expenses of the borrower.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-7 hover:bg-[#0b1f3a] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-12 h-12 bg-[#ff8d09] text-white rounded-lg flex items-center justify-center font-bold mb-5">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mb-3 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 group-hover:text-slate-300 leading-7 transition-colors">
                  {step.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= DUE DILIGENCE ================= */}
      <section className="py-14 sm:py-20 bg-[#0b1f3a]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* LEFT */}
            <div>

              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
                Detailed Assessment
              </span>

              <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Due Diligence Based Reporting
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mb-7"></div>

              <p className="text-slate-300 leading-8">
                We not only estimate the income, but our methodology also
                identifies the source of income and demonstrates how the
                estimated amount has been arrived at in our income estimation
                report.
              </p>

              <p className="text-slate-300 leading-8 mt-5">
                Reports for employed and self-employed individuals are based
                on due diligence and may be used for credit making and rating
                decisions.
              </p>

            </div>


            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-4">

              {reportFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition duration-300"
                >

                  <div className="w-7 h-7 min-w-7 rounded-full bg-[#ff8d09] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>

                  <p className="text-slate-200 text-sm leading-6">
                    {feature}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-14 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <div className="w-12 h-1 bg-[#ff8d09] mb-6"></div>

              <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                Employed Individuals
              </h3>

              <p className="text-slate-600 leading-7">
                Income estimation reports can be prepared for employed
                individuals based on available information and due diligence.
              </p>
            </div>


            {/* CARD 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <div className="w-12 h-1 bg-[#ff8d09] mb-6"></div>

              <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                Self-Employed Individuals
              </h3>

              <p className="text-slate-600 leading-7">
                We assess relevant income sources, background, expenses and
                payment records for self-employed individuals.
              </p>
            </div>


            {/* CARD 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <div className="w-12 h-1 bg-[#ff8d09] mb-6"></div>

              <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                Credit Decisions
              </h3>

              <p className="text-slate-600 leading-7">
                The resulting reports may be used to support credit making and
                rating decisions.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= BOTTOM SECTION ================= */}
      <section className="bg-white py-14 sm:py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center shadow-xl">

            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              Reliable Income Estimation Through Due Diligence
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 leading-7 mt-4">
              Our methodology provides a structured assessment of income,
              sources, expenses and payment records to prepare comprehensive
              income estimation reports.
            </p>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-7"></div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default IncomeEstimation;