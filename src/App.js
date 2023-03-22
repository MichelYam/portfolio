// Components
import Header from './Components/Header';
import AboutMe from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

import { projects } from './data/data'

import { Helmet } from 'react-helmet-async';

import './App.css';
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
}

window.addEventListener("scroll", scrollReveal);
scrollReveal();


function App() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <Helmet>
        <title>Portfolio Michel YAM</title>
        <meta name='description' content='Michel YAM, développeur web' data-react-helmet="true" />
      </Helmet>
      <Header />
      <main>
        <section id='about' className="section section-about">
          <AboutMe />
        </section>
        <section id='skills' className='section section-skills'>
          <Skills />
        </section>
        <section id='projects' className="section section-projects">
          <Projects projects={projects} />
        </section>
        <section id='contact' className="section section-contact">
          <Contacts />
        </section>
      </main>
      <Footer year={currentYear} />
    </>
  );
}

export default App;
