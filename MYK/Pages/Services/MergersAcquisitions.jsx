import React from "react";

const MergersAcquisitions = () => {
  const processAreas = [
    {
      number: "01",
      title: "Target Identification",
      description:
        "Understanding and identifying the appropriate target in line with the strategic objectives of the business.",
    },
    {
      number: "02",
      title: "Deal Structuring",
      description:
        "Supporting the structuring of the transaction while considering different aspects of the business and its ecosystem.",
    },
    {
      number: "03",
      title: "Negotiation",
      description:
        "Assisting throughout the negotiation process to support the requirements and objectives of the transaction.",
    },
    {
      number: "04",
      title: "Documentation Review",
      description:
        "Reviewing relevant transaction documentation as part of the merger or acquisition process.",
    },
    {
      number: "05",
      title: "Price Assessment",
      description:
        "Assessing an appropriate price through a thorough understanding of the business and its environment.",
    },
    {
      number: "06",
      title: "Business Understanding",
      description:
        "Evaluating various aspects of the business and its ecosystem to support informed transaction decisions.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/consultant.jpg"
          alt="Mergers and Acquisitions"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="max-w-5xl text-center">

            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[4px] text-[#ff8d09]">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Mergers & Acquisitions
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>

          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
            Strategic Business Advisory
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Mergers & Acquisitions
          </h2>

        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* CONTENT */}
            <div>
              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
                Strategic Growth
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] leading-tight mb-6">
                Supporting Long-Term Business Growth
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                With the change in business environment and competitive
                landscape, businesses may look at mergers and acquisitions as
                long term strategic moves to foster future growth or to make
                the most of available synergies.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-8 mt-5">
                A merger or an acquisition usually is a fairly long drawn and
                time-consuming project and can involve significant time and
                effort from our senior management and finance professionals
                within the organization.
              </p>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/consultant.jpg"
                alt="Mergers and Acquisitions Consultancy"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= TRANSACTION SUPPORT ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center mb-12">

            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#ff8d09]">
              Transaction Process
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] leading-tight">
              Key Areas of Mergers & Acquisitions
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {processAreas.map((item) => (
              <div
                key={item.number}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#ff8d09]/40 transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-full bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center font-bold mb-5 transition-colors duration-300">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= BUSINESS ECOSYSTEM ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT */}
            <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-12 shadow-xl">

              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs font-semibold mb-3">
                Comprehensive Approach
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Understanding the Business Ecosystem
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                Identifying or understanding the target, structuring or
                negotiating the deal, reviewing the documentation or assessing
                an appropriate price all require a thorough understanding of
                various aspects of the business and its ecosystem.
              </p>

            </div>

            {/* RIGHT */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-sm">

              <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs font-semibold mb-3">
                Professional Involvement
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a] mb-6">
                Management & Finance Expertise
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-8">
                Mergers and acquisitions can require significant time and
                effort from senior management and finance professionals.
                Understanding each stage of the transaction is therefore an
                important part of managing the overall process.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">

            {/* Decoration */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[45px] border-white/5"></div>

            <div className="relative z-10 max-w-5xl">

              <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Strategic Mergers & Acquisitions Support
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-8">
                From understanding the target and structuring the transaction
                to negotiations, documentation review and price assessment,
                each stage requires careful consideration of the business and
                its wider ecosystem.
              </p>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default MergersAcquisitions;