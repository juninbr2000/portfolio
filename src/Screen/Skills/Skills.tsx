import { useState } from 'react'
import styles from './Skills.module.css'

function Skills() {
    const [activeCard, setActiveCard] = useState('frontend')

    const toggleCard = (cardId: any) => {
        setActiveCard(activeCard === cardId ? null : cardId)
    }

    return (
        <section className={styles.container}>
            <h2 className='section_title'>Minhas Habilidades</h2>
            
            <div className={styles.content}>
                <div className={styles.text_side}>
                    <p>As tecnologias que utilizo para transformar ideias em experiências digitais.</p>

                    <p>Um inventário honesto do que uso todos os dias para transformar ideias em produto — sem hype, sem lista infinita.</p>

                    <p className={styles.destaque}>Sempre <span className='destaque'>aprendendo</span>. Nunca decorando.</p>
                </div>
                
                <div className={styles.card_container}>
                    <div 
                        className={`${styles.card} ${styles.first_card} ${activeCard === 'frontend' ? styles.active : ''}`}
                        onClick={() => toggleCard('frontend')}
                        onMouseEnter={() => window.innerWidth > 768 && setActiveCard('frontend')}
                    >
                        <div className={styles.header_card}>
                            <span>01</span>
                            <h3>Frontend</h3>
                            <span className={styles.expand_icon}>
                                {activeCard === 'frontend' ? '−' : '+'}
                            </span>
                        </div>
                        <div className={styles.card_content}>
                            <h4>Frontend</h4>
                            
                            <ol className={styles.itens_card}>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>React-Native</li>
                                <li>Typescript</li>
                                <li>Tailwind</li>
                                <li>GSAP</li>
                            </ol>
                        </div>
                    </div>

                    <div 
                        className={`${styles.card} ${styles.second_card} ${activeCard === 'backend' ? styles.active : ''}`}
                        onClick={() => toggleCard('backend')}
                        onMouseEnter={() => window.innerWidth > 768 && setActiveCard('backend')}
                    >
                        <div className={styles.header_card}>
                            <span>02</span>
                            <h3>Backend</h3>
                            <span className={styles.expand_icon}>
                                {activeCard === 'backend' ? '−' : '+'}
                            </span>
                        </div>
                        <div className={styles.card_content}>
                            <h4>Backend</h4>
                            
                            <ol className={styles.itens_card}>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Javascript</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                                <li>API rest</li>
                                <li>JWT</li>
                            </ol>
                        </div>
                    </div>

                    <div 
                        className={`${styles.card} ${styles.third_card} ${activeCard === 'ferramentas' ? styles.active : ''}`}
                        onClick={() => toggleCard('ferramentas')}
                        onMouseEnter={() => window.innerWidth > 768 && setActiveCard('ferramentas')}
                    >
                        <div className={styles.header_card}>
                            <span>03</span>
                            <h3>Ferramentas</h3>
                            <span className={styles.expand_icon}>
                                {activeCard === 'ferramentas' ? '−' : '+'}
                            </span>
                        </div>
                        <div className={styles.card_content}>
                            <h4>Ferramentas</h4>
                            
                            <ol className={styles.itens_card}>
                                <li>Git</li>
                                <li>Github</li>
                                <li>Figma</li>
                                <li>SEO</li>
                                <li>Vercel</li>
                                <li>Google Search Console</li>
                                <li>AI Workflow</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills