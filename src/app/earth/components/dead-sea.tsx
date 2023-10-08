import Attraction from '../../components/attraction/attraction'

export default function DeadSea() {
  const images = [
    '/media/earth/deadsea_etm_1999219_lrg-dead-sea.jpg',
  ]

  const lines = [
    'Being the lowest surface feature, this salt lake is another must-see for your exploration of the Earth.'
  ]

  return (
    <Attraction 
      title='Dead Sea'
      lines={lines}
      images={images}
    />
  )
}