import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Registration from '../components/Registration'
import Allusers from '../components/Allusers'

const Routers = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />}/>
        <Route path="/users" element={<Allusers />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Routers