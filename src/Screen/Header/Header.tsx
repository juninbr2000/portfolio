import { useLayoutEffect, useRef } from 'react'
import styles from './Header.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { VerticalGridBackground } from '../../Components/VertcalLinesBackgorund/VercicalLinesBackground'

function Header() {
    const socialRef = useRef<HTMLDivElement>(null)
    const nameRef = useRef(null)
    const helloRef= useRef(null)
    const areaRef = useRef(null)
    const buttonRef = useRef(null)

    useLayoutEffect(() => {
        if(!socialRef.current) return

        const ctx = gsap.context(() => {
            const targets = gsap.utils.toArray<HTMLElement>(socialRef.current?.children || [])

            targets.forEach((target) => {
                const calculateMagnetic = (e: MouseEvent) => {
                    const rect = target.getBoundingClientRect()

                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2

                    const x = e.clientX - centerX
                    const y = e.clientY - centerY

                    gsap.to(target, {
                        x: x * 0.35,
                        y: y * 0.35,
                        scale: 1.25,
                        color: '#E41613',
                        duration: 0.3,
                        ease: "power2.out",
                        overwrite: "auto"
                    })
                }

                const resetMagnetic = () => {
                    gsap.to(target, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        color: '#1f1f1f',
                        duration: 0.5,
                        ease: "elastic.out(1, 0.3)",
                        overwrite: "auto"
                    })
                }

                target.addEventListener('mousemove', calculateMagnetic)
                target.addEventListener('mouseleave', resetMagnetic)
            })
        })

        return () => ctx.revert()
    }, [])

    useLayoutEffect(() => {
        if(!nameRef.current || !helloRef.current || !areaRef.current) return
        if(!socialRef.current || !buttonRef.current) return

        const nameChars = new SplitText(nameRef.current, {type: 'chars'})
        const helloWord = new SplitText(helloRef.current, {type: 'words'})
        const areaWord = new SplitText(areaRef.current, {type: 'words'})

        gsap.set(
            [...socialRef.current.children, buttonRef.current],
            {
                opacity: 0
            }
        )

        const tl = gsap.timeline()

        tl.from(nameChars.chars, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            stagger: 0.04,
            ease: 'power3.out'
        }),
        tl.from(helloWord.words, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger:0.04,
            ease: 'power3.out'
        }),
        tl.from(areaWord.words, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger:0.04,
            ease: 'power3.out'
        }, '-=0.1'),
        tl.to(socialRef.current.children, {
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out',
            stagger: 0.04
        }),
        tl.to(buttonRef.current, {
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        }, '2.5')

    }, [])

  return (
    <div className={styles.container}>
        <VerticalGridBackground />
        <div className={styles.social_container} ref={socialRef}>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
        </div>

        <div className={styles.apresentation}>
            <p className={styles.hello} ref={helloRef}>Olá! eu sou</p>
            <h1 className={styles.name} ref={nameRef}>Edson Junior</h1>
            <h2 className={styles.area} ref={areaRef}>Desenvolvedor <span className='destaque'>Frontend</span></h2>

        </div>
        
        <a href="#" ref={buttonRef} className='main_button'>Veja meus projetos <IoIosArrowRoundForward /></a>

    </div>
  )
}

export default Header