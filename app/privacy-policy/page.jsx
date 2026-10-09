import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | Scottsdale Medical Stays",
  description:
    "Learn how Scottsdale Medical Stays collects, uses, and protects personal information submitted through our website.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you contact us or submit a stay inquiry, we may collect
          information such as:
        </p>
        <ul>
          <li>Your name and email address.</li>
          <li>Your phone number, if you provide it.</li>
          <li>Your preferred arrival and departure dates.</li>
          <li>The number of guests and your preferred property.</li>
          <li>
            Your message and any lodging-related requests you choose to
            share.
          </li>
        </ul>
        <p>
          Please do not submit diagnoses, treatment plans, medical records,
          or other sensitive medical information through our website.
          We only need the lodging details necessary to respond to your
          inquiry.
        </p>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We may use the information you provide to:</p>
        <ul>
          <li>Respond to questions and accommodation inquiries.</li>
          <li>Check potential property availability and suitability.</li>
          <li>Communicate about your requested dates and stay requirements.</li>
          <li>Coordinate the next steps for a potential reservation.</li>
          <li>Protect the website and help prevent spam or fraudulent submissions.</li>
        </ul>
        <p>
          Submitting an inquiry does not automatically create a reservation.
        </p>
      </>
    ),
  },
  {
    title: "3. How Information Is Shared",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share information
          when reasonably necessary to respond to your request, coordinate a
          reservation, operate our website, or comply with applicable law.
        </p>
        <p>
          If you proceed with a booking through Vrbo or another booking
          platform, that platform processes information under its own
          privacy policy and terms. Information you provide directly to
          another platform is not governed solely by this policy.
        </p>
        <p>
          Website hosting, email delivery, spam prevention, and other
          technical service providers may process information on our behalf
          to support website operations.
        </p>
      </>
    ),
  },
  {
    title: "4. Email and Contact Forms",
    content: (
      <>
        <p>
          Information submitted through our contact form may be delivered
          to our designated email account so that we can respond to your
          inquiry. Please ensure your email address is correct when
          submitting a request.
        </p>
        <p>
          Email is not guaranteed to be completely secure. Avoid sending
          passwords, payment card details, medical records, or other
          sensitive information through our contact form or ordinary email.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies and Website Technologies",
    content: (
      <>
        <p>
          Our website or its service providers may use cookies or similar
          technologies for essential functionality, security, performance,
          or analytics, where enabled.
        </p>
        <p>
          The technologies in use depend on the services configured on
          the website. You can manage cookies through your browser settings.
          Disabling certain cookies may affect some website features.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Retention and Security",
    content: (
      <>
        <p>
          We retain inquiry information for as long as reasonably necessary
          to respond to requests, manage potential reservations, maintain
          relevant business records, address disputes, and meet legal
          obligations.
        </p>
        <p>
          We use reasonable measures intended to protect information from
          unauthorized access, loss, or misuse. However, no website,
          email system, or internet transmission can be guaranteed
          completely secure.
        </p>
      </>
    ),
  },
  {
    title: "7. Your Privacy Choices",
    content: (
      <>
        <p>
          Depending on applicable law, you may have rights to request
          access to, correction of, or deletion of certain personal
          information. You may contact us to ask about information
          associated with your inquiry.
        </p>
        <p>
          Some information may need to be retained where required by law
          or for legitimate business and recordkeeping purposes.
        </p>
      </>
    ),
  },
  {
    title: "8. Third-Party Websites",
    content: (
      <p>
        Our website may link to Vrbo or other third-party websites. We do
        not control their privacy practices, content, or security.
        Please review the applicable privacy policy before providing
        personal information on an external website.
      </p>
    ),
  },
  {
    title: "9. Children's Privacy",
    content: (
      <p>
        Our website is intended for adults making accommodation inquiries.
        Please do not submit a child's personal information through the
        website unless it is necessary for a legitimate accommodation
        request and you are authorized to provide it.
      </p>
    ),
  },
  {
    title: "10. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy when our practices, services,
        or legal obligations change. The updated version will be published
        on this page with a revised effective date where appropriate.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-container">
            <span className="legal-eyebrow">
              YOUR PRIVACY MATTERS
            </span>

            <h1>Privacy Policy</h1>

            <p>
              How we handle the information you share when exploring
              a stay with Scottsdale Medical Stays.
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

              <nav aria-label="Privacy Policy sections">
                {sections.map((section, index) => (
                  <a
                    href={`#privacy-${index + 1}`}
                    key={section.title}
                  >
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </a>
                ))}
              </nav>

              <div className="legal-contact-card">
                <span>QUESTIONS ABOUT PRIVACY?</span>
                <a href="mailto:fayhartgroup@gmail.com">
                  Contact us
                </a>
              </div>
            </aside>

            <article className="legal-document">
              <div className="legal-introduction">
                <p>
                  Scottsdale Medical Stays respects your privacy. This
                  policy explains how information may be collected,
                  used, stored, and shared when you visit our website
                  or contact us about a potential stay.
                </p>

                <p>
                  By using the website, you acknowledge this policy.
                  Where consent is legally required for a particular
                  activity, we will seek that consent as applicable.
                </p>
              </div>

              {sections.map((section, index) => (
                <section
                  className="legal-section"
                  id={`privacy-${index + 1}`}
                  key={section.title}
                >
                  <h2>{section.title}</h2>
                  {section.content}
                </section>
              ))}

              <div className="legal-contact-panel">
                <span className="legal-eyebrow">
                  GET IN TOUCH
                </span>

                <h2>Have a privacy question?</h2>

                <p>
                  Contact us if you have a question about information
                  you submitted through our website.
                </p>

                <a href="mailto:fayhartgroup@gmail.com">
                  fayhartgroup@gmail.com
                </a>

                <a href="tel:7732303800">
                  773-230-3800
                </a>
              </div>

              <p className="legal-disclaimer">
                This policy is general website privacy information,
                not legal advice. It should be reviewed against the
                actual services and legal requirements applicable
                to your business.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}