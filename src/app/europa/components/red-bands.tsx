import Attraction from '../../components/attraction/attraction'

export default function RedBands() {
  const images = [
    '/media/europa/PIA18413-red.jpg',
    '/media/europa/PIA01296_modest-red.jpg',
    '/media/europa/PIA00275_modest-red.jpg'
  ]

  const lines = [
    'Europa\'s surface is full of red-brown cracks, so wherever you go, you\'ll be sure to see a beautiful sight.'
  ]

  return (
    <Attraction
      title='Red bands All Around'
      lines={lines}
      images={images}
    />
  )
}
