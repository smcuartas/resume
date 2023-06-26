'use client'
import { AnimateBoxContainer, Circle } from './animate-box.styles'
import { AnimateBoxProps } from '@typings'

const AnimateBox = (props: AnimateBoxProps) => {
  const { firstColor, secondColor, thirdColor } = props

  return (
    <AnimateBoxContainer>
      <Circle color={firstColor} posTop={-150} />
      <Circle color={secondColor} posBottom={-200} posRight={-200} />
      <Circle color={thirdColor} posBottom={-200} posLeft={-200} />
    </AnimateBoxContainer>
  )
}

export default AnimateBox
