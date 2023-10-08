import Attraction from '../../components/attraction/attraction'

export default function KissingLakes() {
  const images = [
    '/media/titan/PIA08740-kissing.jpg',
  ]

  const lines = [
    'Titan\'s kissing lakes are a perfect place to spend some time with your loved one. The area is about 60 kilometers (37 miles) wide.'
  ]

  return (
    <Attraction
      title='The Kissing Lakes'
      lines={lines}
      images={images}
      width={500}
      height={350}
    />
  )
}
