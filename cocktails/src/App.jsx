import { useState } from 'react'
import React from 'react'
import './App.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Drinkar from './pages/Drinkar'
import Kontakt from'./pages/Kontakt'
import Header from './components/header'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/drinkar',
      element: <Drinkar />
    },
    {
      path: '/kontakt',
      element: <Kontakt />
    }
  ])

  return (
    <div className='App'>
      <Header/>
      < RouterProvider router={router} />
    </div>
  )
}

export default App
