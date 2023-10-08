import Attraction from '../../components/attraction/attraction'

export default function FrozenPond() {
  const images = [
    '/media/pluto/PIA20543-frozen.jpg',
  ]

  const lines = [
    'Go towards north of the Sputnik Planum, and enjoy skating on a frozen liquid nitrogen lake.',
  ]

  return (
    <Attraction
      title='A Frozen Pond'
      lines={lines}
      images={images}
    />
  )
}
