import Attraction from '../../components/attraction/attraction'

export default function OlympusMons() {
  const images = [
    '/media/mars/PIA02982-olympus-mons.jpg',
    '/media/mars/PIA01476-olympus-mons.jpg'
  ]

  const lines = [
    'Three times taller than Earth\'s Mount Everest, the volcano Olympus Mons is a must-see. It stretches over about 550 kilometers (340 miles) and is a challenge for trekking aficionados.',
    'The highest peak of the solar system awaits those who will dare.'
  ]

  return (
    <Attraction 
      title='Olympus Mons'
      lines={lines}
      images={images}
      width={300}
      height={300}
    />
  )
}