import Attraction from '../../components/attraction/attraction'

export default function Snowman() {
  const images = [
    '/media/enceladus/PIA20011-snowman.jpg',
    '/media/enceladus/PIA20010-snowman.jpg'
  ]

  const lines = [
    'When you feel like you have seen all the plume has to offer and decide to go towards the opposite direction, the northern latitudes, don\'t miss a chance to see the trio of craters that resemble a snowman, a feature very fitting for Enceladus.'
  ]

  return (
    <Attraction
      title='The Snowman'
      lines={lines}
      images={images}
      width={500}
      height={350}
    />
  )
}
