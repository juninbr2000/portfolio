import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'
import gsap from 'gsap'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuRef = useRef<HTMLUListElement>(null)
    const topLineRef = useRef<SVGLineElement>(null)
    const bottomLineRef = useRef<SVGLineElement>(null)
    const tl = useRef<GSAPTimeline>(null)   

    
    useLayoutEffect(() => {
        const mm = gsap.matchMedia()

        mm.add("(max-width: 720px)" ,() => {
        
            const links = gsap.utils.toArray<HTMLElement>(
                menuRef.current?.children || []
            )
            
            tl.current = gsap.timeline({
                paused: true
            })

            tl.current
            .to(topLineRef.current,{
                y: 4,
                x: -14,
                rotate:45,
                svgOrigin:"20 20",
                duration:.35,
                ease:"power3.inOut"
            },0)

            tl.current

            .to(bottomLineRef.current,{
                y:-14,
                x: 14,
                rotate:-45,
                svgOrigin:"20 20",
                duration:.35,
                ease:"power3.inOut"
            },0)
            .to(menuRef.current,{
                opacity:1,
                visibility:"visible",
                pointerEvents:"auto",
                duration:0.01
            },0.10)

            .fromTo(menuRef.current,
            {
                height:0
            },
            {
                height:"auto",
                duration:.45,
                ease:"power3.Out"
            },0.10)

            .fromTo(
                links,
                {
                    y:15,
                    opacity:0,
                    filter:"blur(8px)"
                },
                {
                    y:0,
                    opacity:1,
                    filter:"blur(0px)",
                    stagger:.07,
                    duration:.35,
                    ease:"power2.out"
                },
                .18
            )

        })

        return () => mm.revert()

    },[])

    useEffect(()=>{
        if (!tl.current) return

        if(menuOpen){
            tl.current?.play()
        }else{
            tl.current?.reverse()
        }

    },[menuOpen])


    return (
        <nav className={styles.container}>
            <a href="#" className={styles.logo}>
                <svg width="47" height="41" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.9042 11.5039C25.9042 11.5039 37.1635 4.61561 33.6249 2.21271C30.0862 -0.19019 22.2047 4.13504 19.4703 5.57677C16.7359 7.0185 5.15493 14.5476 8.05018 17.4311C10.9454 20.3146 18.3444 17.9117 18.3444 17.9117C18.3444 17.9117 9.86723 20.8107 6.12001 24.8C6.12001 24.8 -1.76154 31.8485 3.06392 34.4116C7.88937 36.9747 35.555 17.9117 35.555 17.9117C35.555 17.9117 17.701 52.3532 12.8756 49.3095C8.05018 46.2659 17.2185 40.1785 17.2185 40.1785C17.2185 40.1785 27.191 33.2902 33.7857 28.0038C40.3804 22.7175 42.6323 19.3534 42.6323 19.3534M42.6323 19.3534L46.8143 20.3146C46.8143 20.3146 42.1498 26.7223 44.7233 28.0038C47.2968 29.2854 50.6747 26.7223 50.6747 26.7223M42.6323 19.3534V17.9117L43.2756 16.7903M38.1285 11.0233V11.9845M55.5 27.2029V28.0038M50.6747 36.8145C50.7633 37.5626 51.3658 38.096 52.1222 38.096C52.8786 38.096 53.4505 37.5583 53.5698 36.8145C53.7107 35.9365 53.015 35.0523 52.1222 35.0523C51.2295 35.0524 50.4979 35.943 50.6747 36.8145ZM50.6747 36.8145C50.549 36.8145 50.3529 36.8145 50.3529 36.8145H33.464L26.3867 44.1834" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        
            <ul className={styles.link_container} ref={menuRef}>
                <li><a href="#home">Início</a></li>
                <li><a href="#aboult">Sobre Mim</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>

            <button className={styles.buttons} onClick={() => setMenuOpen(!menuOpen)}>
                <svg className={`${styles.menu_btn} ${menuOpen ? `${styles.active}` : ""}`} width={30} height={30} viewBox='0 0 40 40' fill='none'>
                    <line ref={topLineRef} className={`${styles.line} ${styles.top}`} x1="4" y1="16" x2="36" y2="16" />
                    <line ref={bottomLineRef} className={`${styles.line} ${styles.bottom}`}  x1="4" y1="28" x2="36" y2="28" />
                </svg>
            </button>
        </nav>
    )
}

export default Navbar