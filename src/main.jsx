import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Cart from './Components/Cart/Cart.jsx';
import ProductContainer from './Components/ProductContainer/ProductContainer.jsx';
import CoustomerDetails from './Components/CoustomerDetails/CoustomerDetails.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <ProductContainer></ProductContainer>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/customer-details',
        element: <CoustomerDetails></CoustomerDetails>,
      },
      {
        path: '/login',
        element: <LogIn></LogIn>,
      }
    ],
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
