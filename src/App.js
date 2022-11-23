import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
// import { RouterProvider } from 'react-router-dom'
// import router from './Routes/Router'

function App({ children }) {
  return (

    <RouterProvider router={router} >
      {children}
    </RouterProvider>
  )
}

export default App
