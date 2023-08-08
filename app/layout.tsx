import '../styles/globals.css';
import { Footer } from './footer';
import { Header } from './header';
import { LeftMenu } from './leftBar';
import { RightMenu } from './rightBar';

export const metadata = {
  title: 'LUVA',
  description: 'Luva Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <div className='leftSideBar'>
            <LeftMenu />
          </div>
          <div className='mainPage'>
            {children}
          </div>
          <div className='rightSideBar'>
            <RightMenu />
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
