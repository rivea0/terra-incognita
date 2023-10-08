import Attraction from '../../components/attraction/attraction'

export default function Prometheus() {
  const images = [
    '/media/io/PIA02505-prometheus.jpg',
  ]

  const lines = [
    'Here is another spot you can visit while on Io, the most stable volcano, Prometheus.'
  ]

  return (
    <Attraction
      title='The Prometheus Volcano'
      lines={lines}
      images={images}
    />
  )
}
