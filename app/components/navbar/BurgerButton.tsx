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
                    <DisclosurePanel className='mt-20 bg-stone-700/75  rounded-lg divide-y-2 divide-gray-300/75 mr-1 ' as="ul">                     
                        <li className={`${roboto.className}  mb-1.5 p-1 pl-5 text-white ${
                            pathname === '/'? 'text-orange-300' : ''}
                            }`}><Link href='/'>
                                  Fotos
                                </Link>
                        </li>
                        <li className={`${roboto.className} mb-1.5 p-1 pl-5 text-white ${
                            pathname === '/about'? 'text-orange-300' : ''}
                            }`}><Link href='/about'>
                                  Acerca
                                </Link>
                        </li>
                        <li className={`${roboto.className}  mb-1.5 p-3 pl-5  text-white ${
                            pathname === '/contact'? 'text-orange-300' : ''}
                            }`}><Link href='/contact'>
                                  Contacto
                                </Link>
                        </li>
                    </DisclosurePanel>
                </Disclosure>
              </div>
            );
}