import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Eye,
  Activity,
  ScanHeart,
} from "lucide-react";

import Navbar from "../components/Navbar";

const specialities = [
  {
    name: "Cardiology",
    description:
      "Advanced diagnosis and treatment for heart and cardiovascular conditions.",
    icon: HeartPulse,
  },
  {
    name: "Neurology",
    description:
      "Expert care for neurological disorders with advanced diagnostic support.",
    icon: Brain,
  },
  {
    name: "Orthopaedics",
    description:
      "Comprehensive care for bones, joints, muscles and movement.",
    icon: Bone,
  },
  {
    name: "Paediatrics",
    description:
      "Compassionate healthcare focused on the growth and well-being of children.",
    icon: Baby,
  },
  {
    name: "General Medicine",
    description:
      "Complete medical care for common and complex health conditions.",
    icon: Stethoscope,
  },
  {
    name: "Ophthalmology",
    description:
      "Specialized diagnosis and treatment for eye and vision-related conditions.",
    icon: Eye,
  },
  {
    name: "Pulmonology",
    description:
      "Specialized care for respiratory and lung-related conditions.",
    icon: Activity,
  },
  {
    name: "Diagnostic Care",
    description:
      "Advanced imaging and diagnostic services for accurate medical evaluation.",
    icon: ScanHeart,
  },
];

function Specialities() {
  return (
    <div className="sp-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />


      {/* =========================
          HERO
      ========================= */}

      <section className="sp-hero">

        <div className="sp-hero-glow"></div>

        <div className="sp-container sp-hero-inner">

          <div className="sp-hero-content">

            <div className="sp-badge">
              <Stethoscope size={17} />
              <span>OUR SPECIALITIES</span>
            </div>

            <h1>
              Specialized Care.
              <span>Better Outcomes.</span>
            </h1>

            <p>
              Comprehensive medical care delivered by experienced specialists,
              advanced technology, and a team dedicated to your well-being.
            </p>

            <div className="sp-hero-actions">

              <Link
                to="/appointment"
                className="sp-primary-btn"
              >
                <CalendarDays size={18} />
                Book an Appointment
                <ArrowRight size={17} />
              </Link>

              <a
                href="#specialities"
                className="sp-secondary-btn"
              >
                Explore Specialities
                <ArrowRight size={17} />
              </a>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="sp-hero-visual">

            <div className="sp-orbit sp-orbit-one"></div>
            <div className="sp-orbit sp-orbit-two"></div>

            <div className="sp-hero-circle">

              <div className="sp-heart-icon">
                <HeartPulse size={58} />
              </div>

              <strong>25+</strong>

              <span>
                Medical
                <br />
                Specialities
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="sp-intro">

        <div className="sp-container">

          <div className="sp-section-heading">

            <div>
              <span className="sp-section-label">
                EXPERT MEDICAL CARE
              </span>

              <h2>
                Care for every
                <span> stage of life.</span>
              </h2>
            </div>

            <p>
              From preventive care to advanced treatments, our multidisciplinary
              teams work together to provide personalized healthcare under one roof.
            </p>

          </div>


          {/* =========================
              SPECIALITY GRID
          ========================= */}

          <div
            className="sp-grid"
            id="specialities"
          >

            {specialities.map((speciality, index) => {

              const Icon = speciality.icon;

              return (
                <article
                  className="sp-card"
                  key={speciality.name}
                >

                  <div className="sp-card-top">

                    <div className="sp-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="sp-icon">
                      <Icon size={25} />
                    </div>

                  </div>


                  <h3>
                    {speciality.name}
                  </h3>

                  <p>
                    {speciality.description}
                  </p>


                  <Link
                    to="/appointment"
                    className="sp-card-link"
                  >
                    Explore Care
                    <ArrowRight size={16} />
                  </Link>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================
          FEATURED CARE
      ========================= */}

      <section className="sp-featured">

        <div className="sp-container sp-featured-inner">

          <div className="sp-featured-visual">

            <div className="sp-featured-circle">

              <HeartPulse size={65} />

            </div>

            <div className="sp-floating-card sp-floating-one">

              <strong>100+</strong>

              <span>
                Expert
                <br />
                Doctors
              </span>

            </div>

            <div className="sp-floating-card sp-floating-two">

              <Activity size={19} />

              <span>
                Advanced
                <br />
                Medical Care
              </span>

            </div>

          </div>


          <div className="sp-featured-content">

            <span className="sp-section-label">
              MULTIDISCIPLINARY CARE
            </span>

            <h2>
              One hospital.
              <br />
              <span>Many areas of expertise.</span>
            </h2>

            <p>
              Our specialists collaborate across departments to ensure every
              patient receives coordinated and personalized treatment.
            </p>

            <div className="sp-feature-points">

              <div>
                <span>01</span>
                <p>
                  Experienced medical specialists
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  Advanced diagnostic technology
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Personalized treatment plans
                </p>
              </div>

            </div>

            <Link
              to="/doctors"
              className="sp-outline-btn"
            >
              Meet Our Doctors
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="sp-cta">

        <div className="sp-container sp-cta-inner">

          <div>

            <span>
              NEED SPECIALIST CARE?
            </span>

            <h2>
              Your health deserves
              <strong> the right specialist.</strong>
            </h2>

          </div>

          <Link to="/appointment">

            <CalendarDays size={18} />

            Book an Appointment

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>

    </div>
  );
}

export default Specialities;