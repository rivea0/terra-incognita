import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made with &#128156; as part of the <Link href="https://www.spaceappschallenge.org/">NASA International Space Apps Challenge 2023</Link>.</p>
      <p>The source of this website can be found on <Link href="https://github.com/rivea0/terra-incognita/">GitHub</Link>.</p>
      <p style={{ fontStyle: 'italic', fontSize: 'x-small', opacity: '0.5' }}>A gentle reminder that this is not a complete project, but represents our first ever hackathon experience, prepared and created in less than 2 days.</p>
    </footer>
  )
}