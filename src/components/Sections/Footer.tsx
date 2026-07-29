import useSocialMediaLinks from '@/hooks/useSocialMediaLinks';
import { styles } from '@/styles/styles';
import React from 'react';

const Footer = () => {
  const { renderSocialMediaLinks } = useSocialMediaLinks();

  return (
    <div className="flex flex-col gap-8 px-6 py-10 sm:px-10 md:px-12">
      <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
        <p className={`${styles.paragraph}`}>
          {new Date().getFullYear()} ipaship
        </p>
        <div className="flex items-center justify-center gap-5 text-xl sm:text-xl xl:text-2xl 2xl:text-3xl">
          {renderSocialMediaLinks()}
        </div>
      </div>

      <address className="mx-auto max-w-4xl text-center text-[11px] font-normal not-italic leading-relaxed tracking-wide text-gray-400 sm:text-xs md:text-sm">
        <span className="font-semibold text-gray-300">IPASHIP LLC</span>
        {' | '}
        REG. OFFICE: 8 THE GREEN SUITE, DOVER, DE 19901, USA
        {' | '}
        REG. NO: 10592846
        <br className="hidden sm:block" />
        <span className="mx-1 hidden text-gray-600 sm:inline">|</span>
        <span className="mt-2 block sm:mt-0 sm:inline">
          <span className="font-semibold text-gray-300">IPASHIP PVT. LTD.</span>
          , IN-CUBE CO WORKING, PLOT NO 41 &amp; 42, TEJASWINI LN 2, NEXT TO
          MEDIPOINT HOSPITAL, AUNDH, PUNE, MAHARASHTRA 411067
        </span>
      </address>
    </div>
  );
};

export default Footer;
