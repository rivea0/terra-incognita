import styles from '../planetPage.module.css'
import Image from 'next/image'
import Dunes from './components/dunes'
import KissingLakes from './components/kissing-lakes'
import Lakes from './components/lakes'
import Xanadu from './components/xanadu'
import KrakenMare from './components/kraken-mare'
import LigeiaMare from './components/ligeia-mare'
import Canyons from './components/canyons'
import Vortex from './components/vortex'
import Halo from './components/halo'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Titan</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>A rich organic moon</em></p>
          <p><em>abounding in liquid</em></p>
        </div>
        <Image 
          src="/media/titan/PIA06080.gif"
          alt="Titan"
          width={500}
          height={500}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>The second-largest moon (after Ganymede) in our neighborhood, Titan is definitely a must-see.</p>
        <p>While you might not need a pressure suit to walk on its surface because of the dense nitrogen atmosphere, an oxygen mask is something you definitely need to bring with you.</p>
        <p>It is about 1.2 million kilometers (759,000 miles) away from Saturn. It can also get as cold as -179°C (-290°F).</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Dunes />
      <KissingLakes />
      <Lakes />
      <Xanadu />
      <KrakenMare />
      <LigeiaMare />
      <Canyons />
      <Vortex />
      <Halo />
    </>
   )
}