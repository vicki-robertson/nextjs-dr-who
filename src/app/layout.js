import styles from './globals.scss'
import { Lato, Montserrat } from 'next/font/google'

// components
import BootstrapClient from './components/BootstrapClient';

    
const lato = Lato({ 
  weight: '700',
  variable: '--font-lato',
  subsets: ['latin'],
  display: 'swap', 
})
  
const montserrat = Montserrat({
  weight: ['400', '600'],
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'Doctor Who',
  description: 'El mundo de Doctor Who',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`{styles[main-container]} ${lato.variable} ${montserrat.variable}`}>
          <main>
            {children}
            <BootstrapClient />
          </main>
      </body>
    </html>
  )
}





