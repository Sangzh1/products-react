import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RootLayout from './layout/RootLayot'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { useGlobalContext } from "./hooks/useGlobalContext"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./firebase/firebaseConfig"
import { useEffect } from "react"

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext()
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoutes user={user}>
          <RootLayout/>
      </ProtectedRoutes>,
      children: [
        {
          index: true,
          element: <Dashboard/>,
        },
        {
          path: '/products',
          element: <Products/>,
        }
      ]
    },
    {
      path: '/login',
      element: user ? <Navigate to='/'/> : <Login/>,
    },
    {
      path: '/signup',
      element: user ? <Navigate to='/'/> : <Signup/>
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({type: "LOGIN", payload: user})
      dispatch({type: "IS_AUTH_READY"})
    })
  }, [])

  return isAuthReady && <RouterProvider router={routes}/>
}

export default App