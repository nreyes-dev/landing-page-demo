import React from "react";
import { Icon } from "@iconify/react";
import "./Features.scss";

const FEATURES = [
  { icon: "mdi:flash",        title: "Blazing Fast",   description: "Optimized rendering and assets for snappy load times." },
  { icon: "mdi:shield-check", title: "Secure by Design", description: "Best practices and sensible defaults to protect your data." },
  { icon: "mdi:puzzle",       title: "Composable",     description: "Modular components that scale as your product grows." },
];

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="features__title">Features</h2>
        <div className="features__grid" role="list">
          {FEATURES.map((f) => (
            <article className="feature-card" role="listitem" key={f.title}>
              <div className="feature-card__icon" aria-hidden="true">
                <Icon icon={f.icon} width="28" height="28" />
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__description">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
