// import Link from 'next/link';
// import React from 'react';

// const navItems = [
//   {
//     title: 'Hello',
//     href: '#hello'
//   }
// ];

// const Navigation = () => {
//   // const [active, setactive] = useState(false);

//   // if (typeof window !== "undefined") {
//   //   window.addEventListener("scroll", () => {
//   //     if (window.scrollY > 100) {
//   //       setactive(true);
//   //     } else {
//   //       setactive(false);
//   //     }
//   //   });
//   // }

//   return (
//     <nav
//       // className={`w-full px-5 py-8 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && "fixed top-0 left-0  z-[9999]"
//       //   }`}
//       className={`} min-h-[60px] w-full border-b border-b-divider px-5  py-8`}
//     >
//       <div className="flex items-center justify-between ">
//         <div className="block md:flex">
//           {navItems.map((item, index) => (
//             <Link key={index} href={item.href}>
//               <h5
//                 className={`inline-block py-5 font-Inter text-2xl font-[500] text-primary md:px-4 md:py-0 xl:px-8 `}
//               >
//                 {item.title}
//               </h5>
//             </Link>
//           ))}
//         </div>
//         <div>
//           <Link href={'/'}>
//             <h1 className="cursor-pointer text-2xl font-semibold">
//               <span className="text-blue-500">@Atharv</span>
//               Naik
//             </h1>
//           </Link>
//         </div>
//         {/* <div className="flex items-center ml-10">
//         <div>
//           <DropDown
//             setOpen={setOpen}
//             handleProfile={handleProfile}
//           />
//         </div>
//       </div> */}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const navItems = [
  { title: 'Hello', href: '#title' },
  { title: 'Social', href: '#social-content' },
  { title: 'Skills', href: '#skills' },
  { title: 'Featured', href: '#intro-projects' },
  { title: 'Personal', href: '#personal-projects' },
  { title: 'AI & Web3', href: '#AI-and-web3-projects' },
  { title: 'Open Source', href: '#Opensource-projects' },
  { title: 'Contact', href: '#contact-me' }
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="min-h-[60px] w-full border-b border-b-divider px-5 py-4 bg-background"
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <Link href={'/'}>
            <a className="cursor-pointer text-2xl font-semibold flex items-baseline" aria-label="Home">
              <span className="text-blue-500">@Atharv</span>
              <span className="ml-2">Naik</span>
            </a>
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="inline-block py-2 px-3 text-base font-medium text-primary hover:underline">
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-md focus:outline-none focus:ring"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden mt-3 px-5 pb-4 animate-fade-in" role="menu" aria-label="Mobile menu">
          <div className="flex flex-col gap-2">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-2 text-base font-medium rounded hover:bg-surface/10"
                role="menuitem"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

