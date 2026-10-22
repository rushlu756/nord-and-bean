import { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
const metadata = {
  "/": [
    "Coffee & slow moments",
    "Freshly brewed coffee, homemade pastries, and a little space to slow down in Oslo. A fictional café portfolio concept.",
  ],
  "/menu": [
    "Our Menu",
    "Explore 15 coffee, cold drink, and pastry favorites at NORD & BEAN. Prices in NOK.",
  ],
  "/about": [
    "Our Story",
    "Meet the idea behind NORD & BEAN, a fictional independent neighborhood café in Oslo.",
  ],
  "/contact": [
    "Come Say Hello",
    "Opening hours and a demonstration contact form for NORD & BEAN, a fictional Oslo café.",
  ],
};
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = metadata[pathname] || [
      "Page not found",
      "This page could not be found.",
    ];
    document.title = `${title} | NORD & BEAN`;
    document.querySelector('meta[name="description"]').content = description;
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="wrap section">
                <h1>A little lost?</h1>
                <p>That page isn't here. Let's get you back to coffee.</p>
                <Link className="button" to="/">
                  Back to Home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
