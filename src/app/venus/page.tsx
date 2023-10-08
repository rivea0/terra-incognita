import styles from '../planetPage.module.css'
import Image from 'next/image'
import MaxwellAndCleopatra from './components/maxwell-cleopatra'
import Sacajawea from './components/sacajawea'
import Sachs from './components/sachs-patera'
import GulaMons from './components/gula-mons'
import Trio from './components/trio'
import IdunnMons from './components/idunn-mons'
import MaatMons from './components/maat-mons'
import Mead from './components/mead'
import Eistla from './components/eistla'
import Aurelia from './components/aurelia'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Venus</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>Our twin in size</em></p>
          <p><em>Yet being the complete opposite</em></p>
          <p><em>A sizzling hot planet where the Sun rises in the west</em></p>
          <p><em>and sets in the east</em></p>
        </div>
        <Image 
          src="/media/venus/PIA10124-venus.jpg"
          alt="Venus"
          width={500}
          height={500}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>Have you ever wished that <em>this day would last longer</em>? Well, you can have your wish fulfilled in Venus, where a day longer than a year<sup>*</sup>.</p>
        <p>The morning star, the evening star; no matter how peaceful it might look, Venus is an angry goddess. A thick carbon dioxide atmosphere, sulfuric acid clouds all around, and filled with volcanic activities, Earth&apos;s fiery twin is not easy to explore unprepared.</p>
        <p>Temperatures can be in the range of 475°C (900°F), so don&apos;t forget to take extreme caution.</p>
        <p>Have a once-in-a-lifetime experience seeing the Sun rise from the west, and set from the east. Also, if you want to catch a glimpse of the sunset, well, you&apos;re in good luck. From sunrise to sunset, the whole process takes about 117 Earth days! Remember that romantic moment you wanted to last forever? Now it can.</p>
        <p>There are so many places to see in Venus, take a look!</p>
        <br />
        <p><sup>*</sup>A day is 243 Earth days long, while a year (a trip around the Sun) takes 225 Earth days long.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <MaxwellAndCleopatra />
      <Sacajawea />
      <Sachs />
      <GulaMons />
      <Trio />
      <IdunnMons />
      <MaatMons />
      <Mead />
      <Eistla />
      <Aurelia />
    </>
   )
}