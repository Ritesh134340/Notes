import { store} from '@/redux/store'
import { Provider } from 'react-redux'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
    <Navbar/>
   <Component {...pageProps} />
    <Footer/>
    </Provider>
   
    </>
  )
}
