import styles from './FloatingShapes.module.css'

interface Shape {
  cx: number
  cy: number
  r: number
  color: string
  duration: number
  yOffset: number // vertical displacement
}

interface FloatingShapesProps {
  shapes?: Shape[]
  blur?: number
  opacity?: number
}

const DEFAULT_SHAPES: Shape[] = [
  {
    cx: 200,
    cy: 150,
    r: 100,
    color: 'var(--color-primary)',
    duration: 6,
    yOffset: 30,
  },
  {
    cx: 1200,
    cy: 600,
    r: 150,
    color: 'var(--color-secondary)',
    duration: 8,
    yOffset: 30,
  },
]

export const FloatingShapes = ({
  shapes = DEFAULT_SHAPES,
  blur = 10,
  opacity = 0.1,
}: FloatingShapesProps) => {
  return (
    <svg
      className={styles.floatingShapes}
      viewBox="0 0 1440 800"
      style={{ filter: `blur(${blur}px)` }}
    >
      {shapes.map((shape, index) => (
        <circle
          key={index}
          cx={shape.cx}
          cy={shape.cy}
          r={shape.r}
          fill={shape.color}
          opacity={opacity}
        >
          <animate
            attributeName="cy"
            values={`${shape.cy};${shape.cy - shape.yOffset};${shape.cy}`}
            dur={`${shape.duration}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}
