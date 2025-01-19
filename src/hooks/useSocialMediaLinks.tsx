import Link from 'next/link';
import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

export default function useSocialMediaLinks() {
  const socialLinks = {
    linkedin: {
      link: 'https://www.linkedin.com/in/atharvnaik1/',
      icon: <FaLinkedin />
    },
    github: {
      link: 'https://github.com/atharvnaik1',
      icon: <FaGithub />
    },
    twitter: {
      link: 'https://twitter.com/athrvNaik7',
      icon: <FaTwitter />
    },
    youtube: {
      link: 'https://www.youtube.com/@Asyncccc',
      icon: <FaYoutube />
    },

    email: {
      link: 'mailto:atharvajaynaik@gmail.com', // Replace with your email address
      icon: <FaEnvelope />
    }
  };

  const renderSocialMediaLinks = () => {
    return Object.keys(socialLinks).map((key) => {
      const item = socialLinks[key as keyof typeof socialLinks];
      return (
        <Link
          key={key}
          href={item.link}
          target={key === 'email' ? '_self' : '_blank'}
          className="hover:text-primary"
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
