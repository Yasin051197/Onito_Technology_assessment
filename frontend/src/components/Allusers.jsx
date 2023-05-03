import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {Heading}from "@chakra-ui/react"
import axios from 'axios'
import { useState } from 'react'


const getData=async()=>{
    return await axios.get('https://onito-technology-server.onrender.com/users')
}


const Allusers = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        getData().then((res)=>console.log(res.data))
    })
  return (
    <div>
        <Navbar />
        <Heading>Allusers</Heading>
    </div>
  )
}

export default Allusers