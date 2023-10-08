import Attraction from '../../components/attraction/attraction'

export default function Lakes() {
  const images = [
    '/media/titan/PIA09102-lakes.jpg',
    '/media/titan/PIA09183-lakes.jpg',
    '/media/titan/PIA01943-lakes.jpg',
    '/media/titan/PIA09180-lakes.jpg'
  ]

  const lines = [
    'Methane, methane everywhere, not any drop to drink.',
    'Titan has a lot of lakes you can explore, just be careful if you want to swim around.'
  ]

  return (
    <Attraction
      title='Even More Lakes'
      lines={lines}
      images={images}
      width={500}
      height={350}
    />
  )
}
