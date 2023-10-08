import Attraction from '../../components/attraction/attraction'

export default function Jezero() {
  const images = [
    '/media/mars/PIA23239-jezero.jpg',
    '/media/mars/PIA24349-jezero.jpg',
    '/media/mars/PIA24485-jezero.jpg'
  ]

  const lines = [
    'Explore the landing area of the Perseverance rover!',
    '45 kilometers (28 miles) wide, it might be once flooded with water.'
  ]

  return (
    <Attraction 
      title='The Jezero Crater'
      lines={lines}
      images={images}
    />
  )
}