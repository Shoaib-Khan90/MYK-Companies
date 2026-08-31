import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/Images/1.png",
    title: "Clearing &",
    title2: "Forwarding",
  },
  {
    image: "/Images/2.png",
    title: "Stock",
    title2: "Evaluation",
  },
  {
    image: "/Images/3.jpg",
    title: "Solar Energy",
    title2: "for home and business",
  },
  {
    image: "/Images/4.png",
    title: "Asset Evaluation",
  },
  {
    image: "/Images/5.jpg",
    title: "Vehicle &",
    title2: "Rolling Equipment",
  },
];

const clientImages = [
  "/Images/client1.png",
  "/Images/client2.jpg",
  "/Images/client3.jpg",
  "/Images/client4.jpg",
  "/Images/client5.png",
  "/Images/client6.png",
  "/Images/client7.jpg",
  "/Images/client8.jpg",
  "/Images/client9.png",
  "/Images/client10.png",
  "/Images/client11.png",
  "/Images/client12.jpg",
  "/Images/client13.jpg",
  "/Images/client14.jpg",
  "/Images/client15.jpg",
  "/Images/client16.png",
  "/Images/client17.jpg",
  "/Images/client18.jpg",
  "/Images/client19.png",
];

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const steps = 100;
    const increment = end / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="fix">
      <section className="hero-slider">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt={slide.title} />

              <div className="slide-overlay">
                <h1>
                  {slide.title}
                  <br />
                  {slide.title2}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Previous */}
        <button className="slider-btn prev" onClick={previousSlide}>
          ❮
        </button>

        {/* Next */}
        <button className="slider-btn next" onClick={nextSlide}>
          ❯
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={currentSlide === index ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="company-section">
        {/* HEADING */}
        <div className="company-heading">
          <h1>MYK Associates Private Limited</h1>

          <div className="heading-line"></div>

          <p>
            SERVICE PROVIDERS TO THE FINANCIAL, BUSINESS & PROFESSIONAL SECTOR
            OF PAKISTAN
          </p>
        </div>

        {/* CARDS */}
        <div className="company-cards">
          {/* ABOUT COMPANY */}
          <div className="company-card">
            <div className="card-image">
              <img src="/Images/6.jpg" alt="MYK Associates Company" />
            </div>

            <div className="card-content">
              <span className="card-label">WHO WE ARE</span>

              <h2>About the Company</h2>

              <p>
                MYK Associates Pvt. Ltd is an ISO 9001:2015 certified company
                incorporated September 2000 approved by the Pakistan Banks’
                Association (PBA).
              </p>

              <a href="/aboutus" className="read-more">
                Read More
                <span>→</span>
              </a>
            </div>
          </div>

          {/* ABOUT FOUNDER */}
          <div className="company-card">
            <div className="card-image">
              <img src="/Images/7.jpg" alt="Founder of MYK Associates" />
            </div>

            <div className="card-content">
              <span className="card-label">LEADERSHIP</span>

              <h2>About the Founder</h2>

              <p>
                Mr. Muhammad Younas Khan is the Chairman and Chief Executive
                Officer of MYK Associates (Pvt.) Ltd, a company registered under
                applicable corporate regulations.
              </p>

              <a href="/aboutus/aboutthefounder" className="read-more">
                Read More
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          {/* Card 1 */}
          <div className="feature-card">
            <img
              src="/Images/8.png"
              alt="Company Objectives"
              className="feature-icon"
            />

            <h2>COMPANY OBJECTIVES</h2>
            <div className="feature-line"></div>

            <p>
              We are committed to providing a professional work environment that
              encourages and rewards dedication, teamwork, honesty and
              reliability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <img
              src="/Images/9.png"
              alt="Mission and Vision"
              className="feature-icon"
            />

            <h2>MISSION & VISION</h2>
            <div className="feature-line"></div>

            <p>
              Dedicated to our clientele by providing seamless services. Driven
              by excellence in professionalism and high standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <img src="/Images/10.png" alt="Goals" className="feature-icon" />

            <h2>GOALS</h2>
            <div className="feature-line"></div>

            <p>
              Our ultimate goal is to set ourselves apart as a credible industry
              leader, dedicated to providing seamless services and value that
              our clients can trust.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section">
        <div className="services-heading">
          <h1>Our Services</h1>
          <div className="services-line"></div>
        </div>

        <div className="services-grid">
          {/* 1 - PROJECT MANAGEMENT */}
          <Link to="/services/projectmanagement" className="service-card">
            <div className="service-image">
              <img src="/Images/11.png" alt="Project Management" />
            </div>

            <div className="service-title">
              <h2>PROJECT MANAGEMENT</h2>
            </div>
          </Link>

          {/* 2 - OTHER SERVICES */}
          <Link to="/services/otherservices" className="service-card">
            <div className="service-image">
              <img src="/Images/12.png" alt="Other Services" />
            </div>

            <div className="service-title">
              <h2>OTHER SERVICES</h2>
            </div>
          </Link>

          {/* 3 - MARKET INFORMATION */}
          <Link to="/services/marketinformation" className="service-card">
            <div className="service-image">
              <img src="/Images/13.png" alt="Market Information" />
            </div>

            <div className="service-title">
              <h2>MARKET INFORMATION</h2>
            </div>
          </Link>

          {/* 4 - INCOME ESTIMATION */}
          <Link to="/services/incomeestimation" className="service-card">
            <div className="service-image">
              <img src="/Images/14.png" alt="Income Estimation" />
            </div>

            <div className="service-title">
              <h2>INCOME ESTIMATION</h2>
            </div>
          </Link>

          {/* 5 - CREDIT EVALUATION */}
          <Link to="/services/credit" className="service-card">
            <div className="service-image">
              <img
                src="/Images/15.png"
                alt="Credit Evaluations and Credit Reports"
              />
            </div>

            <div className="service-title">
              <h2>CREDIT EVALUATIONS & CREDIT REPORTS</h2>
            </div>
          </Link>

          {/* 6 - CLEARING & FREIGHT */}
          <Link to="/services/clearning" className="service-card">
            <div className="service-image">
              <img
                src="/Images/16.jpg"
                alt="Clearing and Freight Forwarding Services"
              />
            </div>

            <div className="service-title">
              <h2>CLEARING AND FREIGHT FORWARDING SERVICES</h2>
            </div>
          </Link>

          {/* 7 - COLLATERAL MANAGEMENT */}
          <Link to="/services/collateralmanagement" className="service-card">
            <div className="service-image">
              <img src="/Images/17.jpg" alt="Collateral Management" />
            </div>

            <div className="service-title">
              <h2>COLLATERAL MANAGEMENT</h2>
            </div>
          </Link>

          {/* 8 - STOCK INSPECTIONS */}
          <Link to="/services/stockinspections" className="service-card">
            <div className="service-image">
              <img src="/Images/18.jpg" alt="Stock Inspections" />
            </div>

            <div className="service-title">
              <h2>STOCK INSPECTIONS</h2>
            </div>
          </Link>

          {/* 9 - PRE INSURANCE */}
          <Link to="/services/preinsurance" className="service-card">
            <div className="service-image">
              <img src="/Images/19.png" alt="Pre Insurance Evaluation" />
            </div>

            <div className="service-title">
              <h2>PRE INSURANCE EVALUATION</h2>
            </div>
          </Link>

          {/* 10 - STOCK EVALUATION */}
          <Link to="/services/stockevaluation" className="service-card">
            <div className="service-image">
              <img src="/Images/20.png" alt="Stock Evaluation" />
            </div>

            <div className="service-title">
              <h2>STOCK EVALUATION</h2>
            </div>
          </Link>

          {/* 11 - VEHICLE EVALUATION */}
          <Link to="/services/vehiclerolling" className="service-card">
            <div className="service-image">
              <img
                src="/Images/21.jpg"
                alt="Vehicle and Rolling Equipment Evaluation"
              />
            </div>

            <div className="service-title">
              <h2>VEHICLE AND ROLLING EQUIPMENT EVALUATION</h2>
            </div>
          </Link>

          {/* 12 - ASSET EVALUATION */}
          <Link to="/services/assetevaluation" className="service-card">
            <div className="service-image">
              <img src="/Images/22.jpg" alt="Asset Evaluation" />
            </div>

            <div className="service-title">
              <h2>ASSET EVALUATION</h2>
            </div>
          </Link>
        </div>
      </section>

      {/* WHY CHOCIE US */}

      <section className="why-section">
        {/* Heading */}
        <div className="why-heading">
          <h1>Why Choose Us?</h1>
          <div className="why-line"></div>
        </div>

        {/* Cards */}
        <div className="why-container">
          {/* Card 1 */}
          <div className="why-card">
            <div className="why-icon">
              <img src="/Images/23.png" alt="Operational Excellence" />
            </div>

            <h2>OPERATIONAL EXCELLENCE</h2>

            <p>
              Providing outstanding services through teamwork, accountability
              and innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="why-card">
            <div className="why-icon">
              <img src="/Images/24.png" alt="Continuous Improvement" />
            </div>

            <h2>CONTINUOUS IMPROVEMENT</h2>

            <p>
              Through teamwork, experience, accountability and innovation – all
              of which is reflected in the quality of our services.
            </p>
          </div>

          {/* Card 3 */}
          <div className="why-card">
            <div className="why-icon">
              <img src="/Images/25.png" alt="Innovative Solutions" />
            </div>

            <h2>INNOVATIVE SOLUTIONS</h2>

            <p>By understanding, responsibility and continuous improvement.</p>
          </div>
        </div>
      </section>

      {/* Years */}

      {/* YEARS / COUNTER SECTION */}

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number">
              <h1>
                <Counter end={17} duration={2000} />
              </h1>

              <span className="plus">+</span>
            </div>

            <p>Years of Experience</p>
          </div>

          <div className="stat-box">
            <div className="stat-number">
              <h1>
                <Counter end={1267} duration={2200} />
              </h1>

              <span className="plus">+</span>
            </div>

            <p>Satisfied Customers</p>
          </div>

          <div className="stat-box">
            <div className="stat-number">
              <h1>
                <Counter end={4589} duration={2500} />
              </h1>

              <span className="plus">+</span>
            </div>

            <p>Finished Projects</p>
          </div>
        </div>
      </section>

      {/* Our Team */}

      <section className="team-section">
        <div className="team-heading">
          <h1>Our Team</h1>
          <div className="team-line"></div>
        </div>

        <div className="team-content">
          <p>
            MYK is a company built around two core assets: the services to its
            valued clients and its people. We believe work is more than just a
            place you go every day. It should be a place of professional growth,
            analysis and interpersonal relationships. It’s about being motivated
            and inspired to achieve certain goals. We encourage our team to take
            pride in their work and in providing exceptional solutions to our
            clients.
          </p>

          <div className="team-image">
            <img src="/Images/26.jpg" alt="MYK Team" />
          </div>

          <p>
            Employee training and development is essential for both new and
            existing businesses. In order for an employee to perform their job
            well, it is important for us to give them the training and tools
            they need to be responsible productive team members. At MYK we
            conduct workshops & on-site training programs for all our employees.
            Our company also attends conferences and seminars to keep our
            employees up-to-date in new techniques and technologies in their
            respective field of work.
          </p>
        </div>
      </section>

      {/* Our Clientele */}

      <section className="clientele-section">
        <div className="clientele-heading">
          <h1>Our Clientele</h1>
          <div className="clientele-line"></div>
        </div>

        <div className="clientele-slider">
          <div className="clientele-track">
            {[...clientImages, ...clientImages].map((image, index) => (
              <div className="client-logo-card" key={index}>
                <img src={image} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Dashboard;
