import '../styles/globals.css'
import { ChatAppProvider } from '../context/ChatAppContext';
import { Navbar } from '../components/Index'

function MyApp({ Component, pageProps }) {
  return (
    <ChatAppProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChatAppProvider>
  ) 
}

export default MyApp
