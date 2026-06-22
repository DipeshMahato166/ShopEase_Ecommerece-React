import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './component/Cart.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>

    <App />
     

    </AuthContextProvider>
  </StrictMode>,
)
