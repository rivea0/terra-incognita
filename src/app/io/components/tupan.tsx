import Attraction from '../../components/attraction/attraction'

export default function Tupan() {
  const images = [
    '/media/io/PIA02599-tupan.jpg',
  ]

  const lines = [
    'Visit another beautiful site called the Tupan Patera, a volcanic crater that is approximately 75 kilometers (47 miles) across.'
  ]

  return (
    <Attraction
      title='Tupan Patera'
      lines={lines}
      images={images}
    />
  )
}
