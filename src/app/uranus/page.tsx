import styles from '../planetPage.module.css'
import Image from 'next/image'
import Rings from './components/rings-uranus'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Uranus</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>Sui generis</em></p>
          <p><em>Currently the coldest and bearing the most tilted axis</em></p>
        </div>
        <Image 
          src="/media/uranus/PIA00143~orig.jpg"
          alt="Uranus"
          width={400}
          height={500}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>With large amounts of methane and weirdly rotating almost at a 90-degree angle, Uranus seems distant, and indeed it is. It is 2.9 billion kilometers (1.8 billion miles) away from the Sun, and has the most extreme seasons in our neighborhood. While the half of it gets direct sunshine, the other half goes through a winter that lasts for 21 years.</p>
        <p>Uranus also rotates from east to west in the opposite direction, just like Venus.</p>
        <p>One of the most striking features is its ring system. The inner nine rings are mostly dark gray. The outer ones are reddish and blue.</p>
        <p>There is nowhere to land, but you can still enjoy Uranus&apos; weirdness, there is still much to discover. In the meantime, you can enjoy its ring structure, just tell your spacecraft pilot to get a bit closer to them.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Rings />
    </>
   )
}