import React from "react";

const Projects = () => {
  const projects = [
    {
      image: "/Images/ptcl.jpg",
      title: "Telecom Sector",
      description: "PTCL, NTC, SCO & Allied Bank Ltd.",
    },
    {
      image: "/Images/allied.jpg",
      title: "Allied Bank Ltd.",
      description: "Energy solutions and project services.",
    },
    {
      image: "/Images/geo.jpg",
      title: "Geo TV",
      description: "Energy project solutions.",
    },
    {
      image: "/Images/orange-line.jpg",
      title: "Lahore Orange Line",
      description: "Energy infrastructure project.",
    },
    {
      image: "/Images/gawadar.jpg",
      title: "Gwadar Research Centre",
      description: "Sustainable energy project.",
    },
    {
      image: "/Images/crown.jpg",
      title: "Crown Group",
      description: "Energy solutions and services.",
    },
  ];

  const completedProjects = [
    "Telecom Sector: PTCL, NTC, SCO, Allied Bank Ltd.",
    "Geo TV",
    "Karachi Transport Service",
    "Lahore Orange Line",
    "Gwadar Research Centre",
    "Punjab Air Quality Monitoring Stations",
    "Crown Group",
    "NGO Project in Sindh",
    "Army Projects (FWO, PWD)",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[430px]">
        <img
          src="/Images/3.jpg"
          alt="MYK Energy Projects"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/65 flex items-center justify-center">
          <div className="text-center px-5">
            <p className="text-[#ff8d09] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              MYK Energy
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Projects
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold mb-3">
            Our Projects
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Energy Projects
          </h2>

          <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>
        </div>
      </section>

      {/* ================= DEVELOPMENTS ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT CONTENT */}
            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
                Recent Developments
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] leading-tight mt-3">
                MYK Energy’s Recent Developments & Projects
              </h2>

              <div className="w-20 h-1 bg-[#ff8d09] mt-5 mb-7"></div>

              <div className="space-y-5 text-slate-600 leading-8">
                <p>
                  MYK Energy recently signed an MOU with DJDC and KUKA Cables
                  to deliver solar solutions across Pakistan in collaboration
                  with them. Additionally, MYK Energy is in the process of
                  being approved by various banks to provide BESS solutions.
                </p>

                <p>
                  We have successfully executed a variety of energy projects
                  tailored to meet our clients’ unique demands. Our portfolio
                  showcases expertise in sustainable energy planning,
                  regulatory compliance, and innovative designs, contributing
                  to efficient and environmentally responsible energy
                  infrastructures.
                </p>

                <p className="font-semibold text-[#0b1f3a]">
                  Here are some of the successfully completed projects:
                </p>
              </div>
            </div>

            {/* RIGHT PROJECT LIST */}
            <div className="bg-[#0b1f3a] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs font-semibold mb-3">
                Completed Work
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-7">
                Successfully Completed Projects
              </h3>

              <div className="space-y-3">
                {completedProjects.map((project, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                      bg-white/5
                      border
                      border-white/10
                      rounded-xl
                      px-4
                      py-3
                      hover:bg-white/10
                      transition-all
                      duration-300
                    "
                  >
                    <div className="w-9 h-9 min-w-9 rounded-full bg-[#ff8d09] text-white flex items-center justify-center text-sm font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="text-slate-200 text-sm sm:text-base">
                      {project}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECT GALLERY ================= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* HEADING */}
          <div className="text-center mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
              Our Portfolio
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3">
              Featured Projects
            </h2>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-slate-200
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                {/* IMAGE */}
                <div className="relative h-[230px] sm:h-[250px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/70 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4 w-11 h-11 bg-[#ff8d09] text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0b1f3a] group-hover:text-[#ff8d09] transition-colors">
                    {project.title}
                  </h3>

                  <div className="w-12 h-[3px] bg-[#ff8d09] mt-3 mb-4"></div>

                  <p className="text-slate-600 leading-7">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= BOTTOM ================= */}
      <section className="bg-[#0b1f3a] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
            Sustainable Energy
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Building a Sustainable Energy Future
          </h2>

          <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>

          <p className="text-slate-300 leading-8 mt-6 max-w-3xl mx-auto">
            MYK Energy continues to deliver reliable and innovative energy
            solutions across commercial, industrial and infrastructure
            projects.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Projects;