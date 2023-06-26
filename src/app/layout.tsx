import { LayoutContainer } from '@components'

export const metadata = {
  title: 'Santiago Mejía Cuartas - Resume',
  description: 'Generated by create next app'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default RootLayout
