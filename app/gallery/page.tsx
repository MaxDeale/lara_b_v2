'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import styles from '@/styles/gallery.module.scss'

// Use images from the `port2` folder. They have been renamed to numeric filenames
// (1.jpg, 2.jpg, 3.jpg, ...). The gallery will generate the image list from the
// image count so you don't need to manually maintain filenames here.
const IMAGE_COUNT = 40
const GALLERY_IMAGES = Array.from({ length: IMAGE_COUNT }, (_, i) => `${i + 1}.jpg`)

// Titles for images - can be customized per image
const IMAGE_TITLES: Record<string, string> = {
  'girlstar.jpg': 'Girl With Star',
  'spellmaidn-min.jpg': 'Spell Maiden',
  'windgal-1-min.jpg': 'Wind Gal',
  'reindeer-min.jpg': 'Reindeer',
  'beargrlpicnic-min.jpg': 'Bear picnic',
  'blkwmanchairpsd-min.jpg': 'Woman Chair Sport',
  'catwoman.jpg': 'Cat Lady',
  'octo.jpg': 'Octopus With Lantern',
  'cauldron.jpg': 'Witch With Cauldron',
  'realmook.jpg': 'Ghost Lady',
  'forestyshloo.jpg': 'The Secret Circus',
  'womanchair.jpg': 'Woman On Chair With Spider',
  'girldog.jpg': 'Girl With Dog',
  'dragon1.jpg': 'Fantasy Dragon',
  'gnomii.jpg': 'Gnome Guy',
  'librarylady.jpg': 'The Library Lady',
  'pixie.jpg': 'The Pixie Lady',
  'girlchair.jpg': 'The Girl In The Chair',
  'nakdblacknwhitelady.jpg': 'Black And White Girl',
  'spookgirl.jpg': 'Spooky Girl',
  'springwoman.jpg': 'Spring Woman',
  'catstar.jpg': 'Cat Star',
  'wmnghost.jpg': 'Woman Ghost',
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return

    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : GALLERY_IMAGES.length - 1)
    } else {
      setSelectedImage(selectedImage < GALLERY_IMAGES.length - 1 ? selectedImage + 1 : 0)
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev')
      } else if (e.key === 'ArrowRight') {
        navigateImage('next')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage])

  const getImageTitle = (filename: string) => {
    return IMAGE_TITLES[filename] || filename.replace(/\.(jpg|png)$/i, '').replace(/[-_]/g, ' ')
  }

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

      <section id={styles.gallery} className={styles.gallery}>
        <div className={styles.galIntro}>
          <Image src="/assets/img/galcat.png" alt="" width={100} height={100} />
          <h2 className={styles.heading}>Gallery</h2>
        </div>

        <div className={styles.galleryContainer}>
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image}
              className={styles.galleryItem}
              onClick={() => handleImageClick(index)}
            >
              <Image
                className={styles.portPic}
                src={`/assets/img/port2/${image}`}
                alt={getImageTitle(image)}
                width={250}
                height={380}
                loading="lazy"
              />
              {/* title overlay removed per request (titles should no longer show) */}
            </div>
          ))}
        </div>
      </section>

      {selectedImage !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeLightbox}>
              ×
            </button>
            <button
              className={`${styles.navButton} ${styles.prev}`}
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              ‹
            </button>
            <Image
              src={`/assets/img/port2/${GALLERY_IMAGES[selectedImage]}`}
              alt={getImageTitle(GALLERY_IMAGES[selectedImage])}
              width={1200}
              height={1600}
              priority
            />
            <button
              className={`${styles.navButton} ${styles.next}`}
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

