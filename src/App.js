import React from 'react'
import './App.css'
import { Footer, Header, Services, GetInTouch } from './containers';
import { CTA, Brand, Navbar } from './components';


const App = () => {
  return (
    <div className='App'>    
    <div className='gradient_bg'>
        <Navbar/>
        <Header/>
    </div>
        <Services/>
        <GetInTouch/>
        {/* <Features />
        <Possibility />
        <CTA />
        <Blog /> */}
        <Footer />
    </div>
  )
}

export default App
