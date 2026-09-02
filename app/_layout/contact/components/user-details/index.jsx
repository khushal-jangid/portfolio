'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container className='px-6 md:px-12'>
      <Row>
        <div className='flex items-center gap-4 md:gap-8 flex-wrap'>
          <ImageWrapper className='w-16 h-16 md:w-24 md:h-24'>
            <Image
              src='/khushal_avatar.jpg'
              className='rounded-full object-cover'
              fill={true}
              alt='Khushal Jangid Profile Picture'
            />
          </ImageWrapper>
          <MainTitle className='text-4xl sm:text-6xl md:text-8xl'>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between w-full md:w-auto mt-2 md:mt-0'>
          <MainTitle className='text-4xl sm:text-6xl md:text-8xl'>together</MainTitle>
          <div className='text-white/80'>
            <ArrowDownLeft size={36} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full my-8 md:my-16'>
          <div className='h-px bg-muted-foreground/30' />
          <div className='absolute right-0 top-0 z-20 -translate-x-4 md:-translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='mailto:khushaljangra721@gmail.com' passHref>
                <MagneticButton variant='primary' size='lg' className='text-sm md:text-base'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 sm:flex-row'>
          <div className='w-full sm:w-auto'>
            <a href='mailto:khushaljangra721@gmail.com' className='block w-full'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground/40 text-xs sm:text-sm py-4'
              >
                khushaljangra721@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div className='w-full sm:w-auto'>
            <a href='https://github.com/khushal-jangid' target='_blank' rel='noopener noreferrer' className='block w-full'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground/40 text-xs sm:text-sm py-4'
              >
                github.com/khushal-jangid
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}