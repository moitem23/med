export default function Footer() {
  return (
<footer className="site-footer">
  <div className="footer-main">

    {/* Logo + Description */}
    <div className="footer-brand">
      <img
        src="/logo.png"
        alt="Scottsdale Medical Stays"
      />

      <p>
        Comfortable, furnished stays designed for
        medical travelers, extended visits and anyone
        looking for a peaceful home away from home.
      </p>
    </div>


    {/* Horizontal Menu */}
    <div className="footer-navigation">
      <nav>
        <a href="#properties">Our Properties</a>
        <a href="#medical-stays">Medical Stays</a>
        <a href="/about-us">About Us</a>
        <a href="#reviews">Guest Reviews</a>
        <a href="#faq">FAQ</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms &amp; Conditions</a>
        <a href="/cookie-policy">Cookie Policy</a>
      </nav>
    </div>


    {/* Tagline */}
    <div className="footer-tagline">
      <p>
        A calmer place to stay
        <br />
        <em>while care comes first.</em>
      </p>
    </div>

  </div>


  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} Scottsdale Medical Stays.
      All rights reserved.
    </p>

    <div className="footer-legal">
      Design By{" "}
      <a
        href="https://beetemp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Beetemp
      </a>
    </div>
  </div>
</footer>
  );
}