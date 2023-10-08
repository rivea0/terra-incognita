import styles from '../planetPage.module.css'
import Image from 'next/image'
import OlympusMons from './components/olympus-mons'
import Tharsis from './components/tharsis'
import VallesMarineris from './components/valles-marineris'
import Candor from './components/candor'
import Noctis from './components/noctis'
import Nectaris from './components/nectaris'
import Bagnold from './components/bagnold'
import Jezero from './components/jezero'
import SantaCruz from './components/santa-cruz'
import MountSharp from './components/mount-sharp'
import GardenCity from './components/garden-city'
import MurrayButtes from './components/murray-buttes'
import Cydonia from './components/cydonia'
import Sunset from './components/sunset'


export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Mars</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>Was on its way to look like Earth, until fate decided otherwise.</em></p>
          <p><em>Also the future which might await Earth in the long run.</em></p>
          <p><em>Still, under spotlight for the space race — the most coveted territory to conquer.</em></p>
          <p><em>No matter how dead and dusty, outweighing Earth with geographical features bearing incomparable scales.</em></p>
        </div>
        <Image 
          src="/media/mars/PIA05942.gif"
          alt="Mars"
          width={400}
          height={450}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>The Red Planet gets its appearance thanks to iron minerals in its soil that oxidize. It&apos;s about half the size of the Earth, and 228 kilometers (142 miles) away from the Sun.</p>
        <p>Similar to Earth, its axis of rotation is tilted 25 degrees, so you can experience seasons on Mars, but they can be of different lengths. Explore the longest spring that lasts 194 sols (Martian days).</p>
        <p>It has two potato-shaped moons: Phobos and Deimos, named after the horses pulling the chariot of Ares, the Greek god of war.</p>
        <p>Mars also seems to have ancient rivers in its past, there are lake beds, deltas. Other features also indicate floods that might have happened in a distant past.</p>
        <p>With a very thin atmosphere that consists mostly of carbon dioxide, nitrogen and argon, experience a disorienting temperature of about 24°C (75°F) at your feet and 0°C (32°F) at your head.</p>
        <p>Mars is filled with rovers, and it is the most investigated planet after our own home. Fascination with Mars is endless, here are some attractions that you can explore!</p>
        <p>Be careful with dust storms, though, they are pretty much everywhere.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <OlympusMons />
      <Tharsis />
      <VallesMarineris />
      <Candor />
      <Noctis />
      <Nectaris /> 
      <Bagnold />
      <Jezero />
      <SantaCruz />
      <MountSharp />
      <GardenCity />
      <MurrayButtes />
      <Cydonia />
      <Sunset />
    </>
   )
}