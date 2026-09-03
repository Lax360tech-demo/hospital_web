import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar />


      {/* =========================
          HERO
      ========================= */}
      <section className="contact-hero">

        <div className="contact-hero-glow"></div>

        <div className="contact-container contact-hero-inner">

          <div className="contact-hero-content">

            <div className="contact-badge">
              <MessageCircle size={16} />
              <span>GET IN TOUCH</span>
            </div>

            <h1>
              We're here
              <span> to help.</span>
            </h1>

            <p>
              Have a question, need assistance, or want to know more
              about our healthcare services? Our team is ready to help.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT SECTION
      ========================= */}
      <section className="contact-main">

        <div className="contact-container">

          <div className="contact-section-heading">

            <span className="contact-label">
              CONTACT US
            </span>

            <h2>
              Let's start a
              <span> conversation.</span>
            </h2>

            <p>
              Reach out to us through any of the channels below or
              send us a message using the form.
            </p>

          </div>


          <div className="contact-layout">

            {/* =========================
                LEFT INFO
            ========================= */}

            <div className="contact-info">

              <div className="contact-info-card">

                <div className="contact-info-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <span>OUR LOCATION</span>

                  <h3>Visit Our Hospital</h3>

                  <p>
                    123 Healthcare Avenue,
                    <br />
                    Salem, Tamil Nadu
                  </p>
                </div>

              </div>


              <div className="contact-info-card">

                <div className="contact-info-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <span>CALL US</span>

                  <h3>+91 98765 43210</h3>

                  <p>
                    Available for appointments and
                    general enquiries.
                  </p>
                </div>

              </div>


              <div className="contact-info-card">

                <div className="contact-info-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span>EMAIL US</span>

                  <h3>care@healthcarehospital.com</h3>

                  <p>
                    We'll get back to you as soon as possible.
                  </p>
                </div>

              </div>


              <div className="contact-emergency">

                <div className="contact-emergency-icon">
                  <Clock3 size={20} />
                </div>

                <div>

                  <span>EMERGENCY CARE</span>

                  <h3>Available 24 / 7</h3>

                  <p>
                    For medical emergencies, contact our
                    emergency department immediately.
                  </p>

                </div>

              </div>

            </div>


            {/* =========================
                FORM
            ========================= */}

            <div className="contact-form-card">

              <div className="contact-form-header">

                <span>
                  SEND US A MESSAGE
                </span>

                <h3>
                  How can we help?
                </h3>

                <p>
                  Fill in your details and our team will
                  get back to you shortly.
                </p>

              </div>


              {!submitted ? (
                <form onSubmit={handleSubmit}>

                  <div className="contact-form-row">

                    <div className="contact-field">

                      <label>
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    <div className="contact-field">

                      <label>
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />

                    </div>

                  </div>


                  <div className="contact-field">

                    <label>
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label>
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="How can we help you?"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label>
                      Message
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Write your message here..."
                      required
                    ></textarea>

                  </div>


                  {/* DPDP CONSENT (Digital Personal Data Protection Act) */}
                  <div className="dpdp-form-consent-box">
                    <label className="dpdp-form-consent-label">
                      <input
                        type="checkbox"
                        required
                      />
                      <span>
                        I agree to the processing of my personal data for the purpose described in the{" "}
                        <Link to="/privacy-notice" target="_blank" rel="noopener noreferrer" className="dpdp-form-link">
                          Privacy Notice
                        </Link>.
                      </span>
                    </label>
                  </div>


                  <button
                    type="submit"
                    className="contact-submit-btn"
                  >

                    <Send size={17} />

                    <span>
                      Send Message
                    </span>

                    <ArrowRight size={17} />

                  </button>

                </form>
              ) : (
                <div className="appointment-success">
                  <div className="success-icon">
                    <CheckCircle2 size={45} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out to LAX360 Multi-Specialist Hospital. Our support team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="success-back-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          MAP / LOCATION
      ========================= */}
      <section className="contact-location">

        <div className="contact-container">

          <div className="contact-location-card">

            <div className="contact-location-content">

              <span className="contact-label">
                FIND US
              </span>

              <h2>
                Conveniently located
                <span> for you.</span>
              </h2>

              <p>
                Our hospital is easily accessible and equipped
                with dedicated parking and patient support.
              </p>

              <Link
                to="/appointment"
                className="contact-location-btn"
              >
                Book an Appointment
                <ArrowRight size={17} />
              </Link>

            </div>


           <div className="contact-map">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d187.0192932628492!2d78.1416446765693!3d11.672962082152793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49584e947d17121d%3A0x4c167403feb05364!2sLax360%20Pvt%20ltd!5e1!3m2!1sen!2sus!4v1787050480369!5m2!1sen!2sus"
    title="Lax360 Pvt Ltd Location"
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />

  <a
    href="https://www.google.com/maps/search/?api=1&query=Lax360+Pvt+Ltd"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-open-map"
  >
    <MapPin size={16} />
    <span>Open in Google Maps</span>
    <ArrowRight size={16} />
  </a>




              <div className="contact-map-grid"></div>

              <div className="contact-map-pin">
                <MapPin size={25} />
              </div>

              <div className="contact-map-label">
                <strong>HealthCare Hospital</strong>
                <span>Salem, Tamil Nadu</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="contact-cta">

        <div className="contact-container contact-cta-inner">

          <div>

            <span>
              NEED MEDICAL ASSISTANCE?
            </span>

            <h2>
              Your health is our
              <strong> priority.</strong>
            </h2>

          </div>

          <Link to="/appointment">

            <Phone size={17} />

            Book an Appointment

            <ArrowRight size={17} />

          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;