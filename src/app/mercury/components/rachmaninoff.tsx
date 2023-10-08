import Attraction from '../../components/attraction/attraction'

export default function Rachmaninoff() {
  const images = [
    '/media/mercury/PIA12998-rachmaninoff.jpg',
    '/media/mercury/PIA13475-rachmaninoff.jpg',
  ]

  const lines = [
    'One of the most interesting sights you don\'t want to miss is the Rachmaninoff impact basin. Spanning 290 kilometers (180 miles) in diameter, this double-ring basin is a sight you can\'t miss. Goes best with listening to Rhapsody on a Theme of Paganini as you approach it.'
  ]
  
  return (
    <Attraction 
      title='Rachmaninoff Impact Basin'
      lines={lines}
      images={images}
      videoSrc='/media/mercury/PIA16851_ip-rachmaninoff-elevated.mp4'
    />
  )
}
