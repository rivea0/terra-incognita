import Attraction from '../../components/attraction/attraction'

export default function IcyMountainsPlains() {
  const images = [
    '/media/pluto/PIA19955-icy.jpg',
    '/media/pluto/PIA20213-icy.jpg',
    // '/media/pluto/PIA19947-icy.jpg',
    // '/media/pluto/PIA19710-icy.jpg',
    // '/media/pluto/PIA19954-icy.jpg'
  ]

  const lines = [
    'Pluto has a lot of icy mountains and frozen plains that are perfect for winter activities, so get ready for the coolest adventure of a lifetime.',
  ]

  return (
    <Attraction
      title='More Icy Mountains and Frozen Plains'
      lines={lines}
      images={images}
      width={700}
      height={200}
    />
  )
}
