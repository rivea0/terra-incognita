import Attraction from '../../components/attraction/attraction'

export default function KrakenMare() {
  const images = [
    '/media/titan/PIA19051-kraken-mare-shores.jpg',
  ]

  const lines = [
    'The largest lake in the solar system, Kraken Mare is one spot you cannot miss on Titan. Stand on the shores, and watch the beautiful view of the sea monster.'
  ]

  return (
    <Attraction
      title='Kraken Mare'
      lines={lines}
      images={images}
    />
  )
}
