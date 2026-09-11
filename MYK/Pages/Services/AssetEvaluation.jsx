import React from "react";

const AssetEvaluation = () => {
  const panels = [
    "Panel ‘I’ – Valuation of Land & Buildings",
    "Panel ‘II’ – Valuation of Plant & Machinery",
    "Panel ‘III’ – Valuation of Current Assets & Commodities",
  ];

  const landCriteria = [
    "Easy access, through difficult terrain or sparsely populated area.",
    "Weather, politically influenced environments.",
    "Area location (upper class, middle or lower/slums)",
    "Configuration of the actual covered area on ground.",
    "Configuration of the covered area as per the architectural design features. Simple configuration or with complicated additional features.",
    "Simple configuration requires simple calculations of Length and Depth.",
    "Complicated configurations or intricate designed plans require geometrical division of the area for calculations, (e.g. Triangles, rectangles, squares, and semi-circular segments etc.), conforming with the desired or designated plans.",
    "Different topography, landscapes and land depressions (if any) are also thoroughly measured and encompassed in our evaluation.",
  ];

  const buildingCriteria = [
    "Building Architectural Elevation (Roman, Western, or Simply Eastern)",
    "Foundation Type (Isolated, Strip, Matt, Pile Foundations)",
    "Quality of Building Structure (by Civil Engineering Codes and Ethics)",
    "Examine Geological Features of Site (Soil Bearing Capacity, Water Table, Depression etc)",
    "Prevalent on going market construction costs (Class A, B, and C)",
    "Make and Type of material employed (Local or Imported)",
    "Sanitary Fittings Type (PVC Pipe Fittings, Cast Iron Pipe Fittings)",
    "Electric Panels Type (Imported, Local)",
    "Quality Of Building Material (As per Engineering Codes)",
  ];

  const machineryCriteria = [
    "Operational / Non Operational",
    "Type of machinery and output capacity",
    "Make and origin of machinery",
    "Year of Installation / Inception Date / Year of Manufacture",
    "Normal wear and tear observations",
    "Analyzing/scrutiny of invoices with independent market checks through machinery agents, local or foreign",
    "Periodic maintenance (analysis of works and comparison from machinery maintenance vendors)",
    "Additions to machinery with year of inception of additions to determine the depreciation factor",
    "Market demand of same / similar make and type of machinery",
    "Foreign exchange fluctuation and PKR currency appreciation / depreciation",
  ];

  const otherCriteria = [
    "Geographical location",
    "Economy law and order situation",
    "Residential / Commercial / Industrial Titles",
    "Market demand",
    "Future market prospect",
    "Availability of civic amenities (current and future)",
  ];

  const assessmentSegments = [
    "Land",
    "Building Structure",
    "Plant, Machinery & Equipment",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/22.jpg"
          alt="Asset Evaluation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="text-center max-w-4xl">
            <p className="text-[#ff8d09] uppercase tracking-[4px] font-semibold text-xs sm:text-sm mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              ASSET EVALUATION
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
            Professional Valuation Services
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Services ASSET EVALUATION
          </h2>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-slate-600 text-sm sm:text-base leading-8 mb-5">
                We are Panels ‘I’, ‘II’ & ‘III’ Valuers, approved by the Pakistan
                Banks’ Association. This means we are authorized to provide
                independent Valuation of any kind of asset anywhere in Pakistan.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mb-6">
                The Panels in which our company is approved are categorized as
                follows:
              </p>

              <div className="space-y-4">
                {panels.map((panel, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white rounded-xl shadow-sm border border-slate-200 p-4"
                  >
                    <div className="w-8 h-8 min-w-8 rounded-full bg-[#ff8d09] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <p className="text-slate-700 leading-7">
                      {panel}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/22.jpg"
                alt="Asset Valuation"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ASSESSMENT SEGMENTS ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
              Our Evaluation Scope
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-5">
              Evaluation Assessment
            </h2>

            <p className="text-slate-600 leading-8">
              Our evaluation assessment encompasses three segments as follows:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {assessmentSegments.map((item, index) => (
              <div
                key={index}
                className="bg-[#0b1f3a] text-white rounded-2xl p-7 text-center shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#ff8d09] flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto space-y-5">
            <p className="text-slate-600 leading-8">
              Our evaluation team possesses deep insight to the current market
              conditions, and the prevalent economic situation, which enables us
              to produce thorough evaluation reports that are conducive to our
              clientele.
            </p>

            <p className="text-slate-600 leading-8">
              We have also tied up with the region’s largest property firms.
              This combined experience has enabled us to deliver reliable advice
              on local market conditions, of high professional standards.
            </p>
          </div>

        </div>
      </section>

      {/* ================= LAND CRITERIA ================= */}
      <CriteriaSection
        title="Land Assessment Criteria"
        subtitle="Agricultural, Urban, Residential, Commercial & Industrial"
        items={landCriteria}
      />

      {/* ================= BUILDING CRITERIA ================= */}
      <CriteriaSection
        title="Building Structure Assessment Criteria"
        items={buildingCriteria}
        alternate
      />

      {/* ================= MACHINERY CRITERIA ================= */}
      <CriteriaSection
        title="Plant, Machinery and Equipment Assessment Criteria"
        items={machineryCriteria}
      />

      {/* ================= OTHER CRITERIA ================= */}
      <CriteriaSection
        title="Other Criteria"
        items={otherCriteria}
        alternate
      />

      {/* ================= DEPRECIATION ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
              Asset Valuation Methodology
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a]">
              Depreciation Criteria
            </h2>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8">
            <p className="text-slate-600 leading-8">
              In view of the above information, we assess the present market
              values of Land, Building Structures and the Plant Machinery and
              Equipment. After the calculation of the present market value of
              the Building Structures, Plant Machinery and Equipment, the
              depreciation application is applied.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-8 shadow-xl">
              <div className="w-14 h-1 bg-[#ff8d09] rounded-full mb-5"></div>

              <h3 className="text-2xl font-bold text-white mb-5">
                Depreciation on Building Structure
              </h3>

              <p className="text-slate-300 leading-8">
                The depreciation is applied on the total life of the building
                structure, and the depreciation application ranges between
                0.5% to 2.0% per annum depending on the condition and
                maintenance works, respectively.
              </p>
            </div>

            <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-8 shadow-xl">
              <div className="w-14 h-1 bg-[#ff8d09] rounded-full mb-5"></div>

              <h3 className="text-2xl font-bold text-white mb-5">
                Depreciation on Plant, Machinery and Equipment
              </h3>

              <p className="text-slate-300 leading-8">
                The depreciation rates vary with age, demand, location,
                economy, weather, geographical position and criterias as
                mentioned above. The depreciation application ranges between
                3.0% to 5.0% per annum, respectively.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

const CriteriaSection = ({
  title,
  subtitle,
  items,
  alternate = false,
}) => {
  return (
    <section
      className={`py-16 sm:py-20 ${
        alternate ? "bg-white" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="mb-10">
          <div className="w-14 h-1 bg-[#ff8d09] rounded-full mb-5"></div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            {title}
          </h2>

          {subtitle && (
            <p className="text-[#ff8d09] font-medium mt-2">
              ({subtitle})
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#ff8d09]/40 transition-all duration-300"
            >
              <div className="mt-2 w-2.5 h-2.5 min-w-2.5 rounded-full bg-[#ff8d09]"></div>

              <p className="text-slate-600 leading-7 text-sm sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AssetEvaluation;