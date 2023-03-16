import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Hero = () => {
  const textRef = useRef(null);
  const [isTextInView, setIsTextInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === textRef.current) {
            setIsTextInView(entry.isIntersecting);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    observer.observe(textRef.current);
  }, []);

  useEffect(() => {
    if (isTextInView) {
      setHasAnimated(true);
    }
  }, [isTextInView]);

  return (
    <>
      <div className="hero h-screen w-full bg-center text-white bg-cover bg-no-repeat bg-[url('/hero1.jpg')]">
        <div className="bg-blend-multiply overflow-hidden flex flex-col justify-center items-center bg-[rgba(255,255,255,0.1)] h-full w-full">
          <div ref={textRef} className={`intro lg:px-48`}>
            <h1 className={`${hasAnimated ? 'scale-100' : 'scale-0'} transition-all duration-1000 font-Dancing-script text-center text-4xl lg:text-7xl`}>Welcome to our blogging site, where We share stories, insights, and ideas about the things that matter most to us.</h1>
          </div>
          <Link to='showTopPosts' smooth={true} duration={500}>
            <FontAwesomeIcon className='items-end w-6 h-6 text-white cursor-pointer bg-black rounded-full p-2 absolute left-[47%] lg:left-1/2 bottom-8 animate-bounce' icon={faArrowDown} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
