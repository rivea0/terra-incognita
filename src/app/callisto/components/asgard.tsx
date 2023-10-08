import Attraction from '../../components/attraction/attraction'

export default function Asgard() {
  const images = [
    '/media/callisto/PIA00562-asgard.jpg',
    '/media/callisto/PIA00517-asgard.jpg',
    '/media/callisto/PIA01634-asgard.jpg',
    '/media/callisto/PIA01100-asgard.jpg'

  ]

  const lines = [
    'With too many impact craters on its surface, it may be hard to choose which one to visit. However, spanning about 1700 kilometers (1,056 miles) across, the Asgard structure with its bright central zone is a must-see.'
  ]

  return (
    <Attraction
      title='Asgard'
      lines={lines}
      images={images}
      width={200}
      height={500}
    />
  )
}
