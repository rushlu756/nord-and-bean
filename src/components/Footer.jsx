import { Link } from "react-router-dom";
import { business as b } from "../data/business";
export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Link className="footer-brand" to="/">
            NORD & BEAN
          </Link>
          <p>
            Good coffee. Slow mornings.
            <br />
            Simple moments.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h2>Visit us</h2>
          <p>
            {b.address}
            <br />
            {b.location}
          </p>
          <a href={`mailto:${b.email}`}>{b.email}</a>
          <small>Fictional address · portfolio concept</small>
        </div>
        <div>
          <h2>Opening hours</h2>
          <p>
            Mon–Fri: {b.weekdays}
            <br />
            Sat–Sun: {b.weekends}
          </p>
          <span className="footer-welcome">There's always time for a cup.</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 NORD & BEAN.</span>
        <span>Portfolio concept — fictional business.</span>
      </div>
    </footer>
  );
}
