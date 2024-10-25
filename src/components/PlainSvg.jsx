import PropTypes from 'prop-types'

const PlainSvgIcon = function ({iconName, assignClass}) {
  let svgContent;
  switch (iconName) {
    case 'github':
      svgContent = 
      <path
        fill="#161514"
        fillRule="evenodd"
        d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
        clipRule="evenodd"
      ></path>
    break;

    case 'linkedin':
    svgContent = 
      <path d="M28.778 1.004H3.191a2.185 2.185 0 00-2.186 2.159v25.672a2.186 2.186 0 002.186 2.161h25.612c1.2 0 2.175-.963 2.194-2.159V3.165a2.195 2.195 0 00-2.195-2.161h-.029.001zM9.9 26.562H5.446V12.251H9.9zM7.674 10.293a2.579 2.579 0 112.579-2.58v.004a2.577 2.577 0 01-2.577 2.577h-.003zm18.882 16.269h-4.441v-6.959c0-1.66-.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441V12.252h4.266v1.951h.058a4.686 4.686 0 014.22-2.312h-.009c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
    break;

    case 'mail':
      svgContent = 
      <g>
        <path d="M24 21H0V3h24v18zM2 19h20V8.1l-10 8.2L2 8.1V19zM2 5.5l10 8.2 10-8.2V5H2v.5z"></path>
      </g>
    break;
  
    case 'open-link':
      svgContent = 
      <svg className={assignClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#000" transform="translate(85.333 64)">
              <path d="M128 64v42.666H42.667V320H256v-85.334h42.666v128H0V64h128zM362.667 0v170.667H320V72.835L143.085 249.752l-30.17-30.17L289.83 42.666H192V0h170.667z"></path>
            </g>
          </g>
        </g>
      </svg>
    break;
  
    default:
      break;
  }


  const svgIcon = 
    <svg 
      className={assignClass} 
      style={{pointerEvents: 'none'}}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 16 16">
      {svgContent}
    </svg>


  return (
    <>{svgIcon}</>
  )
}


PlainSvgIcon.propTypes = {
  iconName: PropTypes.string,
  assignClass: PropTypes.string,
}

export default PlainSvgIcon;