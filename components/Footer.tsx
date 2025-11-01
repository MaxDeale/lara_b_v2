import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="main-footer">
      <div>
        <p>Copyright 2021 &copy; Lara Berge</p>
      </div>
      <div>
        <Image
          src="/assets/img/shroom1.png"
          alt=""
          width={200}
          height={200}
        />
      </div>
    </footer>
  )
}

