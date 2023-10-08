import Attraction from '../../components/attraction/attraction'

export default function Basin() {
  const images = [
    '/media/callisto/PIA02277-callisto-basin.jpg',
  ]

  const lines = [
    'Don\'t leave without taking a look at one of the most distinct areas in Callisto, a multi-ring basin called the Callisto basin.'
  ]

  return (
    <Attraction
      title='The Callisto Basin'
      lines={lines}
      images={images}
      // width={200}
      // height={500}
    />
  )
}
