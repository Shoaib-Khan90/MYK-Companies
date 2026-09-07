import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MissionsVision = () => {
  const focusAreas = [
    {
      number: "01",
      title: "Sustainability",
      text: "Prioritizing renewable energy sources and reducing carbon emissions to combat climate change.",
    },
    {
      number: "02",
      title: "Innovation",
      text: "Investing in research and development to create advanced technologies and solutions in energy efficiency and management.",
    },
    {
      number: "03",
      title: "Customer Empowerment",
      text: "Providing clients with the tools and knowledge to make informed energy choices and improve their energy efficiency.",
    },
    {
      number: "04",
      title: "Community Engagement",
      text: "Building strong relationships with local communities and stakeholders to promote sustainable practices and support economic development.",
    },
    {
      number: "05",
      title: "Reliability and Affordability",
      text: "Ensuring that energy solutions are not only sustainable but also reliable and cost-effective for consumers.",
    },
  ];

  const values = [
    "Reliability",
    "Commitment",
    "Innovation",
    "Customer Care",
    "Diversity",
  ];

  return (
    <main className="bg-white text-slate-800">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[430px]">
        <img
          src="/Images/3.jpg"
          alt="MYK Energy Mission and Vision"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071a30]/65 flex items-center justify-center">
          <div className="text-center px-5">
            <p className="text-[#ff8d09] uppercase tracking-[4px] text-sm font-semibold mb-3">
              MYK Energy
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Mission & Vision
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Energy
          </h2>

          <p className="text-slate-500 mt-4">Mission & Vision</p>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* CONTENT */}
            <div>
              <p className="text-[#ff8d09] font-semibold uppercase tracking-[3px] text-sm">
                Our Purpose
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] mt-3">
                Our Mission
              </h2>

              <div className="w-20 h-1 bg-[#ff8d09] mt-5 mb-6"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                To deliver innovative and sustainable energy solutions that
                empower communities and businesses to thrive while reducing
                their environmental impact.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#ff8d09] rounded-2xl"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/Images/41.jpg"
                  alt="Our Mission"
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* IMAGE */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#ff8d09] rounded-2xl"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/Images/42.jpg"
                  alt="Our Vision"
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="order-1 lg:order-2">
              <p className="text-[#ff8d09] font-semibold uppercase tracking-[3px] text-sm">
                Our Future
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] mt-3">
                Our Vision
              </h2>

              <div className="w-20 h-1 bg-[#ff8d09] mt-5 mb-6"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                To be a global leader in sustainable energy solutions,
                transforming how energy is produced, consumed, and managed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* CONTENT */}
            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
                What We Believe
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] mt-3">
                Our Core Values
              </h2>

              <div className="w-20 h-1 bg-[#ff8d09] mt-5 mb-6"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-8">
                Our professional team is committed to providing quality
                innovations for your energy needs through complete
                installations, adhering to stringent Health, Safety, and
                Environment (HSE) standards.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-8 mt-4">
                We ensure each project is executed with the utmost care and
                precision, prioritizing safety and efficiency at every step.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#ff8d09] rounded-2xl"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/Images/43.jpg"
                  alt="Our Core Values"
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FOCUS AREAS ================= */}
      <section className="bg-[#0b1f3a] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* HEADING */}
          <div className="text-center mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[4px] text-sm font-semibold">
              Our Priorities
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
              Key Focus Areas
            </h2>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((item) => (
              <div
                key={item.number}
                className="group bg-white/10 border border-white/10 rounded-2xl p-7 hover:bg-white hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#ff8d09] text-white rounded-full flex items-center justify-center font-bold mb-5">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#0b1f3a] mb-3 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 group-hover:text-slate-600 leading-7 text-sm sm:text-base transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES WITH STAR ICON ================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold">
              Our Principles
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-2">
              Values That Define Us
            </h2>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>
          </div>

          {/* 5 VALUES */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="
                  group
                  min-h-[170px]
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  p-5
                  hover:bg-[#0b1f3a]
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                {/* STAR ICON */}
                <div className="w-16 h-16 bg-[#ff8d09]/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-[32px] text-[#ff8d09]"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#0b1f3a] group-hover:text-white transition-colors">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MissionsVision;
