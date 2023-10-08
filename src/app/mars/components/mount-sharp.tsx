import Attraction from '../../components/attraction/attraction'

export default function MountSharp() {
  const images = [
    '/media/mars/PIA19912-mount-sharp.jpg',
  ]

  const lines = [
    'Rising more than 5 kilometers (3 miles), don\'t miss the mountain the Curiosity rover has been working close to.',
  ]

  return (
    <Attraction 
      title='Mount Sharp'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}