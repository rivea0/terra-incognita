import Attraction from '../../components/attraction/attraction'

export default function Halo() {
  const images = [
    '/media/titan/PIA07774-halo.jpg',
    '/media/titan/PIA07626-halo.jpg',
    '/media/titan/PIA11622-halo.jpg'
  ]

  const lines = [
    'As you leave Titan, take a one more (ultraviolet) look back, and see a beautiful sight — Titan encircled by a haze. That\'s a dazzling view you won\'t forget.'
  ]

  return (
    <Attraction
      title={`Titan's halo`}
      lines={lines}
      images={images}
    />
  )
}
