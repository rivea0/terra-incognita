import Attraction from '../../components/attraction/attraction'

export default function Sunset() {
  const images = [
    '/media/mars/PIA19401-blue-sunset.gif',
    '/media/mars/PIA07997-blue-sunset.jpg',
  ]

  const lines = [
    'While this one is not a place, it is definitely an experience you should have in a lifetime.',
    'As particles in the dust in the atmosphere let blue light get into the atmosphere more efficiently, the spectacular blue Martian sunset comes up. Enjoy the view.'
  ]

  return (
    <Attraction 
      title='The Martian Sunset'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}