import React from 'react'
import styles from './Skills.module.css'
import { TopographyBackground } from '../../Components/TopographyBG/TopographyBackground'

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
  return (
    <section className={styles.container} id='skills'>
        <TopographyBackground />
        <h2 className='section_title'><span className='destaque'>Habilidades</span></h2>

        <div className={styles.cards_container}>
            {skills && skills.map((hab) => (
                <div className={styles.card}>
                    <h3>{hab.title}</h3>
                    <ol>{hab.tools.map((tool) => (
                        <li>{tool}</li>
                    ))}</ol>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills