import styled from 'styled-components'
import { HeaderColProps } from '@typings'

export const HeaderContainer = styled('header')(
  ({ theme: { spacing, palette } }) => ({
    borderBottom: `1px solid ${palette.secondary.gray}`,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: spacing[8],

    '@media (max-width: 767px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: spacing[4]
    }
  })
)

export const Position = styled('p')(({ theme: { palette, spacing } }) => ({
  animation: 'typing 1s steps(21), blink 0.5s infinite step-end alternate',
  borderRight: `2px solid ${palette.text.paragraph}`,
  display: 'block',
  fontSize: spacing[2],
  fontWeight: 300,
  letterSpacing: 0,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: `${spacing[1] + 1.6}ch`,

  '@keyframes typing': {
    from: {
      width: 0
    }
  },

  '@keyframes blink': {
    '50%': {
      borderColor: 'transparent'
    }
  }
}))

export const HeaderCol = styled('div').withConfig({
  shouldForwardProp: (prop) => !['align'].includes(prop)
})<HeaderColProps>(({ align, theme: { palette } }) => ({
  margin: 'auto 0',
  textAlign: align,

  '& a': {
    color: palette.text.paragraph,
    transitionDuration: '0.3s'
  },

  '@media (max-width: 767px)': {
    marginTop: 16,
    textAlign: 'left'
  }
}))
