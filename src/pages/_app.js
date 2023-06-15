import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CombinedContextProviders from '@/context/combinedContextProvider';

export default function App({ Component, pageProps }) {
  return (
    <CombinedContextProviders>
      <Component {...pageProps} />
      <ToastContainer />
    </CombinedContextProviders>
  );
}
