import Link from 'next/link';
import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

const socialLinks = {
  linkedin: {
    link: 'https://www.linkedin.com/in/atharvnaik1/',
    icon: <FaLinkedin />,
    label: 'Atharv Naik on LinkedIn — Mobile App Developer',
    title: 'Atharv Naik — Mobile App Developer & GTM Expert on LinkedIn'
  },
  github: {
    link: 'https://github.com/atharvnaik1',
    icon: <FaGithub />,
    label: 'Atharv Naik on GitHub — Mobile App Projects',
    title: 'Atharv Naik — iOS & Android App Projects on GitHub'
  },
  twitter: {
    link: 'https://twitter.com/athrvNaik7',
    icon: <FaTwitter />,
    label: 'Atharv Naik on Twitter — Mobile Dev & GTM',
    title: 'Atharv Naik — Mobile App Developer on Twitter'
  },
  youtube: {
    link: 'https://www.youtube.com/@IpashipAI',
    icon: <FaYoutube />,
    label: 'IPASHIP AI YouTube Channel',
    title: 'IPASHIP AI — YouTube Channel by Atharv Naik'
  },
  email: {
    link: 'mailto:atharvajaynaik@gmail.com',
    icon: <FaEnvelope />,
    label: 'Email Atharv Naik',
    title: 'Email Atharv Naik'
  }
};

export default function useSocialMediaLinks() {
  const renderSocialMediaLinks = () => {
    return Object.keys(socialLinks).map((key) => {
      const item = socialLinks[key as keyof typeof socialLinks];
      return (
        <Link
          key={key}
          href={item.link}
          target={key === 'email' ? '_self' : '_blank'}
          rel="me noopener noreferrer"
          className="transition-colors hover:text-primary"
          aria-label={item.label}
          title={item.title}
        >
          {item.icon}
        </Link>
      );
    });
  };

  return {
    renderSocialMediaLinks
  };
}
