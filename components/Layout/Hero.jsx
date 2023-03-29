import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isTextInView, setIsTextInView] = useState(false);
  const [isImageInView, setIsImageInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === imageRef.current) {
            setIsImageInView(entry.isIntersecting);
          }
          if (entry.target === textRef.current) {
            setIsTextInView(entry.isIntersecting);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    observer.observe(textRef.current);
    observer.observe(imageRef.current);
  }, []);

  useEffect(() => {
    if (isTextInView) {
      setHasAnimated(true);
    }
  }, [isTextInView]);

  return (
    <>
      {/* <div className="hero flex justify-center items-center h-screen w-full px-40 bg-center text-white bg-cover bg-no-repeat bg-[url('/hero1.jpg')]">

        <Image className='rounded-full hover:scale-110 transition-all duration-300 h-56 w-56 shadow-2xl border-[rgba(255,255,255,0.1)]' src='https://pbs.twimg.com/profile_images/1627792365162487810/--yk_MYq_400x400.jpg' width={500} height={500} alt='profile' title='Web wizard crafting innovative solutions with full-stack expertise' />

        <div className="">
          <div ref={textRef} className={`intro`}>
            <h1 className={`${hasAnimated ? 'scale-100' : 'scale-0'} transition-all duration-1000 font-Dancing-script text-center text-4xl lg:text-7xl`}>Welcome to our blogging site, where We share stories, insights, and ideas about the things that matter most to us.</h1>
          </div>
        </div> */}



      {/* </div> */}
      <div ref={imageRef} className={`bg-center bg-cover bg-no-repeat bg-[url('/hero1.jpg')] py-11 lg:py-0 lg:h-screen transition-all duration-1000 w-full lg:pr-32 my-auto space-y-2 lg:space-y-0 lg:pt-0 pt-12 lg:flex lg:flex-row flex-col items-center justify-center`}>

        <div className="profile lg:w-[40%] pt-20 pb-10 lg:pb-0 lg:pt-0 lg:h-full order-1 flex justify-center items-center">
          <Image
            ref={imageRef}
            className={`${hasAnimated ? 'scale-100' : 'scale-0'} w-60 lg:w-72 hover:scale-110 shadow-2xl shadow-black rounded-full transition-all duration-1000`}
            src='https://pbs.twimg.com/profile_images/1627792365162487810/--yk_MYq_400x400.jpg'
            width={500}
            height={500}
            alt='profile' title='Web wizard crafting innovative solutions with full-stack expertise'
          />
        </div>

        <div
          ref={textRef}
          className={`intro ${hasAnimated ? 'scale-100' : 'scale-0'} text-white lg:w-[60%] order-2 transition-all duration-1000 px-4 text-center font-Dancing-script text-5xl lg:text-7xl`}
        >
          Welcome to our blogging site, where We share stories, insights, and ideas about the things that matter most to us.
          {/* <span className='h-[0.1rem] my-2 w-1/2 bg-white block'></span> */}

        </div>

        <Link className='lg:hidden' to='showTopPosts' smooth={true} duration={500}>
          <FontAwesomeIcon className='items-end w-6 h-6 text-black cursor-pointer relative bg-[rgba(255,255,255,0.7)] rounded-full p-2 my-4 top-6 left-[45%] lg:left-1/2 animate-bounce' icon={faArrowDown} />
        </Link>

      </div>

      <Link className='hidden lg:block' to='showTopPosts' smooth={true} duration={500}>
        <FontAwesomeIcon className='items-end w-6 h-6 text-black cursor-pointer bg-[rgba(255,255,255,0.7)] rounded-full p-2 left-[45%] absolute lg:left-1/2 bottom-8 animate-bounce' icon={faArrowDown} />
      </Link>

    </>
  )
}

export default Hero
