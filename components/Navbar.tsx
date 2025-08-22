'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { id: 1, label: 'Home', tag: '#home' },
  { id: 2, label: 'Fasilitas', tag: '#fasilitas' },
  { id: 3, label: 'Kontak', tag: '#kontak' }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 flex h-[100px] w-full items-center justify-between bg-red-300 px-32 ${isScrolled ? 'glassmorphic' : 'bg-transparent'}`}
    >
      <Image
        src='/images/logo-kos-ibu-ami.webp'
        alt='logo-kos-ibu-ami'
        width={58}
        height={58}
        className={`rounded-full ${isScrolled && 'shadow-2xl'}`}
      />
      <ul className='flex gap-16'>
        {NAV_LINKS.map(item => {
          return (
            <li
              key={item.id}
              className='text-wood hover:text-coffee font-semibold transition-all duration-150'
            >
              <Link href={item.tag}>{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
