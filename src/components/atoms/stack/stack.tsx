'use client'
import { Stack as StyledStack } from './stack.styles'
import { StackProps } from '@typings'

const Stack = (props: StackProps) => {
  const { children, ...rest } = props

  return <StyledStack {...rest}>{children}</StyledStack>
}

export default Stack
