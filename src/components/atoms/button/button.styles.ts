import styled from 'styled-components'

export const Button = styled('a')(({ theme: { palette, spacing } }) => ({
  background: '#7d7d7d',
  border: '10px solid #7d7d7d',
  borderImageSlice: 1,
  borderWidth: 2,
  color: palette.white,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: 20,
  padding: 8,
  textAlign: 'center',
  textDecoration: 'none',
  transitionDuration: '0.3s',
  width: 'fit-content',

  '&:not(:last-child)': {
    marginRight: spacing[0]
  },

  '&:hover': {
    background: 'transparent',
    borderImageSource: 'linear-gradient(90deg, #fac0d1, #d3f2fd, #d9ddff)',
    color: '#7d7d7d'
  },

  '@media(max-width: 530px)': {
    marginRight: 0,
    marginBottom: spacing[0]
  }
}))
