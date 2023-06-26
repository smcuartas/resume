import styled from 'styled-components'

export const StyledPill = styled('span')(({ theme: { palette, spacing } }) => ({
  background: palette.text.paragraph,
  border: `10px solid ${palette.text.paragraph}`,
  borderImageSlice: 1,
  borderWidth: 2,
  color: palette.white,
  cursor: 'default',
  display: 'inline-block',
  fontSize: spacing[2] - 4,
  margin: `0 ${spacing[0]}px ${spacing[0]}px 0`,
  padding: `${spacing[0] - 4}px ${spacing[0]}px`,

  '&:hover': {
    background: 'transparent',
    borderImageSource: `linear-gradient(90deg, ${palette.primary.pink}, ${palette.primary.blue}, ${palette.primary.lila})`,
    color: palette.text.paragraph
  },

  '&:last-child': {
    margin: 0
  }
}))
