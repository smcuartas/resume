import Link from 'next/link'
import styled from 'styled-components'

export const NextLink = styled(Link)(({ theme: { spacing } }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: spacing[0],
  width: 'fit-content'
}))
