import React from "react";

const Services1 = () => {
  const services = [
    {
      image: "/Images/project-management.jpg",
      title: "Project Management",
      description:
        "Handling a real estate project requires expertise and careful planning. At MYK Real Estate Advisory, we provide complete project management services to ensure smooth execution from start to finish. Whether you’re constructing a new building, renovating an existing property, or developing a commercial project, we take care of everything—including design, approvals, budgeting, and construction management—so your project is completed on time, within budget, and up to the highest standards.",
    },
    {
      image: "/Images/investment.jpg",
      title: "Investment Consultants",
      description:
        "Investing in real estate can be complex, but with the right guidance, it can also be highly rewarding. Our investment consulting services help you make informed decisions by analyzing market trends, property values, and investment opportunities. Whether you want to invest in residential properties, commercial spaces, or large-scale developments, we provide expert advice to help you maximize your returns. Our goal is to ensure you make smart and profitable investment choices.",
    },
    {
      image: "/Images/constuction.jpg",
      title: "Construction Consultants",
      description:
        "Building a property is a big commitment, and we’re here to make it easier for you. Our construction consulting services ensure your project is well-managed and meets the highest quality standards. From selecting the right materials to hiring skilled contractors, we assist you at every stage of construction. We also provide insights on cost-effective building solutions, project timelines, and structural integrity to ensure everything runs smoothly from start to finish.",
    },
    {
      image: "/Images/pending.jpg",
      title: "Equity Advisors",
      description:
        "Equity investments are an important part of real estate and financial growth. We provide expert guidance on equity investment strategies, helping you understand your options and make the most profitable decisions. Our team offers insights on risk management, market analysis, and financial planning to help you achieve the best possible outcomes. Whether you’re looking to invest in a single property or build a diverse real estate portfolio, we advise you make smart, well-informed choices.",
    },
    {
      image: "/Images/consultant.jpg",
      title: "Investment Consulting Services",
      description:
        "Navigating the world of real estate investments can be overwhelming, but we make it simple for you. Our investment consulting services include market research, financial analysis, and strategic planning to help you make well-informed decisions. Whether you’re a first-time investor or an experienced real estate developer, our consultants provide personalized solutions to help you achieve your financial goals.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img
          src="/Images/real-banner1.jpg"
          alt="MYK Real Estate Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/70"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <div className="text-center">
            <p className="text-[#ff8d09] text-sm sm:text-base font-semibold uppercase tracking-[4px] mb-3">
              MYK Real Estate Advisory
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Services
            </h1>

            <div className="w-20 h-1 bg-[#ff8d09] mx-auto mt-5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[#ff8d09] font-semibold uppercase tracking-[3px] text-xs sm:text-sm mb-3">
            Our Expertise
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1f3a]">
            Welcome to MYK Associates Real Estate Services
          </h2>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
                Who We Are
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                MYK Real Estate Advisory
              </h2>

              <p className="text-slate-600 leading-8 text-sm sm:text-base">
                At MYK Real Estate Advisory, we are passionate about helping you
                make the best real estate and investment decisions. Whether you
                want to buy, sell, or invest in properties, our experienced team
                is here to guide you through the entire process. We understand
                the market and work closely with our clients to provide
                customized solutions that meet their needs. From finding the
                right property to managing investments and overseeing
                construction projects, we ensure a smooth and hassle-free
                experience.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Images/real-about.jpg"
                alt="MYK Real Estate Advisory"
                className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ABOUT ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="overflow-hidden rounded-2xl shadow-xl order-2 lg:order-1">
              <img
                src="/Images/advicing.jpg"
                alt="Real Estate Services"
                className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
                What We Offer
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f3a] mb-6">
                Services
              </h2>

              <p className="text-slate-600 leading-8 text-sm sm:text-base">
                We offer a wide range of real estate and investment consulting
                services, making property transactions simple and stress-free.
                Our goal is to help individuals, businesses, and investors make
                smart choices by providing expert advice and market insights.
                Whether you need property management, project development, or
                financial planning, we’ve got you covered with comprehensive
                solutions designed to maximize your returns.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TYPE OF REAL ESTATE ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl mx-auto text-center mb-14">
            <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-3">
              Real Estate Solutions
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1f3a] mb-6">
              Type of Real Estate
            </h2>

            <p className="text-slate-600 leading-8 text-sm sm:text-base mb-5">
              Handling a real estate project requires expertise and careful
              planning. At MYK Real Estate Advisory, we provide complete project
              management services to ensure smooth execution from start to
              finish. Whether you’re constructing a new building, renovating an
              existing property, or developing a commercial project, we take
              care of everything—including design, approvals, budgeting, and
              construction management—so your project is completed on time,
              within budget, and up to the highest standards.
            </p>

            <p className="text-slate-600 leading-8 text-sm sm:text-base">
              No matter what kind of property you’re looking for, we can help.
              Whether it’s a residential home, a commercial space, an
              industrial property, or a plot for future development, we provide
              expert assistance to ensure you make the right decision. Our team
              carefully studies market trends and property values to help you
              invest in properties that offer long-term benefits.
            </p>
          </div>

          {/* ================= SERVICE CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[230px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="w-12 h-1 bg-[#ff8d09] mb-5 rounded-full"></div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-7 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0b1f3a] py-14 sm:py-16 mb-15">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">

          <p className="text-[#ff8d09] uppercase tracking-[3px] font-semibold text-xs sm:text-sm mb-4">
            Your Trusted Real Estate Partner
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-relaxed">
            At MYK Real Estate Advisory, we are committed to your success in
            real estate and investment. With our expertise, dedication, and
            client-focused approach, we provide reliable and professional
            services tailored to your needs. Contact us today to learn how we
            can help you make the best real estate and investment decisions.
          </h2>

        </div>
      </section>

    </main>
  );
};

export default Services1;