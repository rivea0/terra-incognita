import Attraction from '../../components/attraction/attraction'

export default function GrandCanyon() {
  const images = [
    '/media/earth/GrandCanyon.NASA.2014.jpg',
    '/media/earth/PIA16098-grand-canyon.jpg'
  ]

  const lines = [
    'Arizona is also the home for Grand Canyon, 446 kilometers (277 miles) long, you can visit the Grand Canyon National Park for an exploration worth a lifetime.'
  ]

  return (
    <Attraction 
      title='The Grand Canyon'
      lines={lines}
      images={images}
    />
  )
}