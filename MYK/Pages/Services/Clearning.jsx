import React from "react";

const Clearning = () => {
  const clearanceServices = [
    "Preparation of documents",
    "Creation of detailed instructions in the Letter of Credit",
    "Evaluation of duty impact",
    "Keeping clients updated regarding changes in customs rules, regulations and SROs",
    "Ensuring timely delivery",
  ];

  const warehouseFacilities = [
    "A secure, dry storage space",
    "A place to consolidate and de-consolidate your shipment",
    "Racked and open-floor space",
    "A computerized inventory control system",
  ];

  return (
    <main className="bg-slate-50 text-slate-800 pb-12 sm:pb-16">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/1.png"
          alt="Clearing and Freight Forwarding Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
          <div className="max-w-4xl">
            <p className="text-[#ff8d09] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              MYK Associates Services
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Clearing & Freight
              <br className="hidden sm:block" /> Forwarding Services
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mt-6"></div>
          </div>
        </div>
      </section>


      {/* ================= WELCOME ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl">
            <span className="text-[#ff8d09] text-sm font-bold uppercase tracking-widest">
              Welcome to MYK Associates
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-6">
              Complete Logistics Solutions
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-8">
              We provide custom clearing services, export/import clearing
              services, sea and air freight forwarding services, shipping
              services, supply chain management, warehousing and road/rail
              transport.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CUSTOM CLEARANCE ================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* IMAGE */}
            <div className="relative">
              <img
                src="/Images/1.png"
                alt="Custom Clearance"
                className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover rounded-xl shadow-lg"
              />

              <div className="absolute -bottom-5 -right-3 sm:-right-5 w-24 h-24 bg-[#ff8d09] rounded-xl -z-10"></div>
            </div>


            {/* CONTENT */}
            <div>
              <p className="text-[#ff8d09] uppercase tracking-widest font-semibold text-sm mb-3">
                Professional Services
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-5">
                Custom Clearance
              </h2>

              <p className="text-slate-600 leading-7 mb-7">
                Our services comprise the following:
              </p>

              <div className="space-y-4">
                {clearanceServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition duration-300"
                  >
                    <div className="w-8 h-8 min-w-8 rounded-full bg-[#0b1f3a] text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>

                    <p className="text-slate-600 leading-6">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FREIGHT FORWARDING ================= */}
      <section className="py-14 sm:py-20 bg-[#0b1f3a]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Global Transportation
            </span>

            <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Freight Forwarding
            </h2>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mb-7"></div>

            <p className="text-slate-300 text-base sm:text-lg leading-8">
              We provide a wide range of sea and air freight forwarding
              services to any destination and assure safe, secure and timely
              dispatch of your consignment.
            </p>

          </div>
        </div>
      </section>


      {/* ================= SUPPLY CHAIN ================= */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">

            {/* HEADING */}
            <div>
              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
                End-to-End Support
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 leading-tight">
                Supply Chain Management
              </h2>

              <div className="w-16 h-1 bg-[#ff8d09] mt-5"></div>
            </div>


            {/* TEXT */}
            <div className="space-y-5 text-slate-600 leading-8">

              <p>
                We assist our clients in improving their time to market
                products, reducing costs, making good use of current resources
                and planning for future needs.
              </p>

              <p>
                We offer transport expertise from source to destination.
              </p>

              <p>
                We provide consultancy for opening of L/C, documentation
                preparation and complete B2B advice based upon the documents
                act for taking exemption.
              </p>

              <p>
                We also suggest appropriate HS codes for import clearance and
                ensure smooth handling of client shipping.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* ================= WAREHOUSE ================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
              Secure & Efficient
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
              Warehouse Management
            </h2>

            <p className="text-slate-600 leading-7">
              We offer dedicated, shared and custom bonded warehousing
              facilities, with experience in designing warehouse space for
              optimal efficiency.
            </p>

            <p className="text-slate-600 leading-7 mt-4">
              We maintain high levels of inventory control and ensure that
              processes provide the necessary information to our clients,
              enabling them to manage the efficient flow of materials.
            </p>

          </div>


          {/* FACILITIES */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {warehouseFacilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-[#0b1f3a] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#ff8d09] text-white rounded-lg flex items-center justify-center font-bold text-lg mb-5">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-[#0b1f3a] group-hover:text-white font-semibold leading-6 transition-colors duration-300">
                  {facility}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-[#0b1f3a] py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Reliable Logistics From Source to Destination
          </h2>

          <p className="max-w-2xl mx-auto text-slate-300 leading-7">
            MYK Associates provides integrated clearing, freight forwarding,
            supply chain and warehousing services to support efficient movement
            of goods.
          </p>

          <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-7"></div>

        </div>
      </section>

    </main>
  );
};

export default Clearning;