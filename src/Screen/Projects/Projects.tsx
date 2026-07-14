import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'
import { MdArrowOutward } from 'react-icons/md'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaGithub } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
    const [project, setProject] = useState<any[]>([])
    const sectionRef = useRef<HTMLDivElement>(null)
    const cardsContainer = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${import.meta.env.BASE_URL}projects.json`)
            
            const data = await res.json()
            if(data){
                setProject(data)
                requestAnimationFrame(() => {
                    ScrollTrigger.refresh();
                });
            }
        }

        getData()
    }, [])

    useGSAP(()=>{

        const cards=gsap.utils.toArray<HTMLElement>(
            `.${styles.card_container}`
        )

        cards.forEach((card)=>{
            gsap.fromTo(card,
                {
                    opacity:0,
                    y:120,
                    scale:.88,
                    filter:"blur(8px)"
                },
                {
                    opacity:1,
                    y:0,
                    scale:1,
                    filter:"blur(0px)",
                    ease:"power3.out",
                    scrollTrigger:{
                        trigger:card,
                        start:"top 80%",
                        end:"center 30%",
                        scrub:1
                    }
                }
            )
        })

    }, {scope: cardsContainer, dependencies: [project]})

    return (
        <section className={styles.container} ref={sectionRef}>
            <div className={styles.projects_container} ref={cardsContainer}>
                {project && project.map((pr, index) => (
                    <div key={index} className={styles.card_container} style={{ zIndex: index + 1 }}>
                        <div className={styles.meta}>
                            <div>
                                <span className={styles.meta_title}>Ano</span>
                                <p className={styles.meta_value}>{pr.year}</p>
                            </div>
                            <div>
                                <span className={styles.meta_title}>index</span>
                                <p className={styles.meta_value}>{`[ 0${index + 1} / 0${project.length} ]`}</p>
                            </div>
                        </div>
                        
                        <div className={styles.img_container}>
                            <img src={pr.imagem} alt={pr.title} />
                            <div className={styles.img_fast_info}>
                                <span className={styles.number}>0{index + 1}</span>
                                <p className={styles.category}>Web Development</p>
                            </div>
                        </div>

                        <div className={styles.main_details}>
                            <h2 className={styles.title}>{pr.title}</h2>

                            <div className={styles.tag_container}>
                                {pr.stacks.map((stack: any, index: any) => (
                                    <p key={index} className={styles.tag}>{stack.name}</p>
                                ))}
                            </div>
                            
                            <div style={{display: 'flex', gap: '20px'}}>
                                {pr.repositorio && <a className='main_button' href={pr.repositorio} target='_blank' rel="noopener noreferrer" >Ver no Github <FaGithub /></a>}
                                {pr.preview && <a className='main_button' href={pr.preview} target='_blank' rel="noopener noreferrer" >Preview <MdArrowOutward /></a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className='main_button'>Veja outros projetos <FaGithub /></a>
        </section>
    )
}

export default Projects