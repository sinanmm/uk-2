"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Icon from "./Icon";

const products = [
  { name: "Bianco White", finish: "Glossy Finish", size: "600 x 600 mm", colour: "white", image: "/images/tile-bianco.jpg" },
  { name: "Grey Stone", finish: "Matt Finish", size: "600 x 600 mm", colour: "grey", image: "/images/tile-grey-stone.jpg" },
  { name: "Crema Beige", finish: "Matt Finish", size: "600 x 600 mm", colour: "beige", image: "/images/tile-crema.jpg" },
  { name: "Dark Grey", finish: "Matt Finish", size: "600 x 600 mm", colour: "grey", image: "/images/tile-dark-grey.jpg" },
  { name: "Light Grey", finish: "Matt Finish", size: "600 x 900 mm", colour: "grey", image: "/images/tile-light-grey.jpg" },
  { name: "Marble White", finish: "Glossy Finish", size: "600 x 900 mm", colour: "white", image: "/images/tile-marble.jpg" },
  { name: "Sand Stone", finish: "Matt Finish", size: "800 x 800 mm", colour: "beige", image: "/images/tile-sand.jpg" },
  { name: "Anthracite", finish: "Matt Finish", size: "800 x 800 mm", colour: "black", image: "/images/tile-anthracite.jpg" }
];

const sizes = [
  { label: "300 x 300 mm", shape: "square small" },
  { label: "600 x 600 mm", shape: "square" },
  { label: "600 x 900 mm", shape: "portrait" },
  { label: "800 x 800 mm", shape: "square large" }
];

export default function ProductExplorer() {
  const [colour, setColour] = useState("all");
  const [finish, setFinish] = useState("all");
  const [sort, setSort] = useState("featured");
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState<string[]>([]);
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);

  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const colourMatch = colour === "all" || product.colour === colour;
      const finishMatch = finish === "all" || product.finish.toLowerCase().startsWith(finish);
      const queryMatch = product.name.toLowerCase().includes(query.toLowerCase());
      return colourMatch && finishMatch && queryMatch;
    });

    if (sort === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "size") result = [...result].sort((a, b) => a.size.localeCompare(b.size));
    return result;
  }, [colour, finish, sort, query]);

  function toggleFavourite(name: string) {
    setFavourites((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);
  }

  return (
    <>
      <section className="section size-section">
        <div className="container">
          <div className="section-title compact"><span/> <h2>Choose Your Size</h2> <span/></div>
          <div className="size-grid">
            {sizes.map((size) => (
              <button className="size-card" key={size.label} onClick={() => setQuery(size.label.split(" ")[0] === "600" ? "" : "") }>
                <span className={`tile-shape ${size.shape}`} />
                <strong>{size.label}</strong>
              </button>
            ))}
          </div>

          <div className="filter-row">
            <select value={colour} onChange={(event) => setColour(event.target.value)} aria-label="Filter by colour">
              <option value="all">All Colours</option>
              <option value="white">White</option>
              <option value="grey">Grey</option>
              <option value="beige">Beige</option>
              <option value="black">Black</option>
            </select>
            <select value={finish} onChange={(event) => setFinish(event.target.value)} aria-label="Filter by finish">
              <option value="all">All Finishes</option>
              <option value="matt">Matt Finish</option>
              <option value="glossy">Glossy Finish</option>
            </select>
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products">
              <option value="featured">Sort by</option>
              <option value="name">Name</option>
              <option value="size">Size</option>
            </select>
            <label className="search-field">
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tiles..." />
              <Icon name="search" size={20}/>
            </label>
          </div>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="section-title stacked"><h2>Our Tile Collection</h2><span/></div>
          <div className="product-grid">
            {filtered.map((product) => {
              const favourite = favourites.includes(product.name);
              return (
                <article className="product-card" key={product.name}>
                  <div className="product-image">
                    <Image src={product.image} alt={`${product.name} porcelain tile texture`} fill sizes="(max-width: 700px) 50vw, 25vw" />
                  </div>
                  <div className="product-info">
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.finish}</p>
                      <p>{product.size}</p>
                    </div>
                    <button className={`heart-button ${favourite ? "active" : ""}`} onClick={() => toggleFavourite(product.name)} aria-label={`Favourite ${product.name}`}>
                      <Icon name="heart" size={21}/>
                    </button>
                  </div>
                  <button className="product-button" onClick={() => setSelected(product)}>View Details</button>
                </article>
              );
            })}
          </div>
          {filtered.length === 0 && <div className="empty-state">No tiles match your selected filters.</div>}
        </div>
      </section>

      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <div className="product-modal" role="dialog" aria-modal="true" aria-label={`${selected.name} details`} onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details"><Icon name="close"/></button>
            <div className="modal-image"><Image src={selected.image} alt={selected.name} fill /></div>
            <div className="modal-copy">
              <span className="eyebrow">Premium Porcelain</span>
              <h2>{selected.name}</h2>
              <p>{selected.finish} · {selected.size}</p>
              <ul className="check-list">
                <li><Icon name="check" size={18}/>R11 anti-slip surface option</li>
                <li><Icon name="check" size={18}/>Weather, stain and frost resistant</li>
                <li><Icon name="check" size={18}/>Nationwide UK delivery available</li>
              </ul>
              <a className="button button-primary" href={`https://wa.me/447407048979?text=${encodeURIComponent(`Hello Pure Surface Solutions, I am interested in ${selected.name}.`)}`} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18}/> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
