import Attraction from '../../components/attraction/attraction'

export default function GardenCity() {
  const images = [
    '/media/mars/PIA19921-garden-city.jpg',
    '/media/mars/pia19922_Blaney2-garden.jpg'
  ]

  const lines = [
    'While around Mount Sharp, visit the Garden City, and see its mineral veins.',
  ]

  return (
    <Attraction 
      title='Garden City'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}