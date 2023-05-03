import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {Heading}from "@chakra-ui/react"
import axios from 'axios'
import { useState } from 'react'
import "./Allusers.css"

const getData=async()=>{
    return await axios.get('https://onito-technology-server.onrender.com/users')
}


const Allusers = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        getData().then((res)=>setUsers(res.data))
    })
  return (
    <div>
        <Navbar />
        <Heading>Allusers</Heading>
        <div id="users_container">
        <table id="table" style={{width:"100%"}}>
            <tr>
               <th>Name</th>
               <th>Age/Sex</th>
               <th>Mobile</th>
               <th>Address</th>
               <th>Govt ID</th>
               <th>Guardian Details</th>
               <th>Nationality</th>
            </tr>
            {
                users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.DateorAge}/{user.sex}</td>
                        <td>{user.mobile}</td>
                        <td>{user.address}</td>
                        <td>{user.Id}</td>
                        <td>{user.gaurdianName}</td>
                        <td>{user.nationality}</td>
                    </tr>
                ))
            }
</table>
        </div>
    </div>
  )
}

export default Allusers