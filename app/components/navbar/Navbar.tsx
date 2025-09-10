'use client'

import { caveat, roboto } from '../../fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BurgerButton from './BurgerButton'

export default function Navbar() {

  const pathname = usePathname(); 

  return (
      <header className="fixed top-0 left-0 z-50 pb-4 w-full bg-stone-700/90 ">
        <nav aria-label="Global" className="h-16 mx-auto flex max-w-7xl items-center justify-between sm:justify-around p-6 lg:px-8">
          <div className='text-white text-4xl'>
            <Link href="/">
              <p className={caveat.className}>PHOTOSGRAM</p>
            </Link>           
          </div>
          <div className='flex justify-between px-10 collapse sm:visible'>
            <Link
              className={`${roboto.className} p-1.5 m-2 text-white rounded-lg  ${
                pathname === '/' ? 'bg-orange-600' : ''
              } hover:bg-amber-400`}
              href='/'
            >
              Fotos
            </Link>
            <Link
              className={`${roboto.className} p-1.5 m-2 text-white rounded-lg ${
                pathname === '/about' ? 'bg-orange-600' : ''
              } hover:bg-amber-400`}
              href='/about'
            >
              Photosgram
            </Link>
            <Link
              className={`${roboto.className} p-1.5 m-2 text-white rounded-lg ${
                pathname === '/contact' ? 'bg-orange-600' : ''
              } hover:bg-amber-400`}
              href='/contact'
            >
              Contacto
            </Link>
          </div> 
          <BurgerButton></BurgerButton>    
        </nav>
        
        {/* Wave effect underlines */}
        <div className="absolute -bottom-8 left-0 w-full overflow-hidden h-12">
          {/* First cyan wave with color oscillation */}
          <svg
            className="absolute bottom-9 w-full h-8"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,20 600,100 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z"
              fill="#155e75"
              className="animate-pulse"
              style={{
                animation: 'colorShiftCyan 4s ease-in-out infinite alternate'
              }}
            />
          </svg>
          
          {/* Second sky wave with color oscillation */}
          <svg
            className="absolute bottom-6 w-full h-8"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C200,80 500,20 800,70 C950,90 1100,30 1200,50 L1200,120 L0,120 Z"
              fill="#0c4a6e"
              style={{
                animation: 'colorShiftSky 5s ease-in-out infinite alternate'
              }}
            />
          </svg>
          
          {/* First orange wave with color oscillation */}
          <svg
            className="absolute bottom-3 w-full h-8"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C300,40 600,120 900,60 C1050,30 1150,100 1200,80 L1200,120 L0,120 Z"
              fill="#ea580c"
              style={{
                animation: 'colorShiftOrange 3.5s ease-in-out infinite alternate'
              }}
            />
          </svg>
          
          {/* Second orange wave with color oscillation */}
          <svg
            className="absolute bottom-0 w-full h-8"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,70 C250,30 550,110 850,50 C1000,20 1120,90 1200,70 L1200,120 L0,120 Z"
              fill="#c2410c"
              style={{
                animation: 'colorShiftOrange2 4.5s ease-in-out infinite alternate'
              }}
            />
          </svg>
        </div>
        
        <style jsx>{`
          @keyframes colorShiftCyan {
            0% { fill: #155e75; opacity: 0.8; }
            50% { fill: #0891b2; opacity: 0.9; }
            100% { fill: #0e7490; opacity: 0.85; }
          }
          
          @keyframes colorShiftSky {
            0% { fill: #0c4a6e; opacity: 0.7; }
            50% { fill: #0284c7; opacity: 0.8; }
            100% { fill: #075985; opacity: 0.75; }
          }
          
          @keyframes colorShiftOrange {
            0% { fill: #ea580c; opacity: 0.8; }
            50% { fill: #f97316; opacity: 0.9; }
            100% { fill: #dc2626; opacity: 0.85; }
          }
          
          @keyframes colorShiftOrange2 {
            0% { fill: #c2410c; opacity: 0.7; }
            50% { fill: #ea580c; opacity: 0.8; }
            100% { fill: #dc2626; opacity: 0.75; }
          }
        `}</style>
      </header>
  )
}
