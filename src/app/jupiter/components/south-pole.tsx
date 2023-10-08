import Attraction from '../../components/attraction/attraction'

export default function SouthPole() {
  const images = [
    '/media/jupiter/PIA21641-cyclone-south.jpg',
  ]

  const lines = [
    'If you\'re around the South Pole, a wonderful sight awaits you, and there is always a chance to gaze at some of Jupiter\'s cyclones that can be 1,000 kilometers (600 miles) in diameter.',
  ]

  return (
    <Attraction 
      title='The South Pole'
      lines={lines}
      images={images}
      width={500}
      height={600}
    />
  )
}