import React from 'react'
import type { FC } from 'react'


interface Props{
      width?:string
      height?:string
      color?:string
      className?:string
      onClick?:(e:any)=>void
      ref?:any
}

const NotificationIcon:FC<Props> = ({
  width='25px',
  height='25px',
  color='#000',
  className='',
  ref,
  onClick
}) => {
  return (
     <svg
     ref={ref} 
     version="1.0" xmlns="http://www.w3.org/2000/svg"
     width={width} height={height} viewBox="0 0 500.000000 500.000000"
      onClick={onClick}
     className={`${className}`}
     preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          fill= {color} stroke="none">
          <path d="M2440 4989 c-116 -20 -227 -104 -281 -215 -30 -60 -32 -74 -38 -201
          l-6 -136 -103 -33 c-227 -74 -389 -171 -557 -335 -164 -160 -259 -302 -349
          -520 -39 -96 -99 -323 -117 -444 -7 -53 -13 -335 -16 -827 l-5 -748 -96 -91
          c-54 -50 -170 -167 -259 -260 l-163 -168 0 -110 c0 -73 4 -112 12 -117 6 -4
          57 -7 112 -6 56 0 973 1 2039 1 l1937 1 0 118 0 118 -260 261 -260 261 0 663
          c0 656 -6 827 -36 984 -58 312 -180 585 -347 775 -194 222 -397 360 -639 436
          -141 44 -128 31 -128 131 0 171 -28 259 -108 345 -58 62 -118 96 -200 113 -37
          8 -69 14 -72 14 -3 -1 -30 -5 -60 -10z"/>
          <path d="M2002 445 c8 -94 67 -212 143 -288 104 -102 215 -149 355 -149 146 0
          257 50 366 164 69 72 112 154 127 243 18 104 67 95 -499 95 l-497 0 5 -65z"/>
          </g>
    </svg>
  )
}

export default NotificationIcon