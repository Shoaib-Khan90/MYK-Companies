import React from "react";

const ManagementServices = () => {
  const services = [
    {
      number: "01",
      title: "Asset Management",
      description:
        "Professional asset management solutions designed to enhance operational efficiency and long-term asset value.",
    },
    {
      number: "02",
      title: "Portfolio Management",
      description:
        "Structured portfolio management solutions focused on improving performance and supporting client objectives.",
    },
    {
      number: "03",
      title: "Income Enhancement",
      description:
        "Industry-leading processes and management practices focused on consistently increasing income.",
    },
    {
      number: "04",
      title: "Risk Mitigation",
      description:
        "Management strategies designed to mitigate risk while protecting and enhancing the value of assets.",
    },
    {
      number: "05",
      title: "Operational Efficiency",
      description:
        "Processes and platforms aimed at increasing efficiency across real estate assets and portfolios.",
    },
    {
      number: "06",
      title: "Value Enhancement",
      description:
        "A professional management approach focused on enhancing asset value and maintaining high standards.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/real-about.jpg"
          alt="Real Estate Management Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-5xl text-center">
            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[4px] text-[#ff8d09]">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Real Estate Management Services
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
            Professional Real Estate Solutions
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Real Estate Management Services
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
                src="/Images/real-about.jpg"
                alt="MYK Real Estate Management"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div>
              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
                Our Management Approach
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] leading-tight mb-6">
                Asset & Portfolio Management
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                Through our sister company FAK Associates, we work with clients
                to develop and implement their asset and portfolio management
                solutions that enhance value increasing efficiency.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                Our management experts use industry leading processes and
                platforms to consistently increase income, mitigating risk
                whilst enhancing the value of the assets, always being on the
                forefront in accomplishing the highest standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
              Management Expertise
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a]">
              Our Real Estate Management Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#ff8d09]/40 transition-all duration-300"
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

      {/* ================= FAK ASSOCIATES ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT */}
            <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-12 shadow-xl">
              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs font-semibold mb-3">
                Sister Company
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                FAK Associates
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                Through our sister company FAK Associates, we work with clients
                to develop and implement asset and portfolio management
                solutions focused on enhancing value and increasing efficiency.
              </p>
            </div>

            {/* RIGHT */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-sm">
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs font-semibold mb-3">
                Our Objective
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                Enhancing Asset Value
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                Our approach combines management expertise, industry-leading
                processes and professional platforms with a focus on increasing
                income, mitigating risk and enhancing the value of real estate
                assets.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL SECTION ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">

            {/* Decoration */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[45px] border-white/5"></div>

            <div className="relative z-10 max-w-5xl">
              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Professional Real Estate Management
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                Our management services focus on improving efficiency,
                supporting income growth, mitigating risk and enhancing asset
                value while maintaining high professional standards.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default ManagementServices;