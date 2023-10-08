import Attraction from '../../components/attraction/attraction'

export default function Bagnold() {
  const images = [
    '/media/mars/PIA20755-bagnold.jpg',
  ]

  const lines = [
    'You think that\'s all for dunes on Mars?',
    'These sand dunes are not the kind that you can see anywhere on Earth.'
  ]

  return (
    <Attraction 
      title='Bagnold Dune Field'
      lines={lines}
      images={images}
      width={1000}
      height={100}
    />
  )
}