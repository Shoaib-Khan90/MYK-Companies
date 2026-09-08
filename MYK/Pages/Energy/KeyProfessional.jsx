import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const KeyProfessional = () => {
  const professionals = [
    {
      name: "Engr. Iftekhar Ahmed",
      designation: "SENIOR GENERAL MANAGER",
      description: [
        "Engr. Iftekhar Ahmed is a Professional Engineer (PEC) and a graduate of NED University of Engineering and Technology, Karachi. He has vast experience in Power Generation, Transmission, and Distribution Systems. He is professionally trained by ABB in Dubai, UAE, in Power Control Management and Asset Handling Procedures.",
        "He also holds legal qualifications, including an LLB and LLM. Additionally, he has experience in the fields of Supply Chain, Fuel Management, and other auxiliary supplies for Power Stations.",
        "He has extensive experience in Project Supervision and ensuring its successful completion. He possesses full project management knowledge and is responsible for verifying contractors’ work and performance, approving their payment bills, and overseeing equipment supplies and installations.",
      ],
    },
    {
      name: "Mr. Asim",
      designation: "Project Manager",
      description: [
        "Mr. Asim currently works as a Project Manager at MYK Energy. He has completed his International Business studies at Wuhan University, China. Mr. Asim has extensive knowledge, from concept development to project installations.",
      ],
    },
    {
      name: "Engr. Muhammad Touqir",
      designation: "Surveying Engineer",
      description: [
        "Engr. Muhammad Touqir has been working as a Surveying Engineer at MYK Energy and MYK Associates (Pvt.) Ltd, Karachi, for seven years. He conducts site visits, prepares BOQs, and provides quotations for industries, high-rise buildings, and various projects. He is well-versed in project cost estimations. He holds a Bachelor’s Degree in Urban & Infrastructure Engineering from NED University of Engineering and Technology, Karachi, and is a registered Engineer with the Pakistan Engineering Council (PEC).",
      ],
    },
    {
      name: "Engr. Ubaid Ur Rehman",
      designation: "Mechanical Engineer",
      description: [
        "Engr. Ubaid Ur Rehman works as a Mechanical Engineer at MYK Energy, Karachi. He holds a Bachelor’s Degree in Mechanical Engineering from NED University of Engineering and Technology, Karachi, and is a registered Engineer with the Pakistan Engineering Council (PEC).",
      ],
    },
    {
      name: "Engr. Amir Ali",
      designation: "Civil Engineer",
      description: [
        "Engr. Amir Ali works as a Civil Engineer at MYK Energy, Karachi. He holds a Bachelor’s Degree in Civil Engineering from NED University of Engineering and Technology, Karachi, and is a registered Engineer with the Pakistan Engineering Council (PEC).",
      ],
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[430px]">
        <img
          src="/Images/27.png"
          alt="Key Professionals"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/65 flex items-center justify-center">
          <div className="text-center px-5">
            <p className="text-[#ff8d09] uppercase tracking-[4px] text-sm font-semibold mb-3">
              MYK Energy
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Key Professionals
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] text-sm font-semibold mb-3">
            Our Team
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Energy
          </h2>

          <p className="text-slate-500 mt-4">Key Professionals</p>

          <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5"></div>
        </div>
      </section>

      {/* ================= PROFESSIONALS ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-8">
          {professionals.map((person, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border
                border-slate-200
                rounded-2xl
                shadow-sm
                overflow-hidden
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                {/* ================= IMAGE / ICON SIDE ================= */}
                <div className="relative bg-[#0b1f3a] min-h-[260px] flex items-center justify-center p-8">
                  {/* NUMBER */}
                  <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-[#ff8d09] text-white font-bold flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* PLACEHOLDER ICON */}
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white/10 border-2 border-[#ff8d09] flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faUserTie}
                      className="text-white text-6xl sm:text-7xl"
                    />
                  </div>
                </div>

                {/* ================= CONTENT SIDE ================= */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-[#ff8d09] uppercase tracking-[2px] text-xs sm:text-sm font-semibold mb-2">
                    Key Professional
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a]">
                    {person.name}
                  </h2>

                  <h3 className="text-sm sm:text-base font-bold text-[#ff8d09] uppercase tracking-wide mt-2">
                    {person.designation}
                  </h3>

                  <div className="w-16 h-[3px] bg-[#ff8d09] mt-5 mb-6"></div>

                  <div className="space-y-4">
                    {person.description.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-slate-600 leading-8 text-sm sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default KeyProfessional;
