import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightFromSquare } from 'lucide-react'
import Button from './Button'

const Articles = () => {
  return (
   <section className='max-w-[90%] m-auto mt-20 sm:mt-32'>
         <h1 className='text-xl text-blue-600 font-semibold mb-5'>Insights & Strategies:</h1>

        <h2 className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:w-4/5 text-zinc-900 dark:text-white'>Stay Ahead with Our Latest Articles</h2>

        <div className='max-w-full m-auto flex lg:flex-row flex-col gap-4 mt-12 sm:overflow-x-auto'>
            <div>
                <Image src='/article1.jpg' alt='Image 1' width={2000} height={2000} className='rounded-3xl my-10 cursor-pointer transition-all hover:brightness-50 duration-500 sm:max-w-[450px] h-[450px] object-cover'/>

                <span className='relative bottom-[29rem] lg:bottom-[64%] left-[1rem] p-2 text-white bg-blue-600 rounded-lg pointer-events-none select-none'>Marketing</span>
                <span className='relative bottom-[29rem] lg:bottom-[64%] left-[2rem] p-2 text-blue-600 bg-white rounded-lg pointer-events-none select-none'>Innovation</span>

                <p className='text-gray-600 font-semibold'>
                    <span>10 Jan 2025</span>

                     <span className='ml-8'>6 min Read</span>
                </p>

                <h3 className='my-8 text-2xl font-medium cursor-pointer'>5 Digital Marketing Trends to Watch in 2025</h3>


                    <Link href='/' className='text-gray-600 font-semibold flex items-center text-xl hover:underline gap-2'>Read Insight <ArrowUpRightFromSquare /></Link>

            </div>

            <div>
                <Image src='/article2.jpg' alt='Image 2' width={2000} height={2000} className='rounded-3xl my-10 cursor-pointer transition-all hover:brightness-50 duration-500 sm:max-w-[450px] h-[450px] object-cover'/>

                <span className='relative bottom-[29rem] lg:bottom-[64%] left-[1rem] p-2 text-white bg-blue-600 rounded-lg pointer-events-none select-none'>Marketing</span>

                <p className='text-gray-600 font-semibold'>
                    <span>03 Jan 2025</span>

                    <span className='ml-8'>4 min Read</span>
                </p>

                <h3 className='my-8 text-2xl font-medium cursor-pointer'>How to Build a Strong Brand Identity That Lasts</h3>


                    <Link href='/' className='text-gray-600 font-semibold flex items-center text-xl hover:underline gap-2'>Read Insight <ArrowUpRightFromSquare /></Link>
            </div>

            <div>
                <Image src='/article3.jpg' alt='Image 3' width={2000} height={2000} className='rounded-3xl my-10 cursor-pointer transition-all hover:brightness-50 duration-500 sm:max-w-[450px] h-[450px] object-cover'/>

                    <span className='relative bottom-[29rem] lg:bottom-[64%] left-[1rem] p-2 text-white bg-blue-600 rounded-lg pointer-events-none select-none'>ROI</span>
                    <span className='relative bottom-[29rem] lg:bottom-[64%] left-[2rem] p-2 text-blue-600 bg-white rounded-lg pointer-events-none select-none'>Insights</span>

                    <p className='text-gray-600 font-semibold'>
                        <span>01 Jan 2025</span>

                        <span className='ml-8'>5 min Read</span>
                    </p>

                    <h3 className='my-8 text-2xl font-medium cursor-pointer'>Maximizing ROI: The Power of Data-Driven Campaigns</h3>


                    <Link href='/' className='text-gray-600 font-semibold flex items-center text-xl hover:underline gap-2'>Read Insight <ArrowUpRightFromSquare /></Link>
            </div>
        </div>

        <div className='flex justify-end mt-12'>
            <Button type='button' title='Explore All Insights' variant='bg-blue-600 p-5 px-8 rounded-lg text-white transition-colors hover:bg-blue-800' />
        </div>
   </section>
  )
}

export default Articles