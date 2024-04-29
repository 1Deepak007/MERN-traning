import { Arimo } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'
import './styles.css'

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
})
const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm_plex_sans',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={arimo.variable + ibm_plex_sans.variable}>
        {children}
      </body>
    </html>
  )
}