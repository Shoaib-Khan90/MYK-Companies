import React from "react";

const Building = () => {
  const services = [
    {
      number: "01",
      title: "Project Management",
      description:
        "Specialist management support for fit-out, refurbishment and development works of all sizes.",
    },
    {
      number: "02",
      title: "Cost Management",
      description:
        "Professional planning and cost control focused on efficient project delivery and overall cost savings.",
    },
    {
      number: "03",
      title: "BOQs",
      description:
        "Coordination and preparation of Bills of Quantities as part of the project's technical and commercial requirements.",
    },
    {
      number: "04",
      title: "Consultant Selection",
      description:
        "Selection and appointment of suitable consultants according to the specific requirements of each project.",
    },
    {
      number: "05",
      title: "Contractor Selection",
      description:
        "Structured contractor selection through vigorous tendering and pre-qualification processes.",
    },
    {
      number: "06",
      title: "Technical Consultancy",
      description:
        "Specialist solutions covering technical aspects of acquisition, development, ownership, occupation and disposal.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/19.png"
          alt="Building and Project Consultancy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-5xl text-center">

            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[4px] text-[#ff8d09]">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Building & Project Consultancy
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>

          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
            Professional Consultancy Services
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Building & Project Consultancy
          </h2>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/19.png"
                alt="MYK Building and Project Consultancy"
                className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div>

              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
                Our Expertise
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                Project & Cost Management
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                Our project and cost management consultants operate as a
                specialist extension to a client’s business, utilized for
                defined periods of time, to manage the delivery of fit-out and
                refurbishment works, however big or small they may be.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                We offer bespoke specialist solutions on all technical aspects
                of acquisitions, development, ownership, occupation and
                disposal.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT FOCUSED ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
                Client Focused Approach
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6 leading-tight">
                Planning for Successful Project Delivery
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                Our project and cost management team understands the importance
                of delivering on the unique needs and requirements of each
                individual client.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                We understand that the commercial gains a client can realize
                during the course of a project are largely established at the
                pre-construction stage. Our early engagement ensures best in
                class planning and delivery, at an overall cost-save to our
                clientele.
              </p>
            </div>

            {/* FEATURE BOX */}
            <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-9 lg:p-10 shadow-xl">

              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                Complete Project Coordination
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                We act as the primary point of contact, coordinating all design
                and construction matters, BOQs, including the selection and
                appointment of consultants and contractors, through vigorous
                tendering and pre-qualification processes.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center mb-12">

            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
              Consultancy Scope
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a]">
              Our Building & Project Consultancy Services
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#ff8d09]/40 transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-full bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center font-bold mb-5 transition-colors duration-300">
                  {service.number}
                </div>

                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-7">
                  {service.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FINAL SECTION ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">

            {/* Decorative circle */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[45px] border-white/5"></div>

            <div className="relative z-10 max-w-5xl">

              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                From Planning to Project Delivery
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                We coordinate design and construction matters, Bills of
                Quantities, consultant appointments, contractor selection,
                tendering and pre-qualification processes to support efficient
                delivery according to each client’s individual project
                requirements.
              </p>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Building;