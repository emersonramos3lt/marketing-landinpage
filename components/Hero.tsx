"use client"

import React, { useEffect } from 'react';
import Button from './Button';
import AOS from 'aos'
import Image from 'next/image';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div className='max-w-[90%] m-auto mt-12 sm:mt-16'>

      <div className='flex items-center flex-col gap-5 sm:gap-10' data-aos="fade-up">
      <h1 className='sm:text-3xl font-medium text-center text-blue-600'>Expand Your Reach Across All Platforms.</h1>

      <h2 className='text-center text-[1.8rem] sm:text-7xl font-semibold sm:leading-[6rem] text-zinc-900 dark:text-white'>Create, manage and deliver<br />
      advertisements on platforms.</h2>

      <p className='text-center sm:text-xl w-4/5'>We craft innovative strategies that connect your brand with the right audience. Let's transform your vision into measurable results and take your business to the next level.</p>

     <div className='flex gap-4'>
     <Button type='button' title='Learn More' variant='bg-zinc-950 dark:bg-white dark:text-zinc-900 text-white p-4 px-8 sm:px-10 rounded-full transition-colors hover:bg-blue-700 dark:hover:bg-gray-700 dark:hover:text-white' />

      <Button type='button' title='Contact Us' variant='bg-blue-600 text-white p-4 px-8 sm:px-10 rounded-full transition-colors hover:bg-blue-800' />
     </div>
      </div>
       
       <div className='max-w-[90%] m-auto flex flex-col sm:grid grid-cols-2 items-center gap-12 mt-32'>
          <div>
            <h1 className='font-semibold text-4xl sm:text-5xl dark:text-white' data-aos="fade-up">Our help companies accelerate their growth
            aligning your people with your business strategy.</h1>

            <p className='my-5' data-aos="fade-up">Innovation is our main banner, we help companies connect with customers and make them more engaged.</p>

            <Button type='button' title='Our Solutions' variant='bg-blue-600 text-white p-4 px-8 sm:px-10 rounded-full transition-colors hover:bg-blue-800'  data-aos="fade-up"/>
          </div>

          <Image src='/person.jpg' alt='Person' width={500} height={500} className='rounded-3xl' data-aos="fade-up"/>
       </div>
    </div>
  )
}

export default Hero
