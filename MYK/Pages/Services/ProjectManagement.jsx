import React from "react";

const ProjectManagement = () => {
  const projectComponents = [
    {
      number: "01",
      title: "Initiation",
      description:
        "Defining the project objectives, scope and initial requirements.",
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "Planning resources, timelines and designing the project execution strategy.",
    },
    {
      number: "03",
      title: "Execution & Construction",
      description:
        "Executing the project according to the approved plan and requirements.",
    },
    {
      number: "04",
      title: "Monitoring & Controlling",
      description:
        "Monitoring progress and controlling resources, timelines and performance.",
    },
    {
      number: "05",
      title: "Completion",
      description:
        "Completing the project and ensuring that defined objectives are achieved.",
    },
  ];

  const managementServices = [
    "Cargo handling for imports and exports",
    "Arranging storage facilities",
    "Setting up of outlets, offices and service facilities",
    "Advertisement, distribution and research",
    "Human resource services such as recruitment, placement of executives and training",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/project-management-mykassociates.png"
          alt="Project Management"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
          <div className="max-w-4xl">

            <p className="text-[#ff8d09] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Project Management
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mt-6"></div>

          </div>
        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* CONTENT */}
            <div>

              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-bold">
                Welcome to MYK Associates
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-6">
                Professional Project Management
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mb-7"></div>

              <p className="text-slate-600 leading-8 text-base sm:text-lg">
                The discipline of planning, organizing, securing and managing
                resources to achieve specific goals, our primary challenge in
                project management is to achieve all the project goals and
                objectives while honoring the preconceived constraints by
                proper allocation and optimization of resources.
              </p>

            </div>


            {/* IMAGE */}
            <div className="relative">

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ff8d09] rounded-xl"></div>

              <img
                src="/Images/project-management-mykassociates.png"
                alt="MYK Project Management"
                className="relative z-10 w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover rounded-xl shadow-xl"
              />

            </div>

          </div>
        </div>
      </section>


      {/* ================= FIVE COMPONENTS ================= */}
      <section className="py-14 sm:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mx-auto text-center mb-12">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Our Process
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
              Five Components of Project Management
            </h2>

            <p className="text-slate-600 leading-7">
              Our five components of project management are distinguished
              through a structured process from initiation to completion.
            </p>

          </div>


          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {projectComponents.map((item) => (
              <div
                key={item.number}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-[#0b1f3a] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-12 h-12 bg-[#ff8d09] text-white rounded-lg flex items-center justify-center font-bold mb-5">
                  {item.number}
                </div>

                <h3 className="text-lg font-bold text-[#0b1f3a] group-hover:text-white mb-3 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 group-hover:text-slate-300 leading-6 transition-colors">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= SECTOR SUPPORT ================= */}
      <section className="bg-[#0b1f3a] py-14 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Government & Corporate Sector
            </span>

            <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Complete Project Management Facilities
            </h2>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mb-7"></div>

            <p className="text-slate-300 text-base sm:text-lg leading-8">
              We provide project management facilities to the government and
              corporate sector in logistics, clearing & forwarding, shifting
              of commodities, plant & machinery, office records, IT hardware
              and related areas.
            </p>

          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-14 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">

            {/* LEFT */}
            <div>

              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
                What We Provide
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 leading-tight">
                Project Management Services
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mt-6"></div>

              <p className="text-slate-600 leading-7 mt-6">
                The following services are included under our project
                management services.
              </p>

            </div>


            {/* RIGHT */}
            <div className="space-y-4">

              {managementServices.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-[#ff8d09]/40 transition-all duration-300"
                >

                  <div className="w-11 h-11 min-w-11 rounded-lg bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center font-bold transition-colors duration-300">
                    {index + 1}
                  </div>

                  <p className="text-slate-700 font-medium leading-6">
                    {service}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ================= BOTTOM ================= */}
      <section className="bg-white py-14 sm:py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center shadow-xl">

            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              From Planning to Successful Completion
            </h2>

            <p className="text-slate-300 max-w-3xl mx-auto leading-7 mt-4">
              Our project management approach focuses on proper planning,
              resource optimization, execution, monitoring and successful
              completion of project objectives.
            </p>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-7"></div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default ProjectManagement;