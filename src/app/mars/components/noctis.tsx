import Attraction from '../../components/attraction/attraction'

export default function Noctis() {
  const images = [
    '/media/mars/PIA03213-noctis.jpg',
    '/media/mars/PIA13656-noctis-canyon.jpg',
    '/media/mars/odyssey20101208_PIA13655_Noctis_vista.jpg'
  ]

  const lines = [
    'Here is a sight you can\'t miss. West of the Valles Marineris with interesting land patterns, try not to get lost in this Martian maze.',
  ]

  return (
    <Attraction 
      title='Noctis Labyrinthus'
      lines={lines}
      images={images}
      width={400}
      height={300}
    />
  )
}