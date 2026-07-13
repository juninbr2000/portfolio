import { useEffect } from 'react'
import './App.css'
import Location from './Components/Location/Location'
import Navbar from './Components/Navbar/Navbar'
import Aboult from './Screen/Aboult/Aboult'
import Header from './Screen/Header/Header'
import PreProjects from './Screen/PreProjects/PreProjects'
import Projects from './Screen/Projects/Projects'
import Lenis from 'lenis'
import Skills from './Screen/Skills/Skills'

function App() {

   useEffect(() => {

    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);


  return (
    <>
      <Navbar />
      <Location />
      <Header />
      <Aboult />
      <PreProjects />
      <Projects />
      <Skills />
    </>
  )
}

export default App
