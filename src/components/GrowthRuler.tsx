type GrowthRulerProps = {
  orientation?: "vertical" | "horizontal";
  className?: string;
  highlight?: number[];
};

// A vertical or horizontal tick-mark ruler, modeled on a kids' height chart.
// Doubles as the brand's signature device: it literally measures growth,
// which is the whole positioning ("gear that grows with them").
export default function GrowthRuler({
  orientation = "vertical",
  className = "",
  highlight = [],
}: GrowthRulerProps) {
  const ages = Array.from({ length: 13 }, (_, i) => i); // 0 to 12

  if (orientation === "horizontal") {
    const width = 1040;
    const height = 64;
    const step = width / (ages.length - 1);

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="0" y1="8" x2={width} y2="8" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
        {ages.map((age, i) => {
          const x = i * step;
          const isHighlight = highlight.includes(age);
          return (
            <g key={age}>
              <line
                x1={x}
                y1="0"
                x2={x}
                y2={isHighlight ? 24 : 16}
                stroke="currentColor"
                strokeWidth={isHighlight ? 3 : 2}
                strokeOpacity={isHighlight ? 1 : 0.4}
              />
              <text
                x={x}
                y="46"
                fontSize="14"
                fontFamily="var(--font-jetbrains-mono)"
                textAnchor="middle"
                fill="currentColor"
                fillOpacity={isHighlight ? 1 : 0.45}
              >
                {age}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

  const height = 640;
  const width = 72;
  const step = height / (ages.length - 1);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="8" y1="0" x2="8" y2={height} stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
      {ages.map((age, i) => {
        const y = height - i * step;
        const isHighlight = highlight.includes(age);
        return (
          <g key={age}>
            <line
              x1="0"
              y1={y}
              x2={isHighlight ? 28 : 18}
              y2={y}
              stroke="currentColor"
              strokeWidth={isHighlight ? 3 : 2}
              strokeOpacity={isHighlight ? 1 : 0.4}
            />
            <text
              x="36"
              y={y + 5}
              fontSize="14"
              fontFamily="var(--font-jetbrains-mono)"
              fill="currentColor"
              fillOpacity={isHighlight ? 1 : 0.45}
            >
              {age}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
