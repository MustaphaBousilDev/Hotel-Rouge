import React from 'react'
import type{FC} from 'react'

interface Props{
     width?:string,
     height?:string,
     color?:string,
     className?:string 
}


export const SearchIcon:FC<Props> = ({
     width,height,color,className
}) => {
  //default values
     width = width ?? '1em'
     height = height ?? '1em'
     color = color ?? '#000000'
     className = className ?? ''
  return (
     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width={width} height={height} viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet" 
          className={className}>
          
          <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
          fill={color} stroke="none">
          <path d="M560 1986 c-141 -30 -260 -95 -360 -196 -78 -80 -131 -168 -167 -275
          -22 -68 -26 -97 -26 -200 0 -103 4 -132 26 -200 80 -244 278 -421 527 -471
          191 -38 411 17 559 141 l28 24 63 -64 c60 -60 63 -66 52 -90 -16 -36 -15 -110
          2 -143 26 -49 478 -491 512 -501 53 -15 85 -1 150 63 64 65 78 97 63 150 -10
          34 -452 486 -501 512 -32 17 -93 18 -137 3 -32 -11 -34 -10 -96 51 l-63 63 39
          49 c98 124 144 273 136 443 -8 187 -64 312 -203 451 -86 87 -191 149 -304 179
          -81 22 -223 27 -300 11z m325 -80 c156 -50 293 -169 364 -319 47 -99 61 -160
          61 -272 0 -107 -14 -171 -56 -263 -108 -236 -338 -373 -604 -359 -227 12 -421
          138 -520 340 -93 188 -92 377 1 566 79 160 241 286 419 326 94 21 234 13 335
          -19z m573 -1220 c15 -8 101 -89 192 -180 l165 -166 -78 -78 -77 -77 -180 181
          c-210 210 -212 215 -136 290 46 47 70 53 114 30z m479 -484 c4 -19 -6 -35 -53
          -83 -32 -32 -66 -59 -76 -59 -10 0 -39 19 -64 42 l-45 42 78 78 77 78 39 -38
          c21 -20 40 -47 44 -60z"/>
          <path d="M560 1844 c-241 -63 -420 -288 -420 -526 0 -243 178 -471 417 -533
          278 -72 576 104 658 389 24 82 17 248 -14 327 -98 256 -387 410 -641 343z
          m255 -59 c276 -72 432 -381 328 -648 -90 -231 -342 -356 -588 -292 -351 92
          -473 539 -219 805 121 127 307 179 479 135z"/>
          <path d="M374 1578 c-15 -18 -38 -56 -51 -85 -105 -228 1 -484 234 -564 66
          -22 148 -26 156 -6 9 25 -8 36 -69 46 -107 17 -189 65 -244 145 -44 65 -61
          121 -61 204 0 82 26 152 82 223 52 66 7 101 -47 37z"/>
          <path d="M913 1048 c-21 -16 -55 -39 -75 -49 -39 -20 -52 -54 -24 -65 35 -14
          182 89 170 119 -10 28 -32 26 -71 -5z"/>
          </g>
     </svg>
  )
}