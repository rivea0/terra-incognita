import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image src="/terra-incognita-logo.png" alt="Terra Incognita logo" width={50} height={50} />
          <h1>Terra Incognita</h1>
        </div>
      </Link>
      <Link href="/about">About</Link>
    </header>
  )
}
