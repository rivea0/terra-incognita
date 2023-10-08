import Attraction from '../../components/attraction/attraction'

export default function Orientale() {
  const images = [
    '/media/the-moon/PIA13225_modest-orientale.jpg',
  ]

  const lines = [
    'Although it might be hard to spot from the Earth as it resides on the far western side of the near side, the Orientale basin is the youngest basin on the Moon.'
  ]

  return (
    <Attraction 
      title='The Orientale Basin'
      lines={lines}
      images={images}
    />
  )
}