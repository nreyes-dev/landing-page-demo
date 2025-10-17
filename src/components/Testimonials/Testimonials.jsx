import React, { useRef, useState } from "react";
import "./Testimonials.scss";

const TESTIMONIALS = [
  { name: "Alex P.",   quote: "Clean, fast, and exactly what we needed." },
  { name: "Samira K.", quote: "Delightful UX and super simple to use." },
  { name: "Diego R.",  quote: "Great support and modern features out of the box." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches?.[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    const startX = touchStartX.current;
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    if (startX == null || endX == null) return;

    const delta = endX - startX;
    const THRESHOLD = 40; // px
    if (Math.abs(delta) >= THRESHOLD) {
      // swipe left => next, swipe right => prev
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const { name, quote } = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="testimonials section section--alt">
      <div className="container">
        <h2 className="testimonials__title">What People Say</h2>

        {/* Carousel: mobile-first layout with desktop enhancement */}
        <div
          className="testimonials__carousel"
          role="region"
          aria-label="Testimonials carousel"
        >
          <button
            className="carousel-btn prev"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            ◀ Prev
          </button>

          <figure
            className="testimonial"
            aria-live="polite"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <blockquote className="testimonial__quote">“{quote}”</blockquote>
            <figcaption className="testimonial__author">— {name}</figcaption>
          </figure>

          <button
            className="carousel-btn next"
            onClick={next}
            aria-label="Next testimonial"
          >
            Next ▶
          </button>
        </div>
      </div>
    </section>
  );
}
