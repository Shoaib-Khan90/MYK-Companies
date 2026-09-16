import React from "react";

const Credit = () => {
  const evaluationAreas = [
    "Board of Directors",
    "Company Track Record",
    "Credit-Worthiness",
    "Date of Establishment",
    "Nature of Business",
    "Product Line",
    "Product Quality",
    "Competition",
    "Sponsors' Reputation",
    "Major Markets",
    "Market Share",
    "Major Buyers",
    "Payment Behaviors",
    "Number of Employees",
    "Local Standing",
    "Investor Confidence",
    "Declared Dividends",
    "Professional Manpower",
    "Financial Institution Reputation",
    "Board Members' Credibility",
    "Feedback on Trustees",
    "International Exposure / Joint Ventures",
    "Bad Debts & Defaults",
    "SWOT Analysis",
    "Overall Company Performance",
    "Overall Financial Standing",
    "Litigation Against the Company",
    "Our Recommendations",
  ];

  const keyAreas = [
    {
      number: "01",
      title: "Company Profile",
      text: "We review the company's establishment, nature of business, product line, markets and overall track record.",
    },
    {
      number: "02",
      title: "Management & Reputation",
      text: "Information regarding directors, sponsors, trustees and professional manpower is evaluated.",
    },
    {
      number: "03",
      title: "Credit & Payment Behavior",
      text: "Credit-worthiness, payment behavior, defaults and reputation with financial institutions are considered.",
    },
    {
      number: "04",
      title: "Market Position",
      text: "Competition, market share, major buyers, local standing and investor confidence form part of the assessment.",
    },
    {
      number: "05",
      title: "Financial Standing",
      text: "Overall financial standing, declared dividends, bad debts and defaults are included in the evaluation.",
    },
    {
      number: "06",
      title: "Professional Analysis",
      text: "Collected information is independently analyzed with market sources to prepare an informative credit report.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/credit-report-mykassociates.png"
          alt="Credit Evaluations and Credit Reports"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
          <div className="max-w-4xl">
            <p className="text-[#ff8d09] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Credit Evaluations
              <br className="hidden sm:block" /> & Credit Reports
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mt-6"></div>
          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* CONTENT */}
            <div>
              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-bold">
                Welcome to MYK Associates
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
                Professional Credit Evaluation
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mb-7"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                We prepare credit reports of companies for our clients,
                covering detailed information regarding company management,
                business operations, market position, credit-worthiness,
                financial standing and overall performance.
              </p>

              <p className="text-slate-600 leading-8 mt-5">
                Information gathered is analyzed independently with market
                sources to provide professional, comprehensive and informative
                credit reports.
              </p>
            </div>


            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#ff8d09] rounded-xl"></div>

              <img
                src="/Images/credit-report-mykassociates.png"
                alt="MYK Associates Credit Report"
                className="relative z-10 w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover rounded-xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>


      {/* ================= KEY AREAS ================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Comprehensive Assessment
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
              Key Areas of Evaluation
            </h2>

            <p className="text-slate-600 leading-7">
              Our credit evaluation process considers multiple aspects of a
              company's operations, reputation and financial position.
            </p>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyAreas.map((item) => (
              <div
                key={item.number}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-7 hover:bg-[#0b1f3a] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#ff8d09] text-white flex items-center justify-center font-bold mb-5">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mb-3 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 group-hover:text-slate-300 leading-7 transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= REPORT COVERAGE ================= */}
      <section className="py-14 sm:py-20 bg-[#0b1f3a]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mb-12">
            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Detailed Reporting
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-5">
              Credit Report Coverage
            </h2>

            <p className="text-slate-300 leading-7">
              Our reports may include information across the following areas
              to provide clients with a comprehensive company assessment.
            </p>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {evaluationAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition duration-300"
              >
                <div className="mt-1 w-6 h-6 min-w-6 rounded-full bg-[#ff8d09] text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </div>

                <p className="text-slate-200 text-sm leading-6">
                  {area}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= ANALYSIS ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">

            <div>
              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
                Independent Assessment
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 leading-tight">
                Information Analysis & Reporting
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mt-6"></div>
            </div>


            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <p className="text-slate-600 leading-8">
                Information regarding the Board of Directors, company track
                record, credit-worthiness, business activities, market
                position, payment behavior, financial standing, litigation,
                international exposure, joint ventures, bad debts and defaults
                is gathered as part of the credit evaluation process.
              </p>

              <p className="text-slate-600 leading-8 mt-5">
                The gathered information is independently analyzed with market
                sources, along with SWOT analysis and overall company
                performance, to prepare professional, comprehensive and
                informative credit reports for our clients.
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
              Comprehensive & Informative Credit Reports
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 leading-7 mt-4">
              Our evaluation process brings together company, market,
              management and financial information to support comprehensive
              credit reporting.
            </p>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-7"></div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Credit;