import Attraction from '../../components/attraction/attraction'

export default function Har() {
  const images = [
    '/media/callisto/PIA01054-har.jpg',
  ]

  const lines = [
    'If you happen to be around the equator, Har crater makes an interesting sight.'
  ]

  return (
    <Attraction
      title='The Har Crater'
      lines={lines}
      images={images}
    />
  )
}
