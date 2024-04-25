
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-800 shadow-lg transition-transform duration-300 ${visible ? '' : '-translate-y-full'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center font-extrabold whitespace-nowrap dark:text-white text-5xl text-purple-500">Faster</span>
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse ">
          <button type="button" className="text-white bg-violet-500 rounded-full  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-2xl px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
          <button data-collapse-toggle="navbar-sticky" type="button"  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mt-3" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only ">Open main menu</span>
            <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0  md:mx-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              {/* Smooth scroll to the section with ID 'what-we-do' */}
              <ScrollLink to="what-we-do" smooth={true} duration={500} className="block py-2 px-3 md:mx-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-3xl">Who we are</ScrollLink>
            </li>
            <li>
              {/* Smooth scroll to the section with ID 'how-it-works' */}
              <ScrollLink to="how-it-works" smooth={true} duration={500} className="block py-2 px-3 md:mx-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-3xl">What we do</ScrollLink>
            </li>
            <li>
              {/* Smooth scroll to the section with ID 'pricing' */}
              <ScrollLink to="pricing" smooth={true} duration={500} className="block py-2 px-3 md:mx-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-3xl">How it works</ScrollLink>
            </li>
            <li>
              {/* Smooth scroll to the section with ID 'contact' */}
              <ScrollLink to="contact" smooth={true} duration={500} className="block py-2 px-3 md:mx-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-3xl">Contact us</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


