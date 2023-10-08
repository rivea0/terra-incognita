import styles from '../planetPage.module.css'
import Link from 'next/link'
import Barringer from './components/barringer'
import GrandCanyon from './components/grand-canyon'
import MachuPicchu from './components/machu-picchu'
import Everest from './components/everest'
import Pamukkale from './components/pamukkale'
import DeadSea from './components/dead-sea'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Earth</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>Home sweet home</em></p>
          <p><em>The only spot in the solar system where you won&apos;t need a space suit</em></p>
        </div>
        <video autoPlay loop muted className={styles.mainVisual}>
          <source src="/media/earth/PIA00114.mp4" type="video/mp4" />
        </video>
      </div>
      <hr />
      <div className={styles.overview}>
        <p>Want to stay at home instead? Our own planet has lots to offer.</p>
        <p>Filled with liquid water on the surface, life here began approximately 3.8 billion years ago.</p>
        <p>It is about 150 million kilometers (93 million miles) away from the Sun, being the third planet from the Sun in our solar system.</p>
        <p>We have seasons thanks to Earth&apos;s axis of rotation being tilted 23.4 degrees. </p>
        <p>Our atmosphere is 78% nitrogen, 21% oxygen, and 1% other gases.</p>
        <p>We have the privilege of being the planet with only a single moon, which itself is filled with remarkable sights.</p>
        <p>Our climate is changing due to human activity, and we have compelling evidence supporting it: <Link href="https://climate.nasa.gov/evidence">https://climate.nasa.gov/evidence</Link>.</p>
        <p>Still, our home planet is filled with wonders. Here are only some of them, take a look!</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Barringer />
      <GrandCanyon />
      <MachuPicchu />
      <Everest />
      <DeadSea />
      <Pamukkale />
    </>
   )
}