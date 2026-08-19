import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

import Navbar from "../components/Navbar";

const packages = [
  {
    title: "Basic Health Checkup",
    subtitle: "Essential preventive screening",
    price: "₹1,999",
    icon: HeartPulse,
    popular: false,
    tests: [
      "Complete Blood Count",
      "Blood Sugar",
      "Blood Pressure",
      "Lipid Profile",
      "Liver Function Test",
      "Doctor Consultation",
    ],
  },
  {
    title: "Comprehensive Checkup",
    subtitle: "Complete health assessment",
    price: "₹3,999",
    icon: ShieldCheck,
    popular: true,
    tests: [
      "Complete Blood Count",
      "Blood Sugar & HbA1c",
      "Lipid Profile",
      "Liver & Kidney Function",
      "Thyroid Profile",
      "ECG",
      "Doctor Consultation",
    ],
  },
  {
    title: "Executive Health Checkup",
    subtitle: "Advanced preventive screening",
    price: "₹6,999",
    icon: Sparkles,
    popular: false,
    tests: [
      "Complete Blood Profile",
      "HbA1c & Lipid Profile",
      "Liver & Kidney Function",
      "Thyroid Profile",
      "ECG",
      "Chest X-Ray",
      "Ultrasound Screening",
      "Specialist Consultation",
    ],
  },
  {
    title: "Senior Citizen Package",
    subtitle: "Focused care for seniors",
    price: "₹4,999",
    icon: UserRound,
    popular: false,
    tests: [
      "Complete Blood Count",
      "Diabetes Screening",
      "Kidney Function",
      "Liver Function",
      "Thyroid Profile",
      "ECG",
      "Bone Health Screening",
      "Doctor Consultation",
    ],
  },
];

function HealthPackages() {
  return (
    <div className="hp-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />


      {/* =========================
          HERO
      ========================= */}

      <section className="hp-hero">

        <div className="hp-hero-glow"></div>

        <div className="hp-container hp-hero-inner">

          <div className="hp-hero-content">

            <div className="hp-badge">
              <HeartPulse size={16} />
              <span>HEALTH PACKAGES</span>
            </div>

            <h1>
              Invest in your
              <span> health today.</span>
            </h1>

            <p>
              Thoughtfully designed health screening packages to help you
              understand your health and stay ahead of potential concerns.
            </p>

            <div className="hp-hero-actions">

              <Link to="/appointment" className="hp-primary-btn">
                <CalendarDays size={18} />
                Book a Package
                <ArrowRight size={17} />
              </Link>

              <a href="#packages" className="hp-secondary-btn">
                Explore Packages
              </a>

            </div>

          </div>


          <div className="hp-hero-card">

            <div className="hp-hero-card-icon">
              <Stethoscope size={28} />
            </div>

            <span>PREVENTIVE HEALTHCARE</span>

            <strong>
              Early care.
              <br />
              Better outcomes.
            </strong>

            <div className="hp-hero-card-line"></div>

            <p>
              Regular health screenings can help identify potential health
              concerns at an early stage.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          PACKAGE INTRO
      ========================= */}

      <section className="hp-intro">

        <div className="hp-container">

          <div className="hp-section-heading">

            <div>

              <span className="hp-label">
                CHOOSE YOUR PACKAGE
              </span>

              <h2>
                Healthcare that fits
                <span> your needs.</span>
              </h2>

            </div>

            <p>
              Select from our range of preventive health packages designed
              for different stages and healthcare needs.
            </p>

          </div>


          {/* =========================
              PACKAGE GRID
          ========================= */}

          <div className="hp-grid" id="packages">

            {packages.map((item) => {

              const Icon = item.icon;

              return (
                <article
                  className={`hp-card ${
                    item.popular ? "hp-card-popular" : ""
                  }`}
                  key={item.title}
                >

                  {item.popular && (
                    <div className="hp-popular">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="hp-card-top">

                    <div className="hp-card-icon">
                      <Icon size={25} />
                    </div>

                    <span className="hp-card-check">
                      <ShieldCheck size={15} />
                      Verified
                    </span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p className="hp-card-subtitle">
                    {item.subtitle}
                  </p>

                  <div className="hp-price">
                    <small>Starting from</small>
                    <strong>{item.price}</strong>
                  </div>

                  <div className="hp-divider"></div>

                  <span className="hp-includes">
                    PACKAGE INCLUDES
                  </span>

                  <ul>

                    {item.tests.map((test) => (
                      <li key={test}>
                        <Check size={15} />
                        <span>{test}</span>
                      </li>
                    ))}

                  </ul>

                  <Link
                    to="/appointment"
                    className="hp-card-btn"
                  >
                    <span>Book Package</span>
                    <ArrowRight size={17} />
                  </Link>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================
          WHY HEALTH CHECKUP
      ========================= */}

      <section className="hp-benefits">

        <div className="hp-container hp-benefits-inner">

          <div className="hp-benefits-content">

            <span className="hp-label">
              WHY REGULAR CHECKUPS?
            </span>

            <h2>
              Prevention is
              <span> better than cure.</span>
            </h2>

            <p>
              Regular preventive screenings give you a clearer picture of
              your health and help you make informed healthcare decisions.
            </p>

            <Link
              to="/appointment"
              className="hp-benefits-btn"
            >
              <CalendarDays size={18} />
              Schedule Your Checkup
              <ArrowRight size={17} />
            </Link>

          </div>


          <div className="hp-benefit-list">

            <div className="hp-benefit-item">

              <div className="hp-benefit-icon">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h3>Early Detection</h3>
                <p>
                  Identify potential health concerns before they become serious.
                </p>
              </div>

            </div>


            <div className="hp-benefit-item">

              <div className="hp-benefit-icon">
                <HeartPulse size={22} />
              </div>

              <div>
                <h3>Know Your Health</h3>
                <p>
                  Understand important health indicators through regular screening.
                </p>
              </div>

            </div>


            <div className="hp-benefit-item">

              <div className="hp-benefit-icon">
                <Stethoscope size={22} />
              </div>

              <div>
                <h3>Expert Guidance</h3>
                <p>
                  Discuss your results with experienced medical professionals.
                </p>
              </div>

            </div>


            <div className="hp-benefit-item">

              <div className="hp-benefit-icon">
                <Sparkles size={22} />
              </div>

              <div>
                <h3>Peace of Mind</h3>
                <p>
                  Stay proactive and confident about your overall wellbeing.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="hp-cta">

        <div className="hp-container hp-cta-inner">

          <div>

            <span>
              TAKE CHARGE OF YOUR HEALTH
            </span>

            <h2>
              Your health deserves
              <strong> regular attention.</strong>
            </h2>

            <p>
              Choose a package and take the first step towards
              proactive healthcare.
            </p>

          </div>

          <Link to="/appointment">

            <CalendarDays size={18} />

            Book Your Checkup

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>

    </div>
  );
}

export default HealthPackages;