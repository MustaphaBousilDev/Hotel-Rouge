import React from 'react'

const CheckIcon = ({color='#000',width='25px',height='25px',className=''}) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={width} height={height} viewBox="0 0 500.000000 500.000000"
        className={className}
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill={color} stroke="none">
        <path d="M4524 4628 c-24 -6 -92 -76 -295 -305 -145 -164 -331 -374 -414 -468
        -218 -245 -604 -682 -1238 -1400 -605 -684 -598 -678 -666 -645 -17 8 -215
        184 -442 390 -226 206 -432 389 -458 406 -70 46 -128 66 -216 71 -311 20 -548
        -262 -470 -560 23 -87 45 -124 168 -274 62 -76 341 -417 619 -758 538 -660
        535 -656 658 -700 65 -24 190 -22 263 4 135 47 175 93 404 461 375 603 859
        1381 1243 2000 270 435 537 866 814 1310 190 304 197 317 193 359 -8 77 -86
        130 -163 109z"/>
        </g>
    </svg>
  )
}

export default CheckIcon