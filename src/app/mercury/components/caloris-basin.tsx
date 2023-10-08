import Attraction from '../../components/attraction/attraction'

export default function CalorisBasin() {
  const images = [
    '/media/mercury/PIA10359-caloris-in-color.jpg',
    '/media/mercury/PIA13675_modest-caloris.jpg',
    '/media/mercury/PIA19216-caloris.jpg',
    '/media/mercury/PIA19213_modest-caloris.jpg',
  ]

  const lines = [
    'What is a journey to Mercury without visiting its most popular impact basin?',
    'The large circular orange area in this false-color image shows the Caloris impact basin, one of the largest impact basins in the solar system. With a diameter larger than 1525 kilometers (950 miles), it is a sight to see.'
  ]

  return (
    <Attraction 
      title='The Caloris Basin'
      lines={lines}
      images={images} 
    />
  )
}
