import Attraction from '../../components/attraction/attraction'

export default function Cydonia() {
  const images = [
    '/media/mars/PIA01141-cydonia.jpg',
    '/media/mars/PIA09654-cydonia.jpg',
    '/media/mars/PIA02381-cydonia.jpg'
  ]

  const lines = [
    'No list of places to see on Mars is complete without it. See the popular formation that is known as the "face on Mars," and many more in Cydonia.',
  ]

  return (
    <Attraction 
      title='Cydonia'
      lines={lines}
      images={images}
      width={500}
      height={400}
    />
  )
}