import styles from './Midia.module.css'
import { useTheme } from '../context/ThemeContext'
import { FaLinkedin, FaGithub, FaInstagram, FaMoon, FaSun} from 'react-icons/fa'

function Midia() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.side}>
        <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
        <a href='https://www.linkedin.com/in/edson-junior-918171272/' target='_blanck' rel='noopener noreferrer'><FaLinkedin /></a>
        <a href='https://github.com/juninbr2000' target='_blanck' rel='noopener noreferrer'><FaGithub /></a>
        <a href='https://www.instagram.com/edsong.jr/#' target='_blanck' rel='noopener noreferrer'><FaInstagram /></a>
    </div>
  )
}

export default Midia