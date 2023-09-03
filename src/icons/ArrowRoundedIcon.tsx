import React from 'react'

const ArrowRoundedIcon = ({color='#000',width='25px',height='25px',className=''}) => {
  return (
    <svg
        className={className} 
        version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={width} height={height} viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill={color} stroke="none">
        <path d="M596 4319 c-229 -34 -427 -141 -516 -279 -68 -106 -89 -263 -55 -409
        26 -109 84 -214 355 -647 145 -230 546 -871 893 -1424 346 -553 652 -1035 679
        -1072 63 -86 167 -182 249 -231 188 -111 411 -111 598 0 77 46 176 135 235
        212 59 77 1835 2909 1880 2999 110 218 106 439 -12 594 -84 111 -207 186 -389
        236 l-98 27 -1880 1 c-1034 1 -1907 -2 -1939 -7z"/>
        </g>
    </svg>
  )
}

export default ArrowRoundedIcon