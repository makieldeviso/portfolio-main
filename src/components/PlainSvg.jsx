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

    happy: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
        <g>
          <path
            d='M32 3a29 29 0 1 0 29 29A29 29 0 0 0 32 3m0 56a27 27 0 1 1 27-27 27 27 0 0 1-27 27m15-26H17a1 1 0 0 0-1 1c0 9.93 7.18 18 16 18s16-8.07 16-18a1 1 0 0 0-1-1m-29 2h28a18 18 0 0 1-.67 4H18.71a18 18 0 0 1-.71-4m8.65 13.8a6.44 6.44 0 0 1 10.62 0 12.35 12.35 0 0 1-10.62 0m12.35-1a8.81 8.81 0 0 0-7-3.8 8.81 8.81 0 0 0-7 3.81A15.56 15.56 0 0 1 19.43 41h25.14A15.56 15.56 0 0 1 39 47.81Zm-2.89-21.25 5-10a.3.3 0 0 1 .07-.09.7.7 0 0 1 .28-.28.3.3 0 0 1 .09-.07s.05 0 .07 0a1 1 0 0 1 .2-.06L42 16h.18a1 1 0 0 1 .2.06s0 0 .07 0 .06.05.09.07a.7.7 0 0 1 .28.28.3.3 0 0 1 .07.09l5 10a1 1 0 0 1-.44 1.34.93.93 0 0 1-.45.16 1 1 0 0 1-.89-.55L42 19.24l-4.11 8.21A1 1 0 0 1 37 28a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34m-20 0 5-10a.3.3 0 0 1 .07-.09.7.7 0 0 1 .28-.28s.06-.06.09-.07.05 0 .07 0a1 1 0 0 1 .2-.06L22 16h.18a1 1 0 0 1 .2.06s.05 0 .07 0 .06.05.09.07a.7.7 0 0 1 .28.28.3.3 0 0 1 .07.09l5 10a1 1 0 0 1-.44 1.34.93.93 0 0 1-.45.16 1 1 0 0 1-.89-.55L22 19.24l-4.11 8.21A1 1 0 0 1 17 28a.93.93 0 0 1-.45-.11 1 1 0 0 1-.44-1.34'
            data-name='Layer 13'
          ></path>
        </g>
      </svg>
    ),

    fast: (
      <svg
        {...attributes}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        width='200'
        height='200'
        fill='#000'
        version='1.1'
        viewBox='0 0 491.148 491.148'
      >
        <g>
          <path d='M216.396 252.217c-11.836 0-21.466 9.63-21.466 21.467s9.629 21.466 21.466 21.466 21.467-9.629 21.467-21.466c-.001-11.837-9.631-21.467-21.467-21.467m0 34.432c-7.149 0-12.966-5.816-12.966-12.966s5.816-12.967 12.966-12.967 12.967 5.817 12.967 12.967c-.001 7.15-5.818 12.966-12.967 12.966'></path>
          <path d='M464.13 197.664h-32.585V30.074C431.545 13.491 418.054 0 401.472 0H31.324C14.741 0 1.25 13.491 1.25 30.074v265.883c0 16.583 13.491 30.074 30.074 30.074h129.511l-15.448 59.592h-1.221c-12.84 0-23.286 10.447-23.286 23.288v17.303a4.25 4.25 0 0 0 4.25 4.25h182.535a4.25 4.25 0 0 0 4.25-4.25v-17.303c0-12.841-10.447-23.288-23.289-23.288h-1.22l-15.449-59.592h48.057V465.38c0 14.209 11.56 25.768 25.769 25.768H464.13c14.209 0 25.768-11.56 25.768-25.77V223.433c0-14.209-11.559-25.769-25.768-25.769m-135.616 30.02 152.885-.001v201.443H328.514zm152.334-8.501-151.783.001c1.901-7.47 8.665-13.02 16.718-13.02H464.13c8.053 0 14.816 5.549 16.718 13.019m-135.066-21.519c-14.209 0-25.769 11.56-25.769 25.77v10.321H9.75V33.16h413.295v164.504zM31.324 8.5h370.147c10.023 0 18.446 6.881 20.858 16.16H10.465C12.877 15.381 21.301 8.5 31.324 8.5m272.091 400.411v13.053H129.38v-13.053c0-8.154 6.633-14.788 14.786-14.788h144.46c8.155 0 14.789 6.634 14.789 14.788m-24.789-23.288H154.169l15.448-59.592h93.56zM31.324 317.531c-11.896 0-21.574-9.678-21.574-21.574v-26.31h65.618a4.25 4.25 0 0 0 0-8.5H9.75v-18.893h310.264v75.276H31.324zM464.13 482.648H345.782c-9.522 0-17.269-7.747-17.269-17.268v-8.548h40.037a4.25 4.25 0 0 0 0-8.5h-40.037v-10.706h152.885v27.753c0 9.522-7.746 17.269-17.268 17.269'></path>
          <path d='M404.956 443.603c-8.596 0-15.59 6.995-15.59 15.592 0 8.596 6.994 15.59 15.59 15.59s15.592-6.994 15.592-15.591-6.995-15.591-15.592-15.591m0 22.681c-3.909 0-7.09-3.181-7.09-7.09 0-3.911 3.181-7.092 7.09-7.092 3.911 0 7.092 3.181 7.092 7.091s-3.181 7.091-7.092 7.091M459.369 250.47h-41.718a4.25 4.25 0 0 0-4.25 4.25v38.465a4.25 4.25 0 0 0 4.25 4.25h41.718a4.25 4.25 0 0 0 4.25-4.25V254.72a4.25 4.25 0 0 0-4.25-4.25m-4.25 38.465h-33.218V258.97h33.218zM353.478 297.435h41.745a4.25 4.25 0 0 0 4.25-4.25V254.72a4.25 4.25 0 0 0-4.25-4.25h-41.745a4.25 4.25 0 0 0-4.25 4.25v38.465a4.25 4.25 0 0 0 4.25 4.25m4.25-38.465h33.245v29.965h-33.245zM459.369 310.397H353.478a4.25 4.25 0 0 0-4.25 4.25v33.789a4.25 4.25 0 0 0 4.25 4.25H459.37a4.25 4.25 0 0 0 4.25-4.25v-33.789a4.25 4.25 0 0 0-4.251-4.25m-4.25 33.79h-97.392v-25.289h97.392zM459.369 365.99H353.478a4.25 4.25 0 0 0 0 8.5H459.37a4.25 4.25 0 1 0-.001-8.5M459.369 384.387H353.478a4.25 4.25 0 0 0 0 8.5H459.37a4.25 4.25 0 1 0-.001-8.5M390.106 48.02h-229a4.25 4.25 0 0 0-4.25 4.25v46a4.25 4.25 0 0 0 4.25 4.25h229a4.25 4.25 0 0 0 4.25-4.25v-46a4.25 4.25 0 0 0-4.25-4.25m-4.25 46h-220.5v-37.5h220.5zM43.106 102.52h86a4.25 4.25 0 0 0 4.25-4.25v-46a4.25 4.25 0 0 0-4.25-4.25h-86a4.25 4.25 0 0 0-4.25 4.25v46a4.25 4.25 0 0 0 4.25 4.25m4.25-46h77.5v37.5h-77.5zM390.106 119.687h-347a4.25 4.25 0 0 0-4.25 4.25v20.067a4.25 4.25 0 0 0 4.25 4.25h347a4.25 4.25 0 0 0 4.25-4.25v-20.067a4.25 4.25 0 0 0-4.25-4.25m-4.25 20.067h-338.5v-11.567h338.5zM125.106 165.828h-82a4.25 4.25 0 0 0 0 8.5h82a4.25 4.25 0 0 0 0-8.5M125.106 187.828h-82a4.25 4.25 0 0 0 0 8.5h82a4.25 4.25 0 0 0 0-8.5M389.115 165.828H162.17a4.25 4.25 0 0 0 0 8.5h226.945a4.25 4.25 0 0 0 0-8.5M250.106 187.828H162.17a4.25 4.25 0 0 0 0 8.5h87.936a4.25 4.25 0 0 0 0-8.5'></path>
        </g>
      </svg>
    ),

    connect: (
      <svg
        {...attributes}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        fill='#000'
        version='1.1'
        viewBox='0 0 115.796 115.796'
      >
        <path d='M32.629 9.442h-29v29h29zm-5 24h-19v-19h19zM96.544 8.705l-19.25 29.227h38.502zm0 9.088 9.972 15.137H86.574zm0 58.455c-8.34 0-15.125 6.785-15.125 15.125s6.785 15.125 15.125 15.125 15.125-6.785 15.125-15.125-6.785-15.125-15.125-15.125m0 25.25c-5.583 0-10.125-4.542-10.125-10.125s4.542-10.125 10.125-10.125 10.125 4.542 10.125 10.125-4.542 10.125-10.125 10.125M20.631 43.395v11.333h13.557v5H20.629V72.24h-5V57.073h.002V43.395zm73.413 16.333H78.688v-5h15.357v-12.82h5v15.166h-.001V72.24h-5zM9.075 75.656 0 91.373l9.075 15.719h18.148l9.075-15.719-9.075-15.717zm15.261 26.434H11.961L5.773 91.372l6.188-10.718h12.375l6.188 10.718zm14.845-47.83 6.814 20.972h22.051l6.813-20.972L57.02 41.299zm25.232 15.972H49.627L45.058 56.17l11.961-8.691L68.98 56.17z'></path>
      </svg>
    ),

    goal: (
      <svg
        {...attributes}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        fill='#000'
        version='1.1'
        viewBox='0 0 496 496'
      >
        <g>
          <path d='m477.072 480-69.848-147.912L448 291.312l32 32V216H372.688l32 32-25.248 25.248L341.072 192h-54.864l-17.456-32H256v-48h182.128l-29.224-48.712L427.816 16H256V0h-16v160h-69.056l-152 320H0v16h496v-16zM256 32h148.184l-13.088 32.712L409.872 96H256zm171.312 216-16-16H464v52.688l-16-16-128 128-56-56-112 112L131.312 432 268 295.312l56 56zM36.656 480l144.4-304h78.192l45.728 83.832 14.048-7.664L294.928 208h36l36.488 77.272L324 328.688l-56-56L108.688 432 152 475.312l112-112 56 56 75.208-75.208L459.376 480z'></path>
          <path d='M272 64h16v16h-16zM304 64h16v16h-16zM336 64h16v16h-16z'></path>
        </g>
      </svg>
    ),

    code: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <g>
          <path d='M161.98 397.63 0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02zM350.02 397.63l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256z'></path>
        </g>
    </svg>
    )

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