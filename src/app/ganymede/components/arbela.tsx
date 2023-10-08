import Attraction from '../../components/attraction/attraction'

export default function ArbelaSulcus() {
  const images = [
    '/media/ganymede/PIA02573-arbela.webp',
  ]

  const lines = [
    'Land on this smooth icy swath in the midst of an ancient rough terrain.'
  ]

  return (
    <Attraction
      title='Arbela Sulcus'
      lines={lines}
      images={images}
      width={300}
      height={500}
    />
  )
}
