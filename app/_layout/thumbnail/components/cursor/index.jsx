'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import { CursorShape } from './index.styled';

const MotionComponent = motion(CursorShape);

export const ThumbnailCursorCircle = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailCursorCircle({ variants, active, ...props }, ref) {
    return (
      <MotionComponent
        ref={ref}
        className='pointer-events-none fixed left-1/2 top-1/2 hidden md:flex items-center justify-center rounded-full bg-primary text-primary-foreground'
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      />
    );
  },
);

ThumbnailCursorCircle.displayName = 'ThumbnailCursorCircle';

export const ThumbnailCursorLabel = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailCursorLabel({ variants, active, ...props }, ref) {
    return (
      <MotionComponent
        ref={ref}
        className='pointer-events-none fixed left-1/2 top-1/2 hidden md:flex items-center justify-center text-sm font-semibold'
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      />
    );
  },
);

ThumbnailCursorLabel.displayName = 'ThumbnailCursorLabel';