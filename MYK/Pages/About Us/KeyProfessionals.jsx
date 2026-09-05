import React from "react";

const KeyProfessionals = () => {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/Images/27.png"
          alt="Key Professionals"
          className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Key Professionals
            </h1>

            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= PAGE INTRO ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[3px] text-amber-600 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Our Key Professionals
          </h2>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-5"></div>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 leading-7">
            Welcome to MYK Associates About Us — Key Professionals
          </p>
        </div>
      </section>

      {/* ================= PROFESSIONALS ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16">
        <div className="space-y-8">

          {/* ================= 01 ================= */}
          <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-amber-500"></div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-7">

                <div className="w-14 h-14 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold text-lg">
                  01
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a]">
                    Mr. M. Younas Khan
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-2">
                    Chairman and Chief Executive Officer
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-sm">
                      M.Com. F.C.A. (England & Wales)
                    </span>

                    <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-sm">
                      The Institute of Chartered Accountants of Pakistan (ICAP)
                    </span>

                    <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-sm">
                      Fellow of Institute of Bankers of Pakistan (FIBP)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-8 text-[15px] sm:text-base">
                Mr. Khan is a Fellow of the Institute of Chartered Accountants
                in England & Wales and the Institute of Chartered Accountants
                of Pakistan and Fellow of the Institute of Bankers’ Pakistan,
                Mr. Khan is a senior banker having over 30 years of experience
                in foreign banks. He retired as Country General Manager of
                Deutsche Bank AG after holding this position for 9 years. He
                was President of the Overseas Investors Chamber of Commerce &
                Industry for two years and Member, Pakistan Investment Board
                where he was responsible for attracting foreign investment in
                Pakistan. He has also been the Chairman of the Pakistan Banks’
                Association, Chairman, German Business Council
                (Kaufmannsrunde), Director, The Pakistan Fund, (First Foreign
                Currency Equity Fund) and Trustee of Karachi Port Trust for two
                years.
              </p>
            </div>
          </div>

          {/* ================= 02 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-[#0b1f3a]"></div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  02
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Mrs. Azra Younas Khan
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    Director
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-8">
                Mrs. Azra Younas Khan is the wife of Mr. M. Younas Khan
                Chairman / CEO of the MYK Associates Pvt. Ltd. And is a
                graduate of the Gordon College, Rawalpindi. She is currently
                one of the director on the Board of directors of the company.
              </p>
            </div>
          </div>

          {/* ================= 03 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-amber-500"></div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  03
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Mr. Fahd Ali Khan
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    Director (Non equity)
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-8">
                Mr. Fahd A. Khan has done his BSc. (Bachelor of Science) in
                Finance & Quantitative Methods from Bradley University, USA. He
                is the Director and handles all nationwide operations of the
                company. He is also the Managing Director of MYK Group of
                Companies comprising of Survey Scale (Pvt.) Limited and MYK
                Insurance Brokerage (Pvt.) Limited. These companies are engaged
                in providing services to the Insurance Sector of Pakistan.
              </p>
            </div>
          </div>

          {/* ================= 04 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-[#0b1f3a]"></div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  04
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Mr. Muhammad Sharjeel Siddiqui
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    Company Secretary & Manager Operations
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-8">
                Mr. Siddiqui is a Bachelor of Commerce from University of
                Karachi. He possesses fifteen years of diversified experience
                in the fields of Accounts, Finance and Administration. He has
                been overseeing operation of NBFI (Non Banking Financial
                Institution) as Chief Financial Officer / Company Secretary
                during last two years and is very well conversant in corporate
                affairs. He has been with our company since ten years
                overseeing all administration work for all departments.
              </p>
            </div>
          </div>

          {/* ================= 05 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-amber-500"></div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">

                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  05
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Engr. Iftikhar Ahmed
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    General Manager
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-600">
                      B.E. (NED), L.L.B., L.L.M.
                    </span>

                    <span className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-600">
                      MIEP, PE (PEC), MIEEE (PAK)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-8 mb-4">
                Mr. Iftikhar Ahmed has done B.E in electrical engineering from
                N.E.D University, LL.B, LL.M from S.M Law College, Having
                trained in SAP system and its uses. He is a Member of Institute
                of Electrical & Electronic Engineers (IEEE) PK and USA and
                Member of Institute of Engineers (IEP) Karachi, PK.
              </p>

              <p className="text-slate-600 leading-8">
                Mr. Iftikhar has served as a “Senior Engineer” in SCECO, Riyadh
                for 13 years and has served in DEWA (Dubai Electric and Water
                Authority), Dubai for 10 years.
              </p>
            </div>
          </div>

          {/* ================= 06 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-[#0b1f3a]"></div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  06
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Engr. Akram Peracha
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    Chemical Engineer
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-8 mb-4">
                Akram Paracha is a Chemical Engineer who has a vast &
                comprehensive experience of the Oil Industry. He started his
                professional career with PAK Arab Refinery in 1980 as a Project
                Engineer responsible for the construction of pipelines &
                installation / commissioning of corrosion protection systems.
              </p>

              <p className="text-slate-600 leading-8">
                Mr. Paracha joined has also worked at Pakistan Refinery Ltd
                starting as trainee engineer & progressing to the highest
                position of General Manager Operations. His responsibilities
                were to run refinery operations on optimum techno / economic
                basis. He has been directly looking after processes, oil
                movement / marketing, technical services, maintenance,
                Inspection, projects & HSE. He then joined Byco Oil in 2010 as
                an Oil Refining Business Head looking after two refineries i.e.
                ORC1 & ORCII of processing capacity 36,200 bbls/day & 120,000
                bald/day. He engineered the revamp of ORC1 from the capacity of
                18,000 bald/day to 36,200bbls/day & the installation,
                pre-commissioning, commissioning, startup & bringing to 120,000
                bbls/day (Pakistan’s largest refinery) on stream is mainly on
                Mr. Paracha’s credit. In addition to that he also looked after
                as Site Head Functions. After four years with Byco, he joined
                UEP (formally British Petroleum) as a Senior Project
                Specialist, handling & advising on projects. Mr. Paracha has
                worked with PAK Petrolia (Pvt.) Ltd as MD responsible to
                establish an Oil Marketing Company. Presently, he is on our
                company’s panel as a senior consultant and advises us on
                matters relating particularly in the oil and gas sector.
              </p>
            </div>
          </div>

          {/* ================= 07 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-amber-500"></div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  07
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Engr. Muhammad Ramzan
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    Senior Technical Engineer
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-8">
                Mr. Ramzan has qualified in D.A.E (Civil from WPBTE), A.M.I.E
                (Section A Pakistan) D.H.M.S (R.M.P) Pakistan, Civil Technology
                Degree Level and Computer Aided & Drafted Works BSc. (Bachelors
                of Science) from Oklahoma State University U.S.A. He has a vast
                experience of thirty years in Pakistan & U.S.A in his relevant
                field.
              </p>
            </div>
          </div>

          {/* ================= 08 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-[#0b1f3a]"></div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  08
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Engr. Muhammad Tauqir
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    Civil Engineer
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-8">
                He is currently working as a Evaluation and Surveying Engineer.
                He holds a Bachelor’s Degree in Urban & Infrastructure
                Engineering from NED University of Engineering and Technology,
                Karachi.
              </p>
            </div>
          </div>

          {/* ================= 09 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-amber-500"></div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  09
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Engr. Sidra Tahir
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    Civil Engineer
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-8 mb-4">
                Engr. Ms. Sidra completed her B.E in Civil Engineering from NED
                University of Engineering & Technology in 2017. Before joining
                MYK, Ms. Sidra worked at Bunyad & Associates as an Assistant
                Cost Engineer. Her job responsibilities comprised of carrying
                out quantity takeoff from approved building plans and
                preparation of Measurement Sheets and Bill of Quantities
                (BOQs).
              </p>

              <p className="text-slate-600 leading-8">
                She is working at MYK as an Evaluations Engineer. Her
                responsibilities include preparation of detailed Evaluation
                Reports of all type of properties: Residential, Commercial,
                Industrial and or Agricultural. She analyses the provided
                documents received from bank and or client, assess the current
                present market value of the asset and reports violations, if
                any.
              </p>
            </div>
          </div>

          {/* ================= 10 ================= */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-1.5 bg-[#0b1f3a]"></div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center font-bold">
                  10
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b1f3a]">
                    Engr. Kiran Ashraf
                  </h2>

                  <h3 className="text-amber-600 font-semibold mt-1">
                    Civil Engineer
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-8 mb-4">
                Engr. Ms. Kiran completed my B.E in Civil Engineering from NED
                University of Engineering & Technology in 2017. She interned
                for three months internship at National Logistics Cell (NLC)
                where she was introduced to FIDIC and PEC Condition of Civil
                Engineering Contract. Her job responsibilities included
                carrying out Quantity Estimation and preparation Bill of
                Quantities (BOQs) as well as Bar Bending Schedules.
              </p>

              <p className="text-slate-600 leading-8">
                She is working at MYK as an Evaluations Engineer. Her
                responsibilities include preparation of detailed Evaluation
                Reports of all type of properties: Residential, Commercial,
                Industrial and or Agricultural. She analyses the provided
                documents received from bank and or client, assess the current
                present market value of the asset and reports violations, if
                any.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= BOTTOM SECTION ================= */}
      <section className="bg-[#0b1f3a]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Experience. Expertise. Professionalism.
            </h2>

            <div className="w-16 h-[3px] bg-amber-400 mx-auto mt-4 mb-5"></div>

            <p className="text-slate-300 leading-8">
              Our team combines extensive professional experience with
              technical expertise to deliver reliable and high-quality
              services to our clients.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
};

export default KeyProfessionals;