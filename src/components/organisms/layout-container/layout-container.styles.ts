import styled from 'styled-components'

export const Mask = styled('div')(({ theme: { palette } }) => ({
  background: palette.white,
  display: 'block',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1
}))

export const Container = styled('div')({
  display: 'block',
  zIndex: 10
})

export const Content = styled('main')(({ theme: { spacing } }) => ({
  padding: spacing[8],

  '@media(max-width:767px)': {
    padding: spacing[4]
  }
}))
