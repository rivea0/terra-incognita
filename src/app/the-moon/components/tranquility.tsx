import Attraction from '../../components/attraction/attraction'

export default function Tranquility() {
  const images = [
    '/media/the-moon/PIA12925-sea.jpg',
    '/media/the-moon/PIA13518-sea.jpg'
  ]

  const lines = [
    'Have a peaceful time in the Sea of Tranquility, where you can also visit the Apollo 11 landing site and an interesting pit crater.'
  ]

  return (
    <Attraction 
      title='Mare Tranquillitatis (Sea of Tranquility)'
      lines={lines}
      images={images}
    />
  )
}