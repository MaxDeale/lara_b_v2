'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import styles from '@/styles/contact.module.scss'

export default function Contact() {
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
          <a href="https://society6.com/laraberge" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/shopframe.png" alt="Shop" width={200} height={200} />
          </a>
        </div>
      </div>

      <h2 className={styles.heading}>Get In Touch</h2>

      <div className={styles.contactContainer}>
        <div className={styles.contactDetails} aria-labelledby="contact-info">
          <Image
            className={styles.tree}
            src="/assets/img/treecontact.png"
            alt="Decorative tree illustration"
            width={300}
            height={600}
          />

          <div>
            <h4 id="contact-info">Commission & enquiries</h4>
            <p style={{ fontSize: '1.05rem', marginTop: '0.3rem' }}>Email: <a href="mailto:laraberge@gmail.com">laraberge@gmail.com</a></p>
            <p style={{ marginTop: '0.6rem' }}>Or connect on social media:</p>

            <p>
              <a href="https://web.facebook.com/larabergeillustration" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              {' '}
              <a href="https://www.instagram.com/artbylaraberge/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

