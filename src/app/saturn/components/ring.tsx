import Attraction from '../../components/attraction/attraction'

export default function Ring() {
  const images = [
    '/media/saturn/PIA06175_modest-rings.jpg',
    '/media/saturn/PIA07872~large.jpg',
    '/media/saturn/PIA09860-rings.jpg',
    '/media/saturn/PIA06532-rings.jpg'
  ]

  const lines = [
    'What is Saturn without its rings? See one of the most beautiful structures in our cosmic neighborhood.'
  ]

  return (
    <Attraction
      title='The Ring Structure'
      lines={lines}
      images={images}
    />
  )
}
