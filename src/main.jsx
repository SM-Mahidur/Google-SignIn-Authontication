import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Orders from './Components/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Dashboard from './Components/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Register",
        element: <Register></Register>
      },
      {
        path: "/Orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
