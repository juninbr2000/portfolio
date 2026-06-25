import gsap from 'gsap'
import { useRef } from 'react'
import { PiStarFourFill } from 'react-icons/pi'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const words = ["React", "Typescript", "Javascript", "Tailwind", "Express.js", "Node.js", "Mongodb", "Firebase", "GSAP", "HTML", "CSS"]
const especialites = ["Frontend", "Web", "Mobile", "FullStack"]

gsap.registerPlugin(ScrollTrigger);

function WordsScroll() {
  
    const containerRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const expTrackRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!trackRef.current || !expTrackRef.current) return;

        const loopEsquerda = gsap.to(trackRef.current, {
            xPercent: -50,
            duration: 40,
            ease: "none",
            repeat: -1
        });

        gsap.set(expTrackRef.current, { xPercent: -50 });

        const loopDireita = gsap.to(expTrackRef.current, {
            xPercent: 0,
            duration: 20,
            ease: 'none',
            repeat: -1
        })

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                let velocity = Math.abs(self.getVelocity() / 1000);
                velocity = Math.min(velocity, 6);
                const targetTimeScale = 1 + velocity;
                gsap.to([loopEsquerda, loopDireita], {
                    timeScale: targetTimeScale,
                    duration: 0.3, // Quanto menor, mais rápido ele reage ao scroll
                    ease: "power1.out"
                });
            },
            onLeave: () => {
                gsap.to([loopEsquerda, loopDireita], { timeScale: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
                gsap.to([loopEsquerda, loopDireita], { timeScale: 1, duration: 0.5 });
            }
        });

        const handleScrollEnd = () => {
            gsap.to([loopEsquerda, loopDireita], {
                timeScale: 1,
                duration: 0.8, // Uma desaceleração mais lenta dá um aspecto muito mais elegante
                ease: "power2.out"
            });
        };

        window.addEventListener('scrollend', handleScrollEnd);

        let scrollTimeout: number;
        const handleScrollFallback = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = window.setTimeout(handleScrollEnd, 150);
        };
        window.addEventListener('scroll', handleScrollFallback);

        return () => {
            window.removeEventListener('scrollend', handleScrollEnd);
            window.removeEventListener('scroll', handleScrollFallback);
        };
    }, { scope: containerRef })
  
    return (
    <div ref={containerRef}>
        <div style={{display: 'flex', padding: '10px 0', overflow: 'hidden'}}>
            <div ref={trackRef} style={{display: 'flex'}}>
                {words && [...words, ...words].map((word, index) => (
                    <p key={index} style={{
                        color: 'var(--primary-color)', 
                        display: 'flex', 
                        fontFamily: 'var(--destaque-font)', 
                        fontWeight: '800', 
                        fontStyle: 'italic',
                        gap: '20px',
                        marginLeft: '20px'
                    }}>
                        <PiStarFourFill /> {word}
                    </p>
                ))}
            </div>
        </div>
        <div style={{display: 'flex', overflow: 'hidden', padding: '20px 0'}}>
            <div style={{display: 'flex', flexShrink: '0'}} ref={expTrackRef}>
                {especialites && [...especialites, ...especialites].map((word, index) => (
                    <p key={index} style={{
                        color: 'var(--light-green)', 
                        display: 'flex', 
                        fontWeight: '800', 
                        gap: '20px',
                        marginLeft: '20px'
                    }}>
                        <PiStarFourFill /> {word}
                    </p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WordsScroll