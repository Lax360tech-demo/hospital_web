import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CalendarDays,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  Activity,
} from "lucide-react";

import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="ab-page">

      <Navbar />

      {/* =========================
          HERO
      ========================= */}

      <section className="ab-hero">

        <div className="ab-hero-overlay"></div>

        <div className="ab-hero-content">

          <div className="ab-badge">
            <HeartPulse size={16} />
            <span>ABOUT OUR HOSPITAL</span>
          </div>

          <h1>
            Care that puts
            <span> people first.</span>
          </h1>

          <p>
            For over two decades, we have combined medical expertise,
            advanced technology, and compassionate care to create
            better healthcare experiences.
          </p>

          <Link to="/appointment" className="ab-hero-btn">
            <CalendarDays size={18} />
            Book an Appointment
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>


      {/* =========================
          INTRODUCTION
      ========================= */}

      <section className="ab-intro">

        <div className="ab-container">

          <div className="ab-intro-grid">

            <div className="ab-intro-visual">

              <div className="ab-image-box">

                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/059/240/224/small_2x/modern-hospital-building-with-ambulance-entering-at-sunset-delivering-healthcare-services-photo.jpg"
                  alt="Our Hospital"
                />

              </div>

              <div className="ab-experience-card">

                <strong>25+</strong>

                <span>
                  Years of
                  <br />
                  Excellence
                </span>

              </div>

            </div>


            <div className="ab-intro-content">

              <span className="ab-section-label">
                WHO WE ARE
              </span>

              <h2>
                Healthcare built on
                <span> trust.</span>
              </h2>

              <p>
                Our hospital is dedicated to delivering comprehensive
                healthcare through experienced specialists, modern
                infrastructure, and patient-focused services.
              </p>

              <p>
                From preventive care to advanced treatments, every
                decision we make is guided by one simple principle —
                putting our patients and their families first.
              </p>


              <div className="ab-intro-points">

                <div>
                  <ShieldCheck size={19} />
                  <span>Patient-first approach</span>
                </div>

                <div>
                  <Stethoscope size={19} />
                  <span>Experienced medical specialists</span>
                </div>

                <div>
                  <Activity size={19} />
                  <span>Advanced medical technology</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      


      {/* =========================
          MISSION & VISION
      ========================= */}

      <section className="ab-mission">

        <div className="ab-container">

          <div className="ab-heading">

            <span className="ab-section-label">
              OUR PURPOSE
            </span>

            <h2>
              Driven by purpose.
              <span> Guided by care.</span>
            </h2>

            <p>
              Everything we do is focused on creating a healthier
              future for our patients and community.
            </p>

          </div>


          <div className="ab-purpose-grid">

            <div className="ab-purpose-card">

              <div className="ab-purpose-icon">
                <HeartPulse size={25} />
              </div>

              <span>OUR MISSION</span>

              <h3>
                Making quality healthcare accessible.
              </h3>

              <p>
                To provide safe, reliable, and compassionate healthcare
                while continuously improving the quality of every
                patient experience.
              </p>

            </div>


            <div className="ab-purpose-card ab-purpose-highlight">

              <div className="ab-purpose-icon">
                <Award size={25} />
              </div>

              <span>OUR VISION</span>

              <h3>
                Building a healthier tomorrow.
              </h3>

              <p>
                To become a trusted healthcare destination known for
                clinical excellence, innovation, and human-centered care.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WHY CHOOSE US
      ========================= */}

      <section className="ab-why">

        <div className="ab-container">

          <div className="ab-heading ab-heading-center">

            <span className="ab-section-label">
              WHY CHOOSE US
            </span>

            <h2>
              More than healthcare.
              <span> A trusted partnership.</span>
            </h2>

          </div>


          <div className="ab-why-grid">

            <div className="ab-why-card">

              <div className="ab-why-icon">
                <Stethoscope size={23} />
              </div>

              <h3>
                Expert Medical Team
              </h3>

              <p>
                Experienced doctors and specialists working together
                to deliver personalised care.
              </p>

            </div>


            <div className="ab-why-card">

              <div className="ab-why-icon">
                <Activity size={23} />
              </div>

              <h3>
                Advanced Technology
              </h3>

              <p>
                Modern diagnostic and treatment technology supporting
                accurate and effective healthcare.
              </p>

            </div>


            <div className="ab-why-card">

              <div className="ab-why-icon">
                <ShieldCheck size={23} />
              </div>

              <h3>
                Patient Safety
              </h3>

              <p>
                Strong safety standards and thoughtful processes
                throughout every stage of care.
              </p>

            </div>


            <div className="ab-why-card">

              <div className="ab-why-icon">
                <HeartPulse size={23} />
              </div>

              <h3>
                Compassionate Care
              </h3>

              <p>
                We listen, understand, and support patients beyond
                their medical treatment.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="ab-cta">

        <div className="ab-cta-content">

          <span>
            YOUR HEALTH. OUR PRIORITY.
          </span>

          <h2>
            Experience healthcare
            <br />
            with a human touch.
          </h2>

        </div>

        <Link to="/appointment">

          <CalendarDays size={18} />

          <span>
            Book an Appointment
          </span>

          <ArrowRight size={18} />

        </Link>

      </section>

    </div>
  );
}

export default About;