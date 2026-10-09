import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Cookie Policy | Scottsdale Medical Stays",
  description:
    "Learn how Scottsdale Medical Stays uses cookies and similar technologies on its website and how you can manage your preferences.",
};

const sections = [
  {
    title: "1. What Are Cookies?",
    content: (
      <p>
        Cookies are small text files stored on your device when you visit
        a website. They help websites remember certain information,
        maintain functionality, improve security, and understand how
        visitors use a website. Similar technologies may also be used
        for related purposes.
      </p>
    ),
  },
  {
    title: "2. How We May Use Cookies",
    content: (
      <>
        <p>
          Scottsdale Medical Stays may use cookies or similar technologies
          for the following purposes, depending on which website features
          and services are enabled:
        </p>

        <ul>
          <li>
            <strong>Essential functionality:</strong> Supporting website
            operation, security, and features necessary to deliver a
            requested service.
          </li>
          <li>
            <strong>Preferences:</strong> Remembering settings or choices
            where these features are implemented.
          </li>
          <li>
            <strong>Analytics:</strong> Understanding website visits and
            usage patterns if an analytics service is configured.
          </li>
          <li>
            <strong>Advertising and marketing:</strong> Measuring
            advertising or personalizing marketing if such services are
            implemented and permitted by applicable law.
          </li>
        </ul>

        <p>
          Not all of these cookie categories are necessarily used on
          this website. Actual cookie use depends on the technologies
          and third-party services that are enabled.
        </p>
      </>
    ),
  },
  {
    title: "3. Essential Cookies",
    content: (
      <p>
        Some cookies or similar technologies may be needed for basic
        website functions, security, or features you request. Where a
        cookie is strictly necessary, applicable law may allow it to be
        used without consent. We will seek consent where required by law.
      </p>
    ),
  },
  {
    title: "4. Analytics and Performance Cookies",
    content: (
      <p>
        If analytics tools are enabled, they may collect information
        such as pages visited, approximate usage patterns, browser
        information, and interactions with the website. We use such
        information to understand website performance and improve the
        visitor experience. Non-essential analytics cookies will be
        handled according to applicable consent requirements.
      </p>
    ),
  },
  {
    title: "5. Third-Party Cookies",
    content: (
      <>
        <p>
          Some website features may link to or use services provided by
          third parties. For example, visitors may follow a link to a
          third-party booking platform such as Vrbo.
        </p>

        <p>
          Third-party websites may use their own cookies and tracking
          technologies under their own policies. Their practices are
          not controlled by this Cookie Policy. Please review the
          relevant provider's privacy and cookie information when
          visiting its website.
        </p>

        <p>
          A link to an external website does not necessarily mean that
          the external provider sets cookies on our website.
        </p>
      </>
    ),
  },
  {
    title: "6. Managing Cookies",
    content: (
      <>
        <p>
          You can usually manage or delete cookies through your browser's
          settings. Depending on your browser, you may be able to block
          all cookies, block selected cookies, or delete cookies that
          have already been stored.
        </p>

        <p>
          Blocking essential cookies may affect certain website features.
          Browser settings also do not necessarily provide a complete
          way to manage every type of tracking technology.
        </p>

        <p>
          Where applicable law requires consent for non-essential
          cookies, those cookies should not be activated before the
          required consent is obtained.
        </p>
      </>
    ),
  },
  {
    title: "7. Your Privacy Choices",
    content: (
      <p>
        Depending on where you live and the laws that apply, you may
        have rights relating to personal information collected through
        cookies and similar technologies. These may include rights to
        access, delete, or object to certain processing. You can contact
        us if you have questions about your privacy choices.
      </p>
    ),
  },
  {
    title: "8. Changes to This Cookie Policy",
    content: (
      <p>
        We may update this Cookie Policy when our website features,
        technology, or legal obligations change. Any updated version
        will be published on this page. Please review this page
        periodically for changes.
      </p>
    ),
  },
  {
    title: "9. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Cookie Policy or how
          information is handled on our website, contact Scottsdale
          Medical Stays:
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

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <main className="legal-page cookie-policy-page">
        <section className="legal-hero">
          <div className="legal-container">
            <span className="legal-eyebrow">
              YOUR PRIVACY MATTERS
            </span>

            <h1>Cookie Policy</h1>

            <p>
              Learn about cookies, similar technologies, and the choices
              available when visiting Scottsdale Medical Stays online.
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

              <nav aria-label="Cookie Policy sections">
                {sections.map((section, index) => (
                  <a
                    href={`#cookie-${index + 1}`}
                    key={section.title}
                  >
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </a>
                ))}
              </nav>

              <div className="legal-contact-card">
                <span>COOKIE OR PRIVACY QUESTION?</span>
                <a href="mailto:fayhartgroup@gmail.com">
                  Contact us
                </a>
              </div>
            </aside>

            <article className="legal-document">
              <div className="legal-introduction">
                <p>
                  This Cookie Policy explains how cookies and similar
                  technologies may be used on the Scottsdale Medical
                  Stays website.
                </p>

                <p>
                  The cookies actually used depend on the features and
                  third-party services configured on the website. This
                  policy should be kept up to date with those services
                  and the applicable privacy requirements.
                </p>
              </div>

              {sections.map((section, index) => (
                <section
                  className="legal-section"
                  id={`cookie-${index + 1}`}
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

                <h2>Questions about cookies?</h2>

                <p>
                  Contact us if you have questions about privacy,
                  cookies, or the technologies used on our website.
                </p>

                <a href="mailto:fayhartgroup@gmail.com">
                  fayhartgroup@gmail.com
                </a>

                <a href="tel:7732303800">
                  773-230-3800
                </a>
              </div>

              <p className="legal-disclaimer">
                This policy is a general informational draft. Confirm
                the actual cookies and tracking technologies used on
                the website before publishing it as a final policy.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}