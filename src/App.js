// Components
import Header from './Components/Header';
import AboutMe from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

import { projects, skills } from './data/data'
import './App.css';
//mockData
function scrollReveal() {
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
      <Header />
      <main>
        <section className="section section-about">
          <AboutMe />
        </section>
        <section className='section section-skills'>
          <Skills />
        </section>
        <section className="section section-projects">
          <Projects projects={projects} />
        </section>
        <section className="section section-contact">
          <Contacts />
        </section>
      </main>
      <Footer year={currentYear} />
    </>
  );
}

export default App;
