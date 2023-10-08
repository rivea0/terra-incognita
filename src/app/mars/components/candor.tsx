import Attraction from '../../components/attraction/attraction'

export default function Candor() {
  const images = [
    '/media/mars/PIA00807-candor.jpg',
    '/media/mars/PIA00403_modest-candor.jpg'
  ]

  const lines = [
    'One of the canyons that make up the Valles Marineris, Candor Chasma is about 810 kilometers (503 miles) long.',
  ]

  return (
    <Attraction 
      title='The Candor Chasma'
      lines={lines}
      images={images}
    />
  )
}