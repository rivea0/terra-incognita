import Attraction from '../../components/attraction/attraction'

export default function Pele() {
  const images = [
    '/media/io/PIA01112-pele.jpg',
    '/media/io/PIA02510-pele.jpg',
    '/media/io/PIA00718-pele.jpg'
  ]

  const lines = [
    'With remarkable bright red deposit around the volcano Pele, this is definitely a "hot spot" to visit.'
  ]

  return (
    <Attraction
      title='Pele Plume Deposit'
      lines={lines}
      images={images}
      width={500}
      height={400}
    />
  )
}
