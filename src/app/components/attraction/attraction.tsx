import Image from 'next/image'
import styles from '../../planetPage.module.css'

export default function Attraction({ title, lines, images, videoSrc, width, height }: {
  title: string, 
  lines: string[], 
  images: string[], 
  videoSrc?: string,
  // use generic width and height for single images that look too stretched
  width?: number, 
  height?: number,
}) {
  return (
    <>
      <h3 style={{ textAlign: 'center', marginTop: '1rem', color: 'powderblue' }}>
        {title}
      </h3>
      <div className={styles.attractionsP}>
        {lines.map((line: string) => <p key={line}>{line}</p>)}
      </div>
      <div className={styles.imagesContainer}>
        {videoSrc && (
          <video autoPlay loop muted className={styles.mainVisual}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {images.map((image: string) => {
          return (
            <Image 
              key={image}
              src={image}
              alt={title}
              width={width || 500}
              height={height || 500}
            />
          )
        })}
      </div>
    </>
  )
}
