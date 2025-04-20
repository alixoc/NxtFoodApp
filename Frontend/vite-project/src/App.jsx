import React from 'react'
import Home from './Home/home'

import { Route, Routes } from "react-router-dom"
import Chefs from './Chefs/Chefs'
import Contact from './components/Contact/Contact'
import About from './About/About'

function NxtFoods() {
  return (
  <>

  {/* always make the name of jsx files first letter capital */}

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/chef" element={<Chefs/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/about" element={<About/>}/>

</Routes>
 

  </>
  )
}

export default NxtFoods