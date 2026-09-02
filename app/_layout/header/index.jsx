'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-[#1c1d20] text-white'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <Image
          src='/khushal_portrait.jpg'
          className='object-cover object-center brightness-90 md:scale-105 md:object-contain transition-transform duration-700'
          fill={true}
          priority={true}
          sizes='100vw'
          alt='Khushal Jangid Personal Portrait'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#1c1d20] via-transparent to-black/30' />
      </div>

      <div className='relative z-10 flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none pointer-events-none'>
          <h1 className='text-[max(9em,15vw)] font-bold tracking-tight text-white/95'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Khushal Jangid
                <span className='spacer font-light text-white/40'> — </span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20 text-white/90'>
              <MoveDownRight size={32} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)] font-semibold leading-tight text-white'>
              <span className='block'>Creative Developer &amp;</span>
              <span className='block text-white/80'>Cloud Engineer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
