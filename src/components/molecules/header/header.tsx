'use client'
import Link from 'next/link'

import { HeaderContainer, HeaderCol, Position } from './header.styles'
import { HeaderProps } from '@typings'

const Header = (props: HeaderProps) => {
  const { label, position, mobile, mobileLabel, mobileUrl, email, emailLabel } =
    props

  return (
    <HeaderContainer>
      <HeaderCol>
        <h1>{label}</h1>
        <Position>{position}</Position>
      </HeaderCol>

      <HeaderCol align='right'>
        <p>
          {mobileLabel}:{' '}
          <Link href={`https://wa.me/${mobileUrl}`} target='_blank'>
            {mobile}
          </Link>
        </p>

        <p>
          {emailLabel}: <Link href={`mailto:${email}`}>{email}</Link>
        </p>
      </HeaderCol>
    </HeaderContainer>
  )
}

export default Header
