import React from 'react'
import { StyledButton } from './index.styles'

interface ButtonProps{
    handleClick?:()=>void;
    children:React.ReactNode;
}

const Button = (props:ButtonProps) => {
    const{children,handleClick}=props
  return (
   <StyledButton variant='contained' size='small' onClick={handleClick}>{children}</StyledButton>
  )
}

export default Button