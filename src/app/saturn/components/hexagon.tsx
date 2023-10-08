import Attraction from '../../components/attraction/attraction'

export default function Hexagon() {
  const images = [
    '/media/saturn/PIA17652-hexagon.gif',
    '/media/saturn/PIA21611_fig2-hexagon.gif',
    '/media/saturn/PIA09187-hexagon.gif',
    '/media/saturn/PIA14944-hexagon.jpg'
  ]

  const lines = [
    'Explore the six-sided jet stream of Saturn on the North Pole with sides of about 14,500 kilometers (9,000 miles), and its vortex resembling a giant rose — one of the unique experiences you\'ll never forget.'
  ]

  return (
    <Attraction
      title='The Hexagon Storm'
      lines={lines}
      images={images}
    />
  )
}
