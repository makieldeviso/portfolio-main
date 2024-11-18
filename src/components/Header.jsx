import { useEffect, useRef, useState } from "react"

import { NavLinks, MenuPanel } from "./NavLinks";

const SMALL_SCREEN = 425;
const TABLET_SCREEN = 1024;

const Header = function () {
  const headerRef = useRef(null);
  const scrolledRef = useRef('');
  const [screenSizeType, setScreenSizeType] = useState('wide');

  useEffect(() => {
    const handleScrollStyling = function () {
      const {scrollY} = window;
      if (scrollY > 0) {
        headerRef.current.classList.add('scrolled');
        scrolledRef.current = 'scrolled';
      } else {
        headerRef.current.classList.remove('scrolled');
        scrolledRef.current = '';
      }
    }

    window.addEventListener('scroll', handleScrollStyling);
    window.addEventListener('load', handleScrollStyling);

    return () => {
      window.removeEventListener('scroll', handleScrollStyling);
      window.removeEventListener('load', handleScrollStyling);
    }
  },[])

  useEffect(() => {
    const handleScreenSizeType = function () {
      const {width} = screen;
      
      if (width <= SMALL_SCREEN) {
        setScreenSizeType('small');
  
      } else if (width <= TABLET_SCREEN && width >= SMALL_SCREEN) {
        setScreenSizeType('tablet');
  
      } else {
        setScreenSizeType('wide');
      } 
    }

    window.addEventListener('load', handleScreenSizeType);
    window.addEventListener('resize', handleScreenSizeType);

    return () => {
      window.removeEventListener('load', handleScreenSizeType);
      window.removeEventListener('resize', handleScreenSizeType);
    }

  }, []);

  const scrollToHome = function () {
    window.location.href= '#Home';
  }

  return (
    <header ref={headerRef} className={`${scrolledRef.current} ${screenSizeType}`}>
      <div className={'header-cont'}>
        <div className="page-logo" onClick={scrollToHome}>
          <div className='page-icon'></div>
          <div className="page-name">
            <span>F</span>
            <span className='rest'>RED </span>

            <span >M</span>
            <span className='rest'>ARK</span>
          </div>
        </div>

        {
          screenSizeType === 'small' 
          ? <MenuPanel headerRef={headerRef}/>
          : <NavLinks assignClass={'wide'}/>
        }
      </div>
    </header>
  )
}

export default Header