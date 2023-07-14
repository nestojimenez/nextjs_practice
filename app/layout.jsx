import '../styles/globals.css'
import Navigation from './components/Navigation.jsx'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My First App with Nextjs 13</title>
      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
