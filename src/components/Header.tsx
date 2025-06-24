import { FaGithub } from 'react-icons/fa';
import profileImage from '../assets/Profile.jpeg'
import styles from './Header.module.css';


const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.apresentation}>
        <h2>👋 Olá! Me chamo</h2>
        <h1><span className={styles.destaque}>Edson Júnior, </span>e sou</h1>
        <h2><span className={styles.destaque}>Desenvolvedor Front-End</span></h2>

        <div className={styles.button_container}>
          <a className='primary white' href='#projects'>Projetos</a>
          <a className='primary white' href='/Edson currículo2025.docx'><FaGithub /></a>
        </div>
      </div>
      <div className={styles.image_container}>
        <span className={styles.square}></span>
        <img src={profileImage} className={styles.profile_img}/>
        <span className={styles.square}></span>
      </div>
    </header>
  )
}

export default Header