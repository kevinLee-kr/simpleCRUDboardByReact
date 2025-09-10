import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './views/Hello'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Test from './views/Test'

function App() {

  return (

     // <Hello/>
    <BrowserRouter>
    {/* <Link to='/'>Hello</Link> /
    <Link to='/test'>Test</Link> */}
      <Routes>
          <Route Component={Hello} path='/' /> 
          <Route Component={Test} path='/test' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
