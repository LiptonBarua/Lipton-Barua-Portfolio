import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return <div>
  <ThemeProvider enableSystem={true} attribute="class">
  <Header></Header>
    <Component {...pageProps} />
    <Toaster></Toaster>
    <Footer></Footer>
  </ThemeProvider>
  </div>
}
