import React, { StrictMode } from 'react'
import Header from './Header/Header'
import Main from './main/Main'
import Footer from './Footer/Footer'
import '../styles/style.scss'

function App() {
  return (
    <StrictMode>
      <Header />
      <Main />
      <Footer />
    </StrictMode>
  )
}

export default App
