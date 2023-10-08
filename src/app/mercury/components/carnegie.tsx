import Attraction from '../../components/attraction/attraction'

export default function CarnegieRupes() {
  const images = [
    '/media/mercury/PIA19422-carnegie.jpg',
    '/media/mercury/PIA19279-carnegie.jpg'
  ]

  const lines = [
    'Don\'t leave without seeing the Carnegie Rupes that cut through the Duccio crater. It is a large tectonic landform, formed as a response to interior planetary cooling.'
  ]
  
  return (
    <Attraction 
      title='The Carnegie Rupes'
      lines={lines}
      images={images}
    />
  )
}
