import styles from './AnimatedBlobs.module.css'

interface BlobConfig {
  x: number | string // X position: number (px) or string ("50%", "10vw")
  y: number | string // Y position: number (px) or string ("30%", "20vh")
  width: number | string // Width in px
  height: number | string // Height in px
  direction: 'left' | 'right' // Direction of rotation
}

interface AnimatedBlobsProps {
  blobs?: BlobConfig[]
  blur?: number
  speed?: number
}

const defaultBlobs: BlobConfig[] = [
  {
    x: '55vw',
    y: '55vh',
    width: 'clamp(120px, 16vw, 240px)',
    height: 'clamp(90px, 12vw, 175px)',
    direction: 'right',
  },
  {
    x: '30vw',
    y: '40vh',
    width: 'clamp(80px, 11vw, 160px)',
    height: 'clamp(95px, 13vw, 190px)',
    direction: 'right',
  },
  {
    x: '58vw',
    y: '38vh',
    width: 'clamp(90px, 12vw, 180px)',
    height: 'clamp(90px, 15vw, 180px)',
    direction: 'left',
  },
  {
    x: '45vw',
    y: '25vh',
    width: 'clamp(95px, 13vw, 190px)',
    height: 'clamp(45px, 6vw, 90px)',
    direction: 'left',
  },
]

export const AnimatedBlobs = ({
  blobs = defaultBlobs,
  blur = 10,
  speed = 5,
}: AnimatedBlobsProps) => {
  const formatPosition = (value: number | string): string => {
    return typeof value === 'number' ? `${value}px` : value
  }

  const formatSize = (value: number | string): string => {
    return typeof value === 'number' ? `${value}px` : value
  }

  return (
    <>
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={
            blob.direction === 'right' ? styles.blobAnimateRight : styles.blobAnimateLeft
          }
          style={
            {
              '--blob-x': formatPosition(blob.x),
              '--blob-y': formatPosition(blob.y),
              width: formatSize(blob.width),
              height: formatSize(blob.height),
              filter: `blur(${blur}px)`,
              animationDuration: `${speed}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </>
  )
}
