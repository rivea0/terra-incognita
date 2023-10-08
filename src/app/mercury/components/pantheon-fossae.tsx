import Attraction from '../../components/attraction/attraction'

export default function PantheonFossae() {
  const images = [
    '/media/mercury/PIA10397-spider.jpg',
    '/media/mercury/PIA10635-pantheon.jpg',
  ]
  
  const lines = [
    'There is a lot to explore in Caloris.',
    'Near the center, check out the Pantheon Fossae, what once called "the Spider." Reminiscent of the domed roof of the Pantheon in Rome, the radial troughs are a sight you don\'t want to miss.'
  ]

  return (
    <Attraction 
      title='Pantheon Fossae' 
      lines={lines} 
      images={images} 
    />
  )
}