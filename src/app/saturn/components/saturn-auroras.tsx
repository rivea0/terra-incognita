import Attraction from '../../components/attraction/attraction'

export default function Auroras() {
  const images = [
    '/media/saturn/PIA01269-aurora.jpg'
  ]

  const lines = [
    'Saturn\'s aurora is only seen in ultraviolet light, so you might need special telescopes to look at it, but it is a beautiful sight to behold.'
  ]

  return (
    <Attraction
      title='Saturn Auroras'
      lines={lines}
      images={images}
      videoSrc='/media/saturn/PIA11832-aurora.mov'
    />
  )
}
