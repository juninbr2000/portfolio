const GridWaveBackground = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    >
      {/* Definição do padrão de grid */}
      <defs>
        <pattern
          id="waveGrid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          {/* Linhas horizontais com efeito de onda */}
          <path
            d="M 0 5 Q 2.5 2.5 5 5 T 10 5"
            fill="none"
            stroke="rgba(0, 170, 255, 0.07)"
            strokeWidth="0.2"
          >
            <animate
              attributeName="d"
              values="
                M 0 5 Q 2.5 2.5 5 5 T 10 5;
                M 0 5 Q 2.5 7.5 5 5 T 10 5;
                M 0 5 Q 2.5 2.5 5 5 T 10 5
              "
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Linhas verticais com efeito de onda */}
          <path
            d="M 5 0 Q 5 2.5 5 5 T 5 10"
            fill="none"
            stroke="rgba(0, 170, 255, 0.07)"
            strokeWidth="0.2"
          >
            <animate
              attributeName="d"
              values="
                M 5 0 Q 7.5 2.5 5 5 T 5 10;
                M 5 0 Q 2.5 2.5 5 5 T 5 10;
                M 5 0 Q 7.5 2.5 5 5 T 5 10
              "
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </pattern>

        {/* Gradiente para efeito de profundidade */}
        <linearGradient id="gridOverlay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="transparent" stopOpacity="0" />
          <stop offset="50%" stopColor="rgba(0,0,0,0.1)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Fundo com grid animado */}
      <rect width="100%" height="100%" fill="url(#waveGrid)" />
      
      {/* Camada de overlay para efeito de profundidade */}
      <rect width="100%" height="100%" fill="url(#gridOverlay)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="120s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Efeito de partículas flutuantes (opcional) */}
      {Array.from({ length: 20 }).map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 100}
          cy={Math.random() * 100}
          r={Math.random() * 0.5}
          fill="#00aaff"
          opacity="0.6"
        >
          <animate
            attributeName="cx"
            values={`${Math.random() * 100}; ${Math.random() * 100}`}
            dur={`${20 + Math.random() * 40}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values={`${Math.random() * 100}; ${Math.random() * 100}`}
            dur={`${20 + Math.random() * 40}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
};

export default GridWaveBackground;