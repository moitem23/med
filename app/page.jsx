
"use client";

import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewsSlider from "../components/ReviewsSlider";


import { 
CiMedicalCase,
CiMedicalCross,
 } from "react-icons/ci";
 
 import { PiHouseLineLight } from "react-icons/pi";
 import { GiRockingChair } from "react-icons/gi";
 import {
  FiHeart,
  FiHome,
  FiStar,
  FiGrid,
  FiCoffee,
  FiSmile,
  FiUsers,
  FiShield,
  FiWifi,
  FiCalendar,
  FiMapPin,
  FiActivity,
  FiArrowUpRight,
  FiSearch,
  FiCheckCircle,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";




const properties = [

  {
    name: "The Signature",
    location: "North Scottsdale · 85260",
    image: "/signature.jpg",
	start:"Community",
    description:
      "A spacious split-plan 2-bedroom, 2-bath condo with a king bed, two full beds, three HDTVs and a well-equipped kitchen.",
	  details: "two heated pools, hot tub, fitness center, sauna/steam, clubhouse and grills.",
    features: [
      "2 BR",
      "2 BA",
      "King + 2 Fulls",
      "Split Plan",
      "Laundry",
    ],
	vrbo: "https://www.vrbo.com/1541225?dateless=true",
  },

  {
    name: "The Dutton",
    location: "Village at Stone Creek · 85254",
    image: "/dutton.jpg",
	start:"Good fit for",
    description:
      "A warm, distinctive 2-bedroom, 2-bath Scottsdale stay with comfort and functionality needed for longer visits.",
	  details: "patients, caregivers, families and medical professionals wanting a residential Scottsdale setting.",
    features: [
      "2 BR",
      "2 BA",
      "Full Kitchen",
      "Laundry",
      "Community Pool",
    ],
	vrbo: "https://www.vrbo.com/5462333?dateless=true",
  },
  
  {
    name: "The Loft",
    location: "Village at Stone Creek · 85254",
    image: "/loft.jpg",
	start:"Community",
    description:
      "A two-story 2-bedroom, 2-bath condo with a king bedroom, full-size second bed, balcony and in-unit laundry.",
	  details: "pool, jacuzzi, clubhouse and convenient everyday shopping nearby.",
    features: [
      "2 BR",
      "2 BA",
      "King + Full",
      "Balcony",
      "Laundry",
    ],
	vrbo: "https://www.vrbo.com/5437161?dateless=true",
  },
  
];

const benefits = [
  {
    icon: CiMedicalCase,
    title: "IDEAL FOR",
    text: "MEDICAL TRAVELERS",
  },
  {
    icon: CiMedicalCross,
    title: "CONVENIENT TO",
    text: "HOSPITALS & CARE CENTERS",
  },
  {
    icon: PiHouseLineLight,
    title: "FULLY FURNISHED",
    text: "HOMES",
  },
  {
    icon: GiRockingChair,
    title: "PEACEFUL, RELAXING",
    text: "ENVIRONMENTS",
  },
];



export default function HomePage() {
  return (
    <>
      <Header />

      <main>

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="hero">

          <div className="hero-background">
            <img
              src="/hero-banner.png"
              alt="Scottsdale Arizona desert landscape"
            />
          </div>

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="hero-logo-card">
              <img
                src="/med-logo.png"
                alt="Scottsdale Medical Stays"
              />
            </div>

            <div className="hero-copy">

              <p className="hero-eyebrow">
                SCOTTSDALE • ARIZONA
              </p>

              <h1>
                Thoughtfully Chosen, Personally hosted
              </h1>
			  
			  <h3 className="hero-subtitle">A calmer place to stay while care comes first.</h3>

              <p className="hero-description">Thoughtfully furnished 2-bedroom condos for patients, caregivers, families and visiting medical professionals who need more comfort, privacy and everyday convenience than a traditional hotel room.
              </p>

              <a
                href="#properties"
                className="primary-button"
              >
                EXPLORE OUR PROPERTIES
                <span>›</span>
              </a>

            </div>

          </div>
        </section>


        {/* =====================================================
            BENEFITS BAR
        ====================================================== */}
<section className="benefits-bar">

  <div className="benefits-inner">

    {benefits.map((item, index) => {
      const Icon = item.icon;

      return (
        <div className="benefit-item" key={index}>

          <div className="benefit-icon">
            <Icon />
          </div>

          <div>
            <span>{item.title}</span>
            <strong>{item.text}</strong>
          </div>

        </div>
      );
    })}

    <div className="review-summary">

  {/* Rating Box */}
  <div className="rating-box">
    <strong>10/10</strong>
  </div>

  {/* Review Details */}
  <div className="review-details">

    <div className="stars">
      ★ ★ ★ ★ ★
    </div>

    <div className="review-text">
      <strong>EXCEPTIONAL</strong>
      <span>60+ REVIEWS ON VRBO</span>
    </div>

    <a href="#reviews" className="review-button">
      READ GUEST REVIEWS
      <span>›</span>
    </a>

  </div>

</div>

  </div>

</section>


        {/* =====================================================
            PROPERTIES
        ====================================================== */}
        <section
          className="properties-section"
          id="properties"
        >

          <div className="properties-layout">

            <div className="properties-intro">

              <p className="section-label">
                THREE FURNISHED CHOICES
              </p>

              <h2>
                Choose the setting
                <br />
                that feels right.
              </h2>

              <p>
                Each residence offers a true
                home-away-from-home setup with two
                bedrooms, two bathrooms, a kitchen
                and in-unit laundry. Community
                amenities vary by property.
              </p>

            </div>


            <div
              className="property-grid"
              id="properties-list"
            >

              {properties.map((property) => (
                <article
                  className="property-card"
                  key={property.name}
                >

                  <div className="property-image">
					<div className="property-overlay"></div>
                    <img
                      src={property.image}
                      alt={`${property.name} furnished Scottsdale condo`}
                    />

                  </div>

                  <div className="property-content">

                    <h3>{property.name}</h3>
					
					<p className="property-description">
                      {property.description}
                    </p>

                    <div className="property-features">

                      {property.features.map(
                        (feature, index) => (
                          <span key={index}>
                            <i>✦︎</i>
                            {feature}
                          </span>
                        )
                      )}

                    </div>

                    <p>
                      <b>{property.start}:</b> {property.details}
                    </p>
					
					<div  className="property-buttons">
					<a
                      href={property.vrbo}
                      className="card-button vbro-button"  target="_blank" rel="noopener noreferrer" 
                    >
                      Check On VRBO
                      <span>›</span>
                    </a>

                    <a
                      href="#contact"
                      className="card-button"
                    >
                      ASK ABOUT {property.name.toUpperCase()}
                      <span>›</span>
                    </a>
					</div>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>


{/* =========================================================
   MEDICAL STAYS — TWO COLUMN SECTION
========================================================= */}

<section className="medical-stays-section" id="medical-stays">
  <div className="medical-stays-container">

    {/* =====================================================
        LEFT COLUMN
    ====================================================== */}

    <div className="medical-column welcome-column">

      <div className="medical-column-header">

        <span className="medical-eyebrow">
          WHO WE WELCOME
        </span>

        <h2>
          A better fit for
          <br />
          <em>medical travel.</em>
        </h2>

        <p>
          A comfortable residential setting for medical
          travel that may last days, weeks or longer.
        </p>

      </div>


      {/* Welcome Items */}

      <div className="welcome-list">

        {/* Patients */}
        <article className="welcome-item">

          <div className="welcome-icon">
            <FiHeart />
          </div>

          <div className="welcome-item-content">

            <h3>
              Patients &amp; Caregivers
            </h3>

            <p>
              A private setting with room for a support
              person, meal preparation and rest between
              appointments.
            </p>

          </div>

        </article>


        {/* Families */}
        <article className="welcome-item">

          <div className="welcome-icon">
            <FiHome />
          </div>

          <div className="welcome-item-content">

            <h3>
              Families Supporting Loved Ones
            </h3>

            <p>
              Two-bedroom layouts make it easier for family
              members to stay nearby without giving up
              personal space.
            </p>

          </div>

        </article>


        {/* Medical Professionals */}
        <article className="welcome-item">

          <div className="welcome-icon">
            <FiStar />
          </div>

          <div className="welcome-item-content">

            <h3>
              Medical Professionals
            </h3>

            <p>
              A comfortable Scottsdale home base for
              clinicians, consultants, travel staff and
              other visiting professionals.
            </p>

          </div>

        </article>

      </div>



    </div>


    {/* =====================================================
        RIGHT COLUMN
    ====================================================== */}

    <div className="medical-column stays-column">

      <div className="stays-panel">

        {/* Panel Header */}

        <div className="stays-panel-top">

          <div className="stays-heading">

            <span className="medical-eyebrow">
              DESIGNED AROUND REAL-LIFE STAYS
            </span>

            <h2>
              Space to rest,
              <br />
              <em>regroup &amp; feel at home.</em>
            </h2>

            <p>
              Thoughtful residential details help make
              medical travel feel more comfortable,
              familiar and manageable.
            </p>

          </div>

          <div className="stays-mark">
            <span>
              SCOTTSDALE
            </span>
          </div>

        </div>


        {/* =================================================
            STAY FEATURES
            Always 2 columns
        ================================================== */}

        <div className="stay-features">

          {/* 01 */}
          <div className="stay-feature">

            <div className="stay-feature-icon">
              <FiGrid />
            </div>

            <div className="stay-feature-text">

              <h3>
                Separate bedrooms
              </h3>

              <p>
                Helpful for a patient plus caregiver,
                relatives or rotating support.
              </p>

            </div>

          </div>


          {/* 02 */}
          <div className="stay-feature">

            <div className="stay-feature-icon">
              <FiCoffee />
            </div>

            <div className="stay-feature-text">

              <h3>
                Kitchen + laundry
              </h3>

              <p>
                Prepare familiar meals and keep daily
                routines simple during longer visits.
              </p>

            </div>

          </div>


          {/* 03 */}
          <div className="stay-feature">

            <div className="stay-feature-icon">
              <FiSmile />
            </div>

            <div className="stay-feature-text">

              <h3>
                Comfortable living space
              </h3>

              <p>
                Room to relax between appointments without
                spending the day in one hotel room.
              </p>

            </div>

          </div>


          {/* 04 */}
          <div className="stay-feature">

            <div className="stay-feature-icon">
              <FiCalendar />
            </div>

            <div className="stay-feature-text">

              <h3>
                Flexible stay inquiries
              </h3>

              <p>
                Ask about availability that aligns with
                consultations, procedures and recovery
                timelines.
              </p>

            </div>

          </div>

        </div>


        {/* Panel Bottom */}

        <div className="stays-panel-footer">

          <div className="stays-footer-note">

            <span className="footer-dot"></span>

            <span>
              COMFORTABLE • PRIVATE • RESIDENTIAL
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>





        {/* =====================================================
            Comfort SECTION
        ====================================================== */}


<section className="comfort-section" id="comfort">

  <div className="comfort-container">

    {/* =====================================================
        LEFT CONTENT
    ====================================================== */}

    <div className="comfort-content">

      <span className="section-label">
        COMFORT THAT MATTERS
      </span>

      <h2>
        Small practical details
        <br />
        can make a stay <em>easier.</em>
      </h2>

      <p className="comfort-intro">
        For many guests, medical travel is not a vacation.
        Our homes are intentionally quieter and more reassuring
        than a typical short-term rental.
      </p>


      {/* Features */}

      <div className="comfort-features">

        {/* 01 */}
        <div className="comfort-feature">

          <div className="comfort-feature-icon">
            <FiCoffee />
          </div>

          <div>
            <h3>
              Home-cooked meals
            </h3>

            <p>
              Full kitchens for familiar foods and
              dietary routines.
            </p>
          </div>

        </div>


        {/* 02 */}
        <div className="comfort-feature">

          <div className="comfort-feature-icon">
            <FiHome />
          </div>

          <div>
            <h3>
              Laundry at home
            </h3>

            <p>
              No hotel laundry runs during a longer stay.
            </p>
          </div>

        </div>


        {/* 03 */}
        <div className="comfort-feature">

          <div className="comfort-feature-icon">
            <FiUsers />
          </div>

          <div>
            <h3>
              Room for support
            </h3>

            <p>
              Separate sleeping areas can help caregivers
              rest, too.
            </p>
          </div>

        </div>


        {/* 04 */}
        <div className="comfort-feature">

          <div className="comfort-feature-icon">
            <FiShield />
          </div>

          <div>
            <h3>
              Residential privacy
            </h3>

            <p>
              A quieter place to recharge after appointments.
            </p>
          </div>

        </div>


        {/* 05 */}
        <div className="comfort-feature">

          <div className="comfort-feature-icon">
            <FiWifi />
          </div>

          <div>
            <h3>
              Wi-Fi + living space
            </h3>

            <p>
              Useful for telehealth, work, family calls,
              and downtime.
            </p>
          </div>

        </div>


        {/* 06 */}
        <div className="comfort-feature">

          <div className="comfort-feature-icon">
            <FiCalendar />
          </div>

          <div>
            <h3>
              Longer-stay friendly
            </h3>

            <p>
              Ask about dates that match your care schedule.
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        RIGHT IMAGE AREA
    ====================================================== */}

    <div className="comfort-visual">

      <div className="comfort-image-main">

        <img
          src="/cactus-tree-art.png"
          alt="Warm comfortable residential living space"
        />

        <div className="comfort-image-label">
          <span>
            A QUIETER KIND OF STAY
          </span>
			<br/>
          <strong>
            Feel at home
            <br />
            while you're away.
          </strong>
        </div>

      </div>



    

    </div>

  </div>

</section>



        {/* =====================================================
            MEDICAL CARE Highlights
        ====================================================== */}


<section className="medical-highlights-section" id="medical-highlights">
  <div className="medical-highlights-container">

    {/* Section Header */}
    <div className="medical-highlights-header">

      <div className="medical-highlights-heading">
        <span className="section-label">
          MEDICAL CARE HIGHLIGHTS
        </span>

        <h2>
          Conveniently positioned
          <br />
          <em>for medical visits.</em>
        </h2>
      </div>

      <div className="medical-highlights-intro">
        <div className="medical-location-mark">
          <FiMapPin />
        </div>

        <p>
          Conveniently positioned for medical visits in Scottsdale
          and North Phoenix. These furnished stays can be considered
          by guests visiting major medical providers throughout the
          Scottsdale area.
        </p>

        <small>
          Exact drive times vary by property, campus, traffic and time
          of day. Guests should verify travel time for their specific
          appointments.
        </small>
      </div>

    </div>

    {/* Highlights */}
    <div className="medical-highlights-grid">

      {/* Mayo Scottsdale */}
      <article className="medical-highlight-card featured">

        <div className="medical-highlight-top">
          <div className="medical-highlight-icon">
            <FiActivity />
          </div>

          <span className="medical-highlight-number">
            01
          </span>
        </div>

        <div className="medical-highlight-content">
          <span className="medical-highlight-label">
            MAYO CLINIC
          </span>

          <h3>
            Mayo Clinic
            <br />
            Scottsdale Campus
          </h3>

          <p className="medical-address"><FiMapPin /> 13400 E. Shea Blvd. Scottsdale, AZ 85259</p>

          <ul>
            <li>Diagnostic testing and laboratory services</li>
            <li>Outpatient surgery and imaging</li>
            <li>Patient, caregiver and visitor services</li>
          </ul>
        </div>

        <div className="medical-card-footer">
          <span>SCOTTSDALE</span>
          <FiArrowUpRight />
        </div>

      </article>


      {/* Mayo Phoenix */}
      <article className="medical-highlight-card featured">

        <div className="medical-highlight-top">
          <div className="medical-highlight-icon">
            <FiActivity />
          </div>

          <span className="medical-highlight-number">
            02
          </span>
        </div>

        <div className="medical-highlight-content">
          <span className="medical-highlight-label">
            MAYO CLINIC
          </span>

          <h3>
            Mayo Clinic Hospital
            <br />
            Phoenix Campus
          </h3>

          <p className="medical-address"><FiMapPin /> 5777 E. Mayo Blvd. Phoenix, AZ 85054</p>

          <ul>
            <li>Major hospital campus serving patients across many specialties</li>
            <li>North Phoenix location convenient to North Scottsdale</li>
            <li>Frequently used by out-of-town patients and families</li>
          </ul>
        </div>

        <div className="medical-card-footer">
          <span>NORTH PHOENIX</span>
          <FiArrowUpRight />
        </div>

      </article>


      {/* HonorHealth */}
      <article className="medical-highlight-card">

        <div className="medical-highlight-top">
          <div className="medical-highlight-icon">
            <FiHeart />
          </div>

          <span className="medical-highlight-number">
            03
          </span>
        </div>

        <div className="medical-highlight-content">
          <span className="medical-highlight-label">
            HONORHEALTH
          </span>

          <h3>
            HonorHealth
            <br />
            Scottsdale Area
          </h3>

          <p className="medical-address">
            Scottsdale & surrounding communities
          </p>

          <ul>
            <li>Hospital and specialty-care locations</li>
            <li>Outpatient and follow-up care across the Scottsdale area</li>
          </ul>
        </div>

        <div className="medical-card-footer">
          <span>SCOTTSDALE AREA</span>
          <FiArrowUpRight />
        </div>

      </article>


      {/* Other Specialty Care */}
      <article className="medical-highlight-card">

        <div className="medical-highlight-top">
          <div className="medical-highlight-icon">
            <FiUsers />
          </div>

          <span className="medical-highlight-number">
            04
          </span>
        </div>

        <div className="medical-highlight-content">
          <span className="medical-highlight-label">
            SPECIALTY CARE
          </span>

          <h3>
            Other Specialty &
            <br />
            Outpatient Care
          </h3>

          <p className="medical-address">
            Scottsdale & North Phoenix
          </p>

          <ul>
            <li>Specialty practices, surgery centers and medical offices</li>
            <li>Rehabilitation and outpatient services</li>
            <li>Good option for multi-appointment trips</li>
            <li>Residential lodging for accompanying family or caregivers</li>
          </ul>
        </div>

        <div className="medical-card-footer">
          <span>SCOTTSDALE + NORTH PHOENIX</span>
          <FiArrowUpRight />
        </div>

      </article>

    </div>

    {/* Bottom Note */}
    <div className="medical-highlights-note">
      <div className="medical-note-icon">
        <FiMapPin />
      </div>

      <p>
        <strong>Planning a medical stay?</strong>{" "}
        When comparing properties, consider the location of your
        appointments, expected length of stay and whether a caregiver
        or family member will be traveling with you.
      </p>
    </div>

  </div>
</section>



        {/* =====================================================
            MEDICAL Process
        ====================================================== */}

<section className="medical-process-section" id="how-it-works">
<div className="medical-process-section-overlay"></div>
  <div className="medical-process-container">

    {/* Header */}
    <div className="medical-process-header">
      <div>
        <span className="medical-process-eyebrow">
          SIMPLE & LOW-PRESSURE
        </span>

        <h2>
          How a medical-stay
          <br />
          <em>inquiry works.</em>
        </h2>
      </div>

      <p>
        A straightforward way to explore your options without
        unnecessary steps or pressure.
      </p>
    </div>


    {/* Process */}
    <div className="medical-process">

      {/* Progress Track */}
      <div className="medical-process-track">
        <div className="medical-process-progress"></div>
      </div>


      {/* Step 01 */}
      <article className="medical-process-step active">
        <div className="medical-step-top">
          <div className="medical-step-icon">
            <FiCalendar />
          </div>

          <span className="medical-step-number">
            01
          </span>
        </div>

        <div className="medical-step-content">
          <h3>Share your dates</h3>

          <p>
            Tell us your expected arrival, departure and which
            medical campus or area you need to be near.
          </p>
        </div>

        <div className="medical-step-line"></div>
      </article>


      {/* Step 02 */}
      <article className="medical-process-step">
        <div className="medical-step-top">
          <div className="medical-step-icon">
            <FiSearch />
          </div>

          <span className="medical-step-number">
            02
          </span>
        </div>

        <div className="medical-step-content">
          <h3>We check the best fit</h3>

          <p>
            We compare the three condos for availability,
            layout and location.
          </p>
        </div>

        <div className="medical-step-line"></div>
      </article>


      {/* Step 03 */}
      <article className="medical-process-step">
        <div className="medical-step-top">
          <div className="medical-step-icon">
            <FiCheckCircle />
          </div>

          <span className="medical-step-number">
            03
          </span>
        </div>

        <div className="medical-step-content">
          <h3>Review your option</h3>

          <p>
            You receive the suggested property and booking
            details with no medical information required.
          </p>
        </div>

        <div className="medical-step-line"></div>
      </article>


      {/* Step 04 */}
      <article className="medical-process-step">
        <div className="medical-step-top">
          <div className="medical-step-icon">
            <FiHome />
          </div>

          <span className="medical-step-number">
            04
          </span>
        </div>

        <div className="medical-step-content">
          <h3>Settle in</h3>

          <p>
            Arrive to a furnished Scottsdale home base with
            a kitchen, laundry and living space.
          </p>
        </div>
		<div className="medical-step-line"></div>
      </article>

    </div>


    {/* Bottom reassurance */}
    <div className="medical-process-note">
      <span></span>
      <p>
        <strong>No medical information required.</strong>
        {" "}Simply tell us what dates and location work best for your stay.
      </p>
    </div>

  </div>
</section>


 {/* =====================================================
    REVIEWS & FAQ
====================================================== */}

<section
  className="reviews-faq-section"
  id="reviews"
>
  <div className="reviews-faq-container">

    {/* =========================================
        LEFT — GUEST REVIEWS
    ========================================== */}

    <div className="reviews-column">

      <div className="reviews-header">

        <span className="section-label">
          GUEST REVIEWS
        </span>

        <h2>
          A stay that feels
          <br />
          <em>like home.</em>
        </h2>
		
		
        <div className="reviews-rating-summary">

          <div className="reviews-rating-score">
            <strong>10/10</strong>

            <span>
              ★★★★★
            </span>
          </div>

          <div className="reviews-rating-copy">
            <strong>Exceptional</strong>

            <span>
              Verified VRBO guest reviews
            </span>
          </div>

        </div>
		
		<div  className="reviews-description">
			<p>Our established Scottsdale condo, The Signature, has earned an exceptional guest rating on Vrbo — helpful reassurance when choosing a comfortable place for a longer or medical-related stay.</p>
		</div>

      </div>


      {/* Reusable slider */}
    <div className="reviews-content-slider">
      <ReviewsSlider />
    </div>
	  
	  <a href="https://www.vrbo.com/1541225" target="_blank" rel="noopener noreferrer" className="vrbo-reviews-button">
		<strong>Read all reviews on Vrbo</strong>
		<span>→</span>
	  </a>

    </div>


    {/* =========================================
        RIGHT — FAQ
    ========================================== */}

    <aside
      className="faq-column"
      id="faq"
    >

      <div className="faq-panel">

        <div className="faq-header">

          <span className="faq-eyebrow">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Planning a
            <br />
            <em>medical stay?</em>
          </h2>

          <p>
            Have a question about our properties,
            medical stays or booking process?
          </p>

        </div>


        <div className="faq-list">

          <details
            className="faq-item"
            open
          >
            <summary>

              <span>
                Do I need to share my diagnosis
                or medical details?
              </span>

              <div className="faq-icon">
                <FiChevronDown />
              </div>

            </summary>

            <div className="faq-answer">

              <p>
                No. We only need practical lodging
                information such as dates, number of
                guests, the general medical campus or
                area you need to reach, and any
                non-medical housing requirements you
                want us to consider.
              </p>

            </div>

          </details>


          <details className="faq-item">

            <summary>

              <span>
                Can a caregiver or family member
                stay with me?
              </span>

              <div className="faq-icon">
                <FiChevronDown />
              </div>

            </summary>

            <div className="faq-answer">

              <p>
                Yes. The two-bedroom layouts are
                particularly useful for guests traveling
                with a caregiver, family member or
                other support person, subject to each
                property's occupancy rules.
              </p>

            </div>

          </details>


          <details className="faq-item">

            <summary>

              <span>
                Are the condos suitable for
                longer stays?
              </span>

              <div className="faq-icon">
                <FiChevronDown />
              </div>

            </summary>

            <div className="faq-answer">

              <p>
                They are furnished with full kitchens,
                in-unit laundry and living areas that
                are useful for extended visits.
                Availability and minimum-stay
                requirements can vary by property
                and season.
              </p>

            </div>

          </details>


          <details className="faq-item">

            <summary>

              <span>
                Can you guarantee a specific drive
                time to my appointments?
              </span>

              <div className="faq-icon">
                <FiChevronDown />
              </div>

            </summary>

            <div className="faq-answer">

              <p>
                No. Drive time depends on the property,
                destination, traffic and appointment
                time. We recommend verifying travel
                time for your exact campus and
                schedule before booking.
              </p>

            </div>

          </details>

        </div>


        <div className="faq-trust-note">

          <div className="faq-trust-icon">
            <FiShield />
          </div>

          <div>

            <strong>
              Keep it simple.
            </strong>

            <span>
              No diagnosis or medical information
              is needed to start an inquiry.
            </span>

          </div>

        </div>

      </div>

    </aside>

  </div>
</section>




        {/* =====================================================
            CONTACT / INQUIRY
        ====================================================== */}
        <section className="medical-contact-section" id="contact">
  <div className="medical-contact-container">

    {/* LEFT COLUMN */}
    <div className="medical-contact-info">

      <span className="section-label">
        MEDICAL-STAY AVAILABILITY
      </span>

      <h2>
        Tell us what you need from your <em>Scottsdale stay.</em>
      </h2>

      <p className="medical-contact-intro">
        Share only the lodging details you are comfortable providing.
        You do not need to disclose a diagnosis, treatment plan or
        other private medical information.
      </p>

      <div className="medical-contact-note">
        <span className="medical-contact-note-line"></span>
        <p>
          We'll review your dates, guest count and preferred property
          and help identify the best available fit.
        </p>
      </div>

      <div className="medical-contact-details">

        <div className="medical-contact-detail">
          <span>PHONE</span>
          <a href="tel:+17732303800">
            773-230-3800
          </a>
		  <a className="brown-button" href="sms:+17732303800?body=Hello%2C%20I%20am%20interested%20in%20booking%20your%20Three%20Key%20Scottsdale%20property.">Send Message</a>
        </div>

        <div className="medical-contact-detail">
          <span>EMAIL</span>
          <a href="mailto:fayhartgroup@gmail.com">
            fayhartgroup@gmail.com
          </a>
		  <a className="brown-button" href="mailto:fayhartgroup@gmail.com">Send Email</a>
        </div>

      </div>

      <p className="medical-contact-disclaimer">
        Availability inquiries are subject to property availability,
        stay requirements and final booking confirmation.
      </p>

    </div>


    {/* RIGHT COLUMN */}
    <div className="medical-contact-form-wrap">

      <div className="medical-contact-form-heading">
        <span className="section-label">START AN INQUIRY</span>
        <h3>Tell us about your stay.</h3>
      </div>

      <form
        className="medical-contact-form"
        onSubmit={async (e) => {
          e.preventDefault();

          const form = e.currentTarget;
          const formData = new FormData(form);

          const submitButton = form.querySelector(
            ".medical-form-button"
          );

          const status = form.querySelector(
            ".medical-form-status"
          );

          submitButton.disabled = true;
          submitButton.classList.add("loading");
          submitButton.querySelector("span").textContent = "Sending...";

          status.className = "medical-form-status";
          status.textContent = "";

          try {
            const response = await fetch("/api/contact", {
              method: "POST",
              body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
              throw new Error(
                result.message || "Something went wrong."
              );
            }

            status.classList.add("success");
            status.textContent =
              "Thank you. Your inquiry has been sent successfully. We'll be in touch soon.";

            form.reset();

          } catch (error) {
            status.classList.add("error");
            status.textContent =
              error.message ||
              "We couldn't send your inquiry. Please try again or contact us directly.";
          }

          submitButton.disabled = false;
          submitButton.classList.remove("loading");
          submitButton.querySelector("span").textContent = "Send Inquiry";
        }}
      >

        {/* Honeypot spam protection */}
        <div className="medical-form-honeypot" aria-hidden="true">
          <label htmlFor="website">
            Website
          </label>

          <input
            type="text"
            id="website"
            name="website"
            tabIndex="-1"
            autoComplete="off"
          />
        </div>


        <div className="medical-form-row">

          <div className="medical-form-group">
            <label htmlFor="name">
              Your Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>


          <div className="medical-form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

        </div>


        <div className="medical-form-row">

          <div className="medical-form-group">
            <label htmlFor="startDate">
              Preferred Start Date
            </label>

            <input
              type="date"
              id="startDate"
              name="startDate"
              required
            />
          </div>


          <div className="medical-form-group">
            <label htmlFor="endDate">
              Preferred End Date
            </label>

            <input
              type="date"
              id="endDate"
              name="endDate"
              required
            />
          </div>

        </div>


        <div className="medical-form-row">

          <div className="medical-form-group">
            <label htmlFor="guests">
              Guests
            </label>

            <select
              id="guests"
              name="guests"
              defaultValue="1"
              required
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>
          </div>


          <div className="medical-form-group">
            <label htmlFor="property">
              Preferred Property
            </label>

            <select
              id="property"
              name="property"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a property
              </option>

              <option value="The Signature">
                The Signature
              </option>

              <option value="The Dutton">
                The Dutton
              </option>

              <option value="The Loft">
                The Loft
              </option>

              <option value="Whichever is the best fit">
                Whichever is the best fit
              </option>
            </select>
          </div>

        </div>


        <div className="medical-form-group">
          <label htmlFor="medicalNeeds">
            Special Medical Needs
          </label>

          <textarea
            id="medicalNeeds"
            name="medicalNeeds"
            rows="3"
            placeholder="Optional — share only lodging-related needs you are comfortable providing."
          ></textarea>
        </div>


        <div className="medical-form-group">
          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us anything else that would help us understand your stay."
          ></textarea>
        </div>


        <div className="medical-form-bottom">

          <p className="medical-form-privacy">
            No diagnosis or treatment information is required.
          </p>

          <button
            type="submit"
            className="medical-form-button card-button"
          >
            <span>Send Inquiry</span>
            <b>→</b>
          </button>

        </div>


        <div
          className="medical-form-status"
          role="status"
          aria-live="polite"
        ></div>

      </form>

    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
}