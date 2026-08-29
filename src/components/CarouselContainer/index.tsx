'use client';
import React, { ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import Slider from 'react-slick';

type Props = {
  children: ReactNode;
  settings?: object;
};

// react-slick clones custom arrows and injects props (data-role, onClick, ...),
// which React.Fragment cannot receive — render nothing via a component instead.
const HiddenArrow = () => null;

// react-slick >= 0.30 evaluates responsive breakpoints via matchMedia listeners
// that never fire on initial load (enquire.js did), so phones get desktop
// settings and overlapping slides. We track the viewport width ourselves and
// apply the same breakpoint buckets, remounting the slider per bucket.
const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

type Bucket = 'ssr' | 'mobile' | 'tablet' | 'laptop' | 'desktop';

const getBucket = (width: number | undefined): Bucket => {
  if (width === undefined) return 'ssr';
  if (width <= 600) return 'mobile';
  if (width <= 1000) return 'tablet';
  if (width <= 1444) return 'laptop';
  return 'desktop';
};

const bucketSettings: Record<Exclude<Bucket, 'ssr' | 'desktop'>, object> = {
  mobile: { slidesToShow: 1, slidesToScroll: 1, centerPadding: '20px' },
  tablet: { slidesToShow: 1, slidesToScroll: 1 },
  laptop: { slidesToShow: 2 }
};

export default function CarouselContainer({ children, settings }: Props) {
  const [viewportWidth, setViewportWidth] = useState<number | undefined>(
    undefined
  );

  useIsomorphicLayoutEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const bucket = getBucket(viewportWidth);

  const config = {
    dots: true,
    className: 'center',
    infinite: true,
    speed: 500,
    autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 3,
    // centerMode forces slidesToScroll to 1 inside react-slick
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '40px',
    nextArrow: <HiddenArrow />,
    prevArrow: <HiddenArrow />,
    ...settings,
    ...(bucket !== 'ssr' && bucket !== 'desktop' ? bucketSettings[bucket] : {})
  };

  return (
    <Slider key={bucket} {...config}>
      {children}
    </Slider>
  );
}
