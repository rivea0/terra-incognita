import Attraction from '../../components/attraction/attraction'

export default function GulaMons() {
  const images = [
    '/media/venus/PIA00234-gula-mons.jpg'
  ]

  const lines = [
    'Venus has a lot of volcanic activity, and the volcano Gula Mons that is 3 kilometer (1.9 mile) high is worth a visit from above.',
  ]

  return (
    <Attraction 
      title='Gula Mons'
      lines={lines}
      images={images}
    />
  )
}