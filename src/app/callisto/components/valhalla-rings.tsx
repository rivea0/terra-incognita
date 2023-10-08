import Attraction from '../../components/attraction/attraction'

export default function ValhallaRings() {
  const images = [
    '/media/callisto/PIA00484-valhalla-rings.jpg',
  ]

  const lines = [
    'Around Valhalla, you can find one of the most fascinating geological landmarks, a ridged terrain with craters that are relatively less dense.'
  ]

  return (
    <Attraction
      title='Valhalla Rings'
      lines={lines}
      images={images}
    />
  )
}
