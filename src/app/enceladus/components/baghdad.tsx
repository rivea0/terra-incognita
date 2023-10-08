import Attraction from '../../components/attraction/attraction'

export default function Baghdad() {
  const images = [
    '/media/enceladus/PIA11697-baghdad.jpg',
  ]

  const lines = [
    'In the south polar region, don\'t miss the Baghdad Sulcus, the most popular fracture around.'
  ]

  return (
    <Attraction
      title='Baghdad Sulcus'
      lines={lines}
      images={images}
    />
  )
}
