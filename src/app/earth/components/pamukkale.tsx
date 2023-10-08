import Attraction from '../../components/attraction/attraction'

export default function Pamukkale() {
  const images = [
    '/media/earth/PIA24868-pamukkale.jpg',
  ]

  const lines = [
    'Turkey\'s "cotton castle," Pamukkale travertine pools are one of the most beautiful attractions that our planet offers.'
  ]

  return (
    <Attraction 
      title='Pamukkale'
      lines={lines}
      images={images}
    />
  )
}