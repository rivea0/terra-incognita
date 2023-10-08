import Attraction from '../../components/attraction/attraction'

export default function Copernicus() {
  const images = [
    '/media/the-moon/PIA00094-copernicus.jpg',
    '/media/the-moon/PIA13964-copernicus.jpg'
  ]

  const lines = [
    'Located within the Mare Imbrium Basin, Copernicus crater that is 93 kilometers wide is definitely a sight to see.'
  ]

  return (
    <Attraction 
      title='The Copernicus Crater'
      lines={lines}
      images={images}
    />
  )
}