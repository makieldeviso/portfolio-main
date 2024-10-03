import { NavLink } from "react-router-dom"

const Header = function () {
  return (
    <header>
      <div className='header-cont'>
        <div className="page-logo">
          <div className='page-icon'></div>
          <p className="page-name">FMB</p>
        </div>

        <nav className={'header-links'}>
          <ul>
            <li><NavLink to={''}>ABOUT</NavLink></li>
            <li><NavLink to={''}>PORTFOLIO</NavLink></li>
            <li><NavLink to={''}>CONTACT</NavLink></li>
          </ul>
        </nav>
       
      </div>
    </header>
  )
}

export default Header