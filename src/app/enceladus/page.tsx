import styles from '../planetPage.module.css'
import Image from 'next/image'
import Plume from './components/plume'
import Baghdad from './components/baghdad'
import Damascus from './components/damascus'
import Snowman from './components/snowman'
import Fractures from './components/fractures'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Enceladus</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>A ball of ice</em></p>
          <p><em>encapsulating surprises under its surface</em></p>
        </div>
        <Image 
          src="/media/enceladus/PIA21344.gif"
          alt="Enceladus"
          width={500}
          height={400}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>238,000 kilometers (148,000 miles) away from Saturn, Enceladus offers a unique experience for travelers.</p>
        <p>While it takes its name from a giant, it is relatively small — about 500 kilometers (310 miles) across.</p>
        <p>It can be -201°C (-330°F) on the surface, so make sure to bring the right equipment.</p>
        <p>There are icy water eruptions, water jets, that makes an amazing sight and an enjoyable experience for Enceladus travelers that can rival those of an amusement park.</p>
        <p>Take a look at what this world with an ocean of liquid water under its shell might have to offer.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Plume />
      <Baghdad />
      <Damascus />
      <Snowman />
      <Fractures />
    </>
   )
}