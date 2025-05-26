import React, { useEffect, useState } from 'react';
import styles from './Midia.module.css'
import { useTheme } from '../context/ThemeContext'
import { FaLinkedin, FaGithub, FaInstagram, FaMoon, FaSun} from 'react-icons/fa'

function Midia() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.side}>
        <button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>
        <a href='#'><FaLinkedin /></a>
        <a href='#'><FaGithub /></a>
        <a href='#'><FaInstagram /></a>
    </div>
  )
}

export default Midia