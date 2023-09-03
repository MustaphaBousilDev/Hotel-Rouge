import React from 'react'
import Image from 'next/image'


interface CustomComponent{
     src: any,
     alt: string,
     className?: string,
     width?: number,
     height?: number,

}

const CustomIMG: React.FC<CustomComponent> = ({src,alt,className,...props}) => {
  return (
    <Image 
      src={src} 
      alt={alt}
      width={props.width}
      height={props.height} 
      className={className} />
  )
}

export default CustomIMG