import Attraction from '../../components/attraction/attraction'

export default function Everest() {
  const images = [
    '/media/earth/PIA18046-everest.jpg',
  ]

  const lines = [
    'Earth\'s highest mountain may be attractive to climb, however, it\'s filled with dangers, especially of deadly avalanches. Extreme caution needed.'
  ]

  return (
    <Attraction 
      title='Mount Everest'
      lines={lines}
      images={images}
    />
  )
}