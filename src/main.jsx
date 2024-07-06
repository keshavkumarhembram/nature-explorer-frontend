import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import Home, {loader as toursLoader } from './Home.jsx';
import Tour, {loader as tourLoader} from './routes/tour.jsx';
import Signup from './routes/signup.jsx';
import Login from './routes/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element:<Home/>,
        loader: toursLoader
      },
      {
        path: 'tour/:slug',
        element: <Tour />,
        loader: tourLoader
      },
      {
        path: 'signup',
        element:<Signup />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
