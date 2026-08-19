import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  UserRound,
  Phone,
  Mail,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";

function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="appointment-page">

      <Navbar />

      {/* HERO */}
      <section className="appointment-hero">

        <div className="appointment-hero-content">

          <span className="appointment-badge">
            <CalendarDays size={16} />
            EASY & CONVENIENT
          </span>

          <h1>
            Book Your
            <span> Appointment</span>
          </h1>

          <p>
            Schedule a consultation with our experienced specialists
            and take the first step towards better health.
          </p>

        </div>

      </section>


      {/* APPOINTMENT SECTION */}
      <section className="appointment-section">

        <div className="appointment-container">

          {/* LEFT INFO */}
          <div className="appointment-info">

            <span className="section-mini-title">
              PATIENT CARE
            </span>

            <h2>
              Your health deserves
              <span> the best care.</span>
            </h2>

            <p>
              Choose your preferred speciality, doctor and appointment
              time. Our team will help you throughout your healthcare journey.
            </p>


            <div className="appointment-info-list">

              <div className="appointment-info-item">

                <div className="appointment-info-icon">
                  <Stethoscope size={20} />
                </div>

                <div>
                  <strong>Expert Specialists</strong>
                  <span>
                    Consult experienced doctors across multiple specialities.
                  </span>
                </div>

              </div>


              <div className="appointment-info-item">

                <div className="appointment-info-icon">
                  <Clock3 size={20} />
                </div>

                <div>
                  <strong>Flexible Timings</strong>
                  <span>
                    Choose a convenient date and time for your consultation.
                  </span>
                </div>

              </div>


              <div className="appointment-info-item">

                <div className="appointment-info-icon">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <strong>Easy Booking</strong>
                  <span>
                    Simple and hassle-free appointment booking experience.
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* FORM */}
          <div className="appointment-form-card">

            {!submitted ? (

              <form onSubmit={handleSubmit}>

                <div className="form-header">

                  <span>APPOINTMENT REQUEST</span>

                  <h3>
                    Book an Appointment
                  </h3>

                  <p>
                    Fill in your details and preferred consultation time.
                  </p>

                </div>


                {/* SPECIALITY + DOCTOR */}

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Speciality
                    </label>

                    <div className="input-wrapper">

                      <Stethoscope size={17} />

                      <select required>

                        <option value="">
                          Select Speciality
                        </option>

                        <option>
                          Cardiology
                        </option>

                        <option>
                          Neurology
                        </option>

                        <option>
                          Orthopaedics
                        </option>

                        <option>
                          Paediatrics
                        </option>

                        <option>
                          Dermatology
                        </option>

                        <option>
                          General Medicine
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Doctor
                    </label>

                    <div className="input-wrapper">

                      <UserRound size={17} />

                      <select required>

                        <option value="">
                          Select Doctor
                        </option>

                        <option>
                          Dr. John Mathew
                        </option>

                        <option>
                          Dr. Priya Sharma
                        </option>

                        <option>
                          Dr. Arun Kumar
                        </option>

                        <option>
                          Dr. Meera Raj
                        </option>

                      </select>

                    </div>

                  </div>

                </div>


                {/* DATE + TIME */}

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Preferred Date
                    </label>

                    <div className="input-wrapper">

                      <CalendarDays size={17} />

                      <input
                        type="date"
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Preferred Time
                    </label>

                    <div className="input-wrapper">

                      <Clock3 size={17} />

                      <select required>

                        <option value="">
                          Select Time
                        </option>

                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>02:00 PM</option>
                        <option>03:00 PM</option>
                        <option>04:00 PM</option>

                      </select>

                    </div>

                  </div>

                </div>


                {/* PATIENT NAME */}

                <div className="form-group">

                  <label>
                    Patient Name
                  </label>

                  <div className="input-wrapper">

                    <UserRound size={17} />

                    <input
                      type="text"
                      placeholder="Enter patient name"
                      required
                    />

                  </div>

                </div>


                {/* PHONE + EMAIL */}

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Phone Number
                    </label>

                    <div className="input-wrapper">

                      <Phone size={17} />

                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      Email Address
                    </label>

                    <div className="input-wrapper">

                      <Mail size={17} />

                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                      />

                    </div>

                  </div>

                </div>


                {/* REASON */}

                <div className="form-group">

                  <label>
                    Reason for Visit
                  </label>

                  <textarea
                    placeholder="Briefly describe your concern..."
                    rows="3"
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="appointment-submit-btn"
                >

                  <CalendarDays size={18} />

                  Book Appointment

                  <ArrowRight size={18} />

                </button>

              </form>

            ) : (

              /* SUCCESS */

              <div className="appointment-success">

                <div className="success-icon">
                  <CheckCircle2 size={45} />
                </div>

                <h3>
                  Appointment Request Sent!
                </h3>

                <p>
                  Thank you for choosing LAX360 Multi-Specialist Hospital.
                  Our team will contact you shortly to confirm your appointment.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="success-back-btn"
                >
                  Book Another Appointment
                </button>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* EMERGENCY CTA */}

      <section className="appointment-emergency">

        <div>

          <span>
            24/7 EMERGENCY CARE
          </span>

          <h2>
            Need immediate medical assistance?
          </h2>

        </div>

        <a href="tel:+919999999999">
          <Phone size={18} />
          Call Emergency
        </a>

      </section>

    </div>
  );
}

export default Appointment;