import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';

const GoTop = () => {

  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };



  return (
    <div>
      <FontAwesomeIcon className={`fixed z-50 w-7 h-7 ${showGoTop ? 'scale-110' : 'scale-0'}  cursor-pointer bottom-8 right-4 text-white bg-black p-2 rounded-full transition-all duration-150`} icon={faAngleUp} onClick={handleClick} />
    </div>
  )
}

export default GoTop
