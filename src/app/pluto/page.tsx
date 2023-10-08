import styles from '../planetPage.module.css'
import Heart from './components/pluto-heart'
import Snowcaps from './components/snowcaps'
import Spider from './components/spider'
import FrozenPond from './components/frozen-pond'
import ChaosRegio from './components/chaos'
import Zigzags from './components/zigzags'
import TartarusDorsa from './components/tartarus'
import FrozenCanyons from './components/frozen-canyons'
import IcyMountainsPlains from './components/icy-mountains-plains'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Pluto</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>Demoted but far from boring</em></p>
          <p><em>The largest ski resort of the solar system</em></p>
          <p><em>Open the whole year round</em></p>
        </div>
        <video autoPlay loop muted className={styles.mainVisual} width={500} height={400}>
          <source src="/media/pluto/PIA19873_FLYTHROUGH_ANIMATION_V5.mp4" type="video/mp4" />
        </video>
      </div>
      <hr />
      <div className={styles.overview}>
        <p>It was our ninth planet once, a long ago when we little knew about what a planet even was. We still have debates, but one thing we can agree now is that Pluto is a dwarf planet, located in the Kuiper Belt, the other region of our neighborhood.</p>
        <p>With an average temperature of -232°C (-387°F), Pluto is not just an ordinary world. It has its own quirks, like having a both elliptical and tilted orbit, spinning from east to west like Venus and Uranus, having its axis of rotation tilted 57 degrees.</p>
        <p>It also has a companion, Charon, its biggest moon that never leaves Pluto&apos;s side, so much so that they are called a double planet.</p>
        <p>There are a lot of interesting features like mountains and valleys on Pluto, so take a look!</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Heart />
      <Snowcaps />
      <Spider />
      <FrozenPond />
      <ChaosRegio />
      <Zigzags />
      <TartarusDorsa />
      <FrozenCanyons />
      <IcyMountainsPlains />
    </>
   )
}