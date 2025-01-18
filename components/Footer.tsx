import { ArrowUpRightFromSquareIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-40 bg-zinc-950 text-white p-16'>
         <span className='font-bold text-2xl cursor-pointer'>NextReach</span> 

         <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center mt-12'>
           

            <div>
                <h3 className='font-bold text-xl hover:underline cursor-pointer flex gap-2'>Need Help? <ArrowUpRightFromSquareIcon /></h3>

                <ul className='mt-4 text-gray-400'>
                    <li className='underline hover:no-underline mb-2 cursor-pointer'>Support</li>
                    <li className='underline hover:no-underline mb-2 cursor-pointer'>Get Started</li>
                    <li className='underline hover:no-underline mb-2 cursor-pointer'>Terms of Use</li>
                    <li className='underline hover:no-underline cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <h3 className='font-bold text-xl hover:underline cursor-pointer flex gap-2'>attributions <ArrowUpRightFromSquareIcon /></h3>

                <ul className='mt-4 text-gray-400'>
                    <li>
                        Icon: "Teamwork Brainstorm Meeting Business" by  <Link href='https://www.svgrepo.com/author/Boyko.pictures/' target='_blank' className='underline hover:no-underline'>Boyko.pictures</Link> license under CC BY 4.0
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='font-bold text-xl hover:underline cursor-pointer flex gap-2'>Learn More <ArrowUpRightFromSquareIcon /></h3>

                <ul className='mt-4 text-gray-400'>
                    <li className='cursor-pointer underline hover:no-underline mb-2'>About Us</li>
                    <li className='cursor-pointer underline hover:no-underline mb-2'>Services</li>
                    <li className='cursor-pointer underline hover:no-underline mb-2'>Customers</li>
                    <li className='cursor-pointer underline hover:no-underline'>Newsletter</li>
                </ul>
            </div>

            <div>
                <h3 className='text-xl font-bold hover:underline cursor-pointer flex gap-2'>Managed Services <ArrowUpRightFromSquareIcon /></h3>

                <ul className='mt-4'>
                    <li className='cursor-pointer font-bold mb-2 hover:underline gap-2 flex'>Insights <ArrowUpRightFromSquareIcon /></li>
                    <li className='cursor-pointer font-bold hover:underline gap-2 flex'>Contact <ArrowUpRightFromSquareIcon /></li>
                </ul>
            </div>
        </div>
        
        <div className='flex flex-col sm:flex-row mt-24 gap-8 sm:gap-12 text-gray-400'>
            <p>2025 NextReach - All Rights reserved</p>

            <Link href='/' className='hover:underline'>Privacy Policy</Link>
            <Link href='/' className='hover:underline'>Terms of Service</Link>
        </div>
        
    </footer>
  )
}

export default Footer