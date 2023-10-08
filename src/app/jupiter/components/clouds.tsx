import Attraction from '../../components/attraction/attraction'

export default function Clouds() {
  const images = [
    '/media/jupiter/PIA24293-clouds.jpg',
    '/media/jupiter/PIA23604-clouds.jpg',
    '/media/jupiter/PIA21984-clouds.jpg'
  ]

  const lines = [
    'Wherever you go on Jupiter, there is always a sight to see.',
    'Here are some views of its beautiful clouds, more wonders to explore.'
  ]

  return (
    <Attraction 
      title='Clouds, Clouds Everywhere'
      lines={lines}
      images={images}
      width={500}
      height={250}
    />
  )
}