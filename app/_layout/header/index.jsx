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
          className='object-cover object-[center_15%] brightness-90 md:scale-105 md:object-contain transition-transform duration-700'
          fill={true}
          priority={true}
          sizes='100vw'
          alt='Khushal Jangid Personal Portrait'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#1c1d20] via-black/20 to-black/40' />
      </div>

      <div className='relative z-10 flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none pointer-events-none pb-4 md:pb-0'>
          <h1 className='text-[clamp(3.8rem,11.5vw,15vw)] font-bold tracking-tight text-white/95 leading-none'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-8 md:pe-12'>
                Khushal Jangid
                <span className='spacer font-light text-white/40'> — </span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-6 max-md:mb-8 md:mx-36'>
            <div className='mb-3 md:mb-20 text-white/90'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.35em,2.5vw,2.75em)] font-semibold leading-tight text-white'>
              <span className='block'>Creative Developer &amp;</span>
              <span className='block text-white/80'>Cloud Engineer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}