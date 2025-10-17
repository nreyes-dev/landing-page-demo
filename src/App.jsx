import React from "react";
import "./global.scss";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <ContactForm />
    </>
  );
}

export default App;
