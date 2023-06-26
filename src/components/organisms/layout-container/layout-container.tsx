'use client'
import theme from '@theme'
import { ThemeProvider } from 'styled-components'
import { AnimateBox, Header } from '@components'
import { Karla } from 'next/font/google'

import { GlobalStyles } from '@styles'
import { Mask, Container, Content } from './layout-container.styles'
import { LayoutContainerProps } from '@typings'

import en from '@langs/en.json'

const karla = Karla({ subsets: ['latin'] })

const LayoutContainer = (props: LayoutContainerProps) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <html>
        <body className={karla.className}>
          <GlobalStyles />
          <Mask>
            <AnimateBox
              firstColor={theme.palette.primary.blue}
              secondColor={theme.palette.primary.lila}
              thirdColor={theme.palette.primary.pink}
            />
            <Container>
              <Header
                label={en.header.label}
                position={en.header.position}
                mobile={en.header.phone}
                mobileLabel={en.header.mobile}
                mobileUrl={en.header['phone-url']}
                emailLabel={en.header['email-label']}
                email={en.header.email}
              />
              <Content>{children}</Content>
            </Container>
          </Mask>
        </body>
      </html>
    </ThemeProvider>
  )
}

export default LayoutContainer
