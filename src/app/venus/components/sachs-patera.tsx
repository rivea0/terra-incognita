import Attraction from '../../components/attraction/attraction'

export default function Sachs() {
  const images = [
    '/media/venus/PIA00473-sachs.jpg'
  ]

  const lines = [
    'Another interesting and elliptical sight around the area is Sachs Patera, with an appearance reminiscent of a strange Venusian flower.',
  ]

  return (
    <Attraction 
      title='Sachs Patera'
      lines={lines}
      images={images}
    />
  )
}