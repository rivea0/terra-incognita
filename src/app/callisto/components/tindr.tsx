import Attraction from '../../components/attraction/attraction'

export default function Tindr() {
  const images = [
    '/media/callisto/PIA01657-tindr.jpg',
  ]

  const lines = [
    'Another crater you can\'t miss while in the equator is the Tindr Crater, with a diameter of 70 kilometers (43.5 miles).'
  ]

  return (
    <Attraction
      title='The Tindr Crater'
      lines={lines}
      images={images}
    />
  )
}
