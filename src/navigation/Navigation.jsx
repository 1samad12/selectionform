import React from 'react'
import Home from '../components/Home'
import Details from '../components/Details'
import Marketing from '../components/Markiting'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notfontpage from '../pages/Notfontpage'

function Navigation() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Marketing />} />
                <Route path='/details' element={<Details />} />
                <Route path='/marketing' element={<Home/>} />
                <Route path='*' element={<Notfontpage />} />

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navigation