import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

import linkscape from '../assets/linkscape_mockup.png';
import imoveis from '../assets/imoveisgentil_mockup.png';
import filmania from '../assets/filmania_mockup.png'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    const scrollY = window.scrollY;
    const offset = window.innerWidth <= 768 ? 700 : 200;

    cards.forEach((card, index) => {
      const offsetTop = (card as HTMLElement).offsetTop - offset; // Ajuste conforme necessário para o ponto de ativação
      const offsetHeight = (card as HTMLElement).offsetHeight;

      // Se o topo do card estiver visível OU o card estiver passando pelo centro da tela
      if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Dispara handleScroll uma vez no carregamento para definir o estado inicial
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.section_title}>Meus Projetos</h1>

      <div className={`${styles.card} ${activeIndex === 0 ? styles.active : ''} ${styles.linkscape}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>LinkScape</h2>
          <p>
            Um agregador de links onde você pode criar seu próprio perfil,
            personalizar seu layout e compartilhar seus links favoritos.
          </p>

          <div className={styles.button_container}>
            <button className='primary'>Deploy <FaArrowRight /></button>
            <button className='secondary'>Código <FaGithub /></button>
          </div>
        </div>

        <div className={styles.image}>
          <img src={linkscape} alt="Linkscape" />
        </div>
      </div>

      <div className={`${styles.card} ${activeIndex === 1 ? styles.active : ''} ${styles.imoveis}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Imóveis Gentil</h2>
          <p>
            Plataforma de imóveis moderna, onde os usuários podem buscar e visualizar
            propriedades disponíveis, com uma interface leve e responsiva.
          </p>

          <div className={styles.button_container}>
            <button className='primary'>Deploy <FaArrowRight /></button>
          </div>
        </div>

        <div className={styles.image}>
          <img src={imoveis} alt="Imóveis Gentil" />
        </div>
      </div>
      <div className={`${styles.card} ${activeIndex === 2 ? styles.active : ''} ${styles.filmania}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Filmania</h2>
          <p>
            Plataforma de imóveis moderna, onde os usuários podem buscar e visualizar
            propriedades disponíveis, com uma interface leve e responsiva.
          </p>

          <div className={styles.button_container}>
            <button className='primary'>Deploy <FaArrowRight /></button>
            <button className='secondary'>Código <FaGithub /></button>
          </div>
        </div>

        <div className={styles.image}>
          <img src={filmania} alt="filmania" />
        </div>
      </div>
    </div>
  );
}
