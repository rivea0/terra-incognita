import Attraction from '../../components/attraction/attraction'

export default function IdunnMons() {
  const images = [
    '/media/venus/PIA13001_modest-idunn.jpg'
  ]

  const lines = [
    'With a diameter of 200 kilometers (120 miles), Idunn Mons is one of the volcanic peaks if you can\'t get enough of Venus\' volcanoes.',
  ]

  return (
    <Attraction 
      title='Idunn Mons'
      lines={lines}
      images={images}
      videoSrc='/media/venus/PIA13001_notext-idunn.mp4'
    />
  )
}