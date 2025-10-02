import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import Layout from './helpers/Layout.tsx'
import './index.css'

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ThemeProvider>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>,
  )
} else {
  console.error("Failed to find the root element");
}
