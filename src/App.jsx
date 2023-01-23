import { useState, useEffect } from 'react'
import SmoothScroll from 'smooth-scroll'

import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'
import { TechSupport } from './components/techsupport'
import { Map } from './components/map'
import { Contact } from './components/contact'
import JsonData from './data/data.json'

import './App.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <TechSupport data={landingPageData.TechSupport} />
      <Map data={landingPageData.Map} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
