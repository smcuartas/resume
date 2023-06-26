import styled from 'styled-components'
import { AnimateBoxProps } from '@typings'

export const AnimateBoxContainer = styled('div')({
  animation: 'boxanimation 30s infinite',
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  left: 100,
  position: 'absolute',
  top: 100,
  width: 50,
  zIndex: -1,

  '@keyframes boxanimation': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
})

export const Circle = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    !['color', 'posBottom', 'posTop', 'posRight', 'posLeft'].includes(prop)
})<AnimateBoxProps>(
  ({ color, posBottom, posTop, posRight, posLeft, theme: { spacing } }) => ({
    background: color,
    borderRadius: '50%',
    bottom: posBottom,
    filter: `blur(${spacing[4]}px)`,
    height: 300,
    left: posLeft,
    mixBlendMode: 'multiply',
    opacity: 0.8,
    position: 'absolute',
    right: posRight,
    top: posTop,
    width: 300
  })
)
