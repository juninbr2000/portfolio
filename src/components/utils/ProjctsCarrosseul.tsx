import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../layout/Projects.module.css';

interface Stack {
    name: string;
}

interface Project {
    name: string;
    title: string;
    year: string;
    description: string;
    imagem: string;
    preview?: string;
    repositorio?: string;
    stacks: Stack[];
    id: number;
}

interface Props {
    projects: Project[];
    id?: string;
}

export default function ProjectsCarousel({ projects, id }: Props) {
    const [current, setCurrent] = useState(0);

    const nextProject = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    };

    if (!projects || projects.length === 0) return null;

    const proj = projects[current];

    return (
        <div className={styles.card_container} id={id}>

            <div className={styles.carousel}>
                <button onClick={prevProject} className={styles.arrow}>
                    <FaArrowLeft />
                </button>

                <div className={styles.projectCard}>
                    <p className={styles.year}>{proj.year}</p>
                    <h3>{proj.title}</h3>
                    <img
                        src={proj.imagem}
                        alt={proj.title}
                        className={styles.projectImage}
                    />
                    <p className={styles.description}>{proj.description}</p>

                    <div className={styles.stacks}>
                        {proj.stacks.map((stack, index) => (
                            <span key={index} className={styles.stack}>
                                {stack.name}
                            </span>
                        ))}
                    </div>

                    <div className={styles.links}>
                        {proj.repositorio && (
                            <a
                                href={proj.repositorio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='primary white'
                            >
                                GitHub <FaGithub />
                            </a>
                        )}
                        {proj.preview && (
                            <a
                                href={proj.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='secondary dark'
                            >
                                Preview <FaExternalLinkAlt />
                            </a>
                        )}
                    </div>
                </div>

                <button onClick={nextProject} className={styles.arrow}>
                    <FaArrowRight />
                </button>
            </div>

            <p className={styles.counter}>
                {current + 1} / {projects.length}
            </p>
        </div>
    );
}