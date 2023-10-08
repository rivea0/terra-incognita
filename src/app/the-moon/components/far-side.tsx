import Attraction from '../../components/attraction/attraction'

export default function FarSide() {
  const images = [
    '/media/the-moon/PIA00225-farside.jpg',
    '/media/the-moon/PIA15515-farside.jpg'
  ]

  const lines = [
    'See the far side of the Moon that is home to a much older crust of the Moon\'s surface.'
  ]

  return (
    <Attraction 
      title='The Far Side of the Moon'
      lines={lines}
      images={images}
    />
  )
}