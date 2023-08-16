import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Layout from './helpers/Layout.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>,
)
