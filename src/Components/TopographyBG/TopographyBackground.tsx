import React, { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

export const TopographyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const noise2D = createNoise2D();
    let animationFrameId: number;
    let time = 0;

    // Ajusta o tamanho do canvas para o tamanho da tela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configurações das Linhas Topográficas
    const lineCount = 12;          // Quantidade de linhas na tela
    const step = 4;                // Resolução dos pontos da linha (quanto menor, mais suave, mas pesa mais)
    const speed = 0.002;           // Velocidade do movimento linear/evolução do noise
    const noiseScale = 0.003;      // "Zoom" do noise (valores menores dão curvas mais suaves)
    const amplitude = 90;          // Altura máxima das ondas/elevações

    // Loop de Animação Principal
    const animate = () => {
      time += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenha cada linha topográfica
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        
        // Base vertical de onde a linha começa no eixo Y
        const baseY = (canvas.height / (lineCount + 1)) * (i + 1);

        // Controla o surgimento (fade-in/fade-out sutil nas bordas ou global)
        // Usamos uma cor opaca (o verde-oliva bem escuro/sutil do seu design)
        ctx.strokeStyle = `rgba(204, 255, 0, 0.1)`; // Amarelo/Lima com opacidade ultra baixa
        ctx.lineWidth = 1.5;

        for (let x = 0; x <= canvas.width; x += step) {
          // Passamos o X e o Tempo para o Noise para gerar o efeito de onda fluida
          const noiseValue = noise2D(x * noiseScale, (baseY + time * 100) * noiseScale);
          
          // O valor do noise varia de -1 a 1, multiplicamos pela amplitude
          const y = baseY + noiseValue * amplitude;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Fica atrás de todo o seu texto e imagens
        pointerEvents: 'none', // Garante que o usuário consiga clicar nos botões normalmente
      }}
    />
  );
};