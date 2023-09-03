import React from 'react'


interface Shadow{
     className?:string 
}

const Shadow:React.FC<Shadow>= ({className}) => {
  return (
     <div className={className} />
  )
}

export default Shadow