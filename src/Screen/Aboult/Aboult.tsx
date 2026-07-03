import { FiDownload } from 'react-icons/fi'
import styles from './Aboult.module.css'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger);

function Aboult() {

  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if(!containerRef.current) return
    gsap.set(".split", { opacity: 1 });

    const text = containerRef.current.children;

    const split = SplitText.create(text, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        return gsap.from(instance.lines, {
          yPercent: 120,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            // markers: true,
            scrub: true,
            start: "clamp(top 90%)",
            end: "clamp(center center)"
          }
        });
      }
    })

    return () => {
      split.revert();
    }
  }, [])

  return (
    <div className={styles.container} id='aboult'>
      <h2 className='section_title'>Sobre <span className='destaque' style={{fontStyle: 'italic', fontWeight: 700}}>Mim</span></h2>

      <div className={styles.text_container} ref={containerRef}>
        <p className='split'>
          Meu nome é <span className={styles.destaque}>Edson Gentil Junior</span> e iniciei minha jornada na programação em 2022.
        </p>
        <p className='split'>
          Desde então, venho explorando <span className={styles.destaque}>diferentes tecnologias</span>, desenvolvendo <span className={styles.destaque}>projetos práticos</span> e aprimorando minhas habilidades para criar soluções funcionais e bem estruturadas
        </p>
        <p className='split'>
          Tenho interesse especial em <span className={styles.destaque}>desenvolvimento web e frontend</span> busco constantemente evoluir tanto em código quanto em design.
        </p>

      </div>
    
      <a href="#" className='main_button'>Baixar Curriculo <FiDownload /></a>
    </div>
  )
}

export default Aboult