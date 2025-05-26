import React from 'react'
import styles from './About.module.css'

function About() {

  const [habilidade, setHabilidade] = React.useState([])
  const categorias = ["Linguagens", "Front-End", "Back-End", "Ferramentas"];

  const getData = async () => {
    const res = await fetch('../../skil.json')

    const data = await res.json()
    setHabilidade(data)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.me}>
        <h1 className={styles.title}>Deixe me apresentar</h1>
        <p className={styles.text}>
          Sou desenvolvedor front-end, apaixonado por criar interfaces modernas e funcionais. Gosto de transformar ideias em experiências interativas e estou sempre em busca de novos aprendizados.
        </p>
        <p className={styles.text}>
          Minha jornada no desenvolvimento começou em 2022 e, desde então, venho me surpreendendo com o que é possível construir com apenas algumas linhas de código.
        </p>
      </div>
      <div className={styles.container_items}>
        <h1 className={styles.title}>Minhas habilidades</h1>
        <div className={styles.card_container}>

        {categorias.map((categoria: any) => (
      <div key={categoria} className={styles.categoria}>
        <h2>{categoria}</h2>
        <div className={styles.grid}>
          {habilidade
            .filter((skill: any) => skill.category === categoria)
            .map((skill: any, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.iconContainer}>
                  <img src={`/${skill.icon}`} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
        </div>
      </div>
    ))}

        </div>
      </div>
    </section>
  )
}

export default About