import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Stethoscope,
  CalendarDays,
  ArrowRight,
  Star,
  Award,
  Clock3,
} from "lucide-react";

import Navbar from "../components/Navbar";

const doctors = [
  {
    name: "Dr. Partha Sarathi",
    speciality: "Cardiology",
    experience: "18+ Years",
    rating: "4.9",
    image: "https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg",
  },
  {
    name: "Dr. Shalini",
    speciality: "Neurology",
    experience: "15+ Years",
    rating: "4.8",
    image: "https://img.freepik.com/premium-psd/portrait-smiling-female-doctor-isolated-white-background_944525-22124.jpg",
  },
  {
    name: "Dr. Pursothaman",
    speciality: "Orthopaedics",
    experience: "16+ Years",
    rating: "4.9",
    image: "https://media.istockphoto.com/id/607728774/photo/portrait-of-a-male-doctor.jpg?s=612x612&w=0&k=20&c=pyf1xP7ATv_5Jm95g2a1lEthhtc5us2VrNoj-5Fijes=",
  },
  {
    name: "Dr. Murugasen",
    speciality: "Paediatrics",
    experience: "12+ Years",
    rating: "4.8",
    image: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
  },
  {
    name: "Dr. Kaviya",
    speciality: "General Medicine",
    experience: "14+ Years",
    rating: "4.9",
    image: "https://i.pinimg.com/originals/e6/5c/a1/e65ca1dc632163e839f8f1af8cbc3b77.jpg",
  },
  {
    name: "Dr. Ananya",
    speciality: "Dermatology",
    experience: "10+ Years",
    rating: "4.8",
    image: "https://img.freepik.com/premium-photo/photo-portrait-beautiful-young-female-doctor-looking-camera_763111-137913.jpg",
  },
];

const specialities = [
  "All Specialities",
  "Cardiology",
  "Neurology",
  "Orthopaedics",
  "Paediatrics",
  "General Medicine",
  "Dermatology",
];

function Doctors() {
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("All Specialities");

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        doctor.name.toLowerCase().includes(searchText) ||
        doctor.speciality.toLowerCase().includes(searchText);

      const matchesSpeciality =
        speciality === "All Specialities" ||
        doctor.speciality === speciality;

      return matchesSearch && matchesSpeciality;
    });
  }, [search, speciality]);

  return (
    <div className="dp-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="dp-hero">

        <div className="dp-hero-inner">

          <div className="dp-hero-content">

            <div className="dp-hero-badge">
              <Stethoscope size={16} />
              <span>OUR MEDICAL EXPERTS</span>
            </div>

            <h1>
              Meet Our
              <span> Specialists</span>
            </h1>

            <p>
              Experienced doctors, compassionate care, and advanced
              medical expertise — all focused on your health.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          DOCTORS
      ===================================================== */}

      <section className="dp-doctors-section">

        <div className="dp-container">

          {/* HEADER */}

          <div className="dp-section-header">

            <div className="dp-heading">

              <span className="dp-mini-title">
                OUR DOCTORS
              </span>

              <h2>
                Experts you can
                <span> trust.</span>
              </h2>

            </div>

            <p>
              Find the right specialist for your healthcare needs
              from our team of experienced medical professionals.
            </p>

          </div>


          {/* SEARCH */}

          <div className="dp-filters">

            <div className="dp-search-box">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search doctor or speciality..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>


            <div className="dp-speciality-box">

              <Stethoscope size={17} />

              <select
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              >
                {specialities.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

            </div>

          </div>


          {/* RESULT */}

          <div className="dp-result-count">
            Showing <strong>{filteredDoctors.length}</strong> doctors
          </div>


          {/* =================================================
              DOCTOR CARDS
          ================================================= */}

          {filteredDoctors.length > 0 ? (

            <div className="dp-grid">

              {filteredDoctors.map((doctor) => (

                <article
                  className="dp-card"
                  key={doctor.name}
                >

                  {/* IMAGE */}

                  <div className="dp-card-image">

                    <img
                      src={doctor.image}
                      alt={doctor.name}
                    />

                    <div className="dp-rating">

                      <Star
                        size={13}
                        fill="currentColor"
                      />

                      <span>{doctor.rating}</span>

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="dp-card-content">

                    <span className="dp-speciality">
                      {doctor.speciality}
                    </span>

                    <h3>
                      {doctor.name}
                    </h3>


                    {/* META */}

                    <div className="dp-meta">

                      <div>
                        <Award size={15} />
                        <span>{doctor.experience}</span>
                      </div>

                      <div>
                        <Clock3 size={15} />
                        <span>Available</span>
                      </div>

                    </div>


                    {/* ACTIONS */}

                    <div className="dp-actions">

                      <Link
                        to="/appointment"
                        className="dp-book-btn"
                      >
                        <CalendarDays size={15} />
                        <span>Book Appointment</span>
                      </Link>

                      <button
                        type="button"
                        className="dp-arrow-btn"
                        aria-label={`View ${doctor.name}`}
                      >
                        <ArrowRight size={17} />
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="dp-no-results">

              <Search size={35} />

              <h3>
                No doctors found
              </h3>

              <p>
                Try searching with a different name or speciality.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="dp-trust">

        <div className="dp-trust-inner">

          <div className="dp-trust-content">

            <span>
              WHY CHOOSE OUR DOCTORS
            </span>

            <h2>
              Expertise backed by
              <strong> compassion.</strong>
            </h2>

          </div>


          <div className="dp-trust-stats">

            <div className="dp-stat">
              <strong>100+</strong>
              <span>Expert Doctors</span>
            </div>

            <div className="dp-stat">
              <strong>25+</strong>
              <span>Specialities</span>
            </div>

            <div className="dp-stat">
              <strong>25+</strong>
              <span>Years of Care</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="dp-cta">

        <div className="dp-cta-content">

          <span>
            NEED MEDICAL ASSISTANCE?
          </span>

          <h2>
            Find the right doctor for you.
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

export default Doctors;