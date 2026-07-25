'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';
import useSocialMediaLinks from '@/hooks/useSocialMediaLinks';

const floatingTokens = [
  { label: 'iOS Apps', x: '8%', y: '18%', delay: 0 },
  { label: 'AI Native', x: '78%', y: '14%', delay: 0.2 },
  { label: 'Kafka', x: '12%', y: '68%', delay: 0.35 },
  { label: 'Startups', x: '74%', y: '66%', delay: 0.45 }
];

export default function HeroIntro() {
  const { renderSocialMediaLinks } = useSocialMediaLinks();
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 140,
    damping: 18
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 140,
    damping: 18
  });
  const glowX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);
  const glowBackground = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, rgba(245,32,65,0.22), transparent 55%)`;

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(px);
    mouseY.set(py);
  };

  const onLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="title"
      aria-label="Hero title"
      className="relative overflow-hidden px-4 pb-6 pt-6 sm:px-6 sm:pt-10 md:pt-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-grid-fade" />
      </div>

      {floatingTokens.map((token) => (
        <motion.div
          key={token.label}
          className="pointer-events-none absolute z-0 hidden rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-md md:block"
          style={{ left: token.x, top: token.y }}
          initial={{ opacity: 0, y: 16, rotateX: -20 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            rotateY: [0, 8, 0],
            rotateX: [0, -6, 0]
          }}
          transition={{
            opacity: { delay: token.delay, duration: 0.5 },
            y: { delay: token.delay, duration: 5, repeat: Infinity, ease: 'easeInOut' },
            rotateY: {
              delay: token.delay,
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut'
            },
            rotateX: {
              delay: token.delay,
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        >
          {token.label}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          ref={cardRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            backgroundImage: glowBackground
          }}
          className="hero-3d-card rounded-3xl border border-white/10 bg-[#120c22]/55 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8 md:p-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs"
            style={{ transform: 'translateZ(28px)' }}
          >
            AI-Native Product Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text_heading_size mt-3 text-center font-Monserrat font-bold leading-[1.05]"
            style={{ transform: 'translateZ(44px)' }}
          >
            <span className="text-primary">Atharv Naik</span>
            <br />
            <span className="text-white">Full Stack Developer</span>
          </motion.h1>

          <motion.p
            id="social-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg"
            style={{ transform: 'translateZ(30px)' }}
          >
            I ship revenue-ready apps for startups & MNCs — Kafka/ClickHouse backends,
            iOS products, and AI-native features that convert users into paying customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ transform: 'translateZ(36px)' }}
          >
            <a
              href="#successful-clients"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(245,32,65,0.35)] transition hover:brightness-110 sm:w-auto"
            >
              View Live Client Apps
            </a>
            <a
              href="#contact-me"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Book a Build Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-6 flex items-center justify-center gap-4 text-xl text-blue-400 sm:gap-5 sm:text-2xl md:text-3xl"
            aria-label="Social links"
            style={{ transform: 'translateZ(24px)' }}
          >
            {renderSocialMediaLinks()}
          </motion.div>

          <div
            className="mt-7 grid grid-cols-3 gap-2 sm:gap-3"
            style={{ transform: 'translateZ(20px)' }}
          >
            {[
              { value: '7+', label: 'Years' },
              { value: '2–3×', label: 'Revenue Lift' },
              { value: '5–10L', label: 'Monthly Outcomes' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-black/20 px-2 py-3 text-center sm:px-3"
              >
                <p className="text-base font-bold text-white sm:text-xl md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
