import PropTypes from 'prop-types';

// Tech svg icon local imports
import htmlIcon from '../assets/tech-icons/html-icon.svg';
import cssIcon from '../assets/tech-icons/css-icon.svg';
import javascriptIcon from '../assets/tech-icons/javascript-icon.svg';
import reactIcon from '../assets/tech-icons/react-icon.svg';

const LocalIconsSrc = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: javascriptIcon,
  React: reactIcon,
}

// Tech Icons
const TechIcon = function ({iconName}) {
  return (
    <img src={LocalIconsSrc[iconName]} alt='' className='tech-icon'/>
  )
}

TechIcon.propTypes = {
  iconName: PropTypes.string,
}

export {TechIcon}