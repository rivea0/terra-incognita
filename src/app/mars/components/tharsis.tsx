import Attraction from '../../components/attraction/attraction'

export default function Tharsis() {
  const images = [
    '/media/mars/PIA00408-tharsis.jpg',
    '/media/mars/PIA02049-tharsis.jpg',
    '/media/mars/PIA02987-tharsis.jpg'
  ]

  const lines = [
    'Close to Olympus Mons, don\'t miss the three giant shield volcanoes — Arsia Mons, Pavonis Mons, and Ascraeus Mons, each one being about 350-400 kilometers in diameter.'
  ]

  return (
    <Attraction 
      title='Tharsis Montes'
      lines={lines}
      images={images}
    />
  )
}