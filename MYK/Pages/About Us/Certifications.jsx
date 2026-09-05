import React from "react";

const Certifications = () => {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/Images/29.png"
          alt="Certifications"
          className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-5">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Certifications
            </h1>

            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>

          </div>
        </div>
      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-10">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[3px] text-amber-600 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Our Certifications
          </h2>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-5"></div>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 leading-7">
            Welcome to MYK Associates Certifications
          </p>

        </div>

      </section>


      {/* ================= ISO CERTIFICATION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14">

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            shadow-lg
            overflow-hidden
            grid
            grid-cols-1
            lg:grid-cols-2
          "
        >

          {/* LEFT CONTENT */}
          <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">

            <div className="inline-flex items-center self-start bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold mb-5">
              ISO CERTIFIED
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a] leading-tight">
              ISO 9001:2015
            </h2>

            <div className="w-16 h-[3px] bg-amber-500 mt-4 mb-6"></div>

            <p className="text-slate-600 leading-8 text-[15px] sm:text-base">
              MYK Associates (Pvt.) Ltd is an ISO 9001:2015 certified company.
              ISO 9001:2015 is an international standard that specifies
              requirements for a quality management system (QMS).
            </p>

          </div>


          {/* RIGHT CERTIFICATE IMAGE */}
          <div className="bg-slate-100 p-6 sm:p-10 flex items-center justify-center">

            <div
              className="
                bg-white
                w-full
                max-w-[450px]
                rounded-xl
                p-4
                shadow-md
                border
                border-slate-200
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              <img
                src="/Images/30.jpg"
                alt="MYK Associates ISO 9001:2015 Certification"
                className="w-full h-auto object-contain rounded-lg"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= PBA SECTION ================= */}
      <section className="bg-[#0b1f3a] py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <div
              className="
                w-16
                h-16
                mx-auto
                rounded-full
                bg-amber-400
                text-[#0b1f3a]
                flex
                items-center
                justify-center
                font-bold
                text-xl
                mb-6
              "
            >
              PBA
            </div>

            <p className="text-amber-400 uppercase tracking-[3px] text-sm font-semibold">
              Professional Recognition
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3">
              Pakistan Banks’ Association
            </h2>

            <div className="w-20 h-[3px] bg-amber-400 mx-auto mt-5 mb-7"></div>

            <p className="text-slate-300 leading-8 text-[15px] sm:text-base lg:text-lg">
              MYK is approved by Pakistan Bank’s Association (PBA) as a
              <span className="text-amber-400 font-bold"> NO LIMIT </span>
              company engaged in providing services of Evaluations,
              Inspections, Collateral Management, Surveyors Consulting
              Engineers and Clearing and Forwarding agents to the Financial
              Sector, Professional and Business Sector of Pakistan.
            </p>

          </div>

        </div>

      </section>


      {/* ================= QUALITY SECTION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="group bg-white rounded-xl border border-slate-200 p-7 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="w-12 h-12 mx-auto bg-[#0b1f3a] text-amber-400 rounded-full flex items-center justify-center font-bold mb-5">
              01
            </div>

            <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
              Quality
            </h3>

            <p className="text-slate-600 leading-7 text-sm">
              Maintaining professional standards through a structured quality
              management system.
            </p>

          </div>


          {/* CARD 2 */}
          <div className="group bg-white rounded-xl border border-slate-200 p-7 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="w-12 h-12 mx-auto bg-[#0b1f3a] text-amber-400 rounded-full flex items-center justify-center font-bold mb-5">
              02
            </div>

            <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
              Professionalism
            </h3>

            <p className="text-slate-600 leading-7 text-sm">
              Delivering professional services with a commitment to high
              standards and client requirements.
            </p>

          </div>


          {/* CARD 3 */}
          <div className="group bg-white rounded-xl border border-slate-200 p-7 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="w-12 h-12 mx-auto bg-[#0b1f3a] text-amber-400 rounded-full flex items-center justify-center font-bold mb-5">
              03
            </div>

            <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
              Reliability
            </h3>

            <p className="text-slate-600 leading-7 text-sm">
              Providing reliable services to financial, professional and
              business sectors.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Certifications;