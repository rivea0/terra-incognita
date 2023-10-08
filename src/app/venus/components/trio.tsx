import Attraction from '../../components/attraction/attraction'

export default function Trio() {
  const images = [
    '/media/venus/PIA00103-danilova-etc.jpg'
  ]

  const lines = [
    'In Lavinia Planitia, three beautiful craters—Danilova, Aglaonice, and Saskia—are an incredible sight you cannot miss.',
  ]

  return (
    <Attraction 
      title='Trio of Craters'
      lines={lines}
      images={images}
    />
  )
}