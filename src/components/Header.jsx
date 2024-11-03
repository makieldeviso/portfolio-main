import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const Header = function () {
  const headerRef = useRef(null);

  useEffect(() => {

    const scrollStyling = function () {
      const {scrollY} = window;
      if (scrollY > 0) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', scrollStyling);
    window.addEventListener('load', scrollStyling);


    return () => {
      window.removeEventListener('scroll', scrollStyling);
      window.removeEventListener('load', scrollStyling);
    }
  },[])

  const scrollToHome = function () {
    window.location.href= '#Home';
  }

  return (
    <header ref={headerRef}>
      <div className='header-cont'>
        <div className="page-logo" onClick={scrollToHome}>
          <div className='page-icon'></div>
          <div className="page-name">
            <span>F</span>
            <span className='rest'>RED </span>

            <span >M</span>
            <span className='rest'>ARK</span>
          </div>
        </div>

        <nav className={'header-links'}>
          <ul>
            <li><a href="#About">ABOUT</a></li>
            <li><a href="#Projects">PROJECTS</a></li>
            <li><a href="#Contact">CONTACT</a></li>
          </ul>
        </nav>
       
      </div>
    </header>
  )
}

export default Header