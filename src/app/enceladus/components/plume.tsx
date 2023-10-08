import Attraction from '../../components/attraction/attraction'

export default function Plume() {
  const images = [
    '/media/enceladus/PIA07762-plume.gif',
    '/media/enceladus/PIA17184-jets.jpg',
    '/media/enceladus/PIA11688-plume.jpg',
    '/media/enceladus/PIA17183-jets.jpg',

  ]

  const lines = [
    'The first place to go on Enceladus should definitely be the South Pole region. See one of the most beautiful sights, fly through the plume, it sure will be a once-in-a-lifetime experience. The water jets come from the “tiger stripes,” and are mostly water vapor, carbon dioxide, methane, and other gases like ammonia and nitrogen, also forming Saturn\'s E ring.'
  ]

  return (
    <Attraction
      title='The South Polar Plume'
      lines={lines}
      images={images}
      width={500}
      height={400}
    />
  )
}
