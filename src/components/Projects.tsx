import { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projects, setProjects] = useState([])

  const handleScroll = () => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    const scrollY = window.scrollY;
    const offset = window.innerWidth <= 768 ? 700 : 600;

    cards.forEach((card, index) => {
      const offsetTop = (card as HTMLElement).offsetTop - offset; // Ajuste conforme necessário para o ponto de ativação
      const offsetHeight = (card as HTMLElement).offsetHeight;

      // Se o topo do card estiver visível OU o card estiver passando pelo centro da tela
      if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
        setActiveIndex(index);
      }
    });
  };

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
    console.log(projects)
    window.addEventListener('scroll', handleScroll);
    // Dispara handleScroll uma vez no carregamento para definir o estado inicial
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container} id='projects'>
      <h1 className={styles.section_title}>Meus Projetos</h1>

      {projects ? projects.map((proj: any) => (
        <div className={`${styles.card} ${activeIndex === proj.id ? styles.active : ''} ${styles[proj.name]}`} key={proj.id}>
        <div className={styles.content}>
          <h2 className={styles.title}>{proj.title}</h2>
          <p>{proj.description}</p>

          <div className={styles.button_container}>
            <a href={proj.preview} target='_blanck' rel='noopener noreferrer' className='primary'>Deploy <FaArrowRight /></a>
            {proj.repositorio ? <a href={proj.repositorio} target='_blanck' rel='noopener noreferrer' className='secondary'>Código <FaGithub /></a> : null }
          </div>
        </div>

        <div className={styles.image}>
          <img src={`${proj.imagem}`} alt={proj.title} />
        </div>
      </div>
      )) : (
        <p>Erro ao buscar Projetos</p>
      )}

      <a href="https://github.com/juninbr2000" target='_blanck' rel='noopener noreferrer' className={styles.button}>Veja Mais no GitHub <FaGithub /></a>
    </div>
  );
}
