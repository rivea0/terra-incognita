import Attraction from '../../components/attraction/attraction'

export default function Auroras() {
  const images = [
    '/media/jupiter/PIA03155-auroras.jpg',
  ]

  const lines = [
    'Jupiter\'s auroras are one of the most beautiful that you can find in our solar system. Go towards the poles, and don\'t miss the chance of enjoying a spectacular view.',
  ]

  return (
    <Attraction 
      title='Auroras'
      lines={lines}
      images={images}
      width={500}
      height={200}
    />
  )
}