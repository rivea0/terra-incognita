import Attraction from '../../components/attraction/attraction'

export default function Khensu() {
  const images = [
    '/media/ganymede/PIA01090-khensu.jpg',
  ]

  const lines = [
    'Approximately 13 kilometers (8 miles) in diameter, Khensu Crater is another spot you might want to see.'
  ]

  return (
    <Attraction
      title='The Khensu Crater'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}
