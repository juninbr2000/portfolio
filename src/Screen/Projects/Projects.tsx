import React, { useEffect } from 'react'
import styles from './Projects.module.css'

const Projects = () => {

    useEffect(() => {
        const getInfo = async () => {
            try {
                const getData = await fetch(`${import.meta.env.BASE_URL}projects.json`)
                const res = await getData.json()

                console.log(res)
            } catch (error) {
                console.error(error)
            }
        }

        getInfo()
    }, [])

  return (
    <div className={styles.container}>
        <h2 className='section_title'>Principais <span className='destaque'>Projetos</span></h2>

        <div>

        </div>
    </div>
  )
}

export default Projects