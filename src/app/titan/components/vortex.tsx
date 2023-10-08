import Attraction from '../../components/attraction/attraction'

export default function Vortex() {
  const images = [
    '/media/titan/PIA14919-vortex.jpg',
    '/media/titan/PIA14920_full_movie-vortex.gif'
  ]

  const lines = [
    'Before you leave Titan, don\'t forget to remind your spacecraft pilot to come closer to the South Pole, and see the mass of gas around in the atmosphere.'
  ]

  return (
    <Attraction
      title='South Polar Vortex'
      lines={lines}
      images={images}
    />
  )
}
