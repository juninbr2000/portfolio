import React, { useEffect, useRef } from 'react';

export const VerticalGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configurações do Grid
    const lineSpacing = 80;       // Distância em pixels entre as linhas verticais
    const waveSpeed = 0.02;       // Velocidade do movimento horizontal do pulso
    const waveLength = 0.005;     // Largura da onda de luz (quanto menor, mais espalhada)
    const baseOpacity = 0.02;     // Opacidade das linhas no estado normal (quase invisível)
    const pulseIntensity = 0.06;  // O quanto a linha brilha quando a onda passa por ela

    const animate = () => {
      time += waveSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenha as linhas verticais
      for (let x = 0; x < canvas.width; x += lineSpacing) {
        ctx.beginPath();
        
        // Cria um pulso horizontal sutil usando Math.sin baseado no X da linha e no Tempo
        // Isso faz com que pareça que uma onda de luz está cruzando a tela da esquerda para a direita
        const factor = Math.sin(x * waveLength - time);
        // Normaliza o factor de (-1 a 1) para (0 a 1)
        const normalizedFactor = (factor + 1) / 2; 
        
        const opacity = baseOpacity + (normalizedFactor * pulseIntensity);

        ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.lineWidth = 1;

        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // OPCIONAL: Descomente as linhas abaixo se quiser transformar em um GRID completo (com linhas horizontais)
      
      for (let y = 0; y < canvas.height; y += lineSpacing) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 0, 0, ${baseOpacity})`; // Horizontais fixas e bem discretas
        ctx.lineWidth = 1;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

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
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};