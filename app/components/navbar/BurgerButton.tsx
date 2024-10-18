import { Bars3Icon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link'
import { roboto } from '../../fonts'
import { usePathname } from 'next/navigation'

export default function BurgerButton(){
    const pathname = usePathname(); 
    return(
        <div className='absolute top-0 right-0 sm:collapse'>
                  <Disclosure as="div">              
                    <DisclosureButton className='absolute top-0 right-0' as="button"><Bars3Icon className='w-[4rem]'></Bars3Icon></DisclosureButton>
                    <DisclosurePanel className='mt-20  text-left bg-stone-700/75  rounded-lg divide-y-2 divide-gray-300/75 mr-1 ' as="ul">                     
                        <li className={`${roboto.className} pl-5 mb-1 p-1  text-white ${
                            pathname === '/'? 'text-amber-400' : ''}
                            }`}><Link href='/'>
                                  Fotos
                                </Link>
                        </li>
                        <li className={`${roboto.className} pl-5 mb-1 p-1  text-white ${
                            pathname === '/about'? 'text-amber-400' : ''}
                            }`}><Link href='/about'>
                                  Acerca
                                </Link>
                        </li>
                        <li className={`${roboto.className} pl-5 pr-3 pb-2 p-1  text-white ${
                            pathname === '/contact'? 'text-amber-400' : ''}
                            }`}><Link href='/contact'>
                                  Contacto
                                </Link>
                        </li>
                    </DisclosurePanel>
                </Disclosure>
              </div>
            );
}