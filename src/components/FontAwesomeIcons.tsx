// src/components/FontAwesomeIcons.tsx
"use client";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faSquareInstagram, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

export const GithubIcon = () => <FontAwesomeIcon icon={faSquareGithub} />;
export const LinkedInIcon = () => <FontAwesomeIcon icon={faLinkedin} />;
export const InstagramIcon = () => <FontAwesomeIcon icon={faSquareInstagram} />;
export const YoutubeIcon = () => <FontAwesomeIcon icon={faSquareYoutube} />;
