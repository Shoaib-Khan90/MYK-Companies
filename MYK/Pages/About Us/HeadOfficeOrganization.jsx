import React from "react";

const HeadOfficeOrganization = () => {
  const team = [
    {
      name: "Mr. Muhammad Younas Khan",
      designation: "Chairman & C. E. O.",
    },
    {
      name: "Mrs. Azra Younas Khan",
      designation: "Director",
    },
    {
      name: "Mr. Fahd Ali Khan",
      designation: "Director (Non equity)",
    },
    {
      name: "Engr. Iftikhar Ahmed",
      designation: "Electrical Engineer",
    },
    {
      name: "Engr. Akram Paracha",
      designation: "Chemical Engineer",
    },
    {
      name: "Engr. Muhammad Tauqir",
      designation: "Civil Engineer",
    },
    {
      name: "Engr. Sidra Tahir",
      designation: "Civil Engineer",
    },
    {
      name: "Engr. Kiran Ashraf",
      designation: "Civil Engineer",
    },
    {
      name: "Mr. Muhammad Ramzan",
      designation: "Senior Technical Engineer",
    },
    {
      name: "Mr. Muhammad Sharjeel Siddiqui",
      designation: "Manager Operations",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/Images/18.jpg"
          alt="Head Office Organization"
          className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Head Office Organization
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
            Our Head Office Team
          </h2>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-5"></div>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 leading-7">
            Meet the professionals responsible for the leadership,
            engineering and operations of MYK Associates.
          </p>
        </div>

      </section>


      {/* ================= ORGANIZATION ================= */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pb-16">

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

          {/* TABLE HEADER */}
          <div className="hidden md:grid grid-cols-2 bg-[#0b1f3a] text-white">

            <div className="px-8 py-5 font-bold text-lg">
              Name
            </div>

            <div className="px-8 py-5 font-bold text-lg border-l border-white/10">
              Designation
            </div>

          </div>


          {/* TEAM MEMBERS */}
          <div>
            {team.map((member, index) => (
              <div
                key={index}
                className="
                  group
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  border-b
                  border-slate-200
                  last:border-b-0
                  hover:bg-slate-50
                  transition
                  duration-300
                "
              >

                {/* NAME */}
                <div className="px-6 sm:px-8 py-5">

                  <p className="md:hidden text-xs uppercase tracking-wider text-amber-600 font-bold mb-1">
                    Name
                  </p>

                  <div className="flex items-center gap-4">

                    {/* Number */}
                    <div className="w-9 h-9 shrink-0 rounded-full bg-[#0b1f3a] text-amber-400 flex items-center justify-center text-xs font-bold group-hover:bg-amber-400 group-hover:text-[#0b1f3a] transition duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="font-semibold text-[#0b1f3a] text-[15px] sm:text-base">
                      {member.name}
                    </p>

                  </div>

                </div>


                {/* DESIGNATION */}
                <div className="px-6 sm:px-8 pb-5 md:py-5 md:border-l md:border-slate-200">

                  <p className="md:hidden text-xs uppercase tracking-wider text-amber-600 font-bold mb-2">
                    Designation
                  </p>

                  <p className="text-slate-600 md:pt-2">
                    {member.designation}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>

      </section>


      {/* ================= BOTTOM SECTION ================= */}
      <section className="bg-[#0b1f3a]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Professional Leadership
            </h2>

            <div className="w-16 h-[3px] bg-amber-400 mx-auto mt-4 mb-5"></div>

            <p className="text-slate-300 leading-8">
              Our organization brings together experienced leadership,
              qualified engineers and operational professionals committed
              to providing quality services to our clients.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default HeadOfficeOrganization;