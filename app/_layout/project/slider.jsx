'use client';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.tag]
 * @param {string} [props.gradient]
 * @param {string} [props.tech]
 */
export function ProjectSlider({ title, tag, gradient, tech }) {
  return (
    <Center
      className='relative w-1/4 rounded-2xl overflow-hidden shadow-lg select-none text-white p-6 flex flex-col justify-between items-start transition-transform hover:scale-105 duration-300'
      style={{
        minWidth: '280px',
        height: '18vw',
        minHeight: '180px',
        background: gradient || 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      }}
    >
      <span className='rounded-full bg-black/40 px-3 py-1 text-xs font-semibold tracking-wider text-white/90 backdrop-blur-md border border-white/20'>
        {tag}
      </span>
      <div>
        <h4 className='text-2xl font-bold tracking-tight drop-shadow-sm'>
          {title}
        </h4>
        <p className='mt-1 text-xs text-white/80 font-medium'>
          {tech}
        </p>
      </div>
    </Center>
  );
}
