import React from 'react'
import styles from './Contact.module.css'
import { VerticalGridBackground } from '../../Components/VertcalLinesBackgorund/VercicalLinesBackground'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import desktopImg from '../../assets/desktop.jpg'

function Contact() {
  return (
    <div className={styles.container}>
        <VerticalGridBackground />

        <div className={styles.content}>
            <h2 className='section_title'>Contatos</h2>
            <p className={styles.text}>Vamos construir o seu <span className='destaque'>proximo passo</span>.</p>

            <div className={styles.main}>
                <div className={styles.user_utils}>
                    <div className={styles.area_label}>
                        <h3 className={styles.button_title}>Email</h3>
                        <a href="mailto:edson.gentil.junior@gmail.com" target='_blank' rel='noopener noreferrer' className={styles.button}>
                            <p>edson.gentil.junior@gmail.com</p>
                            <IoIosArrowRoundForward />
                        </a>
                    </div>
                    <div className={styles.area_label}>
                        <h3 className={styles.button_title}>Whatsapp</h3>
                        <a href="https://wa.me/5535992527472" target='_blank' rel="noopener noreferrer" className={styles.button}>
                            <p>Converse comigo no Whatsapp</p>
                            <IoIosArrowRoundForward />
                        </a>
                    </div>
                    <div className={styles.social_container}>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                <div className={styles.imagem_cont}>
                    <img src={desktopImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact