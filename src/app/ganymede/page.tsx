import styles from '../planetPage.module.css'
import Image from 'next/image'
import ArbelaSulcus from './components/arbela'
import Nergal from './components/nergal'
import Khensu from './components/khensu'
import IceHills from './components/ice-hills'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Ganymede</h1>
      <div className={styles.hero}>
        <div>
          <p>poem line one</p>
          <p>poem line two</p>
          <p>poem line three</p>
        </div>
        <Image 
          src="/media/ganymede/PIA02862.jpg"
          alt="Ganymede and Jupiter"
          width={500}
          height={500}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>Having its own magnetic field, Ganymede is not a moon that is to be underestimated. This icy moon with its possible underground saltwater ocean makes a nice destination where you can even come across life.</p>
        <p>Larger than Mercury, it is 1.07 million kilometers (665,000 miles) away from Jupiter, spend a day in Ganymede that lasts for almost a week.<sup>*</sup></p>
        <br />
        <p><sup>*</sup>The length of day is 7.155 Earth days.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <ArbelaSulcus />
      <Nergal />
      <Khensu />
      <IceHills />
    </>
   )
}