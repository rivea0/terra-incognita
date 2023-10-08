import Attraction from '../../components/attraction/attraction'

export default function TartarusDorsa() {
  const images = [
    '/media/pluto/PIA19957-tartarus.jpg',
  ]

  const lines = [
    'Pluto\'s quirkiness is in abundance. The Tartarus Dorsa mountains are another must-see on your Pluto trip.',
  ]

  return (
    <Attraction
      title='Tartarus Dorsa'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}
