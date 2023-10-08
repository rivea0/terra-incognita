import Attraction from '../../components/attraction/attraction'

export default function Sacajawea() {
  const images = [
    '/media/venus/PIA00216-sacajawea.jpg'
  ]

  const lines = [
    'Towards the west on Lakshmi Planum, you can find Sacajawea Patera, a large caldera as wide as 420 kilometers (252 miles).',
  ]

  return (
    <Attraction 
      title='Sacajawea Patera'
      lines={lines}
      images={images}
    />
  )
}