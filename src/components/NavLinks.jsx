import PropTypes from 'prop-types';

import PlainSvgIcon from "./PlainSvg";

const NavLinks = function ({assignClass}) {
  return (
    <nav className={`header-links ${assignClass}`}>
      <ul>
        <li><a href="#About">ABOUT</a></li>
        <li><a href="#Projects">PROJECTS</a></li>
        <li><a href="#Contact">CONTACT</a></li>
      </ul>
    </nav>
  )
}

NavLinks.propTypes = {
  assignClass: PropTypes.string
}

const MenuPanel = function ({headerRef}) {
  const header = headerRef.current;
  
  const handleOpenMenuPanel = function () {
    header.classList.toggle('open');
  }

  return (
    <>
      <button 
        onClick={handleOpenMenuPanel}
        className='menu-button' 
        aria-label='Menu side bar'
        value='open-menu'
      >
        <PlainSvgIcon iconName={'navMenu'} assignClass={'nav-menu-icon menu'}/>
        <PlainSvgIcon iconName={'close'} assignClass={'nav-menu-icon close'}/>
      </button>
      <NavLinks assignClass={'menu-panel-nav'}/>
    </>
  )
}

MenuPanel.propTypes = {
  headerRef: PropTypes.object
}

export {NavLinks, MenuPanel}