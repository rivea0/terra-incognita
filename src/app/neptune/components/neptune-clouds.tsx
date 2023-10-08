import Attraction from '../../components/attraction/attraction'

export default function NeptuneClouds() {
  const images = [
    '/media/neptune/PIA00063-clouds.jpg',
  ]

  const lines = [
    'See the beautiful Neptunian clouds, you can even enjoy resembling them to objects while flying overhead the Great Dark Spot.'
  ]

  return (
    <Attraction
      title='Neptunian Clouds'
      lines={lines}
      images={images}
    />
  )
}
