import Attraction from '../../components/attraction/attraction'

export default function Footprint() {
  const images = [
    '/media/the-moon/PIA24439-footprint.jpg',
  ]

  const lines = [
    'If you go all the way to the Moon, don\'t leave without seeing the iconic Apollo footprint.'
  ]

  return (
    <Attraction 
      title='The Apollo Footprint'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}