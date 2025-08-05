// main.jsx

import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'

import { CartProvider } from "./context/CartContext";

import { BrowserRouter } from "react-router-dom"



createRoot(document.getElementById('root')).render(

  <BrowserRouter basename="/ecommerce">

    <CartProvider>

      <App />

    </CartProvider>

  </BrowserRouter>

)
