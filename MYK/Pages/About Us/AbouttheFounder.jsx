import React from "react";

const AbouttheFounder = () => {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/Images/13.png"
          alt="About the Founder"
          className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              About the Founder
            </h1>

            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[3px] text-amber-600 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates
          </h2>

          <p className="mt-3 text-slate-500">
            About the Founder
          </p>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-4"></div>
        </div>


        {/* ================= FOUNDER CONTENT ================= */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">

          <p className="text-[15px] sm:text-base leading-8 text-slate-600 mb-6">
            Mr. Muhammad Younas Khan is the Chairman and Chief Executive Officer
            of MYK Associates (Pvt.) Ltd, a company registered under the law of
            Pakistan Companies Ordinance 1984 and incorporated September 2000.
            Mr. Khan has years of professional experience in the banking and
            corporate sector combined and heads the MYK Group of Companies with
            other professionals.
          </p>

          <p className="text-[15px] sm:text-base leading-8 text-slate-600 mb-6">
            Formerly Mr. Khan has been the Country General Manager of Deutsche
            Bank in Pakistan. He has also been on the Board of Directors for
            the Oil and Gas Development Company Limited (OGDC), and National
            Refinery Limited (NRL), two of the largest companies in the Oil
            Sector of Pakistan.
          </p>

          <p className="text-[15px] sm:text-base leading-8 text-slate-600">
            A Chartered Accountant by Qualification from England and Wales
            (FCA), Mr. Khan is a banker by profession. He is also a Fellow of
            the Institute of Bankers in Pakistan (IBP), and the Institute of
            Chartered Accountants of Pakistan (ICAP). He is accredited with
            having completed his Masters from the University of Punjab. Mr.
            Khan is well reputed in the Banking and Corporate sector, local
            business circles and the Government of Pakistan.
          </p>

        </div>
      </section>


      {/* ================= POSITIONS SECTION ================= */}
      <section className="bg-[#0b1f3a] py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">

            <p className="text-amber-400 uppercase tracking-[3px] text-sm font-semibold">
              Professional Journey
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Positions & Experience
            </h2>

            <div className="w-20 h-[3px] bg-amber-400 mx-auto mt-4"></div>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ================= OTHER POSITIONS ================= */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">

              <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-6">
                OTHER POSITIONS HELD:
              </h2>

              <ul className="space-y-4">

                {[
                  "President of the Overseas Investors, Chamber of Commerce and Industry",
                  "Chairman of the German Business Council (Kaufmannsrunde)",
                  "Chairman of the Pakistan Banks’ Association",
                  "Member of the Managing Committee of Pakistan Banks’ Association",
                  "Member of the Management Association of Pakistan",
                  "Member of the Rotary Club of Karachi Metropolitan",
                  "Member of the Pakistan German Business Forum",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-600 leading-7"
                  >
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>

                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>


            {/* ================= PREVIOUS POSITIONS ================= */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">

              <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-6">
                PREVIOUS POSITIONS HELD:
              </h2>

              <ul className="space-y-4">

                {[
                  "Member of the Pakistan Investment Board (Responsible for attracting Foreign Investment in Pakistan)",
                  "Member of the Investment Council of Pakistan",
                  "Trustee of the Karachi Port Trust",
                  "Chairman of the Banking and Finance Sub- Committee, for Overseas Investor Chamber of Commerce and Industry",
                  "Member of the Managing Committee of Overseas Investor Chamber of Commerce and Industry",
                  "Director of the Pakistan Fund (Foreign Currency Equity Fund)",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-600 leading-7"
                  >
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>

                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MANAGEMENT TEAM ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

        <div className="bg-white border-l-4 border-amber-500 rounded-xl shadow-sm p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-[#0b1f3a] mb-4">
            Management Team
          </h2>

          <p className="text-slate-600 leading-8">
            His management team and associates are professionals with
            distinguished senior management experience, in the multinational
            environment and in large corporations, both in Pakistan and
            overseas.
          </p>

        </div>

      </section>

    </main>
  );
};

export default AbouttheFounder;