// components/Footer.tsx

import React from 'react';
import Image from 'next/image';
import { SendHorizontal } from 'lucide-react';

// Define a type for our social links for type-safety
type SocialLink = {
  name: string;
  href: string;
  iconSrc: string;
  rotation: string;
};

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
          <SendHorizontal className="h-6 w-6 text-gray-700 transition-transform group-hover:-rotate-12" />
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
