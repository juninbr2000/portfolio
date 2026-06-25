
import { useGSAP } from '@gsap/react';
import styles from './Aboult.module.css';


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { GoDownload } from 'react-icons/go';

gsap.registerPlugin(ScrollTrigger);

function Aboult() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const statusContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !titleRef.current || !textContainerRef.current || !statusContainerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", 
        toggleActions: "play none none none", 
      }
    });

    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    
    .from(textContainerRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15, 
      ease: "power3.out",
    }, "-=0.3") 
    
    .from(statusContainerRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2, 
      ease: "power3.out",
    }, "-=0.4"); 

  }, { scope: sectionRef });

  return (
    <section className={styles.container} id='sobre' ref={sectionRef}>
      <h2 className='section_title dark' ref={titleRef}>
        Sobre <span className='destaque'>Mim</span>
      </h2>
      
      <div className={styles.text_container} ref={textContainerRef}>
        <p className={styles.text}>
          Meu nome é <span className={styles.destaque}>Edson Gentil Junior</span> e iniciei minha jornada na programação em <span className='destaque'>2022</span>.
        </p>
        <p className={styles.text}>
          Desde então, venho explorando <span className={styles.destaque}>diferentes tecnologias</span>, desenvolvendo <span className={styles.destaque}>projetos práticos</span> e aprimorando minhas habilidades para <span className={styles.destaque}>criar soluções</span> funcionais e bem estruturadas.
        </p>
        <p className={styles.text}>
          Tenho interesse especial em <span className='destaque'>desenvolvimento web</span> e <span className={styles.destaque}>frontend</span>, busco constantemente evoluir tanto em código quanto em design.
        </p>

        <a href="#" className='primary_btn'>
          <GoDownload /> Baixar Curriculo
        </a>
      </div>

      <div className={styles.status_container} ref={statusContainerRef}>
        <div className={styles.status}>
          <h3 className={styles.status_title}>Localização</h3>
          <p className={styles.status_text}>Minas Gerais, Brasil 🇧🇷</p>
        </div>
        <div className={styles.status}>
          <h3 className={styles.status_title}>Status</h3>
          <p className={styles.status_text}>Disponível para novos projetos</p>
        </div>
      </div>
    </section>
  );
}

export default Aboult;