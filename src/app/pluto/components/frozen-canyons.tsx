import Attraction from '../../components/attraction/attraction'

export default function FrozenCanyons() {
  const images = [
    '/media/pluto/PIA20473-canyons.jpg',
  ]

  const lines = [
    'In the north polar area, visit the frozen canyons of Pluto, another beautiful sight.',
  ]

  return (
    <Attraction
      title='North Pole Frozen Canyons'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}
