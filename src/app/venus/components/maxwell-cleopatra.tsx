import Attraction from '../../components/attraction/attraction'

export default function MaxwellAndCleopatra() {
  const images = [
    '/media/venus/PIA00149-maxwell-montes.jpg'
  ]

  const lines = [
    'Start with the Ishtar Terra region near the North Pole, and visit the highest mountain on Venus, rising 11 kilometers (6.8 miles) above.',
    'One of the most interesting sights you can find in Maxwell is the Cleopatra crater 100 kilometers (62 miles) in diameter and 2.5 kilometers (1.5 miles) deep.'
  ]

  return (
    <Attraction 
      title='Maxwell Montes and the Cleopatra Crater'
      lines={lines}
      images={images}
    />
  )
}