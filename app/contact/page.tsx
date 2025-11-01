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
      </div>

      <h2 className={styles.heading}>Get In Touch</h2>

      <div className={styles.contactContainer}>
        <div>
          <Image
            className={styles.tree}
            src="/assets/img/treecontact.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <form
          action="https://formsubmit.co/laraberge@gmail.com"
          className={styles.contactForm}
          method="POST"
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Enter your name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              className={styles.message}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button className={styles.formSubmit} type="submit">
            Submit
          </button>
        </form>

        <div className={styles.contactDetails}>
          <h4>For any queries relating to commissions please email</h4>
          <p style={{ fontSize: '1.8rem' }}>laraberge@gmail.com</p>
          <h4>Or use the contact form</h4>

          <p>
            <a href="https://web.facebook.com/larabergeillustration" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-4x"></i>
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/artbylaraberge/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-4x"></i>
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

