'use client'

import { caveat, roboto } from '../../fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BurgerButton from './BurgerButton'

export default function Navbar() {

  const pathname = usePathname(); 

  return (
      <header className="fixed top-0 left-0 z-50  w-full bg-stone-700/90 border-stone-700 border-b-stone-700/75 ">
        <nav aria-label="Global" className="h-16 mx-auto flex max-w-7xl items-center justify-between sm:justify-around p-6 lg:px-8">
          <div className='text-white text-4xl'>
            <Link href="/">
              <p className={caveat.className}>PHOTOSGRAM</p>
            </Link>           
          </div>
          <div className='px-10 mr-32 collapse sm:visible'>
            <Link
              className={`${roboto.className} p-1.5 m-2 text-white rounded-lg  ${
                pathname === '/' ? 'bg-orange-600' : ''
              } hover:bg-yellow-300`}
              href='/'
            >
              Fotos
            </Link>
            <Link
              className={`${roboto.className} p-1.5 m-2 text-white rounded-lg ${
                pathname === '/about' ? 'bg-orange-600' : ''
              } hover:bg-yellow-300`}
              href='/about'
            >
              Photosgram
            </Link>
            <Link
              className={`${roboto.className} p-1.5 m-2 text-white rounded-lg ${
                pathname === '/contact' ? 'bg-orange-600' : ''
              } hover:bg-yellow-300`}
              href='/contact'
            >
              Contacto
            </Link>
          </div> 
          <BurgerButton></BurgerButton>    
        </nav>  
      </header>
  )
}
