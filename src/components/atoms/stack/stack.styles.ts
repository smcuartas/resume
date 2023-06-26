import styled from 'styled-components'

import { StackProps } from '@typings'

export const Stack = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    !['spacing', 'alignContent', 'hasColumns'].includes(prop)
})<StackProps>(({ alignContent, hasColumns, spacing }) => ({
  display: 'grid',
  gridGap: spacing,
  gridTemplateColumns: hasColumns ? '.45fr 1fr' : 'minmax(0, auto)',
  textAlign: alignContent,

  '@media(max-width:767px)': {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}))
