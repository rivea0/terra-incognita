import Attraction from '../../components/attraction/attraction'

export default function Aurelia() {
  const images = [
    '/media/venus/PIA00239-aurelia.jpg',
  ]

  const lines = [
    'Another beautiful sight is the Aurelia crater, 31.9 kilometers (20 miles) in diameter.'
  ]

  return (
    <Attraction 
      title='The Aurelia Crater'
      lines={lines}
      images={images}
    />
  )
}