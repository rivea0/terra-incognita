import Attraction from '../../components/attraction/attraction'

export default function Freckles() {
  const images = [
    '/media/europa/PIA03878-freckles.jpg',
  ]

  const lines = [
    'Visit Europa\'s "freckles," each one approximately 10 kilometers (6 miles) across. They may be the result of the upward motion of warmer ice that comes from the bottom of the shell.'
  ]

  return (
    <Attraction
      title='Freckles'
      lines={lines}
      images={images}
    />
  )
}
