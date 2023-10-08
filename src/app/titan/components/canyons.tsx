import Attraction from '../../components/attraction/attraction'

export default function Canyons() {
  const images = [
    '/media/titan/PIA12036-canyons.jpg',
  ]

  const lines = [
    'If you want to see a canyon as well, since you came all the way to Titan, don\'t fret about it. Go towards the south and explore the old terrains carved by Titan\'s methane rivers.'
  ]

  return (
    <Attraction
      title='Southern Canyons'
      lines={lines}
      images={images}
    />
  )
}
