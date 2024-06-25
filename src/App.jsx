
import './App.css'
import Footer from './components/Footer'

import Hero from './components/Hero'
import Marquee from './components/Marquee'
import CoffeeBanner from './components/Textsection'
import Section2 from './components/coffees'


function App() {
  

  return (
    <>
    <div className='max-w-[1920px] mx-auto overflow-hidden'>
    
    <Hero/>
    <Marquee/>
    <Section2/>
    <CoffeeBanner/>
    <Footer/>
    </div>
    </>
  )
}

export default App
