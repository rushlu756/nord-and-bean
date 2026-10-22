import { Link } from "react-router-dom";
import { Coffee, Croissant, Armchair, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
export default function About() {
  return (
    <>
      <section className="wrap section page">
        <div className="page-intro">
          <p className="eyebrow">HELLO, WE'RE NORD & BEAN</p>
          <h1>
            A place to <em>slow down.</em>
          </h1>
          <p>Good coffee, simple food, and room to feel at home.</p>
        </div>
        <div className="split story">
          <img
            className="editorial-image"
            src="/images/cafe-interior.jpg"
            alt="Wooden tables and comfortable seating in a small café"
            width="900"
            height="760"
          />
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2>
              Small beginnings.
              <br />
              Everyday moments.
            </h2>
            <p>
              NORD & BEAN began with a wish for the kind of place we'd like to
              spend our own mornings: somewhere friendly, unhurried, and filled
              with the smell of fresh coffee.
            </p>
            <p>
              Our little Oslo coffee shop is built around simple things. A
              carefully made cup. Something warm from the oven. A familiar face
              behind the counter. We keep the menu small so we can give those
              things the attention they deserve.
            </p>
            <p>
              Whether you're on your way to work or have an afternoon to
              yourself, we hope you'll find a little pause in your day here.
            </p>
          </div>
        </div>
      </section>
      <section className="values section">
        <div className="wrap">
          <p className="eyebrow">THE THINGS WE COME BACK TO</p>
          <h2>What matters to us</h2>
          <div className="values-grid">
            {[
              [
                Coffee,
                "Thoughtfully Made Coffee",
                "From the first grind to the final pour, we take time over each cup. Simple, balanced coffee you can look forward to.",
              ],
              [
                Croissant,
                "Fresh Everyday Favorites",
                "Flaky pastries, soft buns, and familiar flavors. The little things that make a coffee break feel complete.",
              ],
              [
                Armchair,
                "A Welcoming Space",
                "Come alone, bring a friend, stay a while. A friendly hello and a comfortable seat are part of the experience.",
              ],
            ].map(([Icon, title, copy]) => (
              <ScrollReveal key={title}>
                <Icon size={30} strokeWidth={1.2} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LITTLE GLIMPSES OF OUR DAY</p>
            <h2>Life at NORD & BEAN</h2>
          </div>
          <p>The coffee, the corners, the quiet in between.</p>
        </div>
        <div className="gallery">
          {[
            [
              "coffee-preparation",
              "Coffee being carefully prepared at the espresso machine",
            ],
            ["cinnamon-bun", "A freshly baked cinnamon bun"],
            ["cafe-seating", "A cozy corner to sit and enjoy a coffee"],
          ].map(([id, alt]) => (
            <img
              key={id}
              src={`/images/${id}.jpg`}
              alt={alt}
              loading="lazy"
              width="700"
              height="800"
            />
          ))}
        </div>
        <div className="center about-cta">
          <h2>Come as you are.</h2>
          <p>We'd love to make you a coffee.</p>
          <Link className="button" to="/contact">
            Come Say Hello <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
