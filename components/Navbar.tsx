import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'gallery' | 'contact'
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  return (
    <div className="menu-container">
      <div className="menu-item-1">
        <Link href="/gallery">
          <Image src="/assets/img/galframe.png" alt="Gallery" width={200} height={200} />
        </Link>
      </div>
      <div className="menu-item-2">
        {currentPage === 'home' ? (
          <Image src="/assets/img/aboutframe.png" alt="About" width={200} height={200} />
        ) : (
          <Link href="/">
            <Image src="/assets/img/homeframe.png" alt="Home" width={200} height={200} />
          </Link>
        )}
      </div>
      <div className="menu-item-3">
        <Link href="/contact">
          <Image src="/assets/img/contframe.png" alt="Contact" width={200} height={200} />
        </Link>
      </div>
      <div className="menu-item-4">
        {currentPage === 'about' ? (
          <Image src="/assets/img/aboutframe.png" alt="About" width={200} height={200} />
        ) : (
          <Link href="/about">
            <Image src="/assets/img/aboutframe.png" alt="About" width={200} height={200} />
          </Link>
        )}
      </div>
      {currentPage === 'home' && (
        <div className="menu-item-4">
          <a href="https://society6.com/laraberge" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/shopframe.png" alt="Shop" width={200} height={200} />
          </a>
        </div>
      )}
      {currentPage === 'about' && (
        <div className="menu-item-2">
          <Link href="/about">
            <Image src="/assets/img/shopframe.png" alt="Shop" width={200} height={200} />
          </Link>
        </div>
      )}
      {currentPage === 'about' && (
        <div id="cat-nav" className="menu-item-3">
          <Image
            src="/assets/img/catbooks.png"
            alt=""
            width={140}
            height={140}
            style={{ width: '70%' }}
          />
        </div>
      )}
      {currentPage === 'home' && (
        <div id="grey-cat" className="menu-item-5">
          <Image src="/assets/img/greycat.png" alt="" width={200} height={200} />
        </div>
      )}
    </div>
  )
}

