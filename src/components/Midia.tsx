import { useTheme } from '../context/ThemeContext'
import { FaLinkedin, FaGithub, FaInstagram, FaMoon, FaSun, FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import styles from './Midia.module.css'

function Midia() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const isMobile = width < 768

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuToggle = () => setMenuOpen(!menuOpen)

  return (
    <div className={styles.side}>
      <div className={styles.topControls}>
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        {isMobile && (
          <button onClick={menuToggle}>
            <FaBars />
          </button>
        )}
      </div>

      {/* Navegação responsiva */}
      {isMobile ? (
        menuOpen && (
          <ul className={styles.menu}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contatos</a></li>
            <div className={styles.socialMobile}>
              <a href='https://www.linkedin.com/in/edson-junior-918171272/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
              <a href='https://github.com/juninbr2000' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
              <a href='https://www.instagram.com/edsong.jr/#' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            </div>
          </ul>
        )
      ) : (
        <div className={styles.desktopContent}>
          <ul className={styles.desktopMenu}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contatos</a></li>
          </ul>
          <div className={styles.social}>
            <a href='https://www.linkedin.com/in/edson-junior-918171272/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
            <a href='https://github.com/juninbr2000' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
            <a href='https://www.instagram.com/edsong.jr/#' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Midia
