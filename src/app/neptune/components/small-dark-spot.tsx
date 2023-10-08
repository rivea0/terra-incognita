import Attraction from '../../components/attraction/attraction'

export default function SmallDarkSpot() {
  const images = [
    '/media/neptune/PIA01142~orig.jpg',
    '/media/neptune/PIA00064-small.jpg',
    '/media/neptune/PIA02223-small.jpg'
  ]

  const lines = [
    'Going down south, you can see The Small Dark Spot, also called the Wizard\'s Eye, a beautiful view.',
    'In the colored picture, it is at the bottom:'
  ]

  return (
    <Attraction
      title='The Small Dark Spot'
      lines={lines}
      images={images}
    />
  )
}
