'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle(({ theme: { palette, spacing } }) => ({
  '*': {
    margin: 0,
    padding: 0,
    fontWeight: 'normal',
    transitionDuration: '.3s'
  },
  body: {
    backgroundImage: `linear-gradient(to bottom, ${palette.secondary.softGray}, ${palette.secondary.darkGray})`,
    backgroundRepeat: 'no-repeat',
    padding: spacing[8]
  },
  h1: {
    fontSize: spacing[3],
    color: palette.text.title,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: spacing[2],
    textTransform: 'uppercase',
    fontWeight: 'normal'
  },
  h3: {
    fontSize: spacing[1],
    color: palette.text.title,
    fontWeight: 300,
    textTransform: 'uppercase',
    letterSpacing: spacing[0] - 4
  },
  p: {
    fontSize: spacing[1],
    color: palette.text.paragraph,
    wordWrap: 'break-word',
    lineHeight: 1.5
  },
  '@media(max-width:992px)': {
    body: {
      padding: spacing[3]
    }
  },
  '@media(max-width:767px)': {
    body: {
      padding: spacing[1]
    }
  }
}))

export default GlobalStyles
