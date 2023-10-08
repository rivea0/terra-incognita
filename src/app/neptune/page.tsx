import styles from '../planetPage.module.css'
import Image from 'next/image'
import GreatDarkSpot from './components/great-dark-spot'
import NeptuneClouds from './components/neptune-clouds'
import SmallDarkSpot from './components/small-dark-spot'
import RingsNeptune from './components/rings-neptune'

export default function Page() {
  return (
    <>
      <h1 className={styles.name}>Neptune</h1>
      <div className={styles.hero}>
        <div className={styles.poem}>
          <p><em>Big and blue</em></p>
          <p><em>With an Earth-sized storm</em></p>
          <p><em>Ideal to gaze at from its moon Triton, where icy geysers will burst at any time</em></p>
        </div>
        <Image 
          src="/media/neptune/neptune-main.jpg"
          alt="Neptune"
          width={500}
          height={500}
        />
      </div>
      <hr />
      <div className={styles.overview}>
        <p>Taking its name from the Roman god of the sea, Neptune is a beautiful blue world that you cannot miss visiting.</p>
        <p>Sunlight needs 4 hours to travel to Neptune, and this ice giant is very dense. It is the windiest world in our neighborhood.</p>
        <p>Since it does not have a solid surface, there is nowhere you can land on, but Neptune still makes an interesting place to visit.</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Attractions</h2>
      <GreatDarkSpot />
      <NeptuneClouds />
      <SmallDarkSpot />
      <RingsNeptune />
    </>
   )
}