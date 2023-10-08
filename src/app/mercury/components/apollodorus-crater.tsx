import Attraction from '../../components/attraction/attraction'

export default function ApollodorusCrater() {
  const images = [
    '/media/mercury/PIA19410-apollodorus.jpg',
    '/media/mercury/PIA17398-apollodorus2.jpg',
  ]

  const lines = [
    'The radial troughs of Pantheon Fossae surround the crater Apollodorus, so don\'t forget to take a closer look.'
  ]

  return (
    <Attraction
      title='The Apollodorus Crater'  
      lines={lines}
      images={images}
    />
  )
}
