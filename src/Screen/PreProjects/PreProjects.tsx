import { useRef } from 'react'
import styles from './PreProjects.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText)

function PreProjects() {

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef(null)
  const conclusionRef = useRef(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !titleRef.current || !conclusionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        // markers: true,      
        start: '10% 70%',
        end: '80% 30%',
      }
    });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.75,
      ease: "power3.out"
    })
      .from(conclusionRef.current, {
        y: 100,        // Um deslocamento um pouco menor para a conclusão
        opacity: 0,
        scale: 0.85,
        ease: "power3.out"
      }, "+=0.5");


  }, { scope: sectionRef });

  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLImageElement>(
      imagesRef.current!.children
    );

    gsap.set(images, {
      left: "50%",
      top: "60%",
      xPercent: -50,
      yPercent: -50
    })

    images.forEach((img, index) => {
      const randomXStart = gsap.utils.random(-450, 450);
      const randomYStart = gsap.utils.random(300, 600); 
      const randomRotate = gsap.utils.random(-20, 20);
      const randomScale = gsap.utils.random(0.7, 0.9);

      gsap.set(img, {
        position: "absolute",
        left: "50%",
        top: "50%",
        x: randomXStart,
        y: randomYStart,
        xPercent: -50,
        yPercent: -50,
        rotate: randomRotate,
        scale: randomScale,
        opacity: 0 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 1, 
          end: 'bottom top',
        }
      })

      tl.to(images, {
        opacity: 1,
        x: (index, target) => {
          const currentX = gsap.getProperty(target, "x") as number;
          return currentX * 1.5;
        },
        y: (index) => {
          const distances = [-1200, -1600, -2000, -1400, -1800, -2200];
          return distances[index % distances.length];
        },
        rotate: (index, target) => {
          const currentRotate = gsap.getProperty(target, "rotate") as number;
          return currentRotate * 1.3;
        },
        ease: "none",
     
        stagger: {
          amount: 1,
          from: "start"
        }
      });
    })

  }, {scope: sectionRef})

  return (
    <section className={styles.container} ref={sectionRef}>
      <div className={styles.stickyContainer}>

        <div className={styles.images} ref={imagesRef}>
          <img src="filmania_mockup.png" className={`${styles.image}`} />
          <img src="imoveisgentil_mockup.png" className={`${styles.image}`} />
          <img src="linkscape_mockup.png" className={`${styles.image}`} />
          <img src="miniblog_mockup.png" className={`${styles.image}`} />
          <img src="myrango_mockup.png" className={`${styles.image}`} />
          <img src="imoveisv2_mockup.png" className={`${styles.image}`} />
          <img src="filmania_mockup.png" className={`${styles.image}`} />
          <img src="imoveisgentil_mockup.png" className={`${styles.image}`} />
          <img src="linkscape_mockup.png" className={`${styles.image}`} />
          <img src="miniblog_mockup.png" className={`${styles.image}`} />
          <img src="myrango_mockup.png" className={`${styles.image}`} />
          <img src="imoveisv2_mockup.png" className={`${styles.image}`} />
        </div>

        <div className={styles.text}>
          <h2 className={styles.intro} ref={titleRef}>
            Muito mais do
            <br />
            que projetos.
          </h2>

          <h2 className={styles.conclusion} ref={conclusionRef}>São <span className={styles.destaque}>Sonhos</span></h2>
        </div>

      </div>
    </section>
  )
}

export default PreProjects