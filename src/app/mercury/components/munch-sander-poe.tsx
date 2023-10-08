import Attraction from '../../components/attraction/attraction'

export default function MunchSanderPoe() {
  const images = [
    '/media/mercury/pia19421-mercury-trio.webp',
    '/media/mercury/PIA12034-trio.jpg',

  ]  

  const lines = [
    'While in Caloris, go northwest, and see the popular trio of craters named after Edward Munch, August Sander, and Edgar Allan Poe.'
  ]

  return (
    <Attraction
      title='Munch, Sander, and Poe'
      lines={lines}
      images={images}
      width={500}
      height={300}
    />
  )
}
