import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import '../Main/index.css'
import App from '../Main/App.jsx'

//const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const CLIENT_ID = '1099161509178-j3bt173i6c53slqdq1hd2lchicjorm6t.apps.googleusercontent.com'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
