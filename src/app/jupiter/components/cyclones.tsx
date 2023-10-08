import Attraction from '../../components/attraction/attraction'

export default function Cyclones() {
  const images = [
    '/media/jupiter/PIA24238-circumpolar.jpg',
    '/media/jupiter/PIA25692-circumpolar.jpg'
  ]

  const lines = [
    'At the North Pole, located around a central cyclone, each of the eight circumpolar cyclones looks like an artwork in their own right. Here are some close-up shots.',
  ]

  return (
    <Attraction 
      title='Circumpolar Cyclones'
      lines={lines}
      images={images}
      width={500}
      height={400}
    />
  )
}