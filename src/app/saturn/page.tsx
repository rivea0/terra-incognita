import styles from '../planetPage.module.css'
import Image from 'next/image'
import Ring from './components/ring'
import Auroras from './components/saturn-auroras'
import Hexagon from './components/hexagon'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Saturn</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>The Lord of the Rings of our solar system</em></p>
          <p><em>which you can admire from its retinue of moons</em></p>
        </div>
        <Image 
          src="/media/saturn/PIA17474.jpg"
          alt="Saturn"
          width={500}
          height={300}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>Saturn&apos;s distinct features make it one of the most fascinating and beautiful spots to visit.</p>
        <p>With the most amazing ring structure, a journey to this gas giant is the experience to have in a lifetime.</p>
        <p>With its axis tilted by 26.73 degrees, Saturn has seasons. It also has many moons, more than 140.</p>
        <p>It is so light that its density is less than water.</p>
        <p>Even just seeing its ring from a little afar is worth to come all the way here. The ring structure consists of pieces of comets and asteroids, all caught up in Saturn&apos;s gravity. Their sizes vary, while some of them can be the size of a house, others are of the size of a mountain. It is only safe to watch from a distance, but nothing keeps you from getting closer to Saturn, just go through the Cassini division gap, and then into the gas giant itself.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <Ring />
      <Auroras />
      <Hexagon />
    </>
   )
}