import Attraction from '../../components/attraction/attraction'

export default function AncientBasin() {
  const images = [
    '/media/europa/PIA00702-basin.jpg',
  ]

  const lines = [
    'Don\'t forget to visit this impact basin that is almost the size of the island of Hawaii, it stretches 140 kilometers (86 miles) wide, a perfect spot to have some spend some time before the journey back home.'
  ]

  return (
    <Attraction
      title='Ancient Impact Basin'
      lines={lines}
      images={images}
    />
  )
}
