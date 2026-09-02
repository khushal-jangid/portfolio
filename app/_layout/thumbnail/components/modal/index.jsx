'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import { Center } from '@/components';
import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean; index: number;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailModal({ variants, active, index, ...props }, ref) {
    const items = thumbnailOptions.map(({ title, tag, gradient, service }) => {
      const id = randomId();
      return (
        <Center
          key={id}
          className='h-full w-full flex-col p-6 text-center text-white select-none'
          style={{
            background: gradient || 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          }}
        >
          <span className='mb-3 inline-block rounded-full bg-black/40 px-4 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-md border border-white/20'>
            {tag || 'Project Showcase'}
          </span>
          <h3 className='text-3xl font-extrabold tracking-tight drop-shadow-md'>
            {title}
          </h3>
          <p className='mt-2 text-xs font-medium text-white/80 max-w-[240px] line-clamp-2'>
            {service}
          </p>
        </Center>
      );
    });

    return (
      <MotionComponent
        ref={ref}
        className='pointer-events-none fixed left-1/2 top-1/2 h-[300px] w-[380px] overflow-hidden rounded-2xl bg-secondary-foreground shadow-2xl border border-white/10 z-30'
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      >
        <div
          className='relative h-full w-full'
          style={{
            top: `${index * -100}%`,
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          {items}
        </div>
      </MotionComponent>
    );
  },
);

ThumbnailModal.displayName = 'ThumbnailModal';
