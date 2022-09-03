import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
      return <>

  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp