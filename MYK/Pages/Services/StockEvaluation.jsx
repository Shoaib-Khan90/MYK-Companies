import React from "react";

const StockEvaluation = () => {
  const checks = [
    "Reviewing and checking the goods independently from the storage records of the computerized inventory statements of the company.",

    "The stacking of the stocks is conducted in a systematic manner to facilitate the stock checking with expiry dates whether useable / saleable are marked so that stock items do not deteriorate or get damaged. Also, key observations are made / analyzed so that there is no duplication or deception during the production cycle movements at the client’s premises, safeguarding the bank’s interest at all times.",

    "We correlate information provided by the borrower with the actual presence of physical stock with in house procedures to verify the actual goods in stock are in place and updated.",

    "The quality of the stock is checked by experts or in a laboratory for random sampling of a 100% commodity check.",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/stock-evaluation-mykassociates.png"
          alt="Stock Evaluation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="text-center max-w-4xl">
            <p className="text-[#ff8d09] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              STOCK EVALUATION
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
            Professional Evaluation Services
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Services STOCK EVALUATION
          </h2>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
                Our Expertise
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                Current Asset Stock Evaluation
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                We provide the current asset stock evaluation services to value
                any stock item that may be hypothetical or pledged to a bank or
                for a company’s individual knowledge of their stock value
                positions for their balance sheets.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                Stocks may be in the form of commodities, finished goods or
                liquid. Our teams being well versed in this line of work, the
                stocks are valued by checking the prices from the local market
                and export and import trend of such commodities, agents and the
                producers of the commodities and finished goods.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/stock-evaluation-mykassociates.png"
                alt="Stock Evaluation Services"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= CHECKS AND BALANCES ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
              Evaluation Process
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a]">
              Our Team Encompasses the Following Checks and Balances
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checks.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#ff8d09]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 min-w-10 rounded-full bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center font-bold transition-colors duration-300">
                    {index + 1}
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-8">
                    {item}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SUMMARY ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">

            <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Reliable Stock Valuation
            </h2>

            <p className="text-slate-300 leading-8 text-sm sm:text-base max-w-5xl">
              Our stock evaluation process combines physical verification,
              inventory records, prevailing local market prices, import and
              export trends, and independent quality checks to provide a
              structured and professional assessment of current assets.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
};

export default StockEvaluation;