import Attraction from '../../components/attraction/attraction'

export default function ChaosRegio() {
  const images = [
    '/media/pluto/PIA19934-chaos.jpg',
  ]

  const lines = [
    'Go northwest of the Sputnik Planum, and visit the Chaos Region terrain that looks indeed a bit chaotic.',
  ]

  return (
    <Attraction
      title='Chaos Region'
      lines={lines}
      images={images}
      width={500}
      height={450}
    />
  )
}
