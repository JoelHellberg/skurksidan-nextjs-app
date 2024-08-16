import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import './style/globals.css'
import './style/fonts.css'

export const metadata = {
  title: 'Skurkeriet',
  description: 'All makt åt Tengil'
}

// Add local fonts
const vinyl = localFont({
  src: [
    {
      path: './fonts/vinyl.ttf',
      weight: '400'
    }
  ],
  variable: '--font-vinyl'
})
const cascadia = localFont({
  src: [
    {
      path: './fonts/cascadia.ttf',
      weight: '400'
    }
  ],
  variable: '--font-cascadia'
})
const sandana = localFont({
  src: [
    {
      path: './fonts/sandana.ttf',
      weight: '400'
    }
  ],
  variable: '--font-sandana'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html className='overflow-hidden' lang="en">
      <body className={'w-full min-h-screen flex flex-col overflow-hidden' + `${vinyl.variable} ${cascadia.variable} ${sandana.variable}`}>
        {children}
      </body>
    </html>
  )
}
