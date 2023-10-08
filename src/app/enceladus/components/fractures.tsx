import Attraction from '../../components/attraction/attraction'

export default function Fractures() {
  const images = [
    '/media/enceladus/PIA19660-fracture.jpg',
  ]

  const lines = [
    'Be careful while viewing the craters at the north, there are fractures on the surface that you should be looking out for, but still makes an amazing sight.'
  ]

  return (
    <Attraction
      title='Fractures'
      lines={lines}
      images={images}
    />
  )
}
