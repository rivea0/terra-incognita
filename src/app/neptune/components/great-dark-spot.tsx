import Attraction from '../../components/attraction/attraction'

export default function GreatDarkSpot() {
  const images = [
    '/media/neptune/PIA00052-great.jpg',
  ]

  const lines = [
    'Reminiscent of Jupiter\'s Great Red Spot, Neptune has its own giant storm, called the Great Dark Spot, that makes the most interesting sight.'
  ]

  return (
    <Attraction
      title='The Great Dark Spot'
      lines={lines}
      images={images}
      width={400}
      height={500}
    />
  )
}
