import Attraction from '../../components/attraction/attraction'

export default function Heart() {
  const images = [
    '/media/pluto/PIA20007-heart.jpg',
    '/media/pluto/PIA19945-heart.jpg',
    '/media/pluto/PIA19842-heart-mountain.jpg',
    '/media/pluto/PIA19841-heart.jpg'
  ]

  const lines = [
    'The most striking view on Pluto is the one you can see as you approach it, a heart-shaped region that is full of nitrogen and carbon dioxide ice.',
    'Explore the mountains (that are likely to be 1-1.5 kilometers high) and plains that live inside Pluto\'s heart.'
  ]

  return (
    <Attraction
      title={`Pluto's Heart (Tombaugh Regio)`}
      lines={lines}
      images={images}
      width={500}
      height={350}
    />
  )
}
