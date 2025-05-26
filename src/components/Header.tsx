import React from 'react'
import profileImage from '../assets/Profile.jpeg'
import styles from './Header.module.css';
import WaveBackground from './WavesComp';

const Header = () => {
  return (
    <header className={styles.container}>
      <WaveBackground />
      <div className={styles.apresentation}>
        <h1>Olá! Me chamo</h1>
        <h1><span className={styles.destaque}>Edson Júnior, </span>e sou</h1>
        <h1><span className={styles.destaque}>Desenvolvedor Front-End</span></h1>

        <div className={styles.button_container}>
          <button className='primary'>Projetos</button>
          <button className='secondary'>Baixar CV</button>
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