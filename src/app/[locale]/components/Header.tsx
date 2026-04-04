'use client'
import Link from 'next/link'
import { FC } from 'react'
import LogoIcon from '../../icons/logo'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100'>
      <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
        {/* Logo */}
        <Link href='/'>
          <div className='flex flex-row items-center'>
            <div className='mb-2 h-14 w-14'>
              <LogoIcon />
            </div>
            <strong className='mx-2 select-none text-xl'>The MDMind</strong>
          </div>
        </Link>

        {/* Navigation */}
        <nav className='flex flex-row items-center gap-8'>
          <a href='#vision' className='text-gray-600 hover:text-gray-900 transition'>
            Vision
          </a>
          <a href='#demos' className='text-gray-600 hover:text-gray-900 transition'>
            Demos
          </a>
          <a href='#articles' className='text-gray-600 hover:text-gray-900 transition'>
            Articles
          </a>
          <a href='#about' className='text-gray-600 hover:text-gray-900 transition'>
            About
          </a>
        </nav>
      </div>
    </header>
  )
}
