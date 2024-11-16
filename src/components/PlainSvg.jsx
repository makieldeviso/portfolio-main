import PropTypes from 'prop-types'

const PlainSvgIcon = function ({iconName, assignClass}) {

  const attributes = {
    className: assignClass,
    style: {pointerEvents: 'none'}
  }

  const svgIcons = {
    copyright: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='-6 0 32 32'>
        <g>
          <path d='M9.76 21.68c-1.52 0-2.96-.6-4.04-1.68-2.24-2.24-2.24-5.84 0-8.04a5.7 5.7 0 0 1 4.04-1.68c1.52 0 2.96.6 4.04 1.68.32.32.32.84 0 1.2-.32.32-.84.32-1.2 0A3.96 3.96 0 0 0 9.76 12c-1.08 0-2.08.4-2.84 1.16a4.03 4.03 0 0 0 0 5.68C7.68 19.6 8.68 20 9.76 20s2.08-.4 2.84-1.16c.32-.32.84-.32 1.2 0 .32.32.32.84 0 1.2a5.72 5.72 0 0 1-4.04 1.64m0 4.08C4.36 25.76 0 21.36 0 16s4.36-9.76 9.76-9.76c5.36 0 9.76 4.36 9.76 9.76s-4.4 9.76-9.76 9.76m0-17.84c-4.44 0-8.08 3.6-8.08 8.08s3.6 8.08 8.08 8.08c4.44 0 8.08-3.6 8.08-8.08s-3.6-8.08-8.08-8.08'></path>
        </g>
      </svg>
    ),

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

    framework: (
      <svg
        {...attributes}
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        width='200'
        height='200'
        fill='#000'
        version='1.1'
        viewBox='0 0 512 512'
      >
        <g>
          <path d='M494.933 52.576V25.6c0-5.12-3.413-8.533-8.533-8.533h-34.133c-5.12 0-8.533 3.413-8.533 8.533v25.6h-17.067V25.6c0-5.12-3.413-8.533-8.533-8.533H384c-5.12 0-8.533 3.413-8.533 8.533v26.976C365.363 55.967 358.4 65.309 358.4 76.8v409.59999999999997c0 5.12 3.413 8.533 8.533 8.533h136.533c5.12 0 8.533-3.413 8.533-8.533V76.8c.001-11.491-6.962-20.833-17.066-24.224m0 169.291H375.467V153.6h119.467zm0 85.333H375.467v-68.267h119.467zm-119.466 17.067h119.467v68.267H375.467zM460.8 34.133h17.067V51.2H460.8zm-68.267 0H409.6V51.2h-17.067zM375.467 76.8c0-5.12 3.413-8.533 8.533-8.533h102.4c5.12 0 8.533 3.413 8.533 8.533v59.733H375.467zm119.466 401.067H375.467V409.6h119.467zM298.667 221.867h-8.533v-25.6c0-5.12-3.413-8.533-8.533-8.533h-34.133c-5.12 0-8.533 3.413-8.533 8.533v25.6h-17.067v-25.6c0-5.12-3.413-8.533-8.533-8.533H179.2c-5.12 0-8.533 3.413-8.533 8.533v25.6H153.6v-25.6c0-5.12-3.413-8.533-8.533-8.533h-34.133c-5.12 0-8.533 3.413-8.533 8.533v25.6H85.333v-25.6c0-5.12-3.413-8.533-8.533-8.533H42.667c-5.12 0-8.533 3.413-8.533 8.533v25.6H25.6c-14.507 0-25.6 11.093-25.6 25.6V486.4c0 5.12 3.413 8.533 8.533 8.533h307.2c5.12 0 8.533-3.413 8.533-8.533V247.467c.001-14.507-11.093-25.6-25.599-25.6m-281.6 102.4H307.2v68.267H17.067zM256 204.8h17.067v17.067H256zm-68.267 0H204.8v17.067h-17.067zm-68.266 0h17.067v17.067h-17.067zm-68.267 0h17.067v17.067H51.2zm-34.133 42.667c0-5.12 3.413-8.533 8.533-8.533h273.06700000000006c5.12 0 8.533 3.413 8.533 8.533V307.2H17.067zm290.133 230.4H17.067V409.6H307.2z'></path>
        </g>
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

    simple: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <g>
          <path d='M3 4v25h25V4zm8 24H4V11h7zm16 0H12v-8h15zm0-9H12v-8h15zm0-9H4V5h23z'></path>
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
        viewBox='0 0 32 32'
      >
        <g>
          <path d='M19.5 31.36h-7a.36.36 0 0 1-.36-.36v-7a.36.36 0 0 1 .36-.36h3.14v-3.796a3.85 3.85 0 0 1-2.102-.873l-6.067 6.067c.555.669.889 1.527.889 2.462 0 2.128-1.731 3.86-3.86 3.86S.64 29.628.64 27.5s1.731-3.86 3.86-3.86c.935 0 1.793.335 2.462.89l6.067-6.067a3.85 3.85 0 0 1-.873-2.102H8.5a4.365 4.365 0 0 1-4.36-4.36V8.36H1A.36.36 0 0 1 .64 8V1A.36.36 0 0 1 1 .64h7a.36.36 0 0 1 .36.36v3.14h5.28V1a.36.36 0 0 1 .54-.312l6 3.464a.362.362 0 0 1 .003.623l-6 3.536A.36.36 0 0 1 13.64 8V4.86H8.36V8a.36.36 0 0 1-.36.36H4.86V12a3.644 3.644 0 0 0 3.64 3.64h3.657c.182-1.96 1.836-3.5 3.843-3.5s3.661 1.54 3.844 3.5h3.796V12.5a.36.36 0 0 1 .36-.36h3.14V8.343a3.865 3.865 0 0 1-3.5-3.843c0-2.128 1.732-3.86 3.86-3.86s3.86 1.731 3.86 3.86a3.865 3.865 0 0 1-3.5 3.843v3.797H31a.36.36 0 0 1 .36.36v7a.36.36 0 0 1-.36.36h-3.14v4.64a4.365 4.365 0 0 1-4.36 4.36h-3.64V31a.36.36 0 0 1-.36.36m-6.64-.72h6.28v-6.28h-6.28zM4.5 24.36c-1.731 0-3.14 1.408-3.14 3.14s1.409 3.14 3.14 3.14 3.14-1.408 3.14-3.14-1.409-3.14-3.14-3.14m15.36 3.78h3.64a3.644 3.644 0 0 0 3.64-3.64v-4.64H24a.36.36 0 0 1-.36-.36v-3.14h-3.796a3.87 3.87 0 0 1-3.484 3.484v3.796h3.14a.36.36 0 0 1 .36.36zm4.5-9h6.279v-6.28H24.36zM16 12.86c-1.731 0-3.14 1.409-3.14 3.14s1.409 3.14 3.14 3.14 3.14-1.408 3.14-3.14-1.409-3.14-3.14-3.14m11.5-11.5c-1.731 0-3.14 1.409-3.14 3.14s1.408 3.14 3.14 3.14 3.14-1.409 3.14-3.14-1.409-3.14-3.14-3.14M1.36 7.64h6.28V1.36H1.36zm13-6.016V7.37l4.925-2.903z'></path>
          <path fill='none' d='M0 0h32v32H0z'></path>
        </g>
      </svg>
    ),

    version: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M7 12h7.5a3.5 3.5 0 0 0 3.47-3.04 3.5 3.5 0 1 1 1.006.008A4.5 4.5 0 0 1 14.5 13H7v2.035a3.5 3.5 0 1 1-1 0v-6.07a3.5 3.5 0 1 1 1 0zm-3 6.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m0-13a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M18.5 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5'></path>
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
    ),

    html: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <g>
          <path
            fill='#e44f26'
            d='M5.902 27.201 3.655 2h24.69l-2.25 25.197L15.985 30z'
          ></path>
          <path fill='#f1662a' d='m16 27.858 8.17-2.265 1.922-21.532H16z'></path>
          <path
            fill='#ebebeb'
            d='M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zM16 21.434l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z'
          ></path>
          <path
            fill='#fff'
            d='M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83h-7.1850000000000005M15.989 7.151v3.0909999999999997h7.466l.062-.694.141-1.567.074-.83z'
          ></path>
        </g>
      </svg>
    ),

    css: (
      <svg {...attributes} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
        <g>
          <path
            fill='#1572b6'
            d='M5.902 27.201 3.656 2h24.688l-2.249 25.197L15.985 30z'
          ></path>
          <path fill='#33a9dc' d='m16 27.858 8.17-2.265 1.922-21.532H16z'></path>
          <path
            fill='#fff'
            d='M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16z'
          ></path>
          <path
            fill='#ebebeb'
            d='m16.019 21.218-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004z'
          ></path>
          <path
            fill='#fff'
            d='m19.827 16.151-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007z'
          ></path>
          <path
            fill='#ebebeb'
            d='M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829zM16 13.191v3.091h-3.3989999999999996l-.062-.695-.14-1.567-.074-.829z'
          ></path>
        </g>
      </svg>
    ),

    javaScript: (
      <svg
        {...attributes}
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
        viewBox='0 0 256 256'
      >
        <g>
          <path fill='#F7DF1E' d='M0 0h256v256H0z'></path>
          <path d='m67.312 213.932 19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574'></path>
        </g>
      </svg>
    ),

    react: (
      <svg
        {...attributes}
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
        viewBox='0 -14 256 256'
      >
        <path
          fill='#00D8FF'
          d='M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848 156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165 168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923 168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026 347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815 329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627 310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695 359 359 0 0 1 11.036 20.54 330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86'
        ></path>
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