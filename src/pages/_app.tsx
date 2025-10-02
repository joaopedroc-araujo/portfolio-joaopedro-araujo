import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../helpers/Layout';
import '../index.css';
import '../App.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;