'use client'
import { StyledPill } from './pill.styles'
import { PillProps } from '@typings'

const Pill = (props: PillProps) => {
  const { label } = props

  return <StyledPill>{label}</StyledPill>
}

export default Pill
