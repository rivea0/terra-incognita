import Attraction from '../../components/attraction/attraction'

export default function Damascus() {
  const images = [
    '/media/enceladus/PIA11113-damascus.jpg',
  ]

  const lines = [
    'Another interesting fracture is the Damascus Sulcus, a tiger stripe responsible for the beautiful water jets of Enceladus.'
  ]

  return (
    <Attraction
      title='Damascus Sulcus'
      lines={lines}
      images={images}
      width={400}
      height={500}
    />
  )
}
