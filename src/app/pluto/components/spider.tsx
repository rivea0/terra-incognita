import Attraction from '../../components/attraction/attraction'

export default function Spider() {
  const images = [
    '/media/pluto/PIA20641-spider.jpg',
  ]

  const lines = [
    'An interesting sight reminiscent of a giant spider, these fractures are something to see.',
  ]

  return (
    <Attraction
      title='The Spider Fractures'
      lines={lines}
      images={images}
      width={200}
      height={500}
    />
  )
}
