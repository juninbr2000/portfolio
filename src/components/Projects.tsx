import { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [projects, setProjects] = useState([])

  const GetProjects = async () => {
    try{
      const res = await fetch(`${import.meta.env.BASE_URL}projects.json`)

      const data = await res.json()

      console.log(data)
      setProjects(data)
    } catch (error){
      console.error( error )
    }
  }

  useEffect(() => {
    GetProjects()
  }, []);

  return (
    <div className={styles.container} id='projetos'>
      <h1 className={styles.section_title}>Meus Projetos</h1>

      {projects ? projects.map((proj: any) => (
        <div className={`${styles.card} ${styles[proj.name]}`} key={proj.id}>
          <div className={styles.image}>
            <img src={`${import.meta.env.BASE_URL}${proj.imagem}`} alt={proj.title} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{proj.title}</h2>
            <p>{proj.description}</p>

            <div className={styles.tecnologia}>
              <p>Tecnologias usadas:</p>
              <div className={styles.icons}>
              {proj.icons ? proj.icons.map((icon: any) => (
                <img src={`${import.meta.env.BASE_URL}/${icon.icon}`} alt={icon.name} />
              )) : null}
              </div>
            </div>

            <div className={styles.button_container}>
              <a href={proj.preview} target='_blanck' rel='noopener noreferrer' className='primary'>Deploy <FaArrowRight /></a>
              {proj.repositorio ? <a href={proj.repositorio} target='_blanck' rel='noopener noreferrer' className='primary'>Código <FaGithub /></a> : null }
            </div>
          </div>
        </div>
      )) : (
        <p>Erro ao buscar Projetos</p>
      )}

      <a href="https://github.com/juninbr2000" target='_blanck' rel='noopener noreferrer' className='primary'>Veja Mais no GitHub <FaGithub /></a>
    </div>
  );
}
