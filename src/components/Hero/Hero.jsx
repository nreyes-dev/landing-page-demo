import React from "react";
import "./Hero.scss";

export default function Hero() {
  const handleGetStarted = () => {
    // Smooth scroll to the contact section if it exists
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="hero" role="banner" aria-label="Welcome section">
      <div className="hero__inner">
        <h1 className="hero__title">Welcome to Our Service</h1>
        <p className="hero__subtitle">Your solution for modern web experiences</p>
        <button className="hero__cta" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </header>
  );
}
