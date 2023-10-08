import Attraction from '../../components/attraction/attraction'

export default function IceHills() {
  const images = [
    '/media/ganymede/PIA00707-ice-hills.jpg',
  ]

  const lines = [
    'A perfect spot for skiing, ice hills on Ganymede have a lot to offer.'
  ]

  return (
    <Attraction
      title='Ice Hills'
      lines={lines}
      images={images}
      width={500}
      height={250}
    />
  )
}
