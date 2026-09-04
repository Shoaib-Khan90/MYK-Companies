import React from "react";

const AboutUs = () => {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* HERO IMAGE */}
      <section className="relative">
        <img
          src="/Images/12.png"
          alt="About Us"
          className="w-full h-[280px] sm:h-[360px] lg:h-[450px] object-cover"
        />

        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              About Us
            </h1>

            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </section>


      {/* WELCOME SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[3px] text-amber-600 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates
          </h2>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-4"></div>
        </div>


        {/* ABOUT CONTENT */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 lg:p-10">

          <p className="text-[15px] sm:text-base leading-8 text-slate-600 mb-6">
            MYK Associates (Pvt.) Ltd is an ISO 9001:2015 certified company
            approved by the Pakistan Banks’ Association (PBA), the regulator
            designated by State Bank of Pakistan (SBP). The company is a
            service provider to the Financial, Industries, Professional and
            Business Sector of Pakistan as Evaluators, Inspectors, Consulting
            Engineers, Collateral Management and Clearing & Forwarding,
            Logistics agents.
          </p>

          <p className="text-[15px] sm:text-base leading-8 text-slate-600 mb-6">
            We also provide services of evaluations as technical advisors for
            deal advisory projects to the Chartered Accountancy Firms such as
            KPMG, Grand Thornton, PWC and EY.
          </p>

          <p className="text-[15px] sm:text-base leading-8 text-slate-600 mb-6">
            We are approved by the Pakistan Banks’ Association (PBA) in all the
            three categories which are as follows.
          </p>


          {/* PANELS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">

            <div className="bg-[#0b1f3a] text-white rounded-xl p-6 shadow-md hover:-translate-y-1 transition duration-300">
              <span className="text-amber-400 text-sm font-bold">
                PANEL I
              </span>

              <p className="mt-3 leading-7">
                Valuation of Land and Buildings
              </p>
            </div>


            <div className="bg-[#0b1f3a] text-white rounded-xl p-6 shadow-md hover:-translate-y-1 transition duration-300">
              <span className="text-amber-400 text-sm font-bold">
                PANEL II
              </span>

              <p className="mt-3 leading-7">
                Valuation of Plant and Machinery
              </p>
            </div>


            <div className="bg-[#0b1f3a] text-white rounded-xl p-6 shadow-md hover:-translate-y-1 transition duration-300">
              <span className="text-amber-400 text-sm font-bold">
                PANEL III
              </span>

              <p className="mt-3 leading-7">
                Valuation of Current Assets and Commodities
              </p>
            </div>

          </div>


          <p className="text-[15px] sm:text-base leading-8 text-slate-600 mb-6">
            We have “NO LIMIT” company, by the Pakistan Banks’ Association
            (PBA) that means we can evaluate assets of any value for collateral
            purposes.
          </p>


          <p className="text-[15px] sm:text-base leading-8 text-slate-600">
            Since our business commencement, we have had the pleasure of
            providing our professional services of Evaluations, Inspections and
            Collateral Management to almost all the banks like Habib Bank
            Limited, Allied Bank, Bank Al Habib, Bank Al-Falah, Bank Islami,
            Faysal Bank, Habib Metropolitan Bank, Silk Bank, Meezan Bank,
            Soneri Bank, UBL, NBP, Sindh Bank, MCB, Standard Chartered Bank,
            and Industrial & Commercial Bank of China Ltd.
          </p>

        </div>
      </section>


      {/* MARKET SEGMENTS */}
      <section className="bg-[#0b1f3a] py-14">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Market Segments
            </h2>

            <div className="w-20 h-[3px] bg-amber-400 mx-auto mt-4"></div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* COLUMN 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-lg">

              {[
                "Urban Properties",
                "Commercial Properties",
                "Power Plants",
                "Wind Energy",
                "Fuel based Electricity Generating Units",
                "Steel Mills",
                "Sugar Plants",
                "Refineries",
                "Pipelines",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-none"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>

                  <p className="text-slate-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>


            {/* COLUMN 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-lg">

              {[
                "Electronics",
                "Hospitals",
                "Pharmaceuticals",
                "Automotive Plants",
                "Household Goods Units",
                "Gas Generating Companies",
                "Textile Mills",
                "Rolling Assets",
                "Miscellaneous Industries established in Pakistan",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-3 border-b border-slate-100 last:border-none"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>

                  <p className="text-slate-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* NATIONWIDE SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

        <div className="bg-white border-l-4 border-amber-500 rounded-xl shadow-sm p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-[#0b1f3a] mb-4">
            Nationwide Presence
          </h2>

          <p className="text-slate-600 leading-8">
            We are a nationwide firm with our Head Office in Karachi and branch
            network in Lahore, Faisalabad, Multan and Gujranwala, Islamabad and
            Hyderabad. Being a nationwide company, we are able to conduct
            evaluations all across the country through a one window operation.
            We have a team of qualified engineers and surveyors and senior
            management that head their respective departments with experience,
            professional licensing and education and knowledge of more than a
            decade.
          </p>

        </div>
      </section>


      {/* OUR VALUES */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold">
              What Defines Us
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-2">
              Our Values
            </h2>

            <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-4"></div>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* VALUE 1 */}
            <div className="group bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:bg-[#0b1f3a] hover:-translate-y-2 hover:shadow-xl transition duration-300">

              <span className="text-4xl font-bold text-amber-500">
                01
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mt-4 mb-3">
                We do the right thing
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 leading-7">
                We act with integrity and put our clients first.
              </p>

            </div>


            {/* VALUE 2 */}
            <div className="group bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:bg-[#0b1f3a] hover:-translate-y-2 hover:shadow-xl transition duration-300">

              <span className="text-4xl font-bold text-amber-500">
                02
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mt-4 mb-3">
                We think for the long term
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 leading-7">
                We engage in thoughtful decision making and believe that our
                professional services should drive our decisions.
              </p>

            </div>


            {/* VALUE 3 */}
            <div className="group bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:bg-[#0b1f3a] hover:-translate-y-2 hover:shadow-xl transition duration-300">

              <span className="text-4xl font-bold text-amber-500">
                03
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mt-4 mb-3">
                We work together to achieve common goals
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 leading-7">
                We show respect and humility towards each other and our
                clients. We believe in creating a supportive work environment
                that fosters teamwork, collegiality, and effective
                communication.
              </p>

            </div>


            {/* VALUE 4 */}
            <div className="group bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:bg-[#0b1f3a] hover:-translate-y-2 hover:shadow-xl transition duration-300">

              <span className="text-4xl font-bold text-amber-500">
                04
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mt-4 mb-3">
                We strive for excellence
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 leading-7">
                We make the extra effort, practice continuous improvement, and
                stay flexible to adapt to changing circumstances.
              </p>

            </div>


            {/* VALUE 5 */}
            <div className="group bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:bg-[#0b1f3a] hover:-translate-y-2 hover:shadow-xl transition duration-300">

              <span className="text-4xl font-bold text-amber-500">
                05
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mt-4 mb-3">
                We are committed to employees
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 leading-7">
                We foster an environment that provides flexibility and
                opportunity for growth, while also requiring accountability.
              </p>

            </div>


            {/* VALUE 6 */}
            <div className="group bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:bg-[#0b1f3a] hover:-translate-y-2 hover:shadow-xl transition duration-300">

              <span className="text-4xl font-bold text-amber-500">
                06
              </span>

              <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-white mt-4 mb-3">
                We are community minded
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 leading-7">
                We support philanthropic giving and encourage employee
                volunteerism in the best interest of our clients and employees.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutUs;