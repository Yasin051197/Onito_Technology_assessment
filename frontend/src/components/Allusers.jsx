import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {Box, Heading}from "@chakra-ui/react"
import axios from 'axios'
import { useState } from 'react'
import "../Css/Allusers.css"

const getData=async(limit)=>{
    return await axios.get(`https://onito-technology-server.onrender.com/users?_limit=${limit}`)
}


const Allusers = () => {
    const [users,setUsers]=useState([])
    const [limit,setLimit]=useState(10)


    const handleSearch=(e)=>{
        let a=e.target.value
        const filteredArray=users.filter(obj=>{
            return Object.values(obj).some(value=> {
                if(typeof value === "string"){
                    return value.includes(a)
                }
                return false
            })
        })
        setUsers(filteredArray)
    }
    const handleChange=(e)=>{
        let val=Number(e.target.value)
        console.log(typeof(val))
        setLimit(val)
        getData(val).then((res)=>setUsers(res.data))
    }
    useEffect(()=>{
        getData(limit).then((res)=>setUsers(res.data))
    },[])

  return (
    <div>
        <Navbar />
        <Heading>Allusers</Heading>
        <div id="users_container">
            <Box m={'auto'} w={'90%'} display={'flex'} justifyContent={'space-evenly'}>
            <select id="limit" onChange={handleChange}>
                    <option >limit</option>
                    <option value='1'>1</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
            </select>
            <div><label htmlFor="input">search : </label>
            <input type="text" placeholder='Search.....' onChange={handleSearch} /></div>
            </Box>
            <br />
            <br />
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