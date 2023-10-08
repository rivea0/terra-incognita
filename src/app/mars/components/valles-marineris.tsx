import Attraction from '../../components/attraction/attraction'

export default function VallesMarineris() {
  const images = [
    '/media/mars/PIA00422a-valles-marineris.jpg',
  ]

  const lines = [
    'If you\'re impressed by the Grand Canyon from our own Earth, wait until you see Valles Marineris.',
    'Going further from the Tharsis region, don\'t forget to visit the great canyon of Mars.',
    'It is approximately 8 kilometers deep, so you better watch your steps!'
  ]

  return (
    <Attraction 
      title='Valles Marineris'
      lines={lines}
      images={images}
      width={700}
      height={300}
    />
  )
}