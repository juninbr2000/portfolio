import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const isMobile = checkDevice()

  function checkDevice() { 
    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ){
      return true; // está utilizando celular
    } else {
      return false; // não é celular
    }
  }

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      if (outline) {
        outline.style.left = outlineX + "px";
        outline.style.top = outlineY + "px";
      }
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", handleMouseMove);

    // pega qualquer elemento com data-hover
    const hoverables = document.querySelectorAll("[data-hover]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        outline?.classList.add("grow");
      });
      el.addEventListener("mouseleave", () => {
        outline?.classList.remove("grow");
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {!isMobile && <div
        ref={dotRef}
        className="cursor-dot"
      />}
      {!isMobile && <div
        ref={outlineRef}
        className="cursor"
      />}
    </>
  );
}