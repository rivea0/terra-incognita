import styles from '../planetPage.module.css'
import Image from 'next/image'
import RedBands from './components/red-bands'
import Pwyll from './components/pwyll'
import Freckles from './components/freckles'
import Basin from '../europa/components/basin'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Europa</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>Makes the most of the gravitational tugs it experiences</em></p>
          <p><em>A mystery awaits</em></p>
          <p><em>Who knows what is lurking under its icy layers?</em></p>
        </div>
        <Image 
          src="/media/europa/PIA19048-europa-main.jpg"
          alt="Europa"
          width={500}
          height={400}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>Europa is the place to be, no matter if you like an icy world or not. With a saltwater ocean as deep as 60 to 150 kilometers (40 to 100 miles) beneath its shell, which is 15 to 25 kilometers (10 to 15 miles) thick, Europa also has some of the building blocks of life like carbon, oxygen, hydrogen, nitrogen, phosphorus, and sulfur.</p>
        <p>It is 671,000 kilometers (417,000 miles) away from Jupiter and almost the size of our Moon. But compared to other moons, Europa has only a small number of large impact craters, and it might indicate that its surface is indeed young.</p>
        <p>Better start practicing your figure skating skills before your visit, Europa&apos;s surface is a perfect place to skate. Take a look at some of the attractions that it has to offer.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <RedBands />
      <Pwyll />
      <Freckles />
      <Basin />
    </>
   )
}