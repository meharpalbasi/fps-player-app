import './globals.css'

export const metadata = {
  title: 'FPL Analyzer',
  description: 'Advanced analytics for Fantasy Premier League',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

