import { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import { FaGithub } from 'react-icons/fa';
import ProjectsCarousel from '../utils/ProjctsCarrosseul';

interface projectProps {
  id: string
}

export default function Projects({id}: projectProps) {
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
    <div className={styles.container} id={id}>

      <h2 data-aos="fade-up">Meus Projetos</h2>   
  
      <ProjectsCarousel projects={projects} />

      <a href="https://github.com/juninbr2000" target='_blanck' rel='noopener noreferrer' className='primary white' data-aos="fade-up">Veja Mais no GitHub <FaGithub /></a>
    </div>
  );
}
