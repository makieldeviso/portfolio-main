import PropTypes from 'prop-types';

// Image import
import profilePicture from '../assets/profile-picture.jpg';

// Local Svg import
import htmlIcon from '../assets/html-icon.svg';
import cssIcon from '../assets/css-icon.svg';
import javascriptIcon from '../assets/javascript-icon.svg';
import reactIcon from '../assets/react-icon.svg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';

// Pictogrammers import
import Icon from '@mdi/react';
import {mdiEmailOutline } from '@mdi/js'; 

const PicturesSrc = {
  'profile-picture': profilePicture,
}

const PicSrc = {
  mail: mdiEmailOutline
}

const LocalIconsSrc = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: javascriptIcon,
  React: reactIcon,
  Github: githubIcon,
  Linkedin: linkedinIcon
}

const Picture = function ({assetName, altText}) {
  return (
    <img src={PicturesSrc[assetName]} alt={altText && altText} />
  )
}

Picture.propTypes = {
  assetName: PropTypes.string,
  altText: PropTypes.string
}

// Pic Icon
const PicIcon = function ({iconName, title}) {
  const iconAttributes = {
    path: PicSrc[iconName],
    title: title && title,
    className: title && `${title}-icon`,
    alt: ''
  }

 return (
  <Icon {...iconAttributes} />
 )
}

PicIcon.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string
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

// Local Icon
const LocalIcon = function ({iconName}) {
  return (
    <img src={LocalIconsSrc[iconName]} alt='' className='local-icon'/>
  )
}

LocalIcon.propTypes = {
  iconName: PropTypes.string,
}

export {Picture, PicIcon, TechIcon, LocalIcon}