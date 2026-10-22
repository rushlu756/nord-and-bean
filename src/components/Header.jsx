import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header wrap">
      <Link className="wordmark" to="/" aria-label="NORD & BEAN home">
        <Coffee strokeWidth={1.35} />
        <span>
          NORD <i>&</i> BEAN<small>OSLO · COFFEE & SLOW MOMENTS</small>
        </span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="main-nav"
        className={open ? "nav open" : "nav"}
        aria-label="Main navigation"
      >
        {[
          ["/", "Home"],
          ["/menu", "Menu"],
          ["/about", "About Us"],
          ["/contact", "Contact"],
        ].map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"}>
            {label}
          </NavLink>
        ))}
        <span className="nav-note">A little pause, in Oslo.</span>
      </nav>
    </header>
  );
}
