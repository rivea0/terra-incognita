import Attraction from '../../components/attraction/attraction'

export default function Rembrandt() {
  const images = [
    '/media/mercury/PIA14549-rembrandt.jpg',
    '/media/mercury/PIA12049-rembrandt.jpg'
  ]

  const lines = [
    'The second-largest impact basin after Caloris, Rembrandt is also one of the youngest impact basins in Mercury.'
  ]

  return (
    <Attraction 
      title='Rembrandt Impact Basin'
      lines={lines}
      images={images}
    />
  )
}
