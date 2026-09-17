import React from "react";

const BranchLocation = () => {
  const karachiTeam = [
    {
      name: "Mr. Muhammad Younas Khan",
      designation: "Chairman & Chief Executive Officer",
      direct: "(92-21) 34324600",
      email: "ceo@mykassociates.com",
    },
    {
      name: "Mr. Fahd Ali Khan",
      designation: "Director (Non equity)",
      cell: "(92-300) 2000140",
      direct: "(92-21) 34324601",
      email: "fahd@mykassociates.com",
    },
    {
      name: "Mr. Muhammad Sharjeel Siddiqui",
      designation: "Company Secretary & Manager Operations",
      direct: "(92-21) 34524670",
      cell: "(92-321) 2527610",
      email: "sharjeel@mykassociates.com",
    },
    {
      name: "Mr. Syed Shabab Raza Naqvi",
      designation: "Manager Evaluations & Inspections",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-300) 2107414",
      email: "shabab@mykassociates.com",
    },
    {
      name: "Engr. Muhammad Touqir",
      designation: "Civil Engineer",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-347) 2460368",
      email: "touqir@mykassociates.com",
    },
    {
      name: "Engr. Sidra Tahir",
      designation: "Civil Engineer",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      email: "sidra@mykassociates.com",
    },
    {
      name: "Engr. Kiran Ashraf",
      designation: "Civil Engineer",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      email: "kiran@mykassociates.com",
    },
    {
      name: "Mr. Syed Akhtar Mehdi",
      designation: "Evaluations & Inspections Officer",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-0313) 2045392",
      email: "akhter@mykassociates.com",
    },
    {
      name: "Mr. Syed Ashar Murtaza",
      designation: "Evaluations & Inspections Officer",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-345) 3251452",
      email: "ashar@mykassociates.com",
    },
    {
      name: "Mr. Muhammad Awais",
      designation: "Evaluations & Inspections Officer",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-347) 3458933",
      email: "awais@mykassociates.com",
    },
    {
      name: "Mr. Syed Sajid Hussain",
      designation: "Evaluations & Inspections Officer",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-346) 2720488",
      email: "sajid@mykassociates.com",
    },
    {
      name: "Mr. Moueez Younas",
      designation: "Office Coordinator",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-345) 2545543",
      email: "moueez@mykassociates.com",
    },
  ];

  const autosDepartment = [
    {
      name: "Mr. Mujtaba Hyder",
      designation: "Evaluations Officer (Autos)",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-321) 2279497",
      email: "mujtaba@mykassociates.com",
    },
  ];

  const muccaddamDepartment = [
    {
      name: "Mr. Syed Mammon Ahmer",
      designation: "Manager Muccaddam",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-300) 2209874",
      email: "ahmer@mykassociates.com",
    },
    {
      name: "Mr. Karim Buksh",
      designation: "Muccaddam Supervisor",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-300) 7089845",
      email: "info@mykassociates.com",
    },
    {
      name: "Mr. Muhammad Faisal",
      designation: "Muccaddam Supervisor",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-302) 2716805",
      email: "info@mykassociates.com",
    },
  ];

  const financeDepartment = [
    {
      name: "Mr. Tahir Ashraf",
      designation: "Finance Manager",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-322) 2990799",
      email: "tahir@mykassociates.com",
    },
    {
      name: "Mr. Muhammad Arsalan Raza",
      designation: "Relationship Officer",
      pabx: "(92-21) 34324589-601",
      tel: "(92-21) 38704421-28",
      cell: "(92-334) 3748224",
      email: "recovery@mykassociates.com",
    },
  ];

  const branches = [
    {
      city: "Multan Branch",
      image: "/Images/multan.jpg",
      manager: "Mr. Aown Abbas Shah",
      designation: "Branch Manager",
      address:
        "2nd Floor of Plot No 181, Shafqat Colony Al-Tamash Road, Multan Cantt, Multan",
      pabx: "(92-61) 4519468, 4503201",
      fax: "(92-61) 4549468",
      cell: "(92-301) 8738512",
      email: "multan@mykassociates.com",
      coverage: "This office also covers all the adjoining cities of Multan.",
    },
    {
      city: "Lahore Branch",
      image: "/Images/lahore.jpg",
      manager: "Mr. Rana Faisal",
      designation: "Branch Manager",
      address: "House on Plot No 1, Ayesha Street, Old Muslim Town, Lahore",
      pabx: "(92-42) 35845836",
      fax: "(92-42) 35845837",
      cell: "(92-333) 4999945",
      email: "lahore@mykassociates.com",
      coverage: "This office also covers all the adjoining cities of Lahore.",
    },
    {
      city: "Gujranwala Branch",
      image: "/Images/gujranwala.jpg",
      manager: "Mr. Zeeshan Haider",
      designation: "Branch Manager",
      address: "1st Floor of Trust Plaza, 16 Main Block of Gujranwala",
      pabx: "(92-55) 3843799",
      fax: "(92-55) 3253799",
      cell: "(92-300) 7448264",
      email: "gujranwala@mykassociates.com",
      coverage:
        "This office also covers all the adjoining cities of Gujranwala.",
    },
    {
      city: "Faisalabad Branch",
      image: "/Images/faisalabad.jpg",
      manager: "Mr. Syed Shahbaz Abbas Naqvi",
      designation: "Regional General Manager",
      address:
        "1st Floor, Gill Plaza, Adjacent Gill Electronics, Rahman Chowk, Farooq Shaheed Road, Madina Town, Faisalabad",
      pabx: "(92-41) 8714695",
      fax: "(92-41) 8734045",
      cell: "(92-300) 6679167 & (92-300) 8659067",
      emails: [
        "Faisalabad@mykassociates.com",
        "shahbaz.a.naqvi@mykassociates.com",
      ],
      coverage:
        "This office also covers all the adjoining cities of Faisalabad.",
    },
    {
      city: "Hyderabad Branch",
      image: "/Images/hyderabad.jpg",
      manager: "Mr. Zubair Larik",
      designation: "Representative",
      address:
        "Office # 1-12, 1st Floor, River View Apartments, Thandi Sarak, Hyderabad.",
      cell: "(92-300) 2781779 & (92-341) 8114700",
      email: "zubair@mykassociates.com",
      coverage:
        "This office also covers all the adjoining cities of Hyderabad.",
    },
    {
      city: "Islamabad Branch",
      image: "/Images/islamabad.jpg",
      manager: "Mr. Syed Shahbaz Abbas Naqvi",
      designation: "Regional General Manager",
      address:
        "Khatak House, P-303, Dhok Mustakeem Near Mandi Bahaodeen Karyana, Store, Pishawar Road, peer Wadhai Morr, Rawalpindi",
      cell: "(92-300) 6679167 & (92-300) 8659067",
    },
  ];

  const phoneLink = (phone) => phone?.replace(/[^\d+]/g, "");

  const PersonCard = ({ person }) => (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8d09] hover:shadow-xl">
      <div className="flex justify-center bg-slate-100 px-6 pt-7">
        <img
          src="/Images/men-300x300.jpg"
          alt={person.name}
          className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[#0b1f3a]">
          {person.name}
        </h3>

        <p className="mt-2 min-h-[48px] font-semibold text-[#ff8d09]">
          {person.designation}
        </p>

        <div className="my-5 border-t border-slate-200" />

        <div className="space-y-2 text-sm text-slate-600">
          {person.pabx && <p><b>PABX:</b> {person.pabx}</p>}

          {person.tel && (
            <p>
              <b>Tel:</b>{" "}
              <a
                href={`tel:${phoneLink(person.tel)}`}
                className="hover:text-[#ff8d09]"
              >
                {person.tel}
              </a>
            </p>
          )}

          {person.direct && (
            <p>
              <b>Direct:</b>{" "}
              <a
                href={`tel:${phoneLink(person.direct)}`}
                className="hover:text-[#ff8d09]"
              >
                {person.direct}
              </a>
            </p>
          )}

          {person.cell && (
            <p>
              <b>Cell:</b>{" "}
              <a
                href={`tel:${phoneLink(person.cell)}`}
                className="hover:text-[#ff8d09]"
              >
                {person.cell}
              </a>
            </p>
          )}

          {person.email && (
            <p className="break-all">
              <b>Email:</b>{" "}
              <a
                href={`mailto:${person.email}`}
                className="font-medium text-[#0b1f3a] hover:text-[#ff8d09]"
              >
                {person.email}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const Department = ({ title, people }) => (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#ff8d09]">
            Karachi Head Office
          </span>

          <h2 className="mt-2 text-3xl font-bold text-[#0b1f3a]">
            {title}
          </h2>

          <div className="mt-5 h-1 w-16 bg-[#ff8d09]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative h-[280px] overflow-hidden sm:h-[360px] lg:h-[430px]">
        <img
          src="/Images/49.png"
          alt="MYK Associates Branch Locations"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1f3a]/75" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8d09]">
              MYK Associates
            </p>

            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Branch Locations
            </h1>

            <div className="mt-6 h-1 w-20 bg-[#ff8d09]" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#ff8d09]">
            Nationwide Presence
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#0b1f3a] sm:text-4xl">
            Welcome to MYK Associates Branch Locations
          </h2>

          <div className="mx-auto my-6 h-1 w-16 bg-[#ff8d09]" />

          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Connect with our head office and regional branches across Pakistan.
          </p>
        </div>
      </section>

      {/* KARACHI HEAD OFFICE */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">

           <div className="flex items-center justify-center bg-white p-5 sm:p-6 lg:p-8">
  <img
    src="/Images/image003.jpg"
    alt="Karachi Head Office"
    className="block h-auto w-full max-w-[420px] object-contain"
  />
</div>

            <div className="p-7 sm:p-10 lg:p-12">
              <span className="text-sm font-bold uppercase tracking-widest text-[#ff8d09]">
                Head Office
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#0b1f3a]">
                Karachi Head Office
              </h2>

              <div className="my-6 h-1 w-16 bg-[#ff8d09]" />

              <div className="space-y-4 leading-7 text-slate-600">
                <p>
                  MYK HOUSE, 52-A, Block ‘B’, Street No. 5, Sindhi Muslim
                  Cooperative Housing Society Limited (SMCHS), Karachi
                </p>

                <p><b>PABX:</b> (92-21) 34324589-601</p>

                <p>
                  <b>Telephone:</b>{" "}
                  <a
                    href="tel:+922138704421"
                    className="hover:text-[#ff8d09]"
                  >
                    (92-21) 38704421-28
                  </a>
                </p>

                <p>
                  <b>Email:</b>{" "}
                  <a
                    href="mailto:contact@mykassociates.com"
                    className="font-semibold text-[#0b1f3a] hover:text-[#ff8d09]"
                  >
                    contact@mykassociates.com
                  </a>
                  {" | "}
                  <a
                    href="mailto:info@mykassociates.com"
                    className="font-semibold text-[#0b1f3a] hover:text-[#ff8d09]"
                  >
                    info@mykassociates.com
                  </a>
                </p>

                <p>
                  <b>Website:</b>{" "}
                  <a
                    href="https://www.mykassociates.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#ff8d09] hover:underline"
                  >
                    www.mykassociates.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KARACHI TEAM */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ff8d09]">
              Our Professionals
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#0b1f3a] sm:text-4xl">
              Karachi Head Office Team
            </h2>

            <div className="mx-auto mt-6 h-1 w-16 bg-[#ff8d09]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {karachiTeam.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>

        </div>
      </section>

      {/* DEPARTMENTS */}
      <Department
        title="Autos Department"
        people={autosDepartment}
      />

      <div className="bg-white">
        <Department
          title="Muccaddam Department"
          people={muccaddamDepartment}
        />
      </div>

      <Department
        title="Finance Department"
        people={financeDepartment}
      />

      {/* REGIONAL BRANCHES */}
      <section className="bg-[#0b1f3a] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ff8d09]">
              Our Network
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Regional Branches
            </h2>

            <div className="mx-auto mt-6 h-1 w-16 bg-[#ff8d09]" />
          </div>

          <div className="space-y-8">
  {branches.map((branch, index) => (
    <div
      key={index}
      className="grid items-center overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]"
    >

      {/* BRANCH IMAGE */}
      <div className="flex items-center justify-center bg-white p-5 sm:p-6 lg:p-8">
        <img
          src={branch.image}
          alt={branch.city}
          className="block h-auto w-full max-w-[420px] object-contain"
        />
      </div>

      {/* DETAILS */}
      <div className="p-6 sm:p-8 lg:p-10">
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#ff8d09]">
                    Branch Contact
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-[#0b1f3a]">
                    {branch.manager}
                  </h3>

                  <p className="mt-1 font-semibold text-[#ff8d09]">
                    {branch.designation}
                  </p>

                  <div className="my-6 h-1 w-12 bg-[#ff8d09]" />

                  <div className="space-y-3 leading-7 text-slate-600">
                    <p>
                      <b>Address:</b> {branch.address}
                    </p>

                    {branch.pabx && (
                      <p>
                        <b>PABX:</b> {branch.pabx}
                      </p>
                    )}

                    {branch.fax && (
                      <p>
                        <b>Fax:</b> {branch.fax}
                      </p>
                    )}

                    {branch.cell && (
                      <p>
                        <b>Cell:</b> {branch.cell}
                      </p>
                    )}

                    {branch.email && (
                      <p className="break-all">
                        <b>Email:</b>{" "}
                        <a
                          href={`mailto:${branch.email}`}
                          className="font-semibold text-[#0b1f3a] hover:text-[#ff8d09]"
                        >
                          {branch.email}
                        </a>
                      </p>
                    )}

                    {branch.emails && (
                      <p className="break-all">
                        <b>Email:</b>{" "}
                        {branch.emails.map((email, emailIndex) => (
                          <React.Fragment key={email}>
                            <a
                              href={`mailto:${email}`}
                              className="font-semibold text-[#0b1f3a] hover:text-[#ff8d09]"
                            >
                              {email}
                            </a>

                            {emailIndex < branch.emails.length - 1 && " | "}
                          </React.Fragment>
                        ))}
                      </p>
                    )}

                    {branch.coverage && (
                      <div className="mt-5 rounded-lg border-l-4 border-[#ff8d09] bg-slate-50 p-4">
                        <p className="text-sm italic text-slate-600">
                          {branch.coverage}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM / FOOTER GAP */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="rounded-2xl bg-[#0b1f3a] px-6 py-10 text-center shadow-xl sm:px-10 sm:py-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ff8d09]">
              Nationwide Network
            </span>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              MYK Associates Across Pakistan
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300">
              Our head office and regional branch network enables us to
              efficiently serve clients across multiple cities and adjoining
              regions.
            </p>

            <div className="mx-auto mt-7 h-1 w-16 bg-[#ff8d09]" />
          </div>

        </div>
      </section>

    </main>
  );
};

export default BranchLocation;