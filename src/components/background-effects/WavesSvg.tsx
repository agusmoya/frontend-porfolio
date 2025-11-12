import styles from './WavesSvg.module.css'

interface WavesSvgProps {
  position?: 'top' | 'bottom'
  height?: number // height in px
  color?: string
  opacity?: number
  duration?: number // Duration of the animation in seconds
  animated?: boolean
}

export const WavesSvg = ({
  position = 'bottom',
  height = 300,
  color = 'var(--color-primary-container)',
  opacity = 0.3,
  duration = 8,
  animated = true,
}: WavesSvgProps) => {
  const pathValues = animated
    ? `
        M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
        
        M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,133.3C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
        
        M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
      `
    : undefined

  return (
    <svg
      className={`${styles.wavesSvg} ${styles[`wavesSvg--${position}`]}`}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{ height: `${height}px` }}
    >
      <path
        fill={color}
        fillOpacity={opacity}
        d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      >
        {animated && (
          <animate
            attributeName="d"
            dur={`${duration}s`}
            repeatCount="indefinite"
            values={pathValues}
          />
        )}
      </path>
    </svg>
  )
}
