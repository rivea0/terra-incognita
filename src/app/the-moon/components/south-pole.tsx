import Attraction from '../../components/attraction/attraction'

export default function SouthPoleAitken() {
  const images = [
    '/media/the-moon/PIA13496-southpole.jpg',
  ]

  const lines = [
    'While on the far side, you can visit the largest impact basin on the Moon.'
  ]

  return (
    <Attraction 
      title='The South Pole-Aitken Basin'
      lines={lines}
      images={images}
    />
  )
}