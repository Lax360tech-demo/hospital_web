import { Link } from "react-router-dom";
import {
  Ambulance,
  Activity,
  FlaskConical,
  Pill,
  HeartPulse,
  Scissors,
  ShieldCheck,
  Accessibility,
  ArrowRight,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: Ambulance,
    title: "Emergency Care",
    description:
      "Immediate medical attention with experienced emergency specialists and round-the-clock support.",
  },
  {
    icon: Activity,
    title: "Diagnostic Services",
    description:
      "Advanced diagnostic facilities for accurate and timely medical evaluation.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description:
      "Reliable laboratory testing with modern equipment and experienced professionals.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description:
      "Convenient access to essential medicines with professional pharmacy support.",
  },
  {
    icon: HeartPulse,
    title: "Critical Care",
    description:
      "Specialized ICU and critical care services supported by advanced monitoring systems.",
  },
  {
    icon: Scissors,
    title: "Surgical Services",
    description:
      "Safe and advanced surgical care delivered by experienced medical specialists.",
  },
  {
    icon: ShieldCheck,
    title: "Health Checkups",
    description:
      "Preventive health packages designed to help you monitor and protect your wellbeing.",
  },
  {
    icon: Accessibility,
    title: "Rehabilitation",
    description:
      "Personalized physiotherapy and rehabilitation programs supporting a faster recovery.",
  },
];

function Services() {
  return (
    <div className="services-page">

      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar />


      {/* =========================
          HERO
      ========================= */}
      <section className="services-page-hero">

        <div className="services-page-hero-content">

          <div className="services-page-badge">
            <Stethoscope size={17} />
            <span>OUR MEDICAL SERVICES</span>
          </div>

          <h1>
            Complete care.
            <span> One trusted hospital.</span>
          </h1>

          <p>
            From emergency care to advanced diagnostics and specialized
            treatment, we provide comprehensive healthcare under one roof.
          </p>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================= */}
      <section className="services-page-section">

        <div className="services-page-container">

          <div className="services-page-heading">

            <div>

              <span className="services-page-mini-title">
                WHAT WE OFFER
              </span>

              <h2>
                Healthcare designed
                <span> around you.</span>
              </h2>

            </div>

            <p>
              Our multidisciplinary services combine medical expertise,
              advanced technology, and compassionate care to support
              every stage of your healthcare journey.
            </p>

          </div>


          {/* SERVICE GRID */}

          <div className="services-page-grid">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  className="services-page-card"
                  key={service.title}
                >

                  <div className="services-page-icon">
                    <Icon size={27} />
                  </div>

                  <div className="services-page-card-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                    <Link
                      to="/appointment"
                      className="services-page-card-link"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight size={17} />
                    </Link>

                  </div>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================
          WHY CHOOSE OUR SERVICES
      ========================= */}
      <section className="services-page-benefits">

        <div className="services-page-benefits-inner">

          <div className="services-page-benefits-content">

            <span className="services-page-mini-title">
              WHY CHOOSE OUR SERVICES
            </span>

            <h2>
              Care that puts
              <span> you first.</span>
            </h2>

            <p>
              Every service at LAX360 is built around patient safety,
              medical excellence, and a seamless healthcare experience.
            </p>

            <Link
              to="/appointment"
              className="services-page-benefits-button"
            >
              <CalendarDays size={18} />
              <span>Book an Appointment</span>
              <ArrowRight size={18} />
            </Link>

          </div>


          <div className="services-page-benefit-list">

            <div className="services-page-benefit-item">
              <div>
                <ShieldCheck size={22} />
              </div>

              <section>
                <h3>Patient Safety</h3>
                <p>
                  High standards of safety and quality throughout your care.
                </p>
              </section>
            </div>


            <div className="services-page-benefit-item">
              <div>
                <Stethoscope size={22} />
              </div>

              <section>
                <h3>Expert Medical Team</h3>
                <p>
                  Experienced specialists working together for better outcomes.
                </p>
              </section>
            </div>


            <div className="services-page-benefit-item">
              <div>
                <Activity size={22} />
              </div>

              <section>
                <h3>Advanced Technology</h3>
                <p>
                  Modern medical equipment supporting accurate diagnosis and care.
                </p>
              </section>
            </div>


            <div className="services-page-benefit-item">
              <div>
                <HeartPulse size={22} />
              </div>

              <section>
                <h3>24/7 Support</h3>
                <p>
                  Reliable emergency and patient support whenever you need it.
                </p>
              </section>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="services-page-cta">

        <div className="services-page-cta-content">

          <span>
            NEED MEDICAL ASSISTANCE?
          </span>

          <h2>
            Your health deserves the best care.
          </h2>

          <p>
            Connect with our medical team and take the next step
            towards better healthcare.
          </p>

        </div>

        <Link
          to="/appointment"
          className="services-page-cta-button"
        >
          <CalendarDays size={18} />
          <span>Book an Appointment</span>
          <ArrowRight size={18} />
        </Link>

      </section>

      <Footer />

    </div>
  );
}

export default Services;