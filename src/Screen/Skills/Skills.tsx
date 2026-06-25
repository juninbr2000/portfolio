import React, { useRef, useState } from 'react'
import styles from './Skills.module.css'
import { TopographyBackground } from '../../Components/TopographyBG/TopographyBackground'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

const skills = [
    {
        title: 'Frontend',
        tools: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'GSAP', 'Tailwind']
    },
    {
        title: 'Backend',
        tools: ['Node.js', 'Express.js', 'JWT', 'Firebase', 'MongoDB', 'Rest API']
    },
    {
        title: 'Ferramentas',
        tools: ['Figma', 'GIT', 'GitHub', 'Vercel']
    }
]

function Skills() {

    const [active, setActive] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const scrollToCard = (index: number) => {
        const container = scrollContainerRef.current;
        if (!container) return;
    
        const cardWidth = container.scrollWidth / skills.length;
    
        container.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth', // Garante o deslize suave
        });
    
        setActive(index);
    };

    const nextCard = () => {
        const nextIndex = active >= skills.length - 1 ? 0 : active + 1;
        scrollToCard(nextIndex);
    };

    const prevCard = () => {
        const prevIndex = active <= 0 ? skills.length - 1 : active - 1;
        scrollToCard(prevIndex);
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const cardWidth = container.clientWidth;

        const newActiveIndex = Math.round(scrollLeft / cardWidth);

        if (newActiveIndex !== active && newActiveIndex >= 0 && newActiveIndex < skills.length) {
        setActive(newActiveIndex);
        }
    }

  return (
    <section className={styles.container} id='skills'>
        <TopographyBackground />
        <h2 className={`${styles.padd} section_title `}><span className='destaque'>Habilidades</span></h2>

        <div className={styles.cards_container} ref={scrollContainerRef} onScroll={handleScroll}>
            {skills && skills.map((hab, index) => (
                <div className={styles.card} key={index}>
                    <h3 className={styles.card_title}>{hab.title}</h3>
                    <ol className={styles.tools_list}>{hab.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}</ol>
                </div>
            ))}
        </div>

        <div className={styles.controller}>
            <button className={styles.controll} onClick={() => prevCard()}><MdArrowBackIos /></button>
            <div className={styles.dots_container}>
                {skills && skills.map((_, index) => <span key={index} className={`${styles.dot} ${active === index ? styles.active : null}`} onClick={() => scrollToCard(index)}></span>)}
            </div>
            <button className={styles.controll} onClick={() => nextCard()}><MdArrowForwardIos /></button>
        </div>
    </section>
  )
}

export default Skills