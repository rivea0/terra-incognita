import Attraction from '../../components/attraction/attraction'

export default function MurrayButtes() {
  const images = [
    '/media/mars/PIA21041-murray.jpg',
    '/media/mars/PIA21043-murray.jpg',
    '/media/mars/PIA21044-murray.jpg',
    '/media/mars/PIA21045-murray.jpg',
  ]

  const lines = [
    'On lower Mount Sharp, take a look at the beautiful Murray Buttes area.',
  ]

  return (
    <Attraction 
      title='The Murray Buttes'
      lines={lines}
      images={images}
      // width={500}
      // height={300}
    />
  )
}