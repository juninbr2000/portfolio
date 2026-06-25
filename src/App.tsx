import './App.css'
import Navbar from './Components/Navbar/Navbar'
import WordsScroll from './Components/WordsScroll/WordsScroll'
import Aboult from './Screen/Aboult/Aboult'
import Header from './Screen/Header/Header'
import Projects from './Screen/Projects/Projects'
import Skills from './Screen/Skills/Skills'


function App() {

  return (
    <>

      <Navbar /> 
      <Header />
      <WordsScroll />
      <Aboult />
      <Skills />
      <Projects />
    </>
  )
}

export default App
