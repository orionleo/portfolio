import React from 'react'
import "./App.scss"
import { About, Header, Footer, Skills, Testimonial, Work } from "./container/index.js"
import { Navbar } from './components/index.js'
// import Test from './Test/Test.js'
const App = () => {
  return (
    <div className="app">
      {/* <Test /> */}
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App