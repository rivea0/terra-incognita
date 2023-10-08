import Attraction from '../../components/attraction/attraction'

export default function Pwyll() {
  const images = [
    '/media/europa/PIA01211-pwyll.jpg',
    '/media/europa/PIA00586-pwyll.jpg',
    '/media/europa/PIA01665-pwyll.jpg'
  ]

  const lines = [
    'See one of Europa\'s youngest geological features, an impact crater called Pwyll, about 26 kilometers (16 miles) in diameter.'
  ]

  return (
    <Attraction
      title='The Pwyll Crater'
      lines={lines}
      images={images}
      width={500}
      height={400}
    />
  )
}
