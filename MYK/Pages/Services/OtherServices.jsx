import React from "react";

const OtherServices = () => {
  const services = [
    "Valuation Advisory",
    "Real Estate Advisory Services",
    "Overseas Real Estate Purchase and Sale Services",
    "Brokerage Services",
    "Development Advisory Services",
    "Real Estate Investment Trust (REIT) Consultancy",
    "Building & Project Consultancy",
    "Market Research Study For Projects",
    "Real Estate Management Services",
    "Mergers & Acquisitions",
    "Insurance Solutions",
    "Inspections",
    "Human Resource Services",
    "Consulting Engineers",
    "Logistics",
    "Insurance Claim Settlements",
    "Pre Risk Insurance Surveys",
  ];

  const serviceDetails = [
    {
      number: "01",
      title: "Valuation & Advisory Services",
      text: `MYK is a NO LIMIT company as per the regulating body standards. 
      This means we are authorized to provide independent valuations and amount 
      of assets of any kind in Pakistan.

      Our evaluation team has profound insight into the current market conditions 
      and the prevalent economic situation, which enables us to generate thorough 
      evaluation reports. These reports are on the international valuation standard.

      We have also tied up with the region's largest property firms. This collective 
      experience has enabled us to deliver reliable advice of high professional standard.`,
    },
    {
      number: "02",
      title: "Real Estate Advisory Services",
      text: `MYK has over a decade of evaluation experience and a widespread database 
      to involve in the real estate advisory services on a countrywide basis. By joining 
      hands with the region's top property firms, we are able to provide real estate 
      advice of professional standard. We also have vast in-house data and are able to 
      advise on the trend analysis of the real estate market.`,
    },
    {
      number: "03",
      title: "Overseas Real Estate Purchase & Sale Services",
      text: `Real Estate is increasing globally day by day and the solution always remains 
      local. MYK gives you the option of overseas buying and selling or the need to 
      evaluate your real estate as a one stop shop service. Our team of expert 
      professionals will guide you in all of your overseas real estate needs.`,
    },
    {
      number: "04",
      title: "Brokerage Services",
      text: `Our brokerage services include transaction management services of the 
      properties for purchase, sale, rental and lease management services. Our 
      countrywide presence is ideal to assist you in all your real estate requirements. 
      Our aim is to develop and implement real estate strategies for our clients that 
      maximize the effectiveness of the transaction and optimize the utilization of 
      their real estate portfolios.`,
    },
    {
      number: "05",
      title: "Development Advisory Services",
      text: `MYK also provides a wide range of professional advisory services for support 
      to the developers and investors for their real estate investment local and overseas. 
      Our services include the analysis of open land to the development plan; feasibility 
      analysis of the project as well as the plan, review and evaluation requirements.`,
    },
    {
      number: "06",
      title: "REIT Consultancy",
      text: `We provide Real Estate Investment Trust (REIT) Consultancy to the clients 
      who are interested in becoming a part of a Real Estate Corporate Sector of the 
      Country. We have a consortium with AHG, with a professional working relationship 
      on in-depth market study, analysis & feasibility, FARs, project estimation costing, 
      rentals and sale projections.`,
    },
    {
      number: "07",
      title: "Building & Project Consultancy",
      text: `Our project and cost management consultants operate as a specialist extension 
      to a client's business, utilized for defined periods of time, to manage the delivery 
      of fit-out and refurbishment works, however big or small they may be.

      We offer bespoke specialist solutions on all technical aspects of acquisitions, 
      development, ownership, occupation and disposal. We act as the primary point of 
      contact, coordinating design and construction matters including selection and 
      appointment of consultants and contractors.`,
    },
    {
      number: "08",
      title: "Market Research Study For Projects",
      text: `As specialists in commercial and residential property research, we provide 
      thorough advice and analysis to our clientele. Our team provides timely analysis, 
      research & feasibility and thorough observation on all sectors of the market.

      Each project is treated individually, whether working on behalf of a land owner, 
      developer, investor, housing association, bank or any other public sector group.`,
    },
    {
      number: "09",
      title: "Real Estate Management Services",
      text: `Through our sister company FAK Associates, we work with clients to develop 
      and implement their asset and portfolio management solutions that enhance value 
      and increase efficiency.

      Our management experts use industry-leading processes and platforms to consistently 
      increase income, mitigate risk and enhance the value of assets.`,
    },
    {
      number: "10",
      title: "Mergers & Acquisitions",
      text: `With the change in business environment and competitive landscape, businesses 
      may look at mergers and acquisitions as long-term strategic moves to foster future 
      growth or make the most of available synergies.

      Identifying or understanding the target, structuring or negotiating the deal, 
      reviewing documentation or assessing an appropriate price requires a thorough 
      understanding of various aspects of the business and its ecosystem.`,
    },
    {
      number: "11",
      title: "Insurance Solutions",
      text: `MYK offers expert advice for insurance solutions to clients in order for 
      them to make informed decisions about relevant insurance policies that cover their 
      assets. This helps improve response time and decision-making prior to a claim 
      occurring.`,
    },
    {
      number: "12",
      title: "Inspections",
      text: `Inspection Services are offered by MYK through their sister concern company, 
      Survey Scale (Pvt.) Ltd., a limited company approved by the Securities and Exchange 
      Commission of Pakistan (SECP) in all classes of insurance.

      Services include Pre-Shipment Inspections, Post Shipment Inspections and Container 
      Loading Supervision.`,
    },
    {
      number: "13",
      title: "Human Resource Services",
      text: `MYK offers quality HR services and solutions. We offer HR Consultancy and 
      training for professional development.`,
    },
    {
      number: "14",
      title: "Consulting Engineers",
      text: `MYK offers a complete range of services from conception to commissioning 
      including Feasibility Studies, Detailed Design, Construction Supervision, Operation 
      and Maintenance, Inspection, Remedial Works and Training.`,
    },
    {
      number: "15",
      title: "Logistics",
      text: `MYK through our sister concern company deals in Commercial Exports / Imports 
      using Surface, Air & Sea modes of transportation.

      Our core competency is traditional freight forwarding services where we are also 
      offering Logistics & Supply Chain Management Services to bring efficiency and 
      effectiveness in the overall supply chains of our valued customers.`,
    },
    {
      number: "16",
      title: "Insurance Claim Settlements",
      text: `Claim Insurance Settlements are offered by MYK through their sister concern 
      company, Survey Scale (Pvt.) Ltd. Survey Scale operates as loss adjusters for the 
      Insurance Sector in Pakistan in the relevant insurance categories.`,
    },
    {
      number: "17",
      title: "Pre Risk Insurance Surveys",
      text: `This service is offered by MYK through their sister concern company, Survey 
      Scale (Pvt.) Ltd. Pre-Insurance Inspection surveys are offered for both Motor and 
      Non-Motor classes of Insurance.

      Before a policy cover is issued, the type of asset and location are fully inspected 
      against the provided documentation. A thorough report is then prepared for the 
      insurers.`,
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/12.png"
          alt="MYK Associates Other Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
          <div className="max-w-4xl">
            <p className="text-[#ff8d09] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Other Services
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mt-6"></div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-bold">
                Welcome to MYK Associates
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
                Comprehensive Professional Services
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mb-7"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                MYK Associates provides a comprehensive range of professional
                services covering valuation, real estate, project consultancy,
                market research, insurance, inspections, human resources,
                engineering and logistics.
              </p>

              <p className="text-slate-600 leading-8 mt-5">
                Our multidisciplinary approach enables us to support clients
                across different sectors through specialized professional
                expertise.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#ff8d09] rounded-xl"></div>

              <img
                src="/Images/12.png"
                alt="MYK Associates Services"
                className="relative z-10 w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover rounded-xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ALL SERVICES ================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              What We Offer
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
              Our Professional Services
            </h2>

            <p className="text-slate-600 leading-7">
              Explore the wide range of specialized services offered by
              MYK Associates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:bg-[#0b1f3a] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#ff8d09] text-white flex items-center justify-center font-bold mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-[#0b1f3a] group-hover:text-white font-bold leading-6 transition-colors">
                  {service}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= DETAIL HEADING ================= */}
      <section className="bg-[#0b1f3a] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
            Service Details
          </span>

          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3">
            Expertise Across Multiple Sectors
          </h2>

          <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-6"></div>

        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="space-y-6">

            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-xl hover:border-[#ff8d09]/40 transition-all duration-300"
              >
                <div className="grid md:grid-cols-[90px_1fr] gap-5 md:gap-8">

                  {/* NUMBER */}
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center text-xl font-bold transition-colors duration-300">
                      {service.number}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-4">
                      {service.title}
                    </h2>

                    <div className="w-12 h-1 bg-[#ff8d09] mb-5"></div>

                    {service.text
                      .split("\n\n")
                      .map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-slate-600 leading-8 mb-4 last:mb-0"
                        >
                          {paragraph.trim()}
                        </p>
                      ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= INSPECTION SERVICES ================= */}
      <section className="bg-[#0b1f3a] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Inspection Services
            </span>

            <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3">
              Services Offered
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition">
              <div className="text-[#ff8d09] text-3xl font-bold mb-5">
                01
              </div>

              <h3 className="text-white text-xl font-bold mb-4">
                Pre-Shipment Inspection
              </h3>

              <p className="text-slate-300 leading-7">
                An important quality control method for checking the quality,
                quantity, packing and compliance of goods before shipment.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition">
              <div className="text-[#ff8d09] text-3xl font-bold mb-5">
                02
              </div>

              <h3 className="text-white text-xl font-bold mb-4">
                Post Shipment Inspection
              </h3>

              <p className="text-slate-300 leading-7">
                Inspection upon arrival to determine whether the quality and
                quantity of goods conform to the specifications stated in the
                sales contract.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition">
              <div className="text-[#ff8d09] text-3xl font-bold mb-5">
                03
              </div>

              <h3 className="text-white text-xl font-bold mb-4">
                Container Loading Supervision
              </h3>

              <p className="text-slate-300 leading-7">
                Qualified inspectors monitor container conditions, loading,
                quantity and packaging to ensure shipment requirements are
                properly followed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center shadow-xl">

            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              Professional Expertise Across Diverse Services
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 leading-7 mt-4">
              MYK Associates combines professional expertise, industry
              knowledge and specialized services to support clients across
              multiple business sectors.
            </p>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-7"></div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default OtherServices;