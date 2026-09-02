'use client';

import { motion } from 'framer-motion';

import { FixedOverlay } from '@/components';

import { OffcanvasBackdrop } from './back-drop';
import { OffcanvasFooter } from './footer';
import { OffcanvasLinks } from './links';
import { slideLeft } from './variants';

const MotionComponent = motion(FixedOverlay);

export function OffcanvasBody() {
  return (
    <MotionComponent
      className='z-40'
      variants={slideLeft}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <div className='hidden md:block'>
        <OffcanvasBackdrop />
      </div>

      <div className='absolute right-0 top-0 h-screen w-full md:w-[600px] bg-foreground text-background shadow-2xl overflow-y-auto'>
        <div className='flex h-full min-h-screen flex-col justify-between p-8 pt-24 md:p-24'>
          <OffcanvasLinks />
          <OffcanvasFooter />
        </div>
      </div>
    </MotionComponent>
  );
}