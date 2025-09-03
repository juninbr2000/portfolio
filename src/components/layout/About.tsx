import styles from './About.module.css'

type AboutProps = {
  id: string;
};

function About({id}: AboutProps) {

  return (
    <section className={styles.container} id={id} >
      <h2 data-aos="fade-up">Sobre Mim</h2>
      <p data-aos="fade-up">
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

      <a href="#" className='primary' data-aos="fade-up">Baixar Curriculo</a>
    </section>
  )
}

export default About