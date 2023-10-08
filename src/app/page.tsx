import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <h2 className={styles.h1}>
          Explore a poetic journey through our cosmic neighborhood.
        </h2>
        <Image 
          src="/media/the-solar-system/PIA01341~medium-solar-system.jpg" 
          alt="Montage of the solar system"
          width={523}
          height={640}
          className={styles.solarSystemImg}
        />
      </div>
      <div className={styles.container}>
        <h2>Choose a destination</h2>
        <div className={styles.destinations}>
          <Link href="/mercury">
            <div>
              <h3>Mercury</h3>
              <Image src="/media/mercury/mercury-main.jpg" alt="Mercury" width={200} height={200} />
              <p className={styles.line}><b>See the Sun more than three times as large and seven times brighter</b></p>
            </div>
          </Link>
          <Link href="/venus">
            <div>
              <h3>Venus</h3>
              <Image src="/media/venus/venus-main.jpg" alt="Venus" width={200} height={200} />
              <p className={styles.line}><b>Visit the <em>hottest</em> planet in our solar system</b></p>
            </div>
          </Link>
          <Link href="/earth">
            <div>
              <h3>Earth</h3>
              <Image src="/media/earth/earth-main.jpg" alt="Earth" width={200} height={200} />
              <p className={styles.line}><b>Explore our home planet, a pale blue dot, filled with life</b></p>
            </div>
          </Link>
          <Link href="/the-moon">
            <div>
              <h3>The Moon</h3>
              <Image src="/media/the-moon/PIA00302-main.jpg" alt="The Moon" width={175} height={175} />
              <p className={styles.line}><b>Explore the only place in our solar system where humans have been other than the Earth</b></p>
            </div>
          </Link>
          <Link href="/mars">
            <div>
              <h3>Mars</h3>
              <Image src="/media/mars/mars-main.jpg" alt="Mars" width={200} height={200} />
              <p className={styles.line}><b>Explore the wondrous desert world that feels very familiar</b></p>
            </div>
          </Link>
          <Link href="/jupiter">
            <div>
              <h3>Jupiter</h3>
              <Image src="/media/jupiter/jupiter-main.jpg" alt="Jupiter" width={225} height={225} />
              <p className={styles.line}><b>Experience the shortest day on the solar system, with beautiful sights of the largest planet in our neighborhood</b></p>
            </div>
          </Link>
          <Link href="/ganymede">
            <div>
              <h3>Ganymede</h3>
              <Image src="/media/ganymede/ganymede-main.jpg" alt="Ganymede" width={200} height={200} />
              <p className={styles.line}><b>Explore the largest moon in our solar system that comes with its own auroras</b></p>
            </div>
          </Link>
          <Link href="/callisto">
            <div>
              <h3>Callisto</h3>
              <Image src="/media/callisto/callisto-main.jpg" alt="Callisto" width={200} height={200} />
              <p className={styles.line}><b>Explore a world of craters like never before</b></p>
            </div>
          </Link>
          <Link href="/io">
            <div>
              <h3>Io</h3>
              <Image src="/media/io/PIA02309-io-main.jpg" alt="Io" width={150} height={150} />
              <p className={styles.line}><b>Visit the most volcanically active world in our solar system, where the surface is never steady</b></p>
            </div>
          </Link>
          <Link href="/europa">
            <div>
              <h3>Europa</h3>
              <Image src="/media/europa/europa-main2.jpg" alt="Europa" width={200} height={200} />
              <p className={styles.line}><b>Visit the most exciting destination in our solar system that might be filled with life</b></p>
            </div>
          </Link>
          <Link href="/saturn">
          <div>
            <h3>Saturn</h3>
            <Image src="/media/saturn/PIA02225-main.jpg" alt="Saturn" width={200} height={200} />
            <p className={styles.line}><b>Explore the crown jewel of our solar system</b></p>
          </div>
          </Link>
          <Link href="/titan">
            <div>
              <h3>Titan</h3>
              <Image src="/media/titan/PIA11603-main-titan.jpg" alt="Titan" width={200} height={200} />
              <p className={styles.line}><b>Discover a land of rivers and lakes — all unique, all methane, yet familiar</b></p>
            </div>
          </Link>
          <Link href="/enceladus">
            <div>
              <h3>Enceladus</h3>
              <Image src="/media/enceladus/PIA17182-snowball.jpg" alt="Enceladus" width={200} height={200} />
              <p className={styles.line}><b>Explore everyone&apos;s favorite snowball in our neighborhood</b></p>
            </div>
          </Link>
          <Link href="/uranus">
            <div>
              <h3>Uranus</h3>
              <Image src="/media/uranus/uranus-main.jpg" alt="Uranus" width={200} height={200} />
              <p className={styles.line}><b>Explore the real pale blue dot, an ice giant that seems to enjoy going sideways</b></p>
            </div>
          </Link>
          <Link href="/neptune">
            <div>
              <h3>Neptune</h3>
              <Image src="/media/neptune/neptune-main.jpg" alt="Neptune" width={200} height={200} />
              <p className={styles.line}><b>Visit the most distant planet in the neighborhood where each season lasts more than 40 years</b></p>
            </div>
          </Link>
          <Link href="/pluto">
            <div>
              <h3>Pluto</h3>
              <Image src="/media/pluto/pluto-main.jpg" alt="Pluto" width={200} height={200} />
              <p className={styles.line}><b>Explore everyone&apos;s favorite world that has been done wrong many times</b></p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
