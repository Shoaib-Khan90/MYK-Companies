import React from "react";

const CollateralManagement = () => {
  const sopSteps = [
    {
      title: "Step I: On Receipt of Bank’s Instructions",
      text: "On receipt of written instructions from a bank to take-over a pledge, complete stock-taking is done of the stock and inventory lists are prepared, verified by a second person and signed by the Field Supervisor. The stock is visually inspected to see the general condition and quality is checked by taking random samples from the stock.",
    },
    {
      title: "Step II: Verification of Authorized Signatures",
      text: "Bank’s correspondence, instructors signatures on Delivery Orders (D.O) are verified from the list of authorized signatures provided by the bank.",
    },
    {
      title: "Step III: Inspection of the Warehouse / Godown",
      text: "General condition of the Warehouse / Godown structure, cleanliness, security system, air ventilation, sun-light, electrical wiring, fire hazards and fire-fighting equipment available, are all observed and noted. Any discrepancies found are noted down and reported to the owners and the bank for information / necessary remedial action.",
    },
    {
      title: "Step IV: Affixing of Name Plate",
      text: "Banks’ nameplate’s affixed outside the warehouse / godown to identify the pledge with a particular bank. The Muccaddam name is also displayed being in charge of the stock. Sufficient numbers of official forms, various record keeping registers and company stickers / bin cards are handed over to the godown-keeper / guard and new locks are placed on the warehouse / godown. We have also encompassed the practice of “stencil” by which we simply paint the warehouse / godown’s walls or inside gate with the bank’s name so that it cannot be replaced or removed.",
    },
    {
      title: "Step V: Liaison with the Bank",
      text: "A close liaison is kept with the bank for smooth running of Muccaddam’s responsibilities. If an unusual activity or an abnormal behavior of the client is observed on site, the bank is immediately informed, as it may be indicative of some foul play detrimental to the bank’s interest.",
    },
    {
      title: "Step VI: Preparation of Reports",
      text: "A draft Pledge Report is prepared on site by the Field Supervisor giving the exact location and condition of the stock and transmitted to the relevant office from where the pledge is handled by fax. MYK offices verify the authenticity of fax’s contents, and a formal Pledge Report is printed out and sent to the bank by fax in token of taking over of the pledge. Three copies of the report are sent to the borrower for signatures – one copy for the bank, one copy to be retained by the borrower and the last one for our record.",
    },
    {
      title: "Step VII: Submission of Delivery Order",
      text: "When the bank sends a Delivery Order (D.O.) by fax to our Head Office or branches, it is confirmed by telephone and transmitted to the site staff by fax after signing and stamping it for authenticity. If there is no fax facility available, the D.O. is dispatched to the site and is notified to the staff on telephone. The site staff is called to tally the D.O. before delivery of the stock. The stock position of each warehouse / godown is notified to the Head Office branches by fax, after making each delivery.",
    },
    {
      title: "Step VIII: Surprise Checks by Senior Management",
      text: "A senior member of the management periodically conducts surprise checks to the warehouse / godown locations and reported to the banks.",
    },
    {
      title: "Step IX: Shuffling of Godown Keepers",
      text: "It has always been our routine to conduct regular shuffling of our warehouse / godown keepers so that no association may develop among them and the client which could possibly result in connivance, thus placing the bank’s interest at stake.",
    },
    {
      title: "Step X: Un Pledged Stock",
      text: "If the borrower client asks to place his own, un pledged stock in the area under our charge, the bank is informed immediately for it’s clearance. If the bank agrees to the request, the site staff is advised to be vigilant on the movement of the client’s own stock. This stock will have a separate stock report with a signed copy by the borrower sent to the bank and received by the borrower.",
    },
    {
      title: "Step XI: Internal Audit Control System",
      text: "We have developed an Internal Audit Control System (IACs.) which has all the information regarding warehouse / godown locations, stock quality and quantity pledged. The duty of this department is to conduct surprise visits at any location throughout Pakistan and ensure the quality and quantity is the same as mentioned in the current stock reports. In addition, it is also their responsibility that all the necessary parameters are met which we have committed with the bank like proper stacking, bin cards / stickers, warehouse / godown keepers attendance log / warehouse / godown keys possession and various registers etc. In case if any deficiency is noted, the concerned warehouse / godown keeper, site supervisor and the managers are fined, thus resulting rewards for the audit team.",
    },
    {
      title: "Step XII: Our Staff 24 Hours Accessibility",
      text: "Our authorized staff from Managerial Level to the warehouse / godown Keepers is accessible 24 hours 7 days round the clock. They can be reached on their cell phones which are always active for timely assistance and guidance.",
    },
    {
      title: "Step XIII: Cross Checks",
      text: "Stocks’s cross checking is also conducted by switching over the inspectors from one area to another.",
    },
    {
      title: "Step XIV: Role of the Head Office",
      text: "The Head Office has complete details of all warehouses / godowns, such as their locations, name of the warehouse / godown keepers, their cell phone numbers, clients’s contact numbers, so direct checks on the phone are maintained anytime the Head Office / Senior management desires.",
    },
    {
      title: "Step XV: Commodities Specialists",
      text: "We have highly trained Commodities Specialists who are trained in their specific products. During taking over and handing over stock / pledge sessions, these skillful “stock specialists” conduct their job in a highly effective and proper manner giving an ideal view of the commodity undertaking.",
    },
    {
      title: "Step XVI: Disbursement of Salaries",
      text: "Monthly salaries are distributed by the concerned Branch Manager or Senior Staff and the warehouses / godowns are also inspected at the same time. This is done on surprise basis and the particulars of the warehouse / godown keepers are checked before disbursement of salaries.",
    },
    {
      title: "Step XVII: Training Sessions",
      text: "Training sessions of our Warehouse / Godown Keepers, Area Supervisors and Head Supervisors are held under our highly skilled Senior Regional Managers who are exceptionally trained to deal with surprising & unforeseen situations so they can act in a timely manner to safeguard the interest of the bank at all cost.",
    },
    {
      title: "Step XVIII: Insurance Coverage",
      text: "At the time of takeover of the stocks, a current All Risk Insurance Policy is submitted to us. We make it a priority to check it and if it is not submitted by the client, the bank is duly informed. The bank is also informed if the insurance policy is not comprehensive and or needs additional coverage.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/14.png"
          alt="Collateral Management"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="text-center max-w-5xl">
            <p className="text-[#ff8d09] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              COLLATERAL MANAGEMENT
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
            Professional Muccadam Services
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Services COLLATERAL MANAGEMENT
          </h2>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/18.jpg"
                alt="Collateral Management"
                className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
                Our Organization
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                Organization of Our Muccadam Services
              </h2>

              <p className="text-slate-600 leading-8 text-sm sm:text-base mb-5">
                MYK Associates (Pvt.) Limited Muccadam Services are provided by
                a team of highly trained professionals and experts having
                several years of experience in this field.
              </p>

              <p className="text-slate-600 leading-8 text-sm sm:text-base">
                We provide nationwide Muccadam services under strict management
                control and a system of checks and balances, commitment and
                supervision by highly skilled professionals, keeping the bank’s
                interest as it’s top priority.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TEAM + MOBILIZATION ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <InfoCard
              number="01"
              title="Team Work"
              text="Our dedicated, hardworking field staff comprises mostly of ex-servicemen, who are selected after careful scrutiny of their service record and references. After they are hired, they are given proper briefing and training about their duties and responsibilities to safeguard the bank’s interest. The Line Managers at the Head Office and branch offices keep close liaison with the field staff to monitor their working. The Field Supervisor makes random surprise visits and spot checks at each location to watch the bank’s interest in the safekeeping of pledged goods in our custody. These surprise visits by the Field Supervisors keeps the guards on continuous scrutiny which helps to steadfast monitor and control."
            />

            <InfoCard
              number="02"
              title="Staff Mobilization"
              text="Upon receipt of instructions from the bank, our team of experts is immediately mobilized to take over charge of a certain warehouse / godown or consignment of stocks. A preliminary check / scrutiny is made of the pledged stock to verify it’s description, quantity and general condition. The staff is given a briefing on the spot by the Line Manager / Field Supervisor on any special features of the pledged stock requiring special treatment and handling."
            />

          </div>
        </div>
      </section>

      {/* ================= SOP INTRO ================= */}
      <section className="bg-[#0b1f3a] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <p className="text-[#ff8d09] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
            Operational Framework
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Standard Operating Procedures
          </h2>

          <p className="text-slate-300 leading-8 text-sm sm:text-base">
            The following steps are taken under our Standard Operating
            Procedures (SOPs) to safeguard the interest of the bank pertaining
            to the stocks under our custody.
          </p>

        </div>
      </section>

      {/* ================= SOP STEPS ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sopSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#ff8d09]/40 transition-all duration-300"
              >
                <div className="flex gap-4 items-start">

                  <div className="w-11 h-11 min-w-11 rounded-full bg-[#0b1f3a] group-hover:bg-[#ff8d09] text-white flex items-center justify-center text-sm font-bold transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0b1f3a] mb-4">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 leading-7 sm:leading-8 text-sm sm:text-base">
                      {step.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL SECTION ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-3xl p-7 sm:p-10 lg:p-14 shadow-xl">

            <div className="w-16 h-1 bg-[#ff8d09] rounded-full mb-6"></div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Nationwide Control & Professional Supervision
            </h2>

            <p className="text-slate-300 leading-8 text-sm sm:text-base max-w-5xl">
              Our collateral management system combines trained field staff,
              warehouse supervision, internal audits, surprise inspections,
              stock specialists, operational controls and direct coordination
              with banks to safeguard pledged goods and maintain effective
              oversight throughout the process.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
};

const InfoCard = ({ number, title, text }) => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-[#ff8d09] text-white flex items-center justify-center font-bold mb-5">
        {number}
      </div>

      <h3 className="text-2xl font-bold text-[#0b1f3a] mb-5">
        {title}
      </h3>

      <p className="text-slate-600 leading-8 text-sm sm:text-base">
        {text}
      </p>
    </div>
  );
};

export default CollateralManagement;