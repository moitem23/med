import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms & Conditions | Scottsdale Medical Stays",
  description:
    "Read the website terms and conditions for Scottsdale Medical Stays, including inquiries, reservations, property information, and third-party booking platforms.",
};

const sections = [
  {
    title: "1. About This Website",
    content: (
      <p>
        This website provides information about furnished accommodations
        associated with Scottsdale Medical Stays and allows visitors to
        ask questions or submit potential stay inquiries. Website
        information is provided for general informational purposes and
        does not guarantee that a property will be available.
      </p>
    ),
  },
  {
    title: "2. Accommodation Inquiries",
    content: (
      <>
        <p>
          You may submit an inquiry with your contact details, preferred
          dates, guest count, property preference, and other relevant
          lodging information.
        </p>
        <p>
          Sending an inquiry does not reserve a property, guarantee
          availability, establish a rental agreement, or confirm a price.
          A stay is confirmed only after the applicable booking process
          has been completed and the required confirmation has been
          provided.
        </p>
        <p>
          Availability, minimum-stay requirements, rates, occupancy limits,
          and other conditions may vary by property and date.
        </p>
      </>
    ),
  },
  {
    title: "3. Reservations Through Vrbo",
    content: (
      <>
        <p>
          Where a reservation is made through Vrbo, the reservation is
          subject to the applicable Vrbo terms, the property listing,
          payment requirements, cancellation rules, and other conditions
          disclosed during booking.
        </p>
        <p>
          Please review the details displayed on the relevant booking
          platform before completing a reservation. The booking platform's
          confirmation and applicable terms govern that reservation.
        </p>
        <p>
          A general inquiry submitted through this website does not
          override the terms of a completed booking.
        </p>
        <a
          className="legal-inline-link"
          href="https://www.vrbo.com/1541225"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the Vrbo property listing
        </a>
      </>
    ),
  },
  {
    title: "4. Direct Booking Inquiries",
    content: (
      <>
        <p>
          If you contact the owner about a possible direct booking, the
          dates, property, rates, payment method, cancellation terms,
          deposit requirements, and other applicable conditions must be
          agreed and confirmed separately before the stay is considered
          booked.
        </p>
        <p>
          Do not assume that a property is reserved until you receive
          explicit confirmation and any required booking documentation
          or instructions.
        </p>
      </>
    ),
  },
  {
    title: "5. Property Information and Images",
    content: (
      <p>
        We aim to present property descriptions, photographs, amenities,
        locations, and other information accurately. Details may change,
        and individual residences or communities may have different
        amenities, rules, access arrangements, or restrictions. Please
        confirm important details before making a reservation.
      </p>
    ),
  },
  {
    title: "6. Medical Travel Disclaimer",
    content: (
      <>
        <p>
          Scottsdale Medical Stays provides accommodation information,
          not medical advice, healthcare services, or medical treatment.
          We do not assess whether a property is medically appropriate
          for an individual's condition or care plan.
        </p>
        <p>
          References to nearby hospitals, clinics, or healthcare
          facilities are provided for general location information only.
          Travel times depend on the property, destination, traffic,
          and time of day. Guests should verify routes and travel times
          for their own appointments.
        </p>
        <p>
          Guests are responsible for determining whether the accommodation
          meets their personal accessibility, mobility, equipment, and
          other lodging needs before booking.
        </p>
      </>
    ),
  },
  {
    title: "7. Guest Responsibilities",
    content: (
      <>
        <p>Guests are responsible for:</p>
        <ul>
          <li>Providing accurate information when making an inquiry or reservation.</li>
          <li>Reviewing and following the applicable property and community rules.</li>
          <li>Respecting occupancy limits, check-in instructions, and agreed stay dates.</li>
          <li>Using the accommodation responsibly and respecting neighbours.</li>
          <li>Reporting relevant property issues through the appropriate contact channel.</li>
        </ul>
        <p>
          Additional obligations may apply under the property listing,
          rental agreement, or booking platform terms.
        </p>
      </>
    ),
  },
  {
    title: "8. Payments, Cancellations, and Refunds",
    content: (
      <>
        <p>
          This website does not itself confirm a reservation or promise
          a particular refund or cancellation outcome.
        </p>
        <p>
          For Vrbo reservations, payment, cancellation, and refund
          conditions are determined by the applicable booking terms and
          property policy. For a direct booking, these terms must be
          communicated and agreed separately before the booking is
          finalized.
        </p>
        <p>
          Please refer to your actual reservation confirmation and
          applicable terms for the conditions that govern your stay.
        </p>
      </>
    ),
  },
  {
    title: "9. Website Use and Acceptable Conduct",
    content: (
      <>
        <p>
          You agree not to misuse this website, submit knowingly false
          inquiries, attempt unauthorized access, interfere with website
          operation, or use automated methods to send spam or malicious
          submissions.
        </p>
        <p>
          We may restrict or block access or submissions when reasonably
          necessary to protect the website, its users, or our business.
        </p>
      </>
    ),
  },
  {
    title: "10. Third-Party Websites",
    content: (
      <p>
        Links to Vrbo or other third-party websites are provided for
        convenience. We do not control those websites and are not
        responsible for their content, policies, or services. Your
        interactions with those providers are subject to their own
        applicable terms and policies.
      </p>
    ),
  },
  {
    title: "11. Liability and Website Availability",
    content: (
      <p>
        To the extent permitted by applicable law, website information
        is provided without a guarantee that it will always be complete,
        current, uninterrupted, or error-free. Nothing in these terms
        excludes or limits liability where such exclusion or limitation
        is prohibited by law. Rights and remedies under applicable
        law remain unaffected.
      </p>
    ),
  },
  {
    title: "12. Changes to These Terms",
    content: (
      <p>
        We may revise these Terms &amp; Conditions from time to time.
        Updated terms will be published on this page with a revised
        effective date where appropriate. The terms applicable to a
        confirmed reservation may also include separate booking or
        rental agreement conditions.
      </p>
    ),
  },
  {
    title: "13. Contact",
    content: (
      <>
        <p>
          For questions about these website terms or an accommodation
          inquiry, contact Scottsdale Medical Stays:
        </p>
        <p>
          Email:{" "}
          <a href="mailto:fayhartgroup@gmail.com">
            fayhartgroup@gmail.com
          </a>
          <br />
          Phone: <a href="tel:7732303800">773-230-3800</a>
        </p>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-container">
            <span className="legal-eyebrow">
              CLEAR EXPECTATIONS
            </span>

            <h1>Terms &amp; Conditions</h1>

            <p>
              Important information about using our website,
              accommodation inquiries, and reservation processes.
            </p>

            <div className="legal-meta">
              <span>SCOTTSDALE MEDICAL STAYS</span>
              <span className="legal-meta-divider" />
              <span>Effective October 10, 2026</span>
            </div>
          </div>
        </section>

        <section className="legal-content-section">
          <div className="legal-container legal-layout">
            <aside className="legal-sidebar">
              <span className="legal-sidebar-label">
                ON THIS PAGE
              </span>

              <nav aria-label="Terms and Conditions sections">
                {sections.map((section, index) => (
                  <a
                    href={`#terms-${index + 1}`}
                    key={section.title}
                  >
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </a>
                ))}
              </nav>

              <div className="legal-contact-card">
                <span>NEED MORE INFORMATION?</span>
                <a href="mailto:fayhartgroup@gmail.com">
                  Contact us
                </a>
              </div>
            </aside>

            <article className="legal-document">
              <div className="legal-introduction">
                <p>
                  These Terms &amp; Conditions apply to your use of the
                  Scottsdale Medical Stays website. By accessing or
                  using the website, you agree to these terms.
                </p>

                <p>
                  A property inquiry and a confirmed reservation are
                  separate steps. The conditions for an actual stay
                  may also be governed by the relevant booking platform
                  and any applicable rental agreement.
                </p>
              </div>

              {sections.map((section, index) => (
                <section
                  className="legal-section"
                  id={`terms-${index + 1}`}
                  key={section.title}
                >
                  <h2>{section.title}</h2>
                  {section.content}
                </section>
              ))}

              <div className="legal-contact-panel">
                <span className="legal-eyebrow">
                  SCOTTSDALE MEDICAL STAYS
                </span>

                <h2>Planning your stay?</h2>

                <p>
                  Contact us to discuss your preferred dates,
                  accommodation needs, and the next steps.
                </p>

                <a href="mailto:fayhartgroup@gmail.com">
                  fayhartgroup@gmail.com
                </a>

                <a href="tel:7732303800">
                  773-230-3800
                </a>
              </div>

              <p className="legal-disclaimer">
                These website terms are a general starting point,
                not a substitute for legal advice or a property-specific
                rental agreement. Have them reviewed for your actual
                booking practices and applicable law.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}