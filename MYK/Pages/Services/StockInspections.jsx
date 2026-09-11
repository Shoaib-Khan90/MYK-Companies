import React from "react";

const StockInspections = () => {
  const objectives = [
    "Quality Check",
    "Quantity Verification",
    "Monetary Valuation",
  ];

  const inspectionChecks = [
    "Previewing and checking of the stocks storage records, bin cards and computerized inventory statements.",
    "A proper system of controls and reliability is ensured whether the goods are pledged with the bank, with the client in his own premises, or in a third party’s warehouse.",
    "The inventory is sufficient in value to secure the total loan facility provided to the client.",
    "Periodic evaluations are made to ensure that bank’s interest is covered.",
    "That the quality of the stock items has not been deteriorated or damaged.",
    "The security system in question is not old / obsolete and is working properly.",
    "The stocks are fully insured depending on the agreement reached with the borrower, with a current insurance policy.",
    "The stocks having an expiry date are usable / saleable and are approximately marked for identification.",
    "Whilst storing the stocks, more valuable items are to be given priority for appropriate storage.",
    "The stocks are housed in properly constructed premises according to the nature of the stocks.",
    "Firefighting system is in place and operative.",
    "Point out the stock in and out system – whether LIFO or FIFO.",
    "Quality of the goods meets the required standards of a particular industry.",
    "Any changes by the client in removing or adding the stocks should be done in the presence of the bank’s officials or under proper authorization.",
    "Stocks are inspected periodically to ensure that they are in order at any given time, and that they tally with the figures available with the client.",
    "The stocks are owned by the client and are totally free from any encumbrances.",
    "No prior intimation or information should filter out that is not in the bank’s interest.",
    "The stacking of the stocks is done in a systematic manner to facilitate stock checking.",
    "Observe that there is no duplication or deception during the production cycle movements at the client’s premises.",
    "Correlate information provided by the borrower with the actual presence of physical stocks, a proper procedure to verify that the actual goods in stock are in place.",
    "Due compliance is being adhered to with the procedures involved.",
    "Accuracy/reliability of the procedures are in place.",
    "That there is no stoppage of production during stock count.",
    "There is adequate internal control set-up, i.e. the staff responsible for maintenance of stocks must not be involved in stock checks with the bank’s representative.",
    "That there is no possibility of stocks being double counted.",
    "The quality of stock to be checked by experts or in a laboratory for it’s genuineness.",
    "If the stocks are held by a third party for and on behalf of the borrower, there should be an authorization from the client to gain access to the premises.",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/18.jpg"
          alt="Stock Inspections"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="text-center max-w-4xl">
            <p className="text-[#ff8d09] uppercase tracking-[4px] font-semibold text-xs sm:text-sm mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              STOCK INSPECTIONS
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
            Professional Inspection Services
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Services STOCK INSPECTIONS
          </h2>
        </div>
      </section>

      {/* INTRO */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-slate-600 text-sm sm:text-base leading-8 mb-5">
                We carry out inspections of hypothecated and pledged stocks. Our
                teams are well versed in this line of work and all precautions
                are taken by us whilst conducting such inspections.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mb-5">
                Thorough comments are given to the clients on the nature of
                stocks, condition of stocks, method of stacking, approximate
                value, condition of the warehouse where the stocks are stored,
                fire fighting equipment, sprinklers, security aspects and our
                recommendation of any weaknesses found are highlighted in our
                reports.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                The quality of stock is determined by drawing random samples of
                stocks under inspection.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/18.jpg"
                alt="Stock Inspection"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WAREHOUSE INSPECTION */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
              Warehouse Assessment
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
              Comprehensive Warehouse Inspection
            </h2>

            <p className="text-slate-600 leading-8 text-sm sm:text-base">
              The general condition of warehouse structure, cleanliness,
              security system, air ventilation, sun-light, electrical wiring,
              fire hazards and fire-fighting equipment available are all
              observed and noted. Any discrepancies found are noted down and
              reported to owners and the bank for information / necessary
              remedial action.
            </p>
          </div>

        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
              Core Objectives
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
              The Basic Objectives of Stock Inspections
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {objectives.map((item, index) => (
              <div
                key={index}
                className="bg-[#0b1f3a] rounded-2xl p-7 text-center shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#ff8d09] text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8">
            <p className="text-slate-600 leading-8 text-center">
              The above is sufficient to confirm and cover the loan facility
              security given to the client and that maintenance of appropriate
              checks and controls over the pledged stocks in case the goods are
              kept by the client.
            </p>
          </div>

        </div>
      </section>

      {/* INSPECTION CHECKLIST */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
              Checks & Balances
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] leading-tight">
              Our Inspection Team Encompasses the Following Checks and Balances
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {inspectionChecks.map((item, index) => (
              <div
                key={index}
                className="group flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#ff8d09]/40 transition-all duration-300"
              >
                <div className="w-9 h-9 min-w-9 rounded-full bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center text-sm font-bold transition-colors duration-300">
                  {index + 1}
                </div>

                <p className="text-slate-600 leading-7 text-sm sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROFESSIONAL TEAM */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">
            <div className="max-w-5xl">

              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Experienced Professional Team
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                We have a team of qualified engineers, inspectors and other
                suitably qualified and experienced staff that head their
                respective departments with experience, professional licensing /
                education and knowledge of more than a decade.
              </p>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default StockInspections;