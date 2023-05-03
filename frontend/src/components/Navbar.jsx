import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} display={'flex'} justifyContent={"space-evenly"} bgColor={"#41574c"} p={"10px 20px"}>
        <Box><Link style={{textDecoration:"none", color:"white",fontSize:"20px",fontWeight:"bold"}}  to="/">Registration</Link></Box>
        <Box><Link style={{textDecoration:"none",color:"white",fontSize:"20px",fontWeight:"bold"}}  to="/users">Allusers</Link></Box>
    </Box>
  )
}

export default Navbar