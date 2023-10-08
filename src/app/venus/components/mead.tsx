import Attraction from '../../components/attraction/attraction'

export default function Mead() {
  const images = [
    '/media/venus/PIA00148-mead.jpg',
  ]

  const lines = [
    'The largest impact crater on Venus is a must-see. Mead crater takes its name after the anthropologist Margaret Mead, and it has a diameter of 275 kilometers (170 miles). Its brighter inner area might be a result from volcanic lavas\' filling the original cavity.',
  ]

  return (
    <Attraction 
      title='The Mead Crater'
      lines={lines}
      images={images}
    />
  )
}