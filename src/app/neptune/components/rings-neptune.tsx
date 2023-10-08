import Attraction from '../../components/attraction/attraction'

export default function RingsNeptune() {
  const images = [
    '/media/neptune/Fuzzy_image_of_Neptunes_rings.webp',
    '/media/neptune/PIA01493-rings.jpg',
    '/media/neptune/PIA01996-rings.jpg'
  ]

  const lines = [
    'The main rings of Neptune—Galle, Leverrier, Lassell, Arago, and Adams— are also a view to see. '
  ]

  return (
    <Attraction
      title='Rings'
      lines={lines}
      images={images}
    />
  )
}
