import React from "react";

const MarketInformation = () => {
  const localCreditPoints = [
    "Payment Behavior Pattern",
    "Market Reputation",
    "Client's Line of Business",
    "Company Profile",
  ];

  const thirdPartyPoints = [
    "Information from Buyers and Suppliers",
    "Payment Behavior",
    "Market Reputation",
    "Client's Line of Business",
    "Company Profile",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/market-information-mykassociates.png"
          alt="Market Information"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
          <div className="max-w-4xl">
            <p className="text-[#ff8d09] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Market Information
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
                Professional Market Information Services
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mb-7"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                We prepare two types of market information reports to provide
                relevant business, credit and market information for our
                clients.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <span className="text-[#ff8d09] text-sm font-bold">
                    01
                  </span>

                  <h3 className="text-[#0b1f3a] text-lg font-bold mt-2">
                    Local Credit Report
                  </h3>

                  <p className="text-slate-500 text-sm mt-2">
                    LCR
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <span className="text-[#ff8d09] text-sm font-bold">
                    02
                  </span>

                  <h3 className="text-[#0b1f3a] text-lg font-bold mt-2">
                    Third Party Market Report
                  </h3>

                  <p className="text-slate-500 text-sm mt-2">
                    TPMR
                  </p>
                </div>

              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#ff8d09] rounded-xl"></div>

              <img
                src="/Images/market-information-mykassociates.png"
                alt="MYK Associates Market Information"
                className="relative z-10 w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover rounded-xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= REPORT TYPES ================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Our Reports
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3">
              Types of Market Information Reports
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* ================= LCR ================= */}
            <div className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">

              <div className="bg-[#0b1f3a] px-6 sm:px-8 py-7">
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <span className="text-[#ff8d09] uppercase tracking-widest text-xs font-bold">
                      Report Type 01
                    </span>

                    <h2 className="text-white text-2xl sm:text-3xl font-bold mt-2">
                      Local Credit Reports
                    </h2>
                  </div>

                  <div className="w-14 h-14 min-w-14 rounded-full bg-[#ff8d09] text-white flex items-center justify-center font-bold">
                    LCR
                  </div>

                </div>
              </div>

              <div className="p-6 sm:p-8">

                <p className="text-slate-600 leading-8">
                  This report mainly comprises information gathered directly
                  from the client. Through this report, one can make a decision
                  to either conduct business in cash or credit depending on the
                  credit condition and history of the client.
                </p>

                <p className="text-slate-600 leading-8 mt-4">
                  This report can be the basis to get banking facilities such
                  as loans, to open L/Cs, etc.
                </p>

                <h3 className="text-lg font-bold text-[#0b1f3a] mt-8 mb-5">
                  Points Highlighted in LCRs
                </h3>

                <div className="space-y-3">
                  {localCreditPoints.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white border border-slate-200 rounded-lg p-4"
                    >
                      <div className="w-7 h-7 min-w-7 rounded-full bg-[#ff8d09] text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>

                      <p className="text-slate-700 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ================= TPMR ================= */}
            <div className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">

              <div className="bg-[#0b1f3a] px-6 sm:px-8 py-7">
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <span className="text-[#ff8d09] uppercase tracking-widest text-xs font-bold">
                      Report Type 02
                    </span>

                    <h2 className="text-white text-2xl sm:text-3xl font-bold mt-2">
                      Third Party Market Reports
                    </h2>
                  </div>

                  <div className="w-14 h-14 min-w-14 rounded-full bg-[#ff8d09] text-white flex items-center justify-center text-sm font-bold">
                    TPMR
                  </div>

                </div>
              </div>

              <div className="p-6 sm:p-8">

                <p className="text-slate-600 leading-8">
                  This information is gathered through outsourced information
                  from the SECP, competitors, products, market comments and
                  from the client's buyers and suppliers.
                </p>

                <h3 className="text-lg font-bold text-[#0b1f3a] mt-8 mb-5">
                  Information Covered in TPMRs
                </h3>

                <div className="space-y-3">
                  {thirdPartyPoints.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white border border-slate-200 rounded-lg p-4"
                    >
                      <div className="w-7 h-7 min-w-7 rounded-full bg-[#ff8d09] text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>

                      <p className="text-slate-700 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INFORMATION SOURCES ================= */}
      <section className="bg-[#0b1f3a] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Market Assessment
            </span>

            <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3 mb-5">
              Information Sources
            </h2>

            <p className="text-slate-300 leading-7">
              Market information is gathered from relevant sources depending
              on the type and purpose of the report.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

            {[
              "Client",
              "SECP",
              "Competitors",
              "Buyers",
              "Suppliers",
            ].map((source, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition duration-300"
              >
                <div className="text-[#ff8d09] font-bold text-sm mb-2">
                  0{index + 1}
                </div>

                <h3 className="text-white font-semibold">
                  {source}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= REPORT PURPOSE ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <div className="w-12 h-1 bg-[#ff8d09] mb-6"></div>

              <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                Credit Assessment
              </h3>

              <p className="text-slate-600 leading-7">
                Information regarding payment behavior and credit condition
                assists in understanding a client's credit history.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <div className="w-12 h-1 bg-[#ff8d09] mb-6"></div>

              <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                Market Reputation
              </h3>

              <p className="text-slate-600 leading-7">
                Market reputation and business information form an important
                part of our market information reporting.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <div className="w-12 h-1 bg-[#ff8d09] mb-6"></div>

              <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                Business Decisions
              </h3>

              <p className="text-slate-600 leading-7">
                Local Credit Reports may assist in deciding whether business
                should be conducted on a cash or credit basis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOTTOM ================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center shadow-xl">

            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              Reliable Market Information for Better Decisions
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 leading-7 mt-4">
              MYK Associates provides Local Credit Reports and Third Party
              Market Reports covering relevant credit, business and market
              information.
            </p>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-7"></div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default MarketInformation;