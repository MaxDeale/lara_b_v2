import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import styles from '@/styles/about.module.scss'

export default function About() {
  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.menuItem1}>
          <Link href="/gallery">
            <Image src="/assets/img/galframe.png" alt="Gallery" width={200} height={200} />
          </Link>
        </div>
        <div className={styles.menuItem2}>
          <Link href="/">
            <Image src="/assets/img/homeframe.png" alt="Home" width={200} height={200} />
          </Link>
        </div>
        <div className={styles.menuItem3}>
          <Link href="/contact">
            <Image src="/assets/img/contframe.png" alt="Contact" width={200} height={200} />
          </Link>
        </div>
        <div className={styles.menuItem4}>
          <Link href="/about">
            <Image src="/assets/img/aboutframe.png" alt="About" width={200} height={200} />
          </Link>
        </div>
        <div className={styles.menuItem2}>
          <Link href="/about">
            <Image src="/assets/img/shopframe.png" alt="Shop" width={200} height={200} />
          </Link>
        </div>
        <div className={styles.catNav}>
          <Image
            src="/assets/img/catbooks.png"
            alt=""
            width={200}
            height={200}
            style={{ width: '70%' }}
          />
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <div>
          <Image
            src="/assets/img/PORTRAIT2.jpg"
            alt="Lara Berge"
            width={700}
            height={700}
          />
        </div>
        <div className={styles.aboutInfo}>
          Lara Berge is an artist and illustrator who resides in Cape Town, South
          Africa.
          <br />
          <br />
          ​She describes herself as a creative, crazy cat lady, a lover of all
          things whimsical and fantastical and loves a good cup of tea or coffee.
          <br />
          <br />
          ​ She plans to write and illustrate children&apos;s books in the near future
          but for now she will keep putting her little characters and twisted
          trees out into the universe.
        </div>
      </div>

      <Footer />
    </>
  )
}

