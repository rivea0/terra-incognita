import styles from '../planetPage.module.css'
import Image from 'next/image'
import Tycho from './components/tycho'
import Tranquility from './components/tranquility'
import Copernicus from './components/copernicus'
import Aristarchus from './components/aristarchus'
import Orientale from './components/orientale'
import Footprint from './components/footprint'
import FarSide from './components/far-side'
import SouthPoleAitken from './components/south-pole'
import Earth from './components/earth'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>The Moon</h1>
      <div className={styles.hero}>
        <div>
          <p>poem line one</p>
          <p>poem line two</p>
          <p>poem line three</p>
        </div>
        <Image 
          src="/media/the-moon/PIA02441-earth-and-moon.jpg"
          alt="Earth and the Moon"
          width={500}
          height={350}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>With a rich impact history, our one and only Moon is where you can go to remind yourself that everyone (or, everything) has scars. So many craters, so many places to explore!</p>
        <p>But because of its thin exosphere, you need a special spacesuit to breathe.</p>
        <p>The temperatures can also be as high as 127°C (260°F), and as low as -173°C (-280°F).</p>
        <p>Once it was believed that the Moon was all dry, but recently we have discovered ice water in the permanently shadowed regions of the lunar poles — which also means that our discovery of the Moon is not over! Take a look at some of the interesting sites.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Tycho />
      <Tranquility />
      <Copernicus />
      <Aristarchus />
      <Orientale />
      <Footprint />
      <FarSide />
      <SouthPoleAitken />
      <Earth />
    </>
   )
}