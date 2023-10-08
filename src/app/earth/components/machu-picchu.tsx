import Attraction from '../../components/attraction/attraction'

export default function MachuPicchu() {
  const images = [
    '/media/earth/PIA03853-machu-picchu.jpg',
  ]

  const lines = [
    'Meaning "Old Peak" in the Quechua language, Macchu Picchu is an ancient Inca site you can\'t miss in Peru.'
  ]

  return (
    <Attraction 
      title='Macchu Picchu'
      lines={lines}
      images={images}
    />
  )
}