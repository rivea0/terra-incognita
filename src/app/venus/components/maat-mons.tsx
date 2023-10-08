import Attraction from '../../components/attraction/attraction'

export default function MaatMons() {
  const images = [
    '/media/venus/PIA00106-maat-mons.jpg',
    '/media/venus/PIA00254-maat-mons.jpg'
  ]

  const lines = [
    'Named after the Egyptian Goddess of truth and justice, Maat Mons is another place you don\'t want to miss.',
    'Although it is no place to go hiking, you might still want to admire its beauty.',
    'Computer generated images:'
  ]

  return (
    <Attraction 
      title='Maat Mons'
      lines={lines}
      images={images}
    />
  )
}