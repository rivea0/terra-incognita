import styles from '../planetPage.module.css'
import CalorisBasin from './components/caloris-basin'
import PantheonFossae from './components/pantheon-fossae'
import ApollodorusCrater from './components/apollodorus-crater'
import MunchSanderPoe from './components/munch-sander-poe'
import CalorisMontes from './components/caloris-montes'
import Rembrandt from './components/rembrandt'
import Rachmaninoff from './components/rachmaninoff'
import Raditladi from './components/raditladi'
import Tolstoj from './components/tolstoj'
import Seuss from './components/seuss'
import Eminescu from './components/eminescu'
import CarnegieRupes from './components/carnegie'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Mercury</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>Smallest and most cratered planet of the Solar System</em></p>
          <p><em>A brutish place of hellish days and freezing nights</em></p>
        </div>
        <video autoPlay loop muted className={styles.mainVisual}>
          <source src="/media/mercury/mercury-page-main.mov" type="video/mp4" />
        </video>
      </div>
      <hr />
      <div className={styles.overview}>
        <p>Visit the smallest<sup>*</sup> and fastest<sup>**</sup> planet in our solar system. You&apos;ll be <em>very</em> close to the Sun, so you&apos;ll need very strong eye protection!</p>
        <p>During the daytime, it can get as hot as 430°C (800°F). There won&apos;t be an atmosphere to retain the heat, so at night, it might even get as cold as -180°C (-290°F).</p>
        <p>Mercury also does not experience seasons since it spins mostly upright (it has a tilted axis of just 2 degrees!)</p>
        <p>Better start your journey when the Mercury gets closer to Earth, it might get as close as 77 million kilometers (48 million miles). But if you miss it, its distance to Earth might be 222 million kilometers (138 million miles) away.</p>
        <p>With no moons and no rings, it may look like Mercury does not have much to offer, but there are so many impact craters you can explore on its grayish brown surface! Take a look!</p>
        <br />
        <p><sup>*</sup>slightly larger than our Moon.</p>
        <p><sup>**</sup>travels at almost 47 kilometers (29 miles) per second.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <CalorisBasin />
      <PantheonFossae />
      <ApollodorusCrater />
      <MunchSanderPoe />
      <CalorisMontes />
      <Rembrandt />
      <Rachmaninoff />
      <Raditladi />
      <Tolstoj />
      <Seuss />
      <Eminescu />
      <CarnegieRupes />
    </>
  )
}