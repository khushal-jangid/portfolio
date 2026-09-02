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
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/khushal_avatar.jpg'
              className='rounded-full object-cover'
              fill={true}
              alt='Khushal Jangid Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={36} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-[1px] bg-muted-foreground/30' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='mailto:khushaljangra721@gmail.com' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <div>
            <a href='mailto:khushaljangra721@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground/40'
              >
                khushaljangra721@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href='https://github.com/khushal-jangid' target='_blank' rel='noopener noreferrer'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground/40'
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
