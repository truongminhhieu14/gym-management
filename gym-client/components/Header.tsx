"use client"

import Link from 'next/link'
import MobileNav from './MobileNav'
import Nav from './Nav'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { useRouter } from 'next/navigation'

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleScroll = ()=> {
            setHeaderActive(window.scrollY > 50)
        }

        // add scroll event
        window.addEventListener('scroll', handleScroll)
        // clear scroll event
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'} fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}>
        <div className="container mx-auto h-full flex items-center justify-between">
            {/* logo */}
            <Link href=''>
                <Image src={'/assets/assets/img/logo1.png'} width={150} height={55} alt=''/>
            </Link>
            {/* mobile nav */}
            <MobileNav containerStyles={`${ headerActive ? 'top-[90px]' : 'top-[124px]'}
                ${openNav ? 'max-h-max pt-8 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
                flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium text-white transition-all xl:hidden`}/>
            {/* desktop nav */}
            <Nav containerStyles='flex gap-4 text-white test-base uppercase font-medium transition-all hidden xl:flex' />
            {/* menu button */}
            <div className='flex items-center gap-4'>
                {/* login & register */}
                <div className='text-white flex items-center gap-4'>
                    <button onClick={() => router.push('/login')} className='hover:text-accent transition-all test-base uppercase font-medium '>Login</button>
                    <button onClick={() => router.push('/register')} className='hover:text-accent transition-all test-base uppercase font-medium'>Register</button>
                </div>
                <button onClick={() => setOpenNav(!openNav)} className='text-white xl:hidden'>
                    <MdMenu className='text-4xl '/>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header