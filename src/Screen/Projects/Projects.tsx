import { useEffect, useState } from 'react'
import styles from './Projects.module.css'
import { MdArrowOutward } from 'react-icons/md'

function Projects() {
    const [project, setProject] = useState<any[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${import.meta.env.BASE_URL}projects.json`)
            
            const data = await res.json()
            if(data){
                setProject(data)
            }
        }

        getData()
    }, [])

    console.log(project)

    return (
        <section className={styles.container}>
            <div className={styles.projects_container}>
                {project && project.map((pr, index) => (
                    <div key={index} className={styles.card_container}>
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
                                {pr.stacks.map((stack, index) => (
                                    <p key={index} className={styles.tag}>{stack.name}</p>
                                ))}
                            </div>

                            <button className='main_button'>Conheca mais <MdArrowOutward /></button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects