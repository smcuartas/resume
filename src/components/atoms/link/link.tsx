'use client'
import { NextLink } from './link.styles'
import { LinkProps } from '@typings'

const Link = (props: LinkProps) => {
  const { icon, label, href, ...rest } = props

  return (
    <NextLink href={href} {...rest}>
      {icon && icon} <h3>{label}</h3>
    </NextLink>
  )
}

export default Link
