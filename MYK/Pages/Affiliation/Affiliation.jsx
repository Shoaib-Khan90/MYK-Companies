import React from "react";

const Affiliation = () => {
  const bankingClients = [
    "FAB",
    "DIB",
    "Mashreq Bank",
    "ADCB",
    "RAKBANK",
    "CBI",
    "ICICI Bank",
    "Al Hilal Bank",
    "Habib Bank AG Zurich",
    "Ajman Bank",
    "Masraf Bank",
    "United Arab Bank",
    "Sharjah Islamic Bank",
    "Ahli Bank of Kuwait",
    "Blom Bank",
  ];

  const highlights = [
    {
      number: "50+",
      title: "Years of Experience",
      text: "International valuation experience",
    },
    {
      number: "800+",
      title: "Corporate Clients",
      text: "Corporate and institutional clients",
    },
    {
      number: "13",
      title: "Countries",
      text: "International valuation solutions",
    },
    {
      number: "3",
      title: "Branch Offices",
      text: "Dubai, Abu Dhabi and Ajman",
    },
  ];

  const recognitions = [
    "Gold Ranking by Dubai Land Department (DLD) and RERA consistently since 2021",
    "Highest number of valuations done in Dubai in 2021",
    "Highest number of five-star Valuers awarded by DLD in 2022",
    "Most Professional Services Company under the patronage of Dubai Economy",
    "Best Real Estate Consulting Company – Runner Up under the patronage of DLD",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/47.png"
          alt="MYK Associates International Affiliation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
          <div className="max-w-4xl">

            <p className="text-[#ff8d09] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              MYK Associates
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              International Affiliation
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
                Global Partnership
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5 leading-tight">
                Windmills Real Estate Valuation Services LLC
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mb-7"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                MYK has an international affiliation with M/s Windmills Real
                Estate Valuation Services LLC Dubai (UAE).
              </p>

              <p className="text-slate-600 leading-8 mt-5">
                Having an international valuation experience of over 50 years,
                Windmills is a market leader in asset valuations, consulting
                and management advisory services in the United Arab Emirates.
              </p>

              <p className="text-slate-600 leading-8 mt-5">
                It is one of the top-rated valuation firms with RERA and Dubai
                Land Department (DLD).
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#ff8d09] rounded-xl"></div>

              <img
                src="/Images/47.png"
                alt="Windmills Real Estate Valuation Services"
                className="relative z-10 w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover rounded-xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#0b1f3a] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center bg-white/5 border border-white/10 rounded-xl p-5 sm:p-7"
              >
                <h3 className="text-[#ff8d09] text-3xl sm:text-4xl font-bold">
                  {item.number}
                </h3>

                <h4 className="text-white font-bold mt-3">
                  {item.title}
                </h4>

                <p className="text-slate-400 text-sm mt-2">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= COMPANY PROFILE ================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              About Windmills
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-6">
              International Valuation Expertise
            </h2>

            <div className="w-16 h-1 bg-[#ff8d09] mb-8"></div>

            <div className="space-y-5 text-slate-600 leading-8">

              <p>
                Windmills is a multiple award winning company from MEED and
                Netherlands Business Council under the patronage of Dubai Land
                Department and Dubai Economic Department.
              </p>

              <p>
                Windmills continues and has conducted various projects across
                all of the Emirates, GCC and internationally.
              </p>

              <p>
                Windmills has more than 800 corporate and institutional clients
                and thousands of individual clients, including UAE Government
                Authorities, Family Groups, Blue Chip Insurance Companies and
                many public and private companies.
              </p>

              <p>
                Its services are compliant with International and Local
                Valuation Standards promoted by RICS, RERA and ISO Standards.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= BANKING CLIENTS ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Banking Relationships
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3">
              Banking Clients
            </h2>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

            {bankingClients.map((bank, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl min-h-[90px] px-4 py-5 flex items-center justify-center text-center hover:border-[#ff8d09] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-[#0b1f3a] font-bold">
                  {bank}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= INTERNATIONAL PRESENCE ================= */}
      <section className="bg-[#0b1f3a] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            <div>
              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
                International Presence
              </span>

              <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Serving Clients Across Borders
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mb-7"></div>

              <p className="text-slate-300 leading-8">
                Windmills has three branch offices in Dubai, Abu Dhabi and
                Ajman to cater to clientele needs efficiently.
              </p>

              <p className="text-slate-300 leading-8 mt-5">
                Additionally, the company provides its clients with
                international valuation service solutions in 13 countries
                around the world.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">

              {["Dubai", "Abu Dhabi", "Ajman"].map((city, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-7 flex flex-col justify-center text-center min-h-[160px] hover:bg-white/10 transition"
                >
                  <div className="text-[#ff8d09] font-bold text-sm mb-3">
                    0{index + 1}
                  </div>

                  <h3 className="text-white text-xl font-bold">
                    {city}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2">
                    UAE
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= RECOGNITION ================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">

            <div>
              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
                Awards & Recognition
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 leading-tight">
                Professional Recognition in the UAE
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mt-6"></div>

              <p className="text-slate-600 leading-7 mt-6">
                Windmills has received recognition from UAE regulatory and
                industry authorities for its valuation and professional
                services.
              </p>
            </div>

            <div className="space-y-4">

              {recognitions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  <div className="w-9 h-9 min-w-9 bg-[#ff8d09] rounded-lg text-white flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <p className="text-slate-700 leading-7">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= STANDARDS ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <span className="text-[#ff8d09] text-sm font-bold">
                01
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] mt-3 mb-4">
                DLD & RERA
              </h3>

              <p className="text-slate-600 leading-7">
                Windmills is licensed and registered with the Dubai Land
                Department and Real Estate Regulatory Agency.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <span className="text-[#ff8d09] text-sm font-bold">
                02
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] mt-3 mb-4">
                International Standards
              </h3>

              <p className="text-slate-600 leading-7">
                Services follow International Valuation Standards (IVS) and
                the Emirates Book of Valuation Standards (EBVS).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <span className="text-[#ff8d09] text-sm font-bold">
                03
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] mt-3 mb-4">
                RICS Expertise
              </h3>

              <p className="text-slate-600 leading-7">
                Valuation, building consulting and management consulting teams
                are managed by four Chartered Valuer members of RICS.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAXIMA ================= */}
      <section className="py-14 sm:py-20 bg-[#0b1f3a]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Technology & Innovation
            </span>

            <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Maxima Valuation Model
            </h2>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mb-7"></div>

            <p className="text-slate-300 text-base sm:text-lg leading-8">
              The flagship value proposition of Windmills is its automatic and
              scientific valuation model application called Maxima.
            </p>

            <p className="text-slate-300 leading-8 mt-5">
              The application is focused on delivering precise values,
              control, compliance and high-quality service with faster
              turnaround time and economical service fees.
            </p>

          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-5xl mx-auto border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Leadership
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3">
              Mr. Bilal Moti
            </h2>

            <p className="text-[#ff8d09] font-semibold mt-2">
              Founder & Chairman
            </p>

            <div className="w-16 h-1 bg-[#ff8d09] my-7"></div>

            <p className="text-slate-600 leading-8">
              The Founder and Chairman, Mr. Bilal Moti, is an MBA and also a
              professionally qualified member of RICS (MRICS) since 2016.
            </p>

            <p className="text-slate-600 leading-8 mt-5">
              He has 25 years of commercial banking and investment banking
              experience, and 15 years of real estate investment and valuation
              experience in UAE, GCC and internationally.
            </p>

            <p className="text-slate-600 leading-8 mt-5">
              He is the Vice Chairman and Board Member of Dubai Chamber Real
              Estate Valuation Advisory Group.
            </p>

          </div>
        </div>
      </section>

      {/* ================= BOTTOM ================= */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center shadow-xl">

            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              International Expertise. Professional Standards.
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 leading-7 mt-4">
              MYK Associates' affiliation with Windmills Real Estate Valuation
              Services LLC extends professional valuation expertise across the
              UAE and international markets.
            </p>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-7"></div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Affiliation;