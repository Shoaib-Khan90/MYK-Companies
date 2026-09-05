import React from "react";

const GroupCompanies = () => {
  const marineServices = [
    "VESSEL CONDITION SURVEY",
    "ON / OFF HIRE SURVEY",
    "P & I CLUB SURVEY",
    "INVESTIGATION DAMAGE SURVEY",
    "CONTAINER SURVEY",
    "SAMPLING OF DRY & LIQUID CARGO",
    "MARINE INSURANCE SURVEY",
    "MARINE CONSULTANCY",
    "PRE-SHIPMENT INSPECTION",
    "LOADING / UNLOADING SUPERVISION",
    "SEAL VERIFICATION SURVEY",
    "PROJECT CARGO LOAD / DISCHARGE SURVEY",
    "DRAFT SURVEY",
    "HATCH / HOLD INSPECTION",
    "BULK / LIQUID CARGO SURVEY",
    "OIL AND GAS FIELD SURVEY",
    "BUNKER SURVEY",
    "HULL SURVEY & DAMAGE ASSESSMENT",
    "CLASSIFICATION SURVEY",
    "CHARTERING",
    "STOWAGE AND LASHING",
    "QUALITY AND QUANTITY SURVEY",
    "SAMPLING OF DRY & LIQUID CARGO",
  ];

  const consultancyServices = [
    "Getting the correct insurance coverage.",
    "Making sure that you are not paying high premium rates for insurance policies covering less coverage or not encompassing important coverage / missing coverage of items that will cost you in time of loss. We want to make sure that you are paying for the right amount of optimum coverage.",
    "Provide guidance at time of loss in the preparation of claims paper work and also other information.",
    "To provide you independent assessment of loss in order to negotiate with the underwriters and their loss adjusters.",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/Images/31.png"
          alt="Group Companies"
          className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Group Companies
            </h1>

            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="text-center max-w-4xl mx-auto">

          <p className="text-sm uppercase tracking-[3px] text-amber-600 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            MYK Group of Companies
          </h2>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-5 mb-6"></div>

          <p className="text-slate-600 leading-8">
            Under the MYK Group of Companies umbrella, we like to take the
            opportunity to introduce our sister companies, Survey Scale (Pvt.)
            Ltd – SSL and FAK Associates.
          </p>

        </div>
      </section>

      {/* ================= SURVEY SCALE ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">

          {/* HEADER */}
          <div className="bg-[#0b1f3a] px-6 sm:px-10 py-8">

            <p className="text-amber-400 uppercase tracking-[3px] text-sm font-semibold">
              Sister Company
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Survey Scale (Pvt.) Ltd - SSL
            </h2>

          </div>

          {/* CONTENT */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-5 text-slate-600 leading-8">

            <p>
              Survey Scale (Pvt.) Ltd - SSL is an ISO 9001:2015 approved
              company. The company is approved by the SECP (Securities and
              Exchange Commission of Pakistan) in all classes of Insurance:
              FIRE AND PROPERTY DAMAGE BUSINESS, MISCELLANEOUS BUSINESS,
              MARINE, AVIATION & TRANSPORT BUSINESS and MOTOR & THIRD PARTY
              COMPULSARY BUSINESS. We have been operating as loss adjusters
              for the Insurance Sector in Pakistan since 1987.
            </p>

            <p>
              SSL is a corporate member of FIG (International Federation of
              Surveyors). FIG is the premier international organization
              representing the interests of surveyors worldwide. It is a
              federation of the national member associations and covers the
              whole range of professional fields within the global surveying
              community. It provides an international forum for discussion and
              development aiming to promote professional practice and
              standards.
            </p>

            <p>
              Being a corporate member, it gives our company priority to
              provide commercial services related to the profession of
              surveyors.
            </p>

            <p>
              Our company is on the panel of all the major Insurance Companies
              in Pakistan, carrying out surveys and settling their claims in
              all classes of insurance including Adamjee Insurance, JGI
              Insurance, EFU General Insurance, Habib Insurance, IGI Insurance,
              Atlas Insurance, Pak Qatar Takaful, Takaful Pakistan Ltd, UBL
              Insurers, PICIC Insurance, Premier Insurance, East West
              Insurance, amongst others.
            </p>

            <p>
              Through the years, we have gained vast experience in handling all
              kinds of claims settlements relating from motor to fire/property
              claims, machinery breakdown, and miscellaneous engineering
              claims, claims of policies of bankers blanket, medical
              compensation, as well as pre-insurance inspections and risk
              assessments.
            </p>

          </div>
        </div>
      </section>

      {/* ================= PRE INSURANCE ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14">

        <div className="bg-white border-l-4 border-amber-500 rounded-xl shadow-sm p-7 sm:p-9">

          <h2 className="text-2xl font-bold text-[#0b1f3a] mb-4">
            Pre-Insurance Inspections
          </h2>

          <p className="text-slate-600 leading-8">
            We conduct Pre-Insurance Inspection surveys for Non Motor as well
            as Motor classes of Insurance. Before a Policy cover is issued by
            the insurers, we are intimated the type of asset and location to
            be fully inspected against the provided documentation. A thorough
            report is then prepared for the insurers so that they may issue
            the relevant insurance policy cover against mitigated risks on an
            immediate basis to facilitate their clientele.
          </p>

        </div>
      </section>

      {/* ================= MARINE SERVICES ================= */}
      <section className="bg-[#0b1f3a] py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">

            <p className="text-amber-400 uppercase tracking-[3px] text-sm font-semibold">
              Survey Scale
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Our Marine Services
            </h2>

            <div className="w-20 h-[3px] bg-amber-400 mx-auto mt-5"></div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {marineServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-10 h-10 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center text-xs font-bold group-hover:bg-amber-400 group-hover:text-[#0b1f3a] transition">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-[#0b1f3a] font-semibold text-sm">
                  {service}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= MARINE EXPERIENCE ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a]">
            Marine & Shipping Expertise
          </h2>

          <div className="w-16 h-[3px] bg-amber-500 mt-4 mb-7"></div>

          <div className="space-y-5 text-slate-600 leading-8">

            <p>
              Under pre-shipment inspections of the cargo (liquid or dry), we
              have gained vast expertise in loading and unloading supervisions
              of the critical packages pertaining to the project cargoes and
              various break bulk cargoes, marine cargo import and export
              surveys, container inspections, sampling and hull & machinery
              surveys.
            </p>

            <p>
              In marine & shipping, our company has handled claims assigned
              through TT Clubs Dubai. We have adjusted claims for container
              terminals namely PICT, KICT, QICT and SAPT for all their claims /
              inspections of various terminals, liability, property and large
              quantum investigation cases.
            </p>

            <p>
              In this respect we gained a vast experience of handling all the
              claims relating to liability / property of the said container
              terminals with a team of professionally trained and well
              experienced marine surveyors.
            </p>

            <p>
              Under our Marine Division, our senior management staff comprises
              of master mariners, marine engineers, insurance surveyors,
              valuation experts, and loss adjusters with professional licensing
              and qualified experience in their related fields.
            </p>

            <p>
              Our master mariners are fully conversant and capable of handling
              ship management matters, comprising of ship repairs, ship
              surveys, classification surveys (hull and machinery), P&I Club
              surveys, third party surveys, damaged cargo surveys, cargo
              handling, chartering matters, ISM documentation, and
              certification and ISPS matters.
            </p>

            <p>
              Under our senior management, we have a team of dedicated
              surveyors / loss adjusters with experience, professional
              accreditation and information of more than three decades of
              experience in the field of FIRE/PROPERTY, MISC/MBD and MARINE
              insurance loss adjusting.
            </p>

            <p>
              SSL also acts as insurance consultants, helping clients for their
              complete insurance coverage with right amount of premium. We
              also provide services as internal / private loss assessors to
              assist and guide clients at the time of losses; in their correct
              provision of paper work, information and the right assessment of
              loss in order to negotiate with their underwriters and
              independent loss adjusters.
            </p>

            <p>
              Keeping in mind our vast experience and expertise in the field
              relating to insurance, risk inspections, marine/shipping, we are
              here to serve our clientele and making sure to minimize their
              expenditures by providing professional services in this respect.
            </p>

          </div>
        </div>
      </section>

      {/* ================= INSURANCE CONSULTANCY ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16">

        <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-10">

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Insurance Consultancy
          </h2>

          <div className="w-16 h-[3px] bg-amber-400 mt-4 mb-5"></div>

          <p className="text-slate-300 mb-8">
            By offering our services as insurance consultants, we can assist
            you in:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {consultancyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-xl p-5 flex gap-4"
              >

                <div className="w-9 h-9 shrink-0 bg-amber-400 text-[#0b1f3a] rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                <p className="text-slate-200 leading-7 text-sm sm:text-base">
                  {service}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= NATIONWIDE ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16">

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 sm:p-9 text-center">

          <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold">
            Nationwide Network
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a] mt-2">
            Nationwide Operations
          </h2>

          <div className="w-16 h-[3px] bg-amber-500 mx-auto my-5"></div>

          <p className="max-w-4xl mx-auto text-slate-600 leading-8">
            We are a nationwide firm with our Head Office in Karachi and branch
            network in Lahore, Faisalabad, Multan and Gujranwala, Islamabad and
            Hyderabad. Being a nationwide company, we are able to conduct
            evaluations all across the country through a one window operation.
          </p>

          {/* SURVEY SCALE CLICKABLE LINK */}
          <a
            href="https://www.surveyscale.com.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-[#0b1f3a] font-bold underline underline-offset-4 decoration-amber-500 hover:text-amber-600 transition-colors duration-300"
          >
            www.surveyscale.com.pk
          </a>

        </div>
      </section>

      {/* ================= FAK ASSOCIATES ================= */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="mb-9">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold">
              Sister Company
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-2">
              FAK Associates
            </h2>

            <p className="text-amber-600 font-semibold mt-2">
              Investment Consultants, Equity & Real Estate
            </p>

            <div className="w-20 h-[3px] bg-amber-500 mt-5"></div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* INVESTMENT CONSULTANCY */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 sm:p-8">

              <h3 className="text-xl font-bold text-[#0b1f3a] mb-5">
                Investment Consultancy
              </h3>

              <div className="space-y-5 text-slate-600 leading-8">

                <p>
                  Investment Consultants, Equity & Real Estate offers
                  consultancy as a one window operation in your investment
                  portfolio.
                </p>

                <p>
                  Our advice on stocks and shares is research based and our
                  experts have deep understanding of the market with our main
                  aim of ensuring maximum returns. Our team with an experience
                  of more than two decades has been involved with capital and
                  property market investments in various capacities.
                </p>

                <p>
                  By forming an investment strategy and develop long term
                  working relationships, we actively monitor our clienteles’
                  investments and continue to work with them as their financial
                  objectives change over time. Our investment approach is
                  contrarian and value enriched with mid to long term
                  investment horizons.
                </p>

                <p>
                  We are currently advising corporates, financial entities and
                  high net worth individuals on equity portfolios.
                </p>

              </div>
            </div>

            {/* REAL ESTATE */}
            <div className="bg-[#0b1f3a] rounded-2xl p-7 sm:p-8">

              <h3 className="text-xl font-bold text-white mb-5">
                Real Estate Consultancy
              </h3>

              <div className="space-y-5 text-slate-300 leading-8">

                <p>
                  Over the years we have gained in-depth experience of the Real
                  Estate Market in various areas. We advise our clientele upon
                  their requirement for purely investment purposes or for their
                  own usage.
                </p>

                <p>
                  These may be Residential, Commercial, and Industrial in
                  nature. We operate in all sectors of DHA, Clifton, Bahria
                  Town, and DHA City.
                </p>

                <p>
                  For Industrial plots, our expertise lies in Korangi
                  Industrial Area, SITE Area, Port Qasim, Nooriabad and SITE
                  Super Highway.
                </p>

                <p>
                  We also give advice on buying and or selling plots for
                  residential and commercial purposes in the city. We always
                  make sure that the price is competitive with proper
                  documentation and the parties involved in the transactions
                  are genuine.
                </p>

              </div>
            </div>

          </div>

          {/* ================= FAK DETAILS ================= */}
          <div className="mt-8 bg-slate-50 rounded-2xl border border-slate-200 p-7 sm:p-9">

            <div className="space-y-5 text-slate-600 leading-8">

              <p>
                We strongly recommend that investments should be made in safe
                venues to maximize returns whilst spreading the risk.
              </p>

              <p>
                Be rest assured that being professional and proficient
                consultants, we will always attempt to deliver the highest rate
                of return on your investment by being on the forefront for the
                highest standards.
              </p>

              <p>
                The team at FAK Associates is guided by our principles and
                strives to learn and improve every day. We have a passion for
                guiding our clientele to maximize portfolios whilst mitigating
                risk.
              </p>

              <p>
                We value the relationships of the clientele we work with and
                are proud as our education-based approach allows us to grow
                with our clients.
              </p>

              {/* FAK CLICKABLE LINK */}
              <a
                href="https://www.fakassociates.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold text-[#0b1f3a] underline underline-offset-4 decoration-amber-500 hover:text-amber-600 transition-colors duration-300"
              >
                www.fakassociates.com
              </a>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default GroupCompanies;