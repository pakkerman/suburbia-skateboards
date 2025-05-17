export function SVGFilters() {
  return (
    <svg className="h-0 w-0">
      <defs>
        {Array.from({ length: 5 }).map((_, idx) => (
          <filter id={`squiggle-${idx}`} key={idx}>
            <feTurbulence
              baseFrequency="0.05"
              id="turbulence"
              numOctaves="2"
              result="noise"
              seed={idx}
            />
            <feDisplacementMap
              id="displacement"
              in2="noise"
              in="SourceGraphic"
              scale="4"
            />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
