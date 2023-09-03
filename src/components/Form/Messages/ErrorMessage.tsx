import React from 'react'
import type{FC,ReactNode} from 'react'

interface Props {
     children?:ReactNode;
     className?:string;
}

const ErrorMessage:FC<Props>= ({children,className}) => {
  return (
    <p className={`text-sm font-medium text-red-500  ${className}`}>
          {children}
    </p>
  )
}

export default ErrorMessage