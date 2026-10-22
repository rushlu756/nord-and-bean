import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Coffee } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";
import { menu } from "../data/menu";

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            YOUR NEIGHBORHOOD COFFEE SPOT
          </p>
          <h1>
            Your daily
            <br />
            coffee <em>ritual.</em>
          </h1>
          <p className="hero-description">
            Freshly brewed coffee, homemade pastries, and a little space to slow
            down in the heart of Oslo.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/menu">
              Explore Our Menu <ArrowRight size={17} />
            </Link>
            <Link className="text-link" to="/about">
              Discover Our Story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-footnote">
            <Coffee size={19} strokeWidth={1.3} />
            <span>Good coffee. A slower kind of day.</span>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src="/images/coffee-and-pastry.jpg"
            alt="Coffee and a golden croissant on a round café table"
            width="1100"
            height="1100"
            fetchPriority="high"
          />
          <div className="photo-caption">
            <span>A LITTLE MOMENT, JUST FOR YOU</span>
            <span>Oslo, Norway ↗</span>
          </div>
        </div>
      </section>
      <div className="intro-strip">
        <span>Thoughtfully brewed</span>
        <span className="dot">·</span>
        <span>Freshly baked</span>
        <span className="dot">·</span>
        <span>Always welcoming</span>
      </div>
      <section className="section wrap">
        <ScrollReveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE EVERYDAY GOOD STUFF</p>
              <h2>A few of our favorites</h2>
            </div>
            <p>
              Familiar comforts, made with care.
              <br />
              Find your usual, or try something new.
            </p>
          </div>
          <div className="product-grid">
            {[menu[2], menu[5], menu[10]].map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="center">
            <Link className="button outline" to="/menu">
              View Full Menu <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
      <section className="about-preview">
        <div className="wrap split">
          <ScrollReveal>
            <img
              className="editorial-image"
              src="/images/cafe-interior.jpg"
              alt="A welcoming neighborhood café with warm wooden furniture"
              loading="lazy"
              width="900"
              height="760"
            />
          </ScrollReveal>
          <ScrollReveal className="editorial-copy">
            <p className="eyebrow">A SMALL PLACE WITH A BIG WELCOME</p>
            <h2>
              A little coffee.
              <br />A lot of care.
            </h2>
            <p>
              We're a small, independent coffee shop with a simple idea: a good
              cup of coffee and a welcoming place can make an ordinary day a
              little better.
            </p>
            <p>
              Drop in for your morning brew, linger over a warm bun, or take a
              quiet moment by the window. There's a seat for you here.
            </p>
            <Link className="text-link" to="/about">
              Get to know us <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <section className="visit wrap section">
        <div>
          <p className="eyebrow">MAKE YOURSELF AT HOME</p>
          <h2>See you over coffee.</h2>
          <p>A quiet corner of Oslo. A warm cup waiting for you.</p>
          <Link className="button" to="/contact">
            Plan Your Visit <ArrowRight size={16} />
          </Link>
        </div>
        <div className="visit-details">
          <div>
            <MapPin strokeWidth={1.4} />
            <div>
              <h3>Find our little corner</h3>
              <p>Example Street 12, Oslo, Norway</p>
              <small>Placeholder address · fictional business</small>
            </div>
          </div>
          <div>
            <Clock strokeWidth={1.4} />
            <div>
              <h3>Come by when it suits you</h3>
              <p>
                Monday–Friday · 08:00–18:00
                <br />
                Saturday–Sunday · 09:00–17:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
