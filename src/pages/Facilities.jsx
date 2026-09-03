import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BedDouble,
  Clock3,
  Cpu,
  HeartPulse,
  Microscope,
  MonitorDot,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Ambulance,
  CalendarDays,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const facilities = [
  {
    icon: HeartPulse,
    title: "Advanced ICU",
    description:
      "Intensive care supported by continuous monitoring and experienced critical-care teams.",
  },
  {
    icon: Activity,
    title: "Modern Operation Theatres",
    description:
      "Advanced surgical infrastructure designed for safe and precise procedures.",
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    description:
      "Modern diagnostic technology supporting faster and more accurate evaluation.",
  },
  {
    icon: Ambulance,
    title: "24/7 Emergency",
    description:
      "Round-the-clock emergency support for urgent medical situations.",
  },
  {
    icon: BedDouble,
    title: "Premium Patient Rooms",
    description:
      "Comfortable and hygienic spaces designed to support a smooth recovery.",
  },
  {
    icon: Syringe,
    title: "Day Care Services",
    description:
      "Efficient treatment and observation facilities for selected procedures.",
  },
  {
    icon: MonitorDot,
    title: "Digital Monitoring",
    description:
      "Smart monitoring systems helping medical teams track patients continuously.",
  },
  {
    icon: Cpu,
    title: "Advanced Medical Technology",
    description:
      "Technology-driven infrastructure supporting modern healthcare delivery.",
  },
];

function Facilities() {
  return (
    <div className="fac-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />


      {/* =========================
          HERO
      ========================= */}

      <section className="fac-hero">

        <div className="fac-hero-overlay"></div>

        <div className="fac-hero-content">

          <div className="fac-badge">
            <ShieldCheck size={17} />
            <span>OUR INFRASTRUCTURE</span>
          </div>

          <h1>
            Advanced Infrastructure.
            <span>Exceptional Care.</span>
          </h1>

          <p>
            A modern healthcare environment built with advanced technology,
            thoughtful design, and patient comfort at its heart.
          </p>

          <div className="fac-hero-stats">

            <div>
              <strong>25+</strong>
              <span>Years of Care</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Medical Experts</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Emergency Support</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="fac-intro">

        <div className="fac-container">

          <div className="fac-intro-heading">

            <div>
              <span className="fac-label">
                BUILT FOR BETTER CARE
              </span>

              <h2>
                Where technology
                <span> meets compassion.</span>
              </h2>
            </div>

            <p>
              Every part of our infrastructure is designed to create a safe,
              efficient, and comfortable healthcare experience for patients
              and their families.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CINEMATIC INFRASTRUCTURE
      ========================= */}

      <section className="fac-cinematic">

        <video
          className="fac-cinematic-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
             src="/facilities/hospital-infrastructure.mp4"
             type="video/mp4"
          />
        </video>

        <div className="fac-cinematic-overlay"></div>

        <div className="fac-container fac-cinematic-content">

          <div className="fac-cinematic-text">

            <span>
              INSIDE OUR FACILITY
            </span>

            <h2>
              Designed around
              <strong> patient care.</strong>
            </h2>

            <p>
              From welcoming reception areas to advanced critical-care
              facilities, every space is designed to support patients,
              doctors, and caregivers.
            </p>

            <Link to="/appointment">
              <CalendarDays size={18} />
              Book an Appointment
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          FACILITIES GRID
      ========================= */}

      <section className="fac-services">

        <div className="fac-container">

          <div className="fac-section-heading">

            <span className="fac-label">
              OUR FACILITIES
            </span>

            <h2>
              Everything you need.
              <span> Under one roof.</span>
            </h2>

            <p>
              Our integrated facilities help doctors deliver accurate,
              efficient, and coordinated healthcare.
            </p>

          </div>


          <div className="fac-grid">

            {facilities.map((facility, index) => {

              const Icon = facility.icon;

              return (
                <article
                  className="fac-card"
                  key={facility.title}
                >

                  <div className="fac-card-top">

                    <div className="fac-icon">
                      <Icon size={25} />
                    </div>

                    <span className="fac-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3>
                    {facility.title}
                  </h3>

                  <p>
                    {facility.description}
                  </p>

                  <Link
                    to="/contact"
                    className="fac-card-link"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================
          TECHNOLOGY SECTION
      ========================= */}

      <section className="fac-technology">

        <div className="fac-container fac-technology-inner">

          <div className="fac-tech-visual">

            <div className="fac-tech-circle">

              <Cpu size={58} />

              <span>
                SMART
                <br />
                HEALTHCARE
              </span>

            </div>

            <div className="fac-tech-orbit fac-tech-orbit-one"></div>
            <div className="fac-tech-orbit fac-tech-orbit-two"></div>

          </div>


          <div className="fac-tech-content">

            <span className="fac-label">
              ADVANCED TECHNOLOGY
            </span>

            <h2>
              Technology that
              <span> supports better decisions.</span>
            </h2>

            <p>
              Our medical infrastructure combines advanced equipment,
              digital monitoring, and efficient diagnostic systems to
              support doctors throughout the patient journey.
            </p>

            <div className="fac-tech-points">

              <div>
                <ShieldCheck size={19} />
                <span>Patient-focused technology</span>
              </div>

              <div>
                <MonitorDot size={19} />
                <span>Continuous monitoring systems</span>
              </div>

              <div>
                <Microscope size={19} />
                <span>Advanced diagnostic capabilities</span>
              </div>

              <div>
                <Stethoscope size={19} />
                <span>Specialist-led healthcare</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          EMERGENCY BANNER
      ========================= */}

      <section className="fac-emergency">

        <div className="fac-container fac-emergency-inner">

          <div className="fac-emergency-icon">
            <Ambulance size={30} />
          </div>

          <div className="fac-emergency-content">

            <span>
              AVAILABLE AROUND THE CLOCK
            </span>

            <h2>
              Emergency care when you need it most.
            </h2>

            <p>
              Our emergency team is available 24/7 to respond to urgent
              medical needs.
            </p>

          </div>

          <div className="fac-emergency-time">

            <Clock3 size={20} />

            <strong>24/7</strong>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="fac-cta">

        <div className="fac-container fac-cta-inner">

          <div>

            <span>
              EXPERIENCE QUALITY HEALTHCARE
            </span>

            <h2>
              Care starts with
              <strong> the right environment.</strong>
            </h2>

          </div>

          <Link to="/appointment">

            <CalendarDays size={18} />

            Book an Appointment

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Facilities;