'use client'
import { Button as StyledButton } from './button.styles'
import { ButtonProps } from '@typings'

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props
  return (
    <StyledButton {...rest} download>
      {children}
    </StyledButton>
  )
}

export default Button
