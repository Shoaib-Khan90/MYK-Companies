import React from "react";

const CompanyObjectives = () => {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/Images/20.png"
          alt="Company Objectives"
          className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Company Objectives
            </h1>

            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </section>


      {/* ================= HEADING ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-8">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[3px] text-amber-600 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Our Company Objectives
          </h2>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-5"></div>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 leading-7">
            Building trust, professionalism and long-term value through
            excellence in everything we do.
          </p>
        </div>

      </section>


      {/* ================= OBJECTIVES ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* OBJECTIVE 1 */}
          <div
            className="
              group
              bg-white
              border border-slate-200
              rounded-2xl
              p-7 sm:p-8
              shadow-sm
              hover:bg-[#0b1f3a]
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
            "
          >

            <div className="w-14 h-14 bg-[#0b1f3a] group-hover:bg-amber-400 rounded-full flex items-center justify-center mb-6 transition duration-300">
              <span className="text-amber-400 group-hover:text-[#0b1f3a] text-xl font-bold">
                01
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mb-4 transition duration-300">
              Industry Leadership
            </h3>

            <p className="text-slate-600 group-hover:text-slate-300 leading-8 transition duration-300">
              Our ultimate goal is to set ourselves apart as a credible
              industry leader, dedicated to providing seamless services and
              value that our clients can trust.
            </p>

          </div>


          {/* OBJECTIVE 2 */}
          <div
            className="
              group
              bg-white
              border border-slate-200
              rounded-2xl
              p-7 sm:p-8
              shadow-sm
              hover:bg-[#0b1f3a]
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
            "
          >

            <div className="w-14 h-14 bg-[#0b1f3a] group-hover:bg-amber-400 rounded-full flex items-center justify-center mb-6 transition duration-300">
              <span className="text-amber-400 group-hover:text-[#0b1f3a] text-xl font-bold">
                02
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mb-4 transition duration-300">
              Professional Environment
            </h3>

            <p className="text-slate-600 group-hover:text-slate-300 leading-8 transition duration-300">
              We are committed to providing a professional work environment
              that encourages and rewards dedication, teamwork, honesty and
              reliability.
            </p>

          </div>


          {/* OBJECTIVE 3 */}
          <div
            className="
              group
              bg-white
              border border-slate-200
              rounded-2xl
              p-7 sm:p-8
              shadow-sm
              hover:bg-[#0b1f3a]
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
            "
          >

            <div className="w-14 h-14 bg-[#0b1f3a] group-hover:bg-amber-400 rounded-full flex items-center justify-center mb-6 transition duration-300">
              <span className="text-amber-400 group-hover:text-[#0b1f3a] text-xl font-bold">
                03
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mb-4 transition duration-300">
              Education & Training
            </h3>

            <p className="text-slate-600 group-hover:text-slate-300 leading-8 transition duration-300">
              Educate & train the youth interested in this growing field,
              thereby contributing to the community at-large.
            </p>

          </div>

        </div>
      </section>


      {/* ================= BOTTOM SECTION ================= */}
      <section className="bg-[#0b1f3a]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Committed to Excellence
            </h2>

            <div className="w-16 h-[3px] bg-amber-400 mx-auto mt-4 mb-5"></div>

            <p className="text-slate-300 leading-8">
              Our objectives guide us towards delivering reliable professional
              services, developing our people and creating lasting value for
              our clients and community.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default CompanyObjectives;