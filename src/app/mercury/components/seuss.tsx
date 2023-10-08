import Attraction from '../../components/attraction/attraction'

export default function Seuss() {
  const images = [
    '/media/mercury/PIA16418-seuss.jpg',
    '/media/mercury/PIA18524-seuss.jpg'
  ]

  const lines = [
    'Named after Dr. Seuss, with hollows and impact melts on its floor, this relatively young and playful-looking crater is definitely an interesting sight.'
  ]
  
  return (
    <Attraction 
      title='The Seuss Crater'
      lines={lines}
      images={images}
    />
  )

}