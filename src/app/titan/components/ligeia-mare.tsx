import Attraction from '../../components/attraction/attraction'

export default function LigeiaMare() {
  const images = [
    '/media/titan/PIA20021-ligeia.jpg',
  ]

  const lines = [
    'Another hydrocarbon sea you can visit is Ligeia Mare, resembling a strange Titan creature from above.'
  ]

  return (
    <Attraction
      title='Ligeia Mare'
      lines={lines}
      images={images}
    />
  )
}
