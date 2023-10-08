import Attraction from '../../components/attraction/attraction'

export default function Earth() {
  const images = [
    '/media/the-moon/see-earth.jpg',
  ]

  const lines = [
    'Not a destination, but seeing the Earth while you\'re up on the Moon can be, well, life-changing. Watch the beautiful view of our pale blue dot while you\'re there.'
  ]

  return (
    <Attraction 
      title='See the Earth'
      lines={lines}
      images={images}
      width={500}
      height={250}
    />
  )
}