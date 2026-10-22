import { useState } from "react";
import { menu } from "../data/menu";
import ProductCard from "../components/ProductCard";
export default function Menu() {
  const [filter, setFilter] = useState("All");
  const items =
    filter === "All" ? menu : menu.filter((p) => p.category === filter);
  return (
    <div className="wrap page section">
      <div className="page-intro">
        <p className="eyebrow">BREWED, BAKED & MADE WITH CARE</p>
        <h1>
          Made for your
          <br />
          <em>everyday moments.</em>
        </h1>
        <p>
          From your morning espresso to an afternoon treat,
          <br className="desktop-break" /> find something worth slowing down
          for.
        </p>
      </div>
      <div
        className="filter-bar"
        role="group"
        aria-label="Filter menu by category"
      >
        {["All", "Coffee", "Cold Drinks", "Pastries"].map((c) => (
          <button
            key={c}
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="menu-count" role="status">
        {items.length}{" "}
        {filter === "All" ? "everyday favorites" : filter.toLowerCase()} · All
        prices in NOK
      </p>
      <div className="product-grid menu-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="menu-note">
        <h2>A little something for everyone.</h2>
        <p>
          Have a question about ingredients or allergens? Ask us before choosing
          your treat.
          <br />
          Milk alternatives are available. Our pastries may sell out as the day
          goes on.
        </p>
      </div>
    </div>
  );
}
