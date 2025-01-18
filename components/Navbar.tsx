"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import Button from './Button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';
import AOS from 'aos'
import 'aos/dist/aos.css';
import ThemeButton from './ThemeButton';
import { Menu } from 'lucide-react';


const Navbar = () => {

   useEffect(() => {
      AOS.init();
    }, [])

  return (
    <nav className='p-8 flex justify-between items-center'>
        <div className='flex items-center' data-aos="fade-down">
        <Link href='/' className='flex text-2xl font-semibold text-blue-600' title='Home'>
        NextReach
        </Link>

        <ul className='hidden lg:flex lg:flex-wrap ml-12 gap-8'>
            <li><Link href='/' className='linkHover'>Home</Link></li>
            <li><Link href='/' className='linkHover'>About Us</Link></li>
            <li><Link href='/' className='linkHover'>Services</Link></li>
            <li><Link href='/' className='linkHover'>Why NextReach?</Link></li>
        </ul>
        </div>

        <div className='hidden lg:flex items-center gap-8' data-aos="fade-down">
        <Button
            type='button'
            title='Contact Us'
            variant='bg-blue-600 text-white rounded-full p-4 font-semibold transition-colors hover:bg-blue-700'>
        </Button>

          <ThemeButton />
        </div>

        <Sheet>
          <SheetTrigger className='lg:hidden flex items-center'>
            <Menu className='w-8 h-8'/>
          </SheetTrigger>
          <SheetContent side='right' className='w-full'>
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>

            <div className='flex flex-col items-center mt-24 gap-12 text-3xl'>
            <Link href='/' className='linkHover'>Home</Link>
            <Link href='/' className='linkHover'>About Us</Link>
            <Link href='/' className='linkHover'>Services</Link>
            <Link href='/' className='linkHover'>Why NextReach</Link>

            <div className='flex flex-col items-start lg:hidden gap-8'>
            <Button
            type='button'
            title='Contact Us'
            variant='bg-blue-600 text-white rounded-full p-5 font-semibold transition-colors hover:bg-blue-700 text-xl' />

           <div className='ml-16'>
              <ThemeButton />
           </div>
        </div>
            </div>
          </SheetContent>
        </Sheet>

    </nav>
  )
}

export default Navbar