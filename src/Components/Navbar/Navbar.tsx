import React from 'react'

import styles from './Navbar.module.css'

import gsap from 'gsap'

function Navbar() {

  const [visible, setVisible] = React.useState(false)
  const menuRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (!menuRef.current || !visible) return;

    const items = gsap.utils.toArray<HTMLElement>(
      menuRef.current.children
    );

    gsap.fromTo(
      items,
      {
      opacity: 0,
      y: 15,
      },
      {
      opacity: 1,
      y: 0,
      delay: 0.2,
      duration: 0.3,
      stagger: 0.04,
      ease: "power2.out",
      }
    );
  }, [visible]);



  return (
    <nav className={styles.nav_container}>
      <div className={styles.logo_container}>
        <a href="/" className={styles.logo}>
          <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.433 8.91977C20.433 8.91977 29.3987 3.46652 26.5809 1.56423C23.7631 -0.338067 17.4871 3.08607 15.3097 4.22744C13.1323 5.36881 3.91041 11.3294 6.21588 13.6121C8.52136 15.8949 14.4131 13.9926 14.4131 13.9926C14.4131 13.9926 7.6628 16.2877 4.6789 19.4458C4.6789 19.4458 -1.59715 25.0259 2.24534 27.055C6.08783 29.0841 28.1179 13.9926 28.1179 13.9926C28.1179 13.9926 13.9008 41.2588 10.0583 38.8492C6.21588 36.4396 13.5165 31.6205 13.5165 31.6205C13.5165 31.6205 21.4577 26.1673 26.709 21.9822C31.9603 17.7972 33.7535 15.1339 33.7535 15.1339M33.7535 15.1339L37.0836 15.8949C37.0836 15.8949 33.3693 20.9676 35.4186 21.9822C37.4678 22.9968 40.1576 20.9676 40.1576 20.9676M33.7535 15.1339V13.9926L34.2658 13.1048M30.1672 8.53932V9.30023M44 21.3481V21.9822M40.1576 28.9573C40.2282 29.5495 40.708 29.9718 41.3103 29.9718C41.9126 29.9719 42.368 29.5462 42.463 28.9573C42.5752 28.2622 42.0212 27.5623 41.3103 27.5623C40.5994 27.5623 40.0168 28.2673 40.1576 28.9573ZM40.1576 28.9573C40.0575 28.9573 39.9014 28.9573 39.9014 28.9573H26.4528L20.8172 34.791" stroke="#DDE1D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <ul className={`${styles.menu_list} ${visible ? `${styles.visible}` : ""}`} ref={menuRef}>
        <li className={styles.menu_item}><a href="#inicio" onClick={() => setVisible(false)}>Início</a></li>
        <li className={styles.menu_item}><a href="#sobre" onClick={() => setVisible(false)}>Sobre</a></li>
        <li className={styles.menu_item}><a href="#skills" onClick={() => setVisible(false)}>Habilidades</a></li>
        <li className={styles.menu_item}><a href="#" onClick={() => setVisible(false)}>Projetos</a></li>
        <li className={styles.menu_item}><a href="#" onClick={() => setVisible(false)}>Contatos</a></li>
      </ul>


      <div className={styles.buttons_container}>
        <button className={styles.buttons} onClick={() => setVisible(!visible)}>
          <svg className={`${styles.menu_btn} ${visible ? `${styles.active}` : ""}`} width={25} height={25} viewBox='0 0 40 40' fill='none'>
            <line className={`${styles.line} ${styles.top}`} x1="2" y1="14" x2="36" y2="14" stroke='#DDE1D2' />
            <line className={`${styles.line} ${styles.bottom}`}  x1="2" y1="26" x2="36" y2="26" stroke='#DDE1D2' />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar