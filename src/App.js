import React, { useContext, useEffect, useState } from "react";

// Components
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AboutMe from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

import { ThemeContext } from "./Context/Theme";
import { projects } from "./data/data";

import { Helmet } from "react-helmet-async";

import "./App.css";
//mockData
const scrollReveal = () => {
  var revealPoint = 150;
  var revealElement = document.querySelectorAll(".demo");
  for (var i = 0; i < revealElement.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = revealElement[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      revealElement[i].classList.add("active");
    } else {
      revealElement[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", scrollReveal);
scrollReveal();
const navRoute = [
  {
    label: "home",
    value: "Accueil",
  },
  {
    label: "about",
    value: "À propos",
  },
  {
    label: "skills",
    value: "Compétences",
  },
  {
    label: "projects",
    value: "Projets",
  },
  {
    label: "contact",
    value: "Contacte",
  },
];

function App() {
  const currentYear = new Date().getFullYear();
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <Helmet>
        <title>Portfolio Michel YAM</title>
        <meta
          name="description"
          content="Michel YAM, développeur web"
          data-react-helmet="true"
        />
      </Helmet>
      <Header navRoute={navRoute} />
      <div className="content">
        <main className="fill-height">
          <section id="hero" className="section section-hero">
            <Hero />
          </section>
          <section id="about" className="section section-about">
            <AboutMe />
          </section>
          {/* <section id="skills" className="section section-skills">
            <Skills />
          </section> */}
          <section id="projects" className="section section-projects">
            <Projects projects={projects} />
          </section>
          <section id="contact" className="section section-contact">
            <Contacts />
          </section>
        </main>
      </div>
      <Footer year={currentYear} />
    </div>
  );
}

export default App;
