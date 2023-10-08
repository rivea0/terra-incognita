import Attraction from '../../components/attraction/attraction'

export default function Tolstoj() {
  const images = [
    '/media/mercury/PIA14332_modest-tolstoj.jpg',
    '/media/mercury/PIA17371-tolstoj.jpg'
  ]

  const lines = [
    'Another impact basin you can\'t miss is the one named after the writer Leo Tolstoy. It is about 350 kilometers (220 miles) in diameter, looking beautiful. While its interior is mostly smooth plains, the exterior is largely Low Reflectivity Material.'
  ]
  
  return (
    <Attraction 
      title='The Tolstoj Impact Basin'
      lines={lines}
      images={images}
      width={300}
      height={200}
    />
  )

}