import Attraction from '../../components/attraction/attraction'

export default function Aristarchus() {
  const images = [
    '/media/the-moon/Aristarchus.png',
  ]

  const lines = [
    'After visiting the Copernicus crater, another popular site, the Aristarchus crater, that is approximately 40 kilometers (25 miles) in diameter can be added to your list of places to visit.'
  ]

  return (
    <Attraction 
      title='The Aristarchus Crater'
      lines={lines}
      images={images}
    />
  )
}