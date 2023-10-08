import Attraction from '../../components/attraction/attraction'

export default function SantaCruz() {
  const images = [
    '/media/mars/PIA24546-santa-cruz.jpg',
  ]

  const lines = [
    'After the Jezero crater, you can\'t miss the Santa Cruz hill, that is 50 meters (164 feet) tall.',
  ]

  return (
    <Attraction 
      title='The Santa Cruz Hill'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}