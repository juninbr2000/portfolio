import React from 'react'
import styles from './About.module.css'
import { FaDownload } from 'react-icons/fa';

function About() {

  const [habilidade, setHabilidade] = React.useState([])
  const categorias = ["Linguagens", "Front-End", "Back-End", "Ferramentas"];

  const getData = async () => {
    const res = await fetch(`${import.meta.env.BASE_URL}skil.json`);

    const data = await res.json()
    setHabilidade(data)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <section className={styles.container} id='sobre'>
      <h2>Sobre Mim</h2>
      <p>
        Meu nome é Edson Gentil Junior, e 
        iniciei minha jornada na 
        programação em 2022. Desde 
        então, venho explorando diferentes
        tecnologias, desenvolvendo 
        projetos práticos e aprimorando 
        minhas habilidades para criar 
        soluções funcionais e bem 
        estruturadas. Tenho interesse 
        especial em desenvolvimento web 
        e busco constantemente evoluir 
        tanto em código quanto em design.
      </p>

      <a href="#" className='primary'>Baixar Curriculo</a>
    </section>
  )
}

export default About