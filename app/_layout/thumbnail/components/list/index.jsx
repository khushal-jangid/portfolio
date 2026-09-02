'use client';

import Link from 'next/link';

import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title, service }, index) => {
    const id = index;
    const isExternal = href.startsWith('http');

    return (
      <li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid border-border/40 transition-all last-of-type:border-b group-hover:opacity-90 hover:!opacity-100 hover:px-2'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1.5em,3.5vw,4.5em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <Link
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className='flex items-center justify-between gap-4 max-lg:flex-wrap transition-transform duration-300 ease-out hover:translate-x-3'
          passHref
        >
          <h4
            className='font-bold tracking-tight'
            style={{
              fontSize: 'calc(clamp(2.4em, 5.5vw, 6em) * 0.75)',
            }}
          >
            {title}
          </h4>
          <p className='text-base md:text-lg font-medium text-muted-foreground'>
            {service || 'Design & Development'}
          </p>
        </Link>
      </li>
    );
  });

  return <ul className='group divide-y divide-border/20'>{items}</ul>;
}
