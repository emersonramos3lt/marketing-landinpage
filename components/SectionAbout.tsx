import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Button from './Button';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const SectionAbout = () => {
  return (
    <section className='bg-blue-100 dark:bg-zinc-900 mt-24 sm:mt-40 text-zinc-900 dark:text-white py-32'> 
      <div className='max-w-[100%] lg:w-[80%] m-auto flex items-center lg:flex-row flex-col p-16 gap-12'>

       <div>
       <h1 className='text-blue-600 font-bold text-2xl' data-aos="fade-up">About Us</h1>

        <h2 className='mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold' data-aos="fade-up">Strategic Branding</h2>
        <p className='mt-8 m-auto font-medium ' data-aos="fade-up">In a competitive market, a strong brand is essential. We help businesses craft unique, compelling brand identities that resonate with their target audience.</p>
        <Button type='button' title='More About Us' variant='p-4 mt-8 bg-blue-600 rounded-full text-white transition-colors hover:bg-gray-700' />
       </div>
          <Image src='/team.svg' alt='Chart' width={400} height={400} data-aos="fade-up"/>
      </div>
      
      <div className='max-w-[90%] m-auto mt-28'>
        <div className='flex flex-col lg:grid grid-cols-2 gap-12 items-center'>
           <div className='order-2 lg:order-first'>
           <Image src='/about2.jpg' alt='About image 2' width={1800} height={1800} className='rounded-3xl object-cover' data-aos="fade-up"/>
           </div>

          <div className='max-w-[90%] m-auto lg:max-w-max'>
            <h1 className='text-blue-700 font-semibold' data-aos="fade-up">Empowering Your Business</h1>

        <h2 className='mt-5 text-4xl font-bold' data-aos="fade-up">Unlock Your Marketing Potential.</h2>

        <p className='mt-5 font-medium' data-aos="fade-up">At NextReach, we specialize in delivering innovative and data-driven marketing solutions tailored to your business needs. From creating compelling brand identities to executing targeted advertising campaigns, our goal is to help your business grow and stand out in a competitive market.</p>

        <ul className='mt-5'>
          <li className='flex gap-2' data-aos="fade-up"><CheckCircle2 className='text-blue-600'/>Reach and engage your target audience effectively.</li>
          <li className='flex mt-4 gap-2' data-aos="fade-up"><CheckCircle2 className='text-blue-600'/>Optimize your budget with high-impact strategies.</li>
          <li className='flex mt-4 gap-2' data-aos="fade-up"><CheckCircle2 className='text-blue-600'/>Build a strong, lasting presence in your industry.</li>
        </ul>
          </div>

         
        </div>
        
      </div>
    </section>
  )
}

export default SectionAbout