import PropTypes from 'prop-types'

const PlainSvgIcon = function ({iconName, assignClass}) {

  const attributes = {
    className: assignClass,
    style: {pointerEvents: 'none'}
  }

  const svgIcons = {
    copyright: 
      (<svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='-6 0 32 32'>
        <g>
          <path d='M9.76 21.68c-1.52 0-2.96-.6-4.04-1.68-2.24-2.24-2.24-5.84 0-8.04a5.7 5.7 0 0 1 4.04-1.68c1.52 0 2.96.6 4.04 1.68.32.32.32.84 0 1.2-.32.32-.84.32-1.2 0A3.96 3.96 0 0 0 9.76 12c-1.08 0-2.08.4-2.84 1.16a4.03 4.03 0 0 0 0 5.68C7.68 19.6 8.68 20 9.76 20s2.08-.4 2.84-1.16c.32-.32.84-.32 1.2 0 .32.32.32.84 0 1.2a5.72 5.72 0 0 1-4.04 1.64m0 4.08C4.36 25.76 0 21.36 0 16s4.36-9.76 9.76-9.76c5.36 0 9.76 4.36 9.76 9.76s-4.4 9.76-9.76 9.76m0-17.84c-4.44 0-8.08 3.6-8.08 8.08s3.6 8.08 8.08 8.08c4.44 0 8.08-3.6 8.08-8.08s-3.6-8.08-8.08-8.08'></path>
        </g>
      </svg>),

    github: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
        <g>
          <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g fill='#000' transform='translate(-140 -7559)'>
              <g transform='translate(56 160)'>
                <path d='M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.4 9.4 0 0 0-2.505-.345 9.4 9.4 0 0 0-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253'></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),

    linkedin: (
      <svg
        {...attributes}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        width='200'
        height='200'
        viewBox='0 0 24 24'
      >
        <g>
          <path d='M22.2 0H1.8C.8 0 0 .8 0 1.8v20.5c0 1 .8 1.8 1.8 1.8h20.5c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0m-15 20.4H3.5V9h3.6v11.4zm-1.9-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1m15.2 13.1h-3.6v-6.3c0-1.8-.8-2.4-1.8-2.4-1.1 0-2.1.8-2.1 2.5v6.2H9.3V9h3.5v1.6c.3-.7 1.6-1.9 3.4-1.9 2 0 4.2 1.2 4.2 4.7v7.1z'></path>
        </g>
      </svg>
    ),

    mail: (
      <svg
        {...attributes}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        fill='#000'
        version='1.1'
        viewBox='0 0 24 24'
      >
        <g>
          <path d='M24 21H0V3h24zM2 19h20V8.1l-10 8.2L2 8.1zM2 5.5l10 8.2 10-8.2V5H2z'></path>
        </g>
      </svg>
    ),

    openLink: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <g>
          <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g fill='#000' transform='translate(85.333 64)'>
              <path d='M128 64v42.666H42.667V320H256v-85.334h42.666v128H0V64zM362.667 0v170.667H320V72.835L143.085 249.752l-30.17-30.17L289.83 42.666H192V0z'></path>
            </g>
          </g>
        </g>
      </svg>
    ),

    more: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <path d='m16.003 18.626 7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z'></path>
      </svg>
    ),

    less: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <path d='m15.997 13.374-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z'></path>
      </svg>
    ),

  }

  return (
    <>
      {svgIcons[iconName]}
    </>
  )
}

PlainSvgIcon.propTypes = {
  iconName: PropTypes.string,
  assignClass: PropTypes.string
}

export default PlainSvgIcon;