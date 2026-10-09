import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./page.css";
import ReviewsSlider from "../../components/ReviewsSlider";

import {
  FiHome,
  FiMapPin,
  FiUser,
  FiHeart,
  FiArrowRight,
  FiStar,
  FiShield,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiHome,
    title: "CAREFULLY SELECTED HOMES",
    text: "Comfortable residences in desirable Scottsdale communities.",
  },
  {
    icon: FiMapPin,
    title: "CONVENIENT TO MEDICAL CARE",
    text: "Well-positioned for guests visiting area healthcare facilities.",
  },
  {
    icon: FiUser,
    title: "EXPERIENCED HOSTING",
    text: "Personal attention, responsive communication and a commitment to quality.",
  },
  {
    icon: FiHeart,
    title: "A HOME AWAY FROM HOME",
    text: "Privacy, space and everyday conveniences for longer stays.",
  },
];

const medicalFacilities = [
  {
    name: "Mayo Clinic Scottsdale",
    location: "Scottsdale, Arizona",
    description:
      "A major Scottsdale medical destination for patients, caregivers and families traveling for care.",
  },
  {
    name: "Mayo Clinic Hospital",
    location: "Phoenix, Arizona",
    description:
      "A major medical campus serving patients and families visiting the Scottsdale and North Phoenix area.",
  },
  {
    name: "HonorHealth Scottsdale Shea Medical Center",
    location: "Scottsdale, Arizona",
    description:
      "A leading Scottsdale medical facility serving hospital, specialty and outpatient needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="about-hero">

          <div className="about-hero-image">
            <img
              src="/signature-pool.png"
              alt="The Signature Scottsdale community pool"
            />
          </div>

          <div className="about-hero-overlay"></div>

          <div className="about-hero-content">

            <span className="about-eyebrow">
              SCOTTSDALE MEDICAL STAYS
            </span>

            <h1>
              Thoughtfully Chosen.
              <br />
              <em>Personally Hosted.</em>
            </h1>

            <div className="about-hero-line"></div>

            <p className="about-hero-subtitle">
              EXPERIENCE YOU CAN TRUST.
              <br />
              COMFORT YOU CAN FEEL.
            </p>

            <p className="about-hero-description">
              A small collection of carefully selected Scottsdale
              residences, offering comfort, convenience and the
              reassurance of attentive, experienced hosting.
            </p>

          </div>
        </section>


        {/* =========================================
            QUICK BENEFITS
        ========================================= */}

        <section className="about-benefits">

          <div className="about-benefits-container">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  className="about-benefit"
                  key={benefit.title}
                >
                  <div className="about-benefit-icon">
                    <Icon />
                  </div>

                  <div className="about-benefit-content">
                    <span>{benefit.title}</span>

                    <p>{benefit.text}</p>
                  </div>
                </article>
              );
            })}

          </div>

        </section>


        {/* =========================================
            OUR STORY
        ========================================= */}

        <section className="about-story">

          <div className="about-story-container">

            <div className="about-story-copy">

              <span className="section-eyebrow">
                OUR STORY
              </span>

              <h2>
                Why We Do
                <br />
                <em>What We Do</em>
              </h2>

              <div className="about-story-text">

                <p>
                  At Scottsdale Medical Stays, we believe that where
                  you stay matters just as much as where you&apos;re
                  going. We understand the needs of medical travelers,
                  caregivers and families, and the importance of having
                  a comfortable, clean and peaceful place to call home
                  during an extended stay.
                </p>

                <p>
                  Our residences have been carefully selected for
                  their Scottsdale locations, welcoming surroundings
                  and convenient access to medical facilities,
                  shopping, dining and everyday essentials. We focus
                  on a thoughtfully curated collection rather than a
                  large inventory of properties.
                </p>

              </div>

            </div>


            <div className="about-story-art">

              <div className="story-cactus"><img src="cactus-tree.png"></img></div>

              <div className="story-art-copy">
                <em>
                  A calmer place
                  <br />
                  to stay
                  <br />
                  while care
                  <br />
                  comes first.
                </em>
              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            MEDICAL FACILITIES
        ========================================= */}

        <section className="about-medical">

          <div className="about-medical-container">

            <div className="about-medical-heading">

              <div>
                <span className="section-eyebrow">
                  CLOSE TO WORLD-CLASS CARE
                </span>

                <h2>
                  Convenient to Scottsdale&apos;s
                  <br />
                  <em>Leading Medical Facilities</em>
                </h2>
              </div>

              <p>
                Our residences are positioned with medical travel
                in mind, giving guests a comfortable home base while
                visiting healthcare facilities in the Scottsdale area.

                <a
                    href="../#contact"
                    className="facility-link host-button"
                  >
                    PLAN YOUR STAY
                    <FiArrowRight />
                  </a>

              </p>

            </div>


            <div className="medical-facility-grid">

              {medicalFacilities.map((facility) => (
                <article
                  className="medical-facility-card"
                  key={facility.name}
                >

                  <div className="facility-card-top">

                    <div className="facility-icon">
                      <FiMapPin />
                    </div>

                    <div>
                      <h3>{facility.name}</h3>
                      <span>{facility.location}</span>
                    </div>

                  </div>

                  <p>{facility.description}</p>

                  

                </article>
              ))}

            </div>


            <div className="medical-disclaimer">
              <FiShield />

              <p>
                Exact travel times vary by property, destination,
                traffic and time of day. Guests should verify travel
                time for their specific appointments.
              </p>
            </div>

          </div>

        </section>


        {/* =========================================
            GUEST REPUTATION
        ========================================= */}

        <section className="about-reputation" id="reviews">

          <div className="about-reputation-container">

            <div className="reputation-copy">

              <span className="section-eyebrow">
                OUR GUEST REPUTATION
              </span>

              <h2>
                A History of
                <br />
                <em>Exceptional Reviews</em>
              </h2>

              <p>
                We take great pride in the experiences of our guests.
                Our established Scottsdale rental has earned an
                exceptional 10/10 rating on Vrbo, reflecting the care
                and attention we bring to hospitality.
              </p>

              <p>
                From well-appointed interiors to responsive
                communication, we believe the little details make a
                meaningful difference.
              </p>

              <a
                href="https://www.vrbo.com/1541225"
                target="_blank"
                rel="noopener noreferrer"
                className="reputation-button"
              >
                READ REVIEWS ON VRBO
                <FiArrowRight />
              </a>

            </div>


            <div className="reputation-rating">

  {/* Existing rating card */}
  <div className="rating-card">
    <div className="rating-stars">
      <FiStar />
      <FiStar />
      <FiStar />
      <FiStar />
      <FiStar />
    </div>

    <strong>10/10</strong>
    <span>ON VRBO</span>

    <div className="rating-divider"></div>

    <strong className="review-count">60+</strong>

    <span>
      FIVE-STAR
      <br />
      REVIEWS
    </span>
  </div>

  {/* Reusable review slider */}
  <ReviewsSlider />

</div>

          </div>

        </section>


        {/* =========================================
            MEET YOUR HOST
        ========================================= */}

        <section className="about-host">

          <div className="about-host-container">

            <div className="host-photo">

              <img
                src="/fay-hart.webp"
                alt="Fay Hart, owner and host of Scottsdale Medical Stays"
              />

            </div>


            <div className="host-content">

              <span className="section-eyebrow">
                MEET YOUR HOST
              </span>

              <h2>
                Fay Hart
              </h2>

              <span className="host-role">
                OWNER &amp; HOST
              </span>

              <div className="host-text">

                <p>
                  My passion for hospitality grew from a personal
                  experience: being challenged to find clean,
                  comfortable, quality accommodations for an extended
                  stay. I realized how difficult it could be to find a
                  place that truly felt like home.
                </p>

                <p>
                  That experience inspired a more thoughtful approach
                  to hosting. Today, I take pride in offering carefully
                  selected Scottsdale residences where cleanliness,
                  comfort, convenience and personal attention come first.
                </p>

                <p>
                  Whether you&apos;re visiting for medical care,
                  supporting a loved one, or staying for an extended
                  period, my goal is simple: to make your time away
                  from home as comfortable and worry-free as possible.
                </p>

              </div>

              <a
                href="/#properties"
                className="host-button"
              >
                PLAN YOUR STAY
                <FiArrowRight />
              </a>

            </div>


            <div className="host-detail-image">
              
            </div>

          </div>

        </section>


        {/* =========================================
            CLOSING
        ========================================= */}

        <section className="about-closing">

          <div className="about-closing-decoration left"></div>

          <div className="about-closing-content">

            <span>
              SCOTTSDALE MEDICAL STAYS
            </span>

            <h2>
              REST. RECOVER.
              <br />
              <em>FEEL AT HOME.</em>
            </h2>

            <a
              href="#contact"
              className="closing-button"
            >
              INQUIRE ABOUT A STAY
              <FiArrowRight />
            </a>

          </div>

          <div className="about-closing-decoration right"></div>

        </section>

      </main>

      <Footer />
    </>
  );
}