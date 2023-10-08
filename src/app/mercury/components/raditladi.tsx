import Attraction from '../../components/attraction/attraction'

export default function Raditladi() {
  const images = [
    '/media/mercury/PIA19409-raditladi.jpg',
    '/media/mercury/PIA18443-raditladi-troughs.jpg',
    '/media/mercury/PIA16775-raditladi-melt-ponds.jpg'
  ]

  const lines = [
    'Another sight we would recommend is the Raditladi basin. See the concentric troughs, impact melt ponds and more.'
  ]
  
  return (
    <Attraction 
      title='Raditladi Impact Basin'
      lines={lines}
      images={images}
    />
  )
}