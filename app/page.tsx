import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import styles from '@/styles/main.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <Image
          className={styles.logo}
          src="/assets/img/logo1.png"
          alt="Lara Berge Illustrations"
          width={300}
          height={300}
          priority
        />
        <div className={styles.menuContainer}>
          <div className={styles.menuItem1}>
            <Link href="/gallery">
              <Image src="/assets/img/galframe.png" alt="Gallery" width={200} height={200} />
            </Link>
          </div>
          <div className={styles.menuItem2}>
            <Link href="/about">
              <Image src="/assets/img/aboutframe.png" alt="About" width={200} height={200} />
            </Link>
          </div>
          <div className={styles.menuItem3}>
            <Link href="/contact">
              <Image src="/assets/img/contframe.png" alt="Contact" width={200} height={200} />
            </Link>
          </div>
          <div className={styles.menuItem4}>
            <a href="https://society6.com/laraberge" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/img/shopframe.png" alt="Shop" width={200} height={200} />
            </a>
          </div>
          <div className={styles.greyCat}>
            <Image src="/assets/img/greycat.png" alt="" width={200} height={200} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

