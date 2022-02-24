import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { UserContext } from '../context/User';
import { AuthContext } from '../context/Auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContext.Provider value={null}>
      <AuthContext.Provider value={null}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
