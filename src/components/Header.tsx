import { FaGithub } from 'react-icons/fa';
import profileImage from '../assets/Profile.png'
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import { LuTable2 } from 'react-icons/lu';


const Header = () => {

  const word = ['Front-End', 'React', 'Web'];
  const [selectedWord, setSelectedWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedWord(prev => (prev >= word.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <header className={styles.container}>
      <img src={profileImage} className={styles.profile_img} />
      <div>
        <h1 className={styles.apresentation}>
          👋 Olá! Me chamo <br />
          <span className={styles.destaques}>Edson Junior</span>, e sou <br />
          Desevolvedor <span className={styles.destaques} key={selectedWord}>{word[selectedWord]}</span>
        </h1>

        <div className={styles.buttonCont}>
          <a href="#" className='primary'><FaGithub /> GitHub</a>
          <a href="#" className='secondary'><LuTable2 /> Projetos</a>
        </div>
      </div>


    </header>
  )
}

export default Header