import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Search,
  ShieldCheck,
  Stethoscope,
  Clock3,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Wind,
  Syringe,
  ArrowUpRight,
  GraduationCap,
  MapPin,
} from "lucide-react";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="hero">

        {/* Background Video */}
        <video
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hospital-hero.mp4" type="video/mp4" />
        </video>

        {/* Purple / White Gradient Overlay */}
        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <ShieldCheck size={17} />
            <span>Trusted Healthcare Since 1998</span>
          </div>

          <h1>
            Advanced Care.
            <br />
            <span>Compassionate Healing.</span>
          </h1>

          <p>
            Comprehensive healthcare delivered by experienced specialists,
            advanced technology, and a team that puts your well-being first.
          </p>

          <div className="hero-buttons">

            <Link to="/appointment" className="primary-btn">
              <CalendarDays size={19} />
              <span>Book an Appointment</span>
              <ArrowRight size={18} />
            </Link>

            <Link to="/doctors" className="secondary-btn">
              <Search size={18} />
              <span>Find a Doctor</span>
            </Link>

          </div>

          {/* Hero Stats */}
          <div className="hero-features">

            <div className="hero-feature">
              <div className="feature-icon">
                <Stethoscope size={21} />
              </div>

              <span>
                <strong>100+</strong>
                Expert Doctors
              </span>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">
                <ShieldCheck size={21} />
              </div>

              <span>
                <strong>25+</strong>
                Specialities
              </span>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">
                <Clock3 size={21} />
              </div>

              <span>
                <strong>24/7</strong>
                Emergency Care
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          QUICK ACCESS
      ========================= */}
      <section className="quick-access">

        <Link to="/appointment" className="quick-card">
          <div className="quick-icon">
            <CalendarDays size={22} />
          </div>

          <div className="quick-card-content">
            <span>Need a consultation?</span>
            <strong>Book an Appointment</strong>
          </div>

          <ArrowRight size={19} />
        </Link>

        <Link to="/doctors" className="quick-card">
          <div className="quick-icon">
            <Stethoscope size={22} />
          </div>

          <div className="quick-card-content">
            <span>Find the right specialist</span>
            <strong>Explore Our Doctors</strong>
          </div>

          <ArrowRight size={19} />
        </Link>

        <Link to="/specialities" className="quick-card">
          <div className="quick-icon">
            <ShieldCheck size={22} />
          </div>

          <div className="quick-card-content">
            <span>Quality healthcare</span>
            <strong>Explore Specialities</strong>
          </div>

          <ArrowRight size={19} />
        </Link>

      </section>
      
      {/* =========================
    TRUST STATS
========================= */}
<section className="trust-stats">

  <div className="trust-stat">
    <strong>25+</strong>
    <span>Years of Excellence</span>
  </div>

  <div className="stat-divider"></div>

  <div className="trust-stat">
    <strong>100+</strong>
    <span>Expert Doctors</span>
  </div>

  <div className="stat-divider"></div>

  <div className="trust-stat">
    <strong>50K+</strong>
    <span>Happy Patients</span>
  </div>

  <div className="stat-divider"></div>

  <div className="trust-stat">
    <strong>25+</strong>
    <span>Medical Specialities</span>
  </div>

  <div className="stat-divider"></div>

  <div className="trust-stat">
    <strong>24/7</strong>
    <span>Emergency Support</span>
  </div>

</section>

{/* =========================
    ABOUT US
========================= */}

<section className="home-about">

  <div className="home-about-container">

    <div className="home-about-image">

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/059/240/224/small_2x/modern-hospital-building-with-ambulance-entering-at-sunset-delivering-healthcare-services-photo.jpg"
        alt="Healthcare Hospital"
      />

      <div className="home-about-experience">
        <strong>25+</strong>
        <span>Years of Excellence</span>
      </div>

    </div>


    <div className="home-about-content">

      <span className="home-about-label">
        ABOUT OUR HOSPITAL
      </span>

      <h2>
        Compassionate care.
        <span> Advanced medicine.</span>
      </h2>

      <p>
        We are committed to providing trusted, patient-focused
        healthcare through experienced medical professionals,
        advanced technology, and a compassionate approach to
        every patient.
      </p>

      <p>
        From preventive care to specialised treatments, our
        multidisciplinary team works together to deliver
        personalised healthcare for you and your family.
      </p>

      <Link
        to="/about"
        className="home-about-btn"
      >
        <span>Know More About Us</span>
        <ArrowRight size={17} />
      </Link>

    </div>

  </div>

</section>


{/* =========================
    WHY CHOOSE US
========================= */}
<section className="why-section">

  <div className="why-container">

    {/* LEFT CONTENT */}
    <div className="why-content">

      <div className="section-badge">
        <ShieldCheck size={16} />
        Why Choose Us
      </div>

      <h2>
        Healthcare You Can
        <span> Trust.</span>
      </h2>

      <p className="why-description">
        We bring together experienced specialists, advanced medical
        technology, and compassionate care to provide a complete
        healthcare experience for every patient.
      </p>

      <Link to="/about" className="why-link">
        Discover More
        <ArrowRight size={18} />
      </Link>

    </div>


    {/* RIGHT FEATURES */}
    <div className="why-features">

      <div className="why-card">

        <div className="why-card-icon">
          <Stethoscope size={24} />
        </div>

        <div>
          <h3>Expert Specialists</h3>

          <p>
            Highly experienced doctors across multiple
            medical specialities.
          </p>
        </div>

      </div>


      <div className="why-card">

        <div className="why-card-icon">
          <ShieldCheck size={24} />
        </div>

        <div>
          <h3>Patient-Centered Care</h3>

          <p>
            Personalized treatment with compassion,
            comfort, and respect.
          </p>
        </div>

      </div>


      <div className="why-card">

        <div className="why-card-icon">
          <Clock3 size={24} />
        </div>

        <div>
          <h3>24/7 Emergency Care</h3>

          <p>
            Dedicated emergency services available
            around the clock.
          </p>
        </div>

      </div>


      <div className="why-card">

        <div className="why-card-icon">
          <CalendarDays size={24} />
        </div>

        <div>
          <h3>Modern Facilities</h3>

          <p>
            Advanced infrastructure and technology
            for better healthcare outcomes.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
     {/* =========================
    OUR SPECIALITIES
========================= */}
<section className="specialities-section">

  <div className="specialities-container">

    {/* SECTION HEADER */}
    <div className="specialities-header">

      <div>
        <div className="section-badge">
          <Stethoscope size={16} />
          Our  Specialists
        </div>

        <h2>
          Expert Care Across
          <span> Every Speciality.</span>
        </h2>

        <p>
          Comprehensive medical care delivered by experienced
          specialists using advanced technology and modern
          treatment approaches.
        </p>
      </div>

      <Link
        to="/specialities"
        className="view-all-btn"
      >
        View All Specialities
        <ArrowRight size={18} />
      </Link>

    </div>


    {/* SPECIALITY GRID */}
    <div className="specialities-grid">

      {/* Cardiology */}
      <Link to="/specialities" className="speciality-card">

        <div className="speciality-top">
          <div className="speciality-icon">
            <HeartPulse size={26} />
          </div>

          <ArrowUpRight className="speciality-arrow" size={19} />
        </div>

        <h3>Cardiology</h3>

        <p>
          Advanced diagnosis and treatment for heart
          and cardiovascular conditions.
        </p>

        <span className="speciality-link">
          Explore Department
          <ArrowRight size={15} />
        </span>

      </Link>


      {/* Neurology */}
      <Link to="/specialities" className="speciality-card">

        <div className="speciality-top">
          <div className="speciality-icon">
            <Brain size={26} />
          </div>

          <ArrowUpRight className="speciality-arrow" size={19} />
        </div>

        <h3>Neurology</h3>

        <p>
          Comprehensive care for brain, spine and
          nervous system disorders.
        </p>

        <span className="speciality-link">
          Explore Department
          <ArrowRight size={15} />
        </span>

      </Link>


      {/* Orthopedics */}
      <Link to="/specialities" className="speciality-card">

        <div className="speciality-top">
          <div className="speciality-icon">
            <Bone size={26} />
          </div>

          <ArrowUpRight className="speciality-arrow" size={19} />
        </div>

        <h3>Orthopedics</h3>

        <p>
          Expert treatment for bones, joints, muscles
          and mobility-related conditions.
        </p>

        <span className="speciality-link">
          Explore Department
          <ArrowRight size={15} />
        </span>

      </Link>


      {/* Pediatrics */}
      <Link to="/specialities" className="speciality-card">

        <div className="speciality-top">
          <div className="speciality-icon">
            <Baby size={26} />
          </div>

          <ArrowUpRight className="speciality-arrow" size={19} />
        </div>

        <h3>Pediatrics</h3>

        <p>
          Complete healthcare for infants, children
          and growing adolescents.
        </p>

        <span className="speciality-link">
          Explore Department
          <ArrowRight size={15} />
        </span>

      </Link>


      {/* Oncology */}
      <Link to="/specialities" className="speciality-card">

        <div className="speciality-top">
          <div className="speciality-icon">
            <Activity size={26} />
          </div>

          <ArrowUpRight className="speciality-arrow" size={19} />
        </div>

        <h3>Oncology</h3>

        <p>
          Specialized cancer diagnosis, treatment and
          supportive care services.
        </p>

        <span className="speciality-link">
          Explore Department
          <ArrowRight size={15} />
        </span>

      </Link>


      {/* Pulmonology */}
      <Link to="/specialities" className="speciality-card">

        <div className="speciality-top">
          <div className="speciality-icon">
            <Wind size={26} />
          </div>

          <ArrowUpRight className="speciality-arrow" size={19} />
        </div>

        <h3>Pulmonology</h3>

        <p>
          Specialized care for lungs, respiratory
          conditions and breathing disorders.
        </p>

        <span className="speciality-link">
          Explore Department
          <ArrowRight size={15} />
        </span>

      </Link>


      {/* Gastroenterology */}
      <Link to="/specialities" className="speciality-card">

        <div className="speciality-top">
          <div className="speciality-icon">
            <Syringe size={26} />
          </div>

          <ArrowUpRight className="speciality-arrow" size={19} />
        </div>

        <h3>Gastroenterology</h3>

        <p>
          Diagnosis and treatment of digestive system
          and gastrointestinal disorders.
        </p>

        <span className="speciality-link">
          Explore Department
          <ArrowRight size={15} />
        </span>

      </Link>


      {/* General Medicine */}
      <Link to="/specialities" className="speciality-card">

        <div className="speciality-top">
          <div className="speciality-icon">
            <Stethoscope size={26} />
          </div>

          <ArrowUpRight className="speciality-arrow" size={19} />
        </div>

        <h3>General Medicine</h3>

        <p>
          Comprehensive diagnosis and treatment for
          common and complex medical conditions.
        </p>

        <span className="speciality-link">
          Explore Department
          <ArrowRight size={15} />
        </span>

      </Link>

    </div>

  </div>

</section>

   {/* =========================
    FEATURED DOCTORS
========================= */}
<section className="doctors-section">

  <div className="doctors-container">

    {/* SECTION HEADER */}
    <div className="doctors-header">

      <div>

        <div className="section-badge">
          <Stethoscope size={16} />
          Our Doctors
        </div>

        <h2>
          Meet Our
          <span> Expert Doctors.</span>
        </h2>

        <p>
          Our team of experienced specialists is committed to
          delivering personalized care using advanced medical
          expertise and modern treatment approaches.
        </p>

      </div>

      <Link
        to="/doctors"
        className="view-all-btn"
      >
        View All Doctors
        <ArrowRight size={18} />
      </Link>

    </div>


    {/* DOCTORS GRID */}
    <div className="doctors-grid">


      {/* DOCTOR 1 */}
      <div className="doctor-card">

        <div className="doctor-image">

          <img
            src="https://media.istockphoto.com/id/182769498/photo/young-doctor.jpg?s=170667a&w=0&k=20&c=1zsUEdn3qiMsukr7tlobL9jijwH7PoAIAbfsVA32XkE="
            alt="Senior Cardiologist"
          />

          <div className="doctor-speciality">
            <HeartPulse size={14} />
            Cardiology
          </div>

        </div>

        <div className="doctor-info">

          <h3>Dr. Partha Sarathi</h3>

          <p className="doctor-role">
            Senior Cardiologist
          </p>

          <div className="doctor-meta">

            <span>
              <GraduationCap size={14} />
              15+ Years
            </span>

            <span>
              <MapPin size={14} />
              Main Hospital
            </span>

          </div>

          <Link
            to="/doctors"
            className="doctor-profile-link"
          >
            View Profile
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>


      {/* DOCTOR 2 */}
      <div className="doctor-card">

        <div className="doctor-image">

          <img
            src="https://img.freepik.com/premium-psd/portrait-smiling-female-doctor-isolated-white-background_944525-22124.jpg"
            alt="Senior Neurologist"
          />

          <div className="doctor-speciality">
            <Brain size={14} />
            Neurology
          </div>

        </div>

        <div className="doctor-info">

          <h3>Dr. Shalini</h3>

          <p className="doctor-role">
            Senior Neurologist
          </p>

          <div className="doctor-meta">

            <span>
              <GraduationCap size={14} />
              12+ Years
            </span>

            <span>
              <MapPin size={14} />
              Main Hospital
            </span>

          </div>

          <Link
            to="/doctors"
            className="doctor-profile-link"
          >
            View Profile
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>


      {/* DOCTOR 3 */}
      <div className="doctor-card">

        <div className="doctor-image">

          <img
            src="https://media.istockphoto.com/id/607728774/photo/portrait-of-a-male-doctor.jpg?s=612x612&w=0&k=20&c=pyf1xP7ATv_5Jm95g2a1lEthhtc5us2VrNoj-5Fijes="
            alt="Senior Orthopedic Specialist"
          />

          <div className="doctor-speciality">
            <Bone size={14} />
            Orthopedics
          </div>

        </div>

        <div className="doctor-info">

          <h3>Dr. Pursothaman</h3>

          <p className="doctor-role">
            Orthopedic Specialist
          </p>

          <div className="doctor-meta">

            <span>
              <GraduationCap size={14} />
              18+ Years
            </span>

            <span>
              <MapPin size={14} />
              Main Hospital
            </span>

          </div>

          <Link
            to="/doctors"
            className="doctor-profile-link"
          >
            View Profile
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>


      {/* DOCTOR 4 */}
      <div className="doctor-card">

        <div className="doctor-image">

          <img
            src="https://tse4.mm.bing.net/th/id/OIP.E73VaOWFuN0PUsNvNJW9qAAAAA?r=0&pid=ImgDet&w=178&h=267&c=7&dpr=1.5&o=7&rm=3"
            alt="Senior Pediatrician"
          />

          <div className="doctor-speciality">
            <Baby size={14} />
            Pediatrics
          </div>

        </div>

        <div className="doctor-info">

          <h3>Dr. Aksaya</h3>

          <p className="doctor-role">
            Senior Pediatrician
          </p>

          <div className="doctor-meta">

            <span>
              <GraduationCap size={14} />
              10+ Years
            </span>

            <span>
              <MapPin size={14} />
              Main Hospital
            </span>

          </div>

          <Link
            to="/doctors"
            className="doctor-profile-link"
          >
            View Profile
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>

    </div>

  </div>

</section> 
     {/* =========================
    FACILITIES
========================= */}
<section className="facilities-section">

  <div className="facilities-container">

    {/* HEADER */}
    <div className="facilities-header">

      <div>
        <div className="section-badge">
          <ShieldCheck size={16} />
          World-Class Facilities
        </div>

        <h2>
          Advanced Infrastructure.
          <span> Better Care.</span>
        </h2>

        <p>
          Modern medical infrastructure, advanced technology,
          and thoughtfully designed facilities to support
          every stage of your healthcare journey.
        </p>
      </div>

      <Link
        to="/facilities"
        className="view-all-btn"
      >
        Explore Facilities
        <ArrowRight size={18} />
      </Link>

    </div>


    {/* =========================
    INFRASTRUCTURE VIDEO
========================= */}
<div className="infrastructure-video-card">

  <video
    className="infrastructure-video"
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

  <div className="infrastructure-overlay"></div>

  <div className="infrastructure-content">

    <span>World-Class Infrastructure</span>

    <h3>
      Advanced Infrastructure.
      <br />
      <strong>Better Care.</strong>
    </h3>

    <p>
      Modern medical infrastructure and advanced
      technology designed around patient safety,
      comfort, and better healthcare outcomes.
    </p>

  </div>

</div>


    {/* FACILITY CARDS */}
    <div className="facilities-grid">

      <div className="facility-card">
        <div className="facility-icon">
          <ShieldCheck size={24} />
        </div>

        <h3>Advanced ICU</h3>

        <p>
          Specialized critical care with continuous
          monitoring and advanced medical support.
        </p>

        <span>24/7 Critical Care</span>
      </div>


      <div className="facility-card">
        <div className="facility-icon">
          <Clock3 size={24} />
        </div>

        <h3>24/7 Emergency</h3>

        <p>
          Immediate medical attention supported by
          experienced emergency care teams.
        </p>

        <span>Always Available</span>
      </div>


      <div className="facility-card">
        <div className="facility-icon">
          <Search size={24} />
        </div>

        <h3>Advanced Diagnostics</h3>

        <p>
          Modern diagnostic technology for accurate
          and timely medical evaluation.
        </p>

        <span>Accurate Diagnosis</span>
      </div>


      <div className="facility-card">
        <div className="facility-icon">
          <Stethoscope size={24} />
        </div>

        <h3>Modern Operation Theatres</h3>

        <p>
          Advanced surgical environments designed
          for safety and precision.
        </p>

        <span>Advanced Surgery</span>
      </div>

    </div>

  </div>

</section>

   {/* =========================
    HEALTH PACKAGES
========================= */}
<section className="health-packages-section">

  <div className="health-packages-container">

    {/* HEADER */}
    <div className="health-packages-header">

      <div>
        <div className="section-badge">
          <HeartPulse size={16} />
          Preventive Healthcare
        </div>

        <h2>
          Health Packages.
          <span> Care That Fits You.</span>
        </h2>

        <p>
          Comprehensive health screening packages designed to
          help you understand your health better and stay ahead
          of potential health concerns.
        </p>
      </div>

      <Link
        to="/health-packages"
        className="view-all-btn"
      >
        View All Packages
        <ArrowRight size={18} />
      </Link>

    </div>


    {/* PACKAGE GRID */}
    <div className="health-packages-grid">

      {/* PACKAGE 1 */}
      <div className="health-package-card">

        <div className="package-top">

          <div className="package-icon">
            <ShieldCheck size={23} />
          </div>

          <span className="package-tag">
            Popular
          </span>

        </div>

        <h3>
          Executive Health Checkup
        </h3>

        <p>
          A comprehensive health assessment designed
          for preventive healthcare and early detection.
        </p>

        <div className="package-details">

          <span>
            <ShieldCheck size={14} />
            Complete Health Screening
          </span>

          <span>
            <Activity size={14} />
            Blood & Diagnostic Tests
          </span>

          <span>
            <Stethoscope size={14} />
            Doctor Consultation
          </span>

        </div>

        <div className="package-bottom">

          <div>
            <small>Starting from</small>
            <strong>₹2,999</strong>
          </div>

          <Link
            to="/appointment"
            className="package-btn"
          >
            Book Now
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>


      {/* PACKAGE 2 */}
      <div className="health-package-card">

        <div className="package-top">

          <div className="package-icon">
            <HeartPulse size={23} />
          </div>

          <span className="package-tag">
            Heart Care
          </span>

        </div>

        <h3>
          Cardiac Health Package
        </h3>

        <p>
          Specialized screening package focused on
          cardiovascular health and risk assessment.
        </p>

        <div className="package-details">

          <span>
            <HeartPulse size={14} />
            Cardiac Screening
          </span>

          <span>
            <Activity size={14} />
            ECG & Blood Tests
          </span>

          <span>
            <Stethoscope size={14} />
            Cardiologist Consultation
          </span>

        </div>

        <div className="package-bottom">

          <div>
            <small>Starting from</small>
            <strong>₹3,999</strong>
          </div>

          <Link
            to="/appointment"
            className="package-btn"
          >
            Book Now
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>


      {/* PACKAGE 3 */}
      <div className="health-package-card">

        <div className="package-top">

          <div className="package-icon">
            <Activity size={23} />
          </div>

          <span className="package-tag">
            Wellness
          </span>

        </div>

        <h3>
          Women's Wellness
        </h3>

        <p>
          Preventive healthcare screening designed
          specifically for women's health and wellness.
        </p>

        <div className="package-details">

          <span>
            <ShieldCheck size={14} />
            Complete Health Screening
          </span>

          <span>
            <Activity size={14} />
            Essential Lab Tests
          </span>

          <span>
            <Stethoscope size={14} />
            Specialist Consultation
          </span>

        </div>

        <div className="package-bottom">

          <div>
            <small>Starting from</small>
            <strong>₹3,499</strong>
          </div>

          <Link
            to="/appointment"
            className="package-btn"
          >
            Book Now
            <ArrowRight size={15} />
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>

    

   {/* =========================
       HEALTH INSIGHTS
       ========================= */}
<section className="insights-section">

  <div className="insights-container">

    {/* HEADER */}
    <div className="insights-header">

      <div>

        <div className="section-badge">
          <Activity size={16} />
          Health Insights
        </div>
      
        <h2>
          Stay Informed.
          <span> Stay Healthy.</span>
        </h2>

        <p>
          Explore expert health tips, medical insights,
          preventive care advice, and the latest healthcare
          updates from our specialists.
        </p>

      </div>

      <Link
        to="/blogs"
        className="view-all-btn"
      >
        View All Articles
        <ArrowRight size={18} />
      </Link>

    </div>


    {/* BLOG GRID */}
    <div className="insights-grid">


      {/* ARTICLE 1 */}
      <article className="insight-card">

        <div className="insight-image">

          <img
            src="https://image.isu.pub/250130140232-734ba68c8d7b5864cf6dd6be720bb06a/jpg/page_1_thumb_large.jpg"
            alt="Heart health awareness"
          />

          <span className="insight-category">
            Heart Health
          </span>

        </div>

        <div className="insight-content">

          <div className="insight-date">
            <Clock3 size={13} />
            5 min read
          </div>

          <h3>
            Simple Ways to Keep Your Heart Healthy
          </h3>

          <p>
            Learn practical lifestyle habits that can
            support better cardiovascular health.
          </p>

          <Link
            to="/blogs"
            className="read-more"
          >
            Read Article
            <ArrowRight size={15} />
          </Link>

        </div>

      </article>


      {/* ARTICLE 2 */}
      <article className="insight-card">

        <div className="insight-image">

          <img
            src="https://image.isu.pub/190828203944-20d07d57a607c2ac6f46b9bbe2c0c555/jpg/page_1_thumb_large.jpg"
            alt="Preventive healthcare"
          />

          <span className="insight-category">
            Preventive Care
          </span>

        </div>

        <div className="insight-content">

          <div className="insight-date">
            <Clock3 size={13} />
            6 min read
          </div>

          <h3>
            Why Regular Health Checkups Matter
          </h3>

          <p>
            Regular screening can help identify potential
            health concerns before they become serious.
          </p>

          <Link
            to="/blogs"
            className="read-more"
          >
            Read Article
            <ArrowRight size={15} />
          </Link>

        </div>

      </article>


      {/* ARTICLE 3 */}
      <article className="insight-card">

        <div className="insight-image">

          <img
            src="https://image.isu.pub/190617231140-1c7e5df88cb881f10846d4bca34b6a5f/jpg/page_1.jpg"
            alt="Healthy lifestyle"
          />

          <span className="insight-category">
            Wellness
          </span>

        </div>

        <div className="insight-content">

          <div className="insight-date">
            <Clock3 size={13} />
            4 min read
          </div>

          <h3>
            Building a Healthier Lifestyle Every Day
          </h3>

          <p>
            Small daily changes in nutrition, activity,
            sleep, and stress management can make a difference.
          </p>

          <Link
            to="/blogs"
            className="read-more"
          >
            Read Article
            <ArrowRight size={15} />
          </Link>

        </div>

      </article>

    </div>

  </div>

</section>

   {/* =========================
    FAQ SECTION
========================= */}
<section className="faq-section">

  <div className="faq-container">

    {/* LEFT */}
    <div className="faq-left">

      <div className="section-badge">
        <ShieldCheck size={16} />
        Frequently Asked Questions
      </div>

      <h2>
        Have Questions?
        <span> We’re Here to Help.</span>
      </h2>

      <p>
        Find answers to some of the most common questions
        about appointments, consultations, health packages,
        emergency care, and our hospital services.
      </p>

      <Link
        to="/contact"
        className="faq-contact-btn"
      >
        Have More Questions?
        <ArrowRight size={17} />
      </Link>

    </div>


    {/* RIGHT */}
    <div className="faq-list">

      <details className="faq-item">
        <summary>
          How can I book an appointment?
          <span>+</span>
        </summary>

        <p>
          You can book an appointment online through our
          appointment page or contact our hospital directly
          for assistance.
        </p>
      </details>


      <details className="faq-item">
        <summary>
          How do I find the right specialist?
          <span>+</span>
        </summary>

        <p>
          You can explore our specialist doctors by department
          and speciality to find the right doctor for your
          healthcare needs.
        </p>
      </details>


      <details className="faq-item">
        <summary>
          What should I bring for my appointment?
          <span>+</span>
        </summary>

        <p>
          Please bring your previous medical records,
          prescriptions, diagnostic reports, and a valid
          identification document if required.
        </p>
      </details>


      <details className="faq-item">
        <summary>
          Is emergency care available 24/7?
          <span>+</span>
        </summary>

        <p>
          Yes. Our emergency care team is available around
          the clock to provide immediate medical assistance.
        </p>
      </details>


      <details className="faq-item">
        <summary>
          Do you provide health checkup packages?
          <span>+</span>
        </summary>

        <p>
          Yes. We offer a range of preventive health screening
          and wellness packages for different healthcare needs.
        </p>
      </details>

    </div>

  </div>

</section>

   {/* =========================
    APPOINTMENT CTA
========================= */}
<section className="appointment-cta-section">

  <div className="appointment-cta">

    <div className="appointment-cta-content">

      <div className="section-badge cta-badge">
        <CalendarDays size={16} />
        Your Health Matters
      </div>

      <h2>
        Ready to Take Care
        <span> of Your Health?</span>
      </h2>

      <p>
        Connect with our experienced specialists and get
        personalized healthcare designed around your needs.
      </p>

      <div className="cta-buttons">

        <Link
          to="/appointment"
          className="cta-primary-btn"
        >
          <CalendarDays size={18} />
          Book an Appointment
          <ArrowRight size={17} />
        </Link>

        <Link
          to="/doctors"
          className="cta-secondary-btn"
        >
          Find a Doctor
          <Stethoscope size={17} />
        </Link>

      </div>

    </div>


    {/* CTA SIDE VISUAL */}

    <div className="cta-visual">

      <div className="cta-circle circle-one"></div>

      <div className="cta-circle circle-two"></div>

      <div className="cta-medical-icon">
        <HeartPulse size={45} />
      </div>

      <div className="cta-floating-card">

        <ShieldCheck size={17} />

        <div>
          <strong>Trusted Care</strong>
          <span>Available 24/7</span>
        </div>

      </div>

    </div>

  </div>
      </section>

    {/* =========================
    FOOTER
========================= */}
<footer className="hospital-footer">

  <div className="footer-container">

    <div className="footer-brand">
      <div className="footer-logo">
  <img
    src="/public/hospital-logo.png"
    alt="LAX360 Multi-Specialist Hospital"
    className="footer-real-logo"
  />

  <div className="footer-brand-text">
    <strong>LAX360</strong>
    <span>MULTI-SPECIALIST HOSPITAL</span>
  </div>
    </div>
</div>


    <div className="footer-column">

      <h3>Quick Links</h3>

      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/doctors">Our Doctors</Link>
      <Link to="/specialities">Specialities</Link>
      <Link to="/facilities">Facilities</Link>

    </div>


    <div className="footer-column">

      <h3>Patient Care</h3>

      <Link to="/appointment">Book Appointment</Link>
      <Link to="/health-packages">
        Health Packages
      </Link>
      <Link to="/blogs">Health Insights</Link>
      <Link to="/faq">FAQs</Link>
      <Link to="/contact">Contact Us</Link>

    </div>


    <div className="footer-column">

      <h3>Get In Touch</h3>

      <p>123 Healthcare Avenue</p>
      <p>Salem, Tamil Nadu</p>
      <p>+91 98765 43210</p>
      <p>care@healthcarehospital.com</p>

    </div>

  </div>


  <div className="footer-bottom">

    <span>
      © 2026 HealthCare Multi-Speciality Hospital.
      All rights reserved.
    </span>

  </div>

</footer>

  </div>
);
}

export default Home;