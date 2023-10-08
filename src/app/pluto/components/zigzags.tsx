import Attraction from '../../components/attraction/attraction'

export default function Zigzags() {
  const images = [
    '/media/pluto/PIA20286-zigzags.jpg',
  ]

  const lines = [
    'Spend some time discovering the cratered plains towards the east of Cthulhu Regio, and don\'t let it scare you.',
  ]

  return (
    <Attraction
      title='The Zigzags'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}
