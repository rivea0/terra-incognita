import Attraction from '../../components/attraction/attraction'

export default function Tycho() {
  const images = [
    '/media/the-moon/PIA13501-tycho.jpg',
    '/media/the-moon/565736main_M162350671LE_full-tycho-peak.webp'
  ]

  const lines = [
    'See one of the most popular attractions on the Moon: the Tycho crater. It is 85 kilometers (53 miles) in diameter, and about 108 million years old. Go on a hike around its peak which is about 2 kilometers (1.24 miles) above.'
  ]

  return (
    <Attraction 
      title='The Tycho Crater'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}