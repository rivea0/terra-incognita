import Attraction from '../../components/attraction/attraction'

export default function Loki() {
  const images = [
    '/media/io/PIA00320-loki.jpg',
    '/media/io/PIA00375-loki.jpg'
  ]

  const lines = [
    'With a lava lake that is about 150°C higher than its surrounding area, Loki Patera makes a wonderful destination to visit.'
  ]

  return (
    <Attraction
      title='Loki Patera'
      lines={lines}
      images={images}
    />
  )
}
