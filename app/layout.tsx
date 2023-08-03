import '../styles/globals.css';
import { Footer } from './footer';
import { Header } from './header';

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
        <div className="layout">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
