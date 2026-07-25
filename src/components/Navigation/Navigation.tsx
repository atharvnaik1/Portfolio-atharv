'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
      className={`sticky top-0 z-[100] w-full px-4 py-3 transition-all duration-300 sm:px-5 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0b0818]/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      role="navigation"
      aria-label="Primary navigation"
      style={{ perspective: 1000 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="group relative inline-flex items-baseline text-xl font-semibold sm:text-2xl"
          aria-label="Home"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.span
            whileHover={{ rotateY: -8, z: 12 }}
            className="text-primary transition-colors"
          >
            @Atharv
          </motion.span>
          <span className="ml-1.5 text-white">Naik</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2, scale: 1.03 }}
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
          <a
            href="https://lp.ipaship.com/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-primary/40 bg-primary/15 px-3 py-1.5 text-xs font-semibold text-white sm:text-sm"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-lg border border-white/15 bg-white/5 p-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
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
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, rotateX: -12, y: -8 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -8, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-3 origin-top rounded-2xl border border-white/10 bg-[#100b1f]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
            role="menu"
            aria-label="Mobile menu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="grid max-h-[70vh] grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="rounded-xl bg-white/5 px-3 py-3 text-center text-sm font-medium text-white hover:bg-primary/20"
                  role="menuitem"
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
