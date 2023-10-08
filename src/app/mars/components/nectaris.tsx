import Attraction from '../../components/attraction/attraction'

export default function Nectaris() {
  const images = [
    '/media/mars/PIA22455-dunes.jpg',
  ]

  const lines = [
    'Another sight you can\'t miss is the dunes in Nectaris Montes. Within the Coprates Chasma, this is definitely a sight to see.',
  ]

  return (
    <Attraction 
      title='Nectaris Montes'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}