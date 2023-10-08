import Attraction from '../../components/attraction/attraction'

export default function Dunes() {
  const images = [
    '/media/titan/PIA08971-shangri-la.jpg',
    '/media/titan/PIA20710-shangri-la.jpg'
  ]

  const lines = [
    'You may not find sand dunes in Titan, but dunes made up of hydrocarbon grains do exist. You don\'t want to miss the dunes in a dark region called Shangri-La.'
  ]

  return (
    <Attraction
      title='Dunes of Shangri-La'
      lines={lines}
      images={images}
      width={500}
      height={350}
    />
  )
}
