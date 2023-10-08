import Attraction from '../../components/attraction/attraction'

export default function Snowcaps() {
  const images = [
    '/media/pluto/PIA21026-snowcaps.jpg',
  ]

  const lines = [
    'Just towards the south of Cthulhu Regio, explore this darkly alluring area filled with mountains that have methane snow caps.',
  ]

  return (
    <Attraction
      title='Methane Snowcaps at Cthulhu'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}
