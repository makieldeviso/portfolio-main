import { useEffect, useRef } from "react"

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

    window.addEventListener('scroll', scrollStyling)


    return () => {
      window.removeEventListener('scroll', scrollStyling )
    }
  },[])


  return (
    <header ref={headerRef}>
      <div className='header-cont'>
        <div className="page-logo">
          <div className='page-icon'></div>
          <p className="page-name">FM</p>
        </div>

        <nav className={'header-links'}>
          <ul>
            <li><a href="#About">ABOUT</a></li>
            <li><a href="#Portfolio">PORTFOLIO</a></li>
            <li><a href="#Contact">CONTACT</a></li>
          </ul>
        </nav>
       
      </div>
    </header>
  )
}

export default Header