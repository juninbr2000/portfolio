import { useEffect } from 'react'
import './App.css'
import About from './components/layout/About'
import Contacts from './components/layout/Contacts'
import Fotter from './components/layout/Fotter'
import Header from './components/layout/Header'
import Midia from './components/layout/Midia'
import Projects from './components/layout/Projects'
import AOS from 'aos'
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    const circle = document.querySelector<HTMLDivElement>(".circle");

    if (!circle) return; 

    // Calcula a diagonal da tela
    const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) * 1.1;
    const initialSize = 100; 
    const maxScale = diagonal / initialSize;

    const handleScroll = () => {
      const sobre = document.getElementById("sobre");
      const projects = document.getElementById("projects");

      if (!sobre || !projects) return;

      const scrollTop = window.scrollY;
      const start = sobre.offsetTop + sobre.offsetHeight / 2;
      const end = projects.offsetTop;

      let progress = (scrollTop - start) / (end - start);
      progress = Math.min(Math.max(progress, 0), 1);

      const scale = 1 + progress * (maxScale - 1); 
      circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useEffect(() => {
    AOS.init({
      duration: 1000,     
    });
  }, []);

  return (
    <>
      <Midia />
      <Header />
      <About id='sobre'/>
      <div className='circle'></div>
      <Projects id='projects' />
      <Contacts />
      <Fotter />
    </>
  )
}

export default App
