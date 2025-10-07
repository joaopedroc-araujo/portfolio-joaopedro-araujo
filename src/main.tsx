import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './helpers/Layout'
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
