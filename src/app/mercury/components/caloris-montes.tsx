import Attraction from '../../components/attraction/attraction'

export default function CalorisMontes() {
  const images = [
    '/media/mercury/PIA16854-caloris-rim.jpg',
    '/media/mercury/PIA14239-caloris-montes.jpg',
  ]

  const lines = [
    'As you leave the Caloris basin, take a look at the rim: the ring of mountainous peaks is worth to see.'
  ]

  return (
    <Attraction 
      title='The Caloris Montes' 
      lines={lines} 
      images={images}
    />
  )
}
