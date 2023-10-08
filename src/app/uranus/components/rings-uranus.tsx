import Attraction from '../../components/attraction/attraction'

export default function Rings() {
  const images = [
    '/media/uranus/0301099~large.jpg',
    '/media/uranus/PIA17178-rings.jpg',
    '/media/uranus/PIA01977-rings.jpg',
    '/media/uranus/PIA01981-rings.jpg',
    '/media/uranus/PIA00142-rings.jpg',
    '/media/uranus/PIA01281.jpg'
  ]

  const lines = [
    'Uranus has its unique ring structure that you can enjoy visiting any time.'
  ]

  return (
    <Attraction
      title='Rings'
      lines={lines}
      images={images}
    />
  )
}
