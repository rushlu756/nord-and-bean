export default function ProductCard({ product: p }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          width="700"
          height="520"
        />
      </div>
      <div className="product-info">
        <div>
          <h3>{p.name}</h3>
          <span>{p.price} NOK</span>
        </div>
        <p>{p.description}</p>
      </div>
    </article>
  );
}
