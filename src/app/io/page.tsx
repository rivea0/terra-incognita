import styles from '../planetPage.module.css'
import Image from 'next/image'
import Pele from './components/pele'
import Prometheus from './components/prometheus'
import Culann from './components/culann'
import Tupan from './components/tupan'
import Loki from './components/loki'


export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Io</h1>
      <div className={styles.hero}>
        <div>
          <p>poem line one</p>
          <p>poem line two</p>
          <p>poem line three</p>
        </div>
        <Image 
          src="/media/io/PIA02852.jpg"
          alt="Io and Jupiter"
          width={500}
          height={350}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>422,000 kilometers (262,000 miles) away from Jupiter, Io is a fascinating site for those who can&apos;t stand a stable life. Sulfur dioxide is in abundance, and any impact crater can be filled with molten lava anytime.</p>
        <p>Named after a mortal woman transformed into a cow by Jupiter&apos;s wife Juno in Roman mythology, there is a lot to explore on Io for those who dare.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Pele />
      <Prometheus />
      <Culann />
      <Tupan />
      <Loki />
    </>
   )
}