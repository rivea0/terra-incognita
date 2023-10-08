import styles from '../planetPage.module.css'
import GreatRedSpot from './components/red-spot'
import Auroras from './components/auroras'
import SouthPole from './components/south-pole'
import Cyclones from './components/cyclones'
import Clouds from './components/clouds'
import Moons from './components/moons'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Jupiter</h1>
      <div className={styles.hero}>
        <div>
          <p>poem line one</p>
          <p>poem line two</p>
          <p>poem line three</p>
        </div>
        <video autoPlay loop muted className={styles.mainVisual} width={500} height={300}>
          <source src="/media/jupiter/PIA22906.mp4" type="video/mp4" />
        </video>
      </div>
      <hr />
      <div className={styles.overview}>
        <p>With no surface to land on, and an atmosphere made up mostly of hydrogen and helium, Jupiter still has a lot to offer.</p>
        <p>With a radius of 69,911 kilometers (43,440.7 miles), it is 11 times wider than the Earth.</p>
        <p>While a day lasts 10 hours, and no seasons occur because of as it mostly spins upright with a tilt of just 3 degrees, there is still plenty to do in Jupiter.</p>
        <p>Its fast rotation and winds moving in opposite directions result in jet streams, separating the bands.</p>
        <p>See the clouds of ammonia and water, discover patterns like you never had before. </p>
        <p>Experience three different layers of clouds, go through the outer ones made of ammonia ice, further through the ones that are made of ammonium hydrosulfide crystals, then find water ice and vapor at the innermost layer.</p>
        <p>You can also explore more than 90 moons, especially the most popular four Galilean satellites.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <GreatRedSpot />
      <Auroras />
      <SouthPole />
      <Cyclones />
      <Clouds />
      <Moons />
    </>
   )
}