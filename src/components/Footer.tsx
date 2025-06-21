// components/Footer.tsx

import React from 'react';
import Image from 'next/image';

// Define a type for our social links for type-safety
type SocialLink = {
  name: string;
  href: string;
  iconSrc: string;
  rotation: string;
};

// --- SVG Icon Components ---
const NotionMailIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 64 64" width="1em" className={className}>
        <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%', display: 'block', fill: 'inherit', flexShrink: 0 }}>
            <path d="M1.55617 8.19127C0.579346 8.44327 0.322683 9.19783 0.797222 9.6789L4.51639 13.1375C4.56 13.1758 4.58732 13.2262 4.59755 13.2843L5.74661 19.8009C5.87804 20.5463 6.83186 20.7831 7.29769 20.1855L9.19411 17.7479C9.25825 17.6676 9.37598 17.656 9.45269 17.7253L12.4303 20.3926C13.1551 20.9664 14.1015 20.6318 14.3274 20.0581L20.8045 4.1832C21.3339 2.76468 20.2979 1.31037 18.3367 2.12389" fill="currentColor"></path>
            <path d="M6.5025 11.7319C10.1428 9.58286 12.7689 7.53232 15.9535 5.62596C16.2611 5.44184 16.5291 5.82255 16.2599 6.05928C15.5026 6.72523 14.7709 7.37237 14.5951 7.54025C14.2008 7.91697 9.79719 11.6886 9.79719 11.6886L7.61508 13.6861C8.54636 15.0129 12.1389 17.7421 13.1126 18.1146C15.6038 13.1812 17.298 8.95012 19.0422 4.23471C19.1762 3.87253 18.8246 3.52014 18.4618 3.65253L7.97959 7.47798L3.24764 9.38752L6.5025 11.7319Z" fill="white"></path>
        </svg>
    </svg>
);

// Array of social links based on the inspected code
const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        href: 'https://github.com/khoinguyenpham04',
        iconSrc: '/footer-icon/github.png',
        rotation: '',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/phamtrankhoinguyen-noah/',
        iconSrc: '/footer-icon/linkedin.png',
        rotation: '',
    },

    {
        name: 'Instagram',
        href: 'https://www.instagram.com/khoinguyen_pham',
        iconSrc: '/footer-icon/instagram.png',
        rotation: '0',
    },
    {
        name: 'Youtube',
        href: 'https://www.youtube.com/@khoinguyen_pham',
        iconSrc: '/footer-icon/youtube.png',
        rotation: '',
    },
];

const Footer = () => {
  return (
    <footer className="w-full p-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-2xl bg-gray-100 p-5 sm:p-5 md:flex-row md:justify-between md:gap-4">
        {/* Email Link */}
        <a
          href="mailto:tran.pham@student.manchester.ac.uk"
          className="group flex items-center gap-2 transition-colors hover:text-blue-600"
        >
          <NotionMailIcon className="h-6 w-6 text-gray-700 transition-transform group-hover:-rotate-12" />
          <span className="text-xl font-medium text-gray-800 inline">
            ptknguyen04@gmail.com
          </span>
        </a>

        {/* Divider for mobile screens */}
        <div className="w-3/4 h-px bg-gray-300 md:hidden my-5"></div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${link.name} profile`}
              className={`transition-transform hover:scale-110 hover:z-10 ${link.rotation}`}
            >
              <Image
                src={link.iconSrc}
                alt={`${link.name} logo`}
                width={48}
                height={48}
                className="h-10 w-10 sm:h-12 sm:w-12"
                unoptimized // Since icons are from an external source, you can use this or configure next.config.js
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
