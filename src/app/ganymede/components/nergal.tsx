import Attraction from '../../components/attraction/attraction'

export default function Nergal() {
  const images = [
    '/media/ganymede/PIA01088-nergal.jpg',
  ]

  const lines = [
    'About eight kilometers (five miles) in diameter, with another smaller crater beside it, Nergal Crater is a sight to see.'
  ]

  return (
    <Attraction
      title='The Nergal Crater'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}
