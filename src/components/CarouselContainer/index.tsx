'use client';
import React, { ReactNode } from 'react';
import Slider from 'react-slick';

type Props = {
  children: ReactNode;
  settings?: object;
};

// react-slick clones custom arrows and injects props (data-role, onClick, ...),
// which React.Fragment cannot receive — render nothing via a component instead.
const HiddenArrow = () => null;

export default function CarouselContainer({ children, settings }: Props) {
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
    // cssEase: "linear",
    nextArrow: <HiddenArrow />,
    prevArrow: <HiddenArrow />,
    responsive: [
      {
        breakpoint: 1444,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px'
        }
      }
    ],
    ...settings
  };

  return <Slider {...config}>{children}</Slider>;
}
