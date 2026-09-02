/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://github.com/khushal-jangid/portfolio'),
  title: {
    template: '%s | Khushal Jangid',
    default: 'Khushal Jangid • Creative Developer & Cloud Engineer',
  },
  description:
    'Khushal Jangid — Creative Developer, Cloud Engineer & DevOps Enthusiast. Delivering tailor-made digital designs, AI agents and building interactive websites & cloud infrastructure from scratch. © Code by Khushal',
  generator: 'Khushal Jangid',
  applicationName: 'Khushal Jangid Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Khushal Jangid',
    'Creative Developer',
    'Cloud Engineer',
    'DevOps',
    'Next.js',
    'React',
    'Portfolio',
    'Web Development',
    'AI Agents',
    'AWS'
  ],
  authors: [
    { name: 'Khushal Jangid', url: 'https://github.com/khushal-jangid' },
  ],
  creator: 'Khushal Jangid',
  publisher: 'Khushal Jangid',
  twitter: {
    card: 'summary_large_image',
    title: 'Khushal Jangid • Creative Developer & Cloud Engineer',
    description:
      'Khushal Jangid — Creative Developer & Cloud Engineer. Exploring Web Development, Cloud Computing, DevOps & Artificial Intelligence.',
    creator: '@khushal_jangid',
    images: {
      url: '/khushal_portrait.jpg',
      alt: 'Khushal Jangid Portrait',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};
