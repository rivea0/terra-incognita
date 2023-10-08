import Attraction from '../../components/attraction/attraction'

export default function Xanadu() {
  const images = [
    '/media/titan/PIA08448-xanadu.jpg',
    '/media/titan/PIA08428-xanadu.jpg',
    '/media/titan/PIA10956-xanadu.jpg',
    '/media/titan/PIA08429-xanadu.jpg'
  ]

  const lines = [
    'One of the most popular destinations on Titan is Xanadu, an area where you can see river channels, impact craters and more.'
  ]

  return (
    <Attraction
      title='Xanadu'
      lines={lines}
      images={images}
      width={500}
      height={400}
    />
  )
}
