import { TopographyBackground } from '../../Components/TopographyBG/TopographyBackground';
import styles from './Header.module.css';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

import linkscape from '/linkscape_mockup.png'
import imv from '/imoveisv2_mockup.png'
import rango from '/myrango_mockup.png'

gsap.registerPlugin(SplitText);

const ESPECIALIDADES = ['Frontend', 'Mobile', 'Web', 'React'];

const Header: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<number>(0)
  const [introEnd, setIntroEnd] = useState(false)

  const introRef = useRef(null)
  const nameRef = useRef(null)
  const highlightRef = useRef(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if(!introRef.current || !nameRef.current || !highlightRef.current || !buttonsRef.current) return

    const splitIntro = new SplitText(introRef.current, {type: 'words'})
    const splitName = new SplitText(nameRef.current, {type: 'chars'})
    const splitHighlight = new SplitText(highlightRef.current, {type: 'words'})
    
    gsap.set(buttonsRef.current.children, {y: 30, opacity: 0})
    
    const tl = gsap.timeline({
      onComplete: ()=> {
        setIntroEnd(true)
      }
    })

    tl.from(splitIntro.words, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.04,
    })
    .from(splitName.chars, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.03,
    }, '-=0.1')
    .from(splitHighlight.words, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.04,
    }, '-=0.2')
    .to(buttonsRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.5)',
      stagger: 0.2
    }, '-=0.2')

    return () => {
      splitIntro.revert();
      splitName.revert();
      splitHighlight.revert();
      tl.kill();
    };
  }, [])


  useEffect(() => {
    if(!introEnd) return

    const timer = setTimeout(() => {
      setSelectedWord(prev => (prev + 1) % ESPECIALIDADES.length)
    }, 5000)

    return () => clearTimeout(timer)
  }, [selectedWord, introEnd])


  return (
    <header className={styles.container} id='inicio'>
      <TopographyBackground />
      <div className={styles.title_container}>
        <div>
          <p className={styles.apresentation} ref={introRef}>Olá! me chamo</p>
          <h1 className={styles.name} ref={nameRef}>Edson Junior</h1>
          <h2 className={styles.subtitle} ref={highlightRef}>e sou Desenvolvedor <span className='destaque'>{ESPECIALIDADES[selectedWord]}</span></h2>
        </div>
        <div className={styles.buttons_container} ref={buttonsRef}>
          <a href="#" className='primary_btn'>Projetos</a>
          <a href="#" className='secondary_btn'>Contatos</a>
        </div>
      </div>
      {/* só exibe em telas maiores */}
      <div className={styles.images}> 
        <img src={linkscape} className={`${styles.img} ${styles.second}`}/>
        <img src={imv} className={`${styles.img} ${styles.primary}`}/>
        <img src={rango} className={`${styles.img} ${styles.thrid}`}/>
      </div>
      <div className={styles.scroll}>
        <span className='destaque'>scroll</span>
      </div>
    </header>
  );
};

export default Header;