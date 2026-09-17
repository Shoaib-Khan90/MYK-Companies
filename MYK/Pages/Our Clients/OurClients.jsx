import React from "react";

const OurClients = () => {
  const clients = Array.from(
    { length: 30 },
    (_, index) => `/Images/1-${index + 1}.jpg`
  );

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/48.png"
          alt="Our Clients"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
          <div className="max-w-4xl">

            <p className="text-[#ff8d09] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              MYK Associates
            </p>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Clients
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mt-6"></div>

          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl mx-auto text-center">

            <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-bold">
              Our Clientele
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mt-3 mb-5">
              Trusted By Our Clients
            </h2>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mb-6"></div>

            <p className="text-slate-600 text-base sm:text-lg leading-8">
              MYK Associates has worked with clients across different
              industries and sectors, providing professional services
              through experience, expertise and commitment.
            </p>

          </div>
        </div>
      </section>


      {/* ================= CLIENT LOGOS ================= */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* SECTION HEADING */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">

            <div>
              <span className="text-[#ff8d09] uppercase tracking-widest text-sm font-semibold">
                Our Network
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f3a] mt-2">
                Our Valued Clients
              </h2>
            </div>

            <p className="text-slate-500 text-sm">
              Professional relationships built on trust
            </p>

          </div>


          {/* CLIENT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">

            {clients.map((client, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  border border-slate-200
                  rounded-xl
                  h-[120px]
                  sm:h-[140px]
                  lg:h-[150px]
                  p-4 sm:p-5
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  hover:border-[#ff8d09]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <img
                  src={client}
                  alt={`MYK Associates Client ${index + 1}`}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= TRUST SECTION ================= */}
      <section className="bg-[#0b1f3a] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <div className="text-[#ff8d09] text-3xl font-bold mb-4">
                01
              </div>

              <h3 className="text-white text-xl font-bold mb-3">
                Professional Services
              </h3>

              <p className="text-slate-300 leading-7">
                Delivering professional services to organizations across
                different industries and business sectors.
              </p>
            </div>


            {/* CARD 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <div className="text-[#ff8d09] text-3xl font-bold mb-4">
                02
              </div>

              <h3 className="text-white text-xl font-bold mb-3">
                Client Relationships
              </h3>

              <p className="text-slate-300 leading-7">
                Building professional relationships through responsive
                service and consistent standards.
              </p>
            </div>


            {/* CARD 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-7">
              <div className="text-[#ff8d09] text-3xl font-bold mb-4">
                03
              </div>

              <h3 className="text-white text-xl font-bold mb-3">
                Diverse Clientele
              </h3>

              <p className="text-slate-300 leading-7">
                Supporting a diverse portfolio of clients through our
                multidisciplinary professional services.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= BOTTOM SECTION ================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="bg-[#0b1f3a] rounded-2xl px-6 sm:px-10 py-10 sm:py-12 text-center shadow-xl">

            <span className="text-[#ff8d09] uppercase tracking-widest text-xs sm:text-sm font-semibold">
              MYK Associates
            </span>

            <h2 className="text-white text-2xl sm:text-3xl font-bold mt-3">
              Relationships Built on Professional Excellence
            </h2>

            <p className="max-w-3xl mx-auto text-slate-300 leading-7 mt-4">
              We value the organizations that place their trust in our
              professional services and remain committed to maintaining
              strong client relationships.
            </p>

            <div className="w-16 h-1 bg-[#ff8d09] mx-auto mt-7"></div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default OurClients;