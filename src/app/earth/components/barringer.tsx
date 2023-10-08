import Attraction from '../../components/attraction/attraction'

export default function Barringer() {
  const images = [
    '/media/earth/PIA03490-crater.jpg',
    '/media/earth/meteorcrater_aer_2007158_lrg.jpg'
  ]

  const lines = [
    'Mostly known as just the Meteorite Crater, almost 1500 m wide, it makes an interesting sight to see if you happen to be in Arizona, United States.'
  ]

  return (
    <Attraction 
      title='The Barringer Meteorite Crater'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}