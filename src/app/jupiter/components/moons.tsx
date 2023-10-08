import Attraction from '../../components/attraction/attraction'

export default function Moons() {
  const images = [
    '/media/jupiter/PIA00601-galilean.jpg',
  ]

  const lines = [
    'The four most popular moons of Jupiter\'s deserved to be explored individually, each one a beautiful new world.',
    'Discovered by Galileo Galilei in 1610, Ganymede, Callisto, Io, and Europa are wonders that await.'
  ]

  return (
    <Attraction 
      title='The Galilean Moons'
      lines={lines}
      images={images}
      width={500}
      height={200}
    />
  )
}