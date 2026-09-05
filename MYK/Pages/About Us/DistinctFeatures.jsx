import React from "react";

const DistinctFeatures = () => {
  const features = [
    "Professionalism",
    "Quick Response",
    "Personal Integrity",
    "Reliability of Information",
    "Safety and Security",
    "Strict Control and Security",
    "Motivated and Trained Personnel",
    "Built-in Checks and Balances",
    "Special Purpose Audits",
    "Information Technology based Solutions",
    "Prompt interaction with Staff",
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <img
          src="/Images/28.png"
          alt="Distinct Features"
          className="w-full h-[280px] sm:h-[360px] lg:h-[430px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-5">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Distinct Features
            </h1>

            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>

          </div>
        </div>
      </section>


      {/* ================= INTRO HEADING ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-8">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[3px] text-amber-600 font-semibold mb-3">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Our Distinct Features
          </h2>

          <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-5"></div>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 leading-7">
            Welcome to MYK Associates About Us — Distinct Features
          </p>

        </div>

      </section>


      {/* ================= DESCRIPTION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-12">

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">

          <p className="text-[15px] sm:text-base text-slate-600 leading-8 mb-6">
            A bank’s interest can best be safeguarded by a banker of high
            integrity and repute, who can truly understand the requirements of
            the fellow bankers.
          </p>

          <p className="text-[15px] sm:text-base text-slate-600 leading-8 mb-6">
            High quality professional services can only be rendered by a well
            experienced and qualified staff that has the necessary experience
            of management and control in a competitive environment.
          </p>

          <p className="text-[15px] sm:text-base text-slate-600 leading-8">
            You can put your trust in MYK Associates (Pvt) Ltd. as they are
            cognizant of your concerns and can take care of your interests by
            demonstrating the following attributes which form the basis of our
            services:
          </p>

        </div>

      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-[#0b1f3a] py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Heading */}
          <div className="text-center mb-12">

            <p className="text-amber-400 uppercase tracking-[3px] text-sm font-semibold">
              Why MYK Associates
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              What Sets Us Apart
            </h2>

            <div className="w-20 h-[3px] bg-amber-400 mx-auto mt-5"></div>

          </div>


          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-xl
                  p-6
                  flex
                  items-center
                  gap-4
                  border
                  border-white/10
                  shadow-md
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                {/* Number */}
                <div
                  className="
                    w-12
                    h-12
                    shrink-0
                    rounded-full
                    bg-[#0b1f3a]
                    text-amber-400
                    flex
                    items-center
                    justify-center
                    font-bold
                    group-hover:bg-amber-400
                    group-hover:text-[#0b1f3a]
                    transition
                    duration-300
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Feature */}
                <p className="text-[#0b1f3a] font-semibold leading-6">
                  {feature}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= TRUST SECTION ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

        <div
          className="
            bg-white
            border-l-4
            border-amber-500
            rounded-xl
            shadow-sm
            p-7
            sm:p-9
          "
        >

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a]">
              Professionalism You Can Trust
            </h2>

            <div className="w-16 h-[3px] bg-amber-500 mx-auto mt-4 mb-5"></div>

            <p className="text-slate-600 leading-8">
              Our commitment to integrity, reliability, security and
              professional excellence enables us to provide services that
              protect and support the interests of our valued clients.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default DistinctFeatures;