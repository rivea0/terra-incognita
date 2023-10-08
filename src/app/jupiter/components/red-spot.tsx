import Attraction from '../../components/attraction/attraction'

export default function GreatRedSpot() {
  const images = [
    '/media/jupiter/PIA22178-great-red.gif',
    '/media/jupiter/PIA21395-great-red.jpg'
  ]

  const lines = [
    'Visit the Great Red Spot that has been going on for hundreds of years, the most popular destination on Jupiter.',
    'As wide as 350 kilometers (200 miles) and as deep as 500 kilometers (300 miles), this is the only spot that you don\'t want to miss.'
  ]

  return (
    <Attraction 
      title='The Great Red Spot'
      lines={lines}
      images={images}
      width={500}
      height={200}
    />
  )
}