import Attraction from '../../components/attraction/attraction'

export default function Culann() {
  const images = [
    '/media/io/PIA02535-culann.jpg',
  ]

  const lines = [
    'Io has many colors, but one of the most interesting sights is Culann Patera, another volcanic center.'
  ]

  return (
    <Attraction
      title='Culann Patera'
      lines={lines}
      images={images}
      height={400}
    />
  )
}
