import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#0b1f3a] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* ================= CONTACT ================= */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Contact
            </h2>

            <div className="w-14 h-[3px] bg-[#d2a843] mb-6"></div>

            <div className="space-y-5 text-gray-300">

              {/* Address */}
              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faHouse}
                  className="text-[#d2a843] mt-1 text-lg"
                />

                <p className="text-sm leading-7">
                  MYK HOUSE, 52-A, Block ‘B’, Street No. 5,
                  Sindhi Muslim Cooperative Housing Society
                  Limited (SMCHS), Karachi
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#d2a843]"
                />

                <a
                  href="tel:+922138704421"
                  className="text-sm hover:text-[#d2a843] transition duration-300"
                >
                  (92-21) 38704421-28
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#d2a843]"
                />

                <a
                  href="mailto:info@mykassociates.com"
                  className="text-sm hover:text-[#d2a843] transition duration-300"
                >
                  info@mykassociates.com
                </a>
              </div>

            </div>
          </div>


          {/* ================= COMPANY ================= */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Company
            </h2>

            <div className="w-14 h-[3px] bg-[#d2a843] mb-6"></div>

            <div className="flex flex-col gap-3">

              <Link
                to="/aboutus"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#d2a843] transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[10px] group-hover:translate-x-1 transition"
                />
                About Us
              </Link>

              <Link
                to="/services2"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#d2a843] transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[10px] group-hover:translate-x-1 transition"
                />
                Services
              </Link>

              <Link
                to="/affiliation"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#d2a843] transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[10px] group-hover:translate-x-1 transition"
                />
                Affiliation
              </Link>

              <Link
                to="/careers"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#d2a843] transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[10px] group-hover:translate-x-1 transition"
                />
                Careers
              </Link>

              <Link
                to="/inquiry"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#d2a843] transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[10px] group-hover:translate-x-1 transition"
                />
                Inquiry
              </Link>

              <Link
                to="/branchlocation"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#d2a843] transition duration-300"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[10px] group-hover:translate-x-1 transition"
                />
                Branch Location
              </Link>

            </div>
          </div>


          {/* ================= LOCATION ================= */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Location
            </h2>

            <div className="w-14 h-[3px] bg-[#d2a843] mb-6"></div>

            <div className="w-full h-[240px] rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="MYK Associates Location"
                src="https://www.google.com/maps?q=MYK+HOUSE+52-A+Block+B+Street+5+SMCHS+Karachi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>


        {/* ================= CLIENT / PARTNER LOGOS ================= */}
        <div className="mt-12 pt-8 border-t border-white/10">

          <div className="flex flex-wrap items-center justify-center gap-5">

            <img
              src="/Images/1.png"
              alt="Partner"
              className="w-20 h-16 object-contain bg-white p-2 rounded-lg"
            />

            <img
              src="/Images/2.png"
              alt="Partner"
              className="w-20 h-16 object-contain bg-white p-2 rounded-lg"
            />

            <img
              src="/Images/3.jpg"
              alt="Partner"
              className="w-20 h-16 object-contain bg-white p-2 rounded-lg"
            />

            <img
              src="/Images/4.png"
              alt="Partner"
              className="w-20 h-16 object-contain bg-white p-2 rounded-lg"
            />

            <img
              src="/Images/5.jpg"
              alt="Partner"
              className="w-20 h-16 object-contain bg-white p-2 rounded-lg"
            />

            <img
              src="/Images/6.jpg"
              alt="Partner"
              className="w-20 h-16 object-contain bg-white p-2 rounded-lg"
            />

          </div>
        </div>

      </div>


      {/* ================= BOTTOM FOOTER ================= */}
      <div className="bg-[#071629] border-t border-white/10">

        <div className="max-w-[1400px] mx-auto px-5 py-5 text-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MYK Associates (Pvt.) Ltd.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;