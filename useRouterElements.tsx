import React from 'react'
import { useRoutes } from 'react-router-dom'

export default function useRouterElements() {
  const routerElements = useRoutes([
    {
      path: '/',
      element: <ProducList />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])

  return useRouterElements
}
