import Attraction from '../../components/attraction/attraction'

export default function Eminescu() {
  const images = [
    '/media/mercury/PIA17409-eminescu.jpg'
  ]

  const lines = [
    'With bright hollows at its center, the beautiful sight of Eminescu crater (125 kilometers (78 miles) is diameter) another one you can\'t miss.'
  ]
  
  return (
    <Attraction 
      title='The Eminescu Crater'
      lines={lines}
      images={images}
    />
  )

}