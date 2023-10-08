import Attraction from '../../components/attraction/attraction'

export default function Eistla() {
  const images = [
    '/media/venus/PIA00084-eistla.jpg',
    '/media/venus/PIA00466-eistla-starfish.jpg'
  ]

  const lines = [
    'Eistla region is another place worth a visit.',
    'You can see the "pancake domes," likely formed by the sticky lava.',
    'And while you\'re there, you can even catch a glimpse of craters with starfish pattern with lobes of radar-bright ejecta.'
  ]

  return (
    <Attraction 
      title='The Eistla Region'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}