import styles from '../planetPage.module.css'
import Image from 'next/image'
import Asgard from './components/asgard'
import Har from './components/har'
import Tindr from './components/tindr'
import ValhallaRings from './components/valhalla-rings'
import Basin from './components/basin'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Callisto</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>A moon where time has stopped</em></p>
          <p><em>Displaying various craters unchanged from the day they were formed.</em></p>
          <p><em>Another lunar spot for quad biking</em></p>
          <p><em>where the famed Valhalla awaits curious geologists</em></p>
        </div>
        <Image 
          src="/media/callisto/callisto-main.jpg"
          alt="Callisto"
          width={500}
          height={500}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>About the same size as Mercury, this moon also might have an underground saltwater ocean. It&apos;s approximately 1,883,000 kilometers (1,170,000 miles) away from Jupiter.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Asgard />
      <Har />
      <Tindr />
      <ValhallaRings />
      <Basin />
    </>
   )
}