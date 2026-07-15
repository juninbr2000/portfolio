import styles from './Contact.module.css'
import { VerticalGridBackground } from '../../Components/VertcalLinesBackgorund/VercicalLinesBackground'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import desktopImg from '../../assets/desktop.jpg'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Contact() {

    const container = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: container.current,
                start:"top 75%",
            }
        })

        tl.from(`.${styles.section_title}`,{
            y:40,
            opacity:0,
            duration:.8,
            ease:"power3.out"
        })

        .from(`.${styles.text}`,{
            y:25,
            opacity:0,
            duration:.6
        },"-=.45")

        .from(`.${styles.area_label}`,{
            y:30,
            opacity:0,
            stagger:.18,
            duration:.7
        },"-=.2")

        .from(`.${styles.social_container}`,{
            y:20,
            opacity:0,
            duration:.5
        },"-=.2")
        .from(`.${styles.imagem_cont}`,{
            clipPath:"inset(100% 0 0 0)",
            opacity:0,
            duration:1,
            ease:"power3.out"
        })

    }, {scope:container})


  return (
    <div className={styles.container} ref={container} id='contact'>
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
                        <a href="https://www.instagram.com/edsong.jr/" target='_blank' rel="noopener noreferrer" aria-label='Instagram'><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/edson-junior-918171272/" target='_blank' rel="noopener noreferrer" aria-label='Linkedin'><FaLinkedin /></a>
                        <a href="https://github.com/juninbr2000" target='_blank' rel="noopener noreferrer" aria-label='github'><FaGithub /></a>
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