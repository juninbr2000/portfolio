import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from './LoadingScreen.module.css'
import { useRef, useState } from 'react'

interface LoadingScreenProps {
    onComplete?: () => void;
}

function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null) 
    const accentRef = useRef<HTMLDivElement>(null)   
    const counterRef = useRef<HTMLSpanElement>(null)
    const pathRef = useRef<SVGPathElement>(null);

    const [count, setCount] = useState(0);

    useGSAP(() => {
        if (!pathRef.current) return;

        const length = pathRef.current.getTotalLength();

        gsap.set(pathRef.current, {
            strokeDasharray: length,
            strokeDashoffset: length
        });

        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        tl.to(counterRef.current, {
            innerText: 100,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
                if (counterRef.current) {
                    setCount(Math.floor(Number(counterRef.current.innerText)));
                }
            }
        });

        tl.to(pathRef.current, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.inOut"
        }, 0);

        
        tl.to(contentRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut"
        }, "+=0.2");

        tl.to(accentRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut"
        }, "-=1.0"); 

    }, { scope: containerRef });

    console.log(count)

    return (
        <div ref={containerRef} className={styles.container}>
            <div ref={accentRef} className={styles.accent_panel}></div>

            <div ref={contentRef} className={styles.content_layer}>
                <div className={styles.svg_container}>
                    <svg width="229" height="206" viewBox="0 0 229 206" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={pathRef} d="M103.924 45.3491C103.924 45.3491 149.796 17.2218 135.379 7.40998C120.962 -2.40185 88.8525 15.2595 77.7124 21.1466C66.5723 27.0336 19.3905 57.7775 31.1859 69.5517C42.9814 81.3258 73.1253 71.514 73.1253 71.514C73.1253 71.514 38.5887 83.3519 23.3223 99.6413C23.3223 99.6413 -8.78774 128.423 10.8715 138.889C30.5308 149.355 143.243 71.514 143.243 71.514C143.243 71.514 70.5041 212.15 50.845 199.722C31.1859 187.294 68.5382 162.437 68.5382 162.437C68.5382 162.437 109.167 134.31 136.034 112.724C162.902 91.1377 172.076 77.4011 172.076 77.4011M172.076 77.4011L189.114 81.3259C189.114 81.3259 170.11 107.491 180.595 112.724C191.08 117.957 204.841 107.491 204.841 107.491M172.076 77.4011V71.514L174.697 66.9352M153.727 43.3868V47.3115M224.5 109.453V112.724M204.841 148.7C205.202 151.755 207.657 153.933 210.739 153.933C213.82 153.934 216.15 151.738 216.636 148.7C217.21 145.115 214.376 141.505 210.739 141.505C207.102 141.505 204.121 145.142 204.841 148.7ZM204.841 148.7C204.329 148.7 203.53 148.7 203.53 148.7H134.724L105.89 178.79" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className={styles.counter}>
                    <span>{'[ '}</span>
                    <span ref={counterRef}>0</span>
                    <span>{' / 100 ]'}</span>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;