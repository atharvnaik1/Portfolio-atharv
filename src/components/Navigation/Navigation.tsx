'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAndroid, FaApple, FaAppStoreIos, FaGooglePlay, FaMobileAlt } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

const navItems = [
  { title: 'Hello', href: '#title' },
  { title: 'About', href: '#about-me' },
  { title: 'Skills', href: '#skills' },
  { title: 'Clients', href: '#successful-clients' },
  { title: 'Featured', href: '#intro-projects' },
  { title: 'Personal', href: '#personal-projects' },
  { title: 'AI & Web3', href: '#AI-and-web3-projects' },
  { title: 'Open Source', href: '#Opensource-projects' },
  { title: 'Contact', href: '#contact-me' }
];

const mobilePlatformIcons = [
  { icon: FaApple, label: 'iOS', color: 'text-white' },
  { icon: FaAndroid, label: 'Android', color: 'text-green-400' },
  { icon: FaAppStoreIos, label: 'App Store', color: 'text-sky-300' },
  { icon: FaGooglePlay, label: 'Play Store', color: 'text-emerald-300' },
  { icon: FaMobileAlt, label: 'Mobile', color: 'text-pink-300' },
  { icon: SiReact, label: 'React Native', color: 'text-cyan-300' }
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`sticky top-0 z-[100] w-full px-3 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0b0818]/85 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl'
          : 'border-b border-transparent bg-[#0b0818]/35 backdrop-blur-md'
      }`}
      role="navigation"
      aria-label="Primary navigation"
      style={{ perspective: 1200 }}
    >
      {/* Animated platform icon strip — mobile-first 3D flair */}
      <div className="mx-auto mb-2 flex max-w-7xl items-center justify-center gap-2 overflow-hidden lg:mb-1 lg:justify-center">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {mobilePlatformIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className={`flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm shadow-lg sm:h-8 sm:w-8 sm:text-base ${item.color}`}
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                  y: [0, -4, 0],
                  rotateY: [0, 18, 0, -18, 0],
                  rotateZ: [0, 4, 0, -4, 0]
                }}
                transition={{
                  duration: 3.2 + index * 0.25,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.18
                }}
                whileTap={{ scale: 0.9, rotateX: 20 }}
                aria-label={item.label}
                title={item.label}
              >
                <Icon />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="https://lp.ipaship.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-baseline text-xl font-semibold sm:text-2xl"
          aria-label="ipaship"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.span
            animate={{ rotateY: [0, -10, 0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block text-primary"
            style={{ transformStyle: 'preserve-3d' }}
          >
            ipaship
          </motion.span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2, scale: 1.03, rotateX: 8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-primary xl:px-3"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {item.title}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <motion.a
            href="https://lp.ipaship.com/apply"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, rotateX: 10 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-lg border border-primary/40 bg-primary/20 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(245,32,65,0.25)] sm:text-sm"
            style={{ transformStyle: 'preserve-3d' }}
          >
            Hire Me
          </motion.a>
          <motion.button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.92, rotateY: 20 }}
            animate={open ? { rotate: 90 } : { rotate: 0 }}
            className="rounded-lg border border-white/15 bg-white/10 p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, rotateX: -28, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, rotateX: -16, y: -10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className="mt-3 origin-top rounded-2xl border border-white/10 bg-gradient-to-b from-[#171028]/98 to-[#0d0a18]/98 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:hidden"
            role="menu"
            aria-label="Mobile menu"
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            {/* Orbiting platform icons inside mobile drawer */}
            <div className="mb-3 flex items-center justify-center gap-2 border-b border-white/10 pb-3">
              {mobilePlatformIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={`drawer-${item.label}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-base ${item.color}`}
                    style={{ transformStyle: 'preserve-3d' }}
                    initial={{ opacity: 0, z: -40, rotateY: -40 }}
                    animate={{
                      opacity: 1,
                      z: 0,
                      rotateY: [0, 25, 0, -25, 0],
                      y: [0, -3, 0]
                    }}
                    transition={{
                      opacity: { delay: index * 0.05 },
                      rotateY: {
                        delay: index * 0.1,
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      },
                      y: {
                        delay: index * 0.1,
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }
                    }}
                    aria-hidden
                  >
                    <Icon />
                  </motion.div>
                );
              })}
            </div>

            <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              iOS · Android · Store Ready Apps
            </p>

            <div className="grid max-h-[58vh] grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.05 + idx * 0.035 }}
                  whileTap={{ scale: 0.96, rotateX: 12 }}
                  className="rounded-xl border border-white/5 bg-white/5 px-3 py-3 text-center text-sm font-medium text-white shadow-md hover:border-primary/40 hover:bg-primary/20"
                  role="menuitem"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://lp.ipaship.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(245,32,65,0.35)]"
            >
              <FaApple />
              <span>Book a Build Call</span>
              <FaAndroid />
            </motion.a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
