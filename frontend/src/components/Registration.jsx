import React, { useState } from 'react'
import Navbar from './Navbar'
import { Box, FormErrorMessage, Heading, Input, Text, Toast } from '@chakra-ui/react'
import "../Css/Registration.css"

const Registration = () => {

const [user,setUser]=useState({})
const required=<label style={{color:'red'}}>*</label>

const handleChange=(e)=>{
const {name,value}=e.target
let val=e.target.value
if(val==="Adhar"){
    alert("plz enter 12 digit adhar number")
}
else if(val==="Pan"){
    alert("plz enter 10 digit pan number")
}
setUser({...user,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    if(user.idtype==="Adhar"){
        if(user.Id.length===12){
            const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
            if(mobileRegex.test(user.mobile)){
                if(mobileRegex.test(user.Enumber)){
                    if(user.name && user.DateorAge && user.sex){
                        console.log(user)
                    }
                    else{
                        alert("plz enter all creadentials")
                    }
                }else{
                    alert("plz enter valid indian Emergency contact number")
                }
            }else{
                alert("plz enter valid indian mobile number")
            }
        }else{
            alert("plz enter 12 digit Govt ID")
        }
    }
    else if(user.idtype==="Pan"){
        if(user.Id.length===10){
            const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
            if(mobileRegex.test(user.mobile)){
                if(mobileRegex.test(user.Enumber)){
                    if(user.name && user.DateorAge && user.sex){
                        console.log(user)
                    }
                    else{
                        alert("plz enter all creadentials")
                    }
                }else{
                    alert("plz enter valid indian Emergency contact number")
                }
            }else{
                alert("plz enter valid indian mobile number")
            }
        }else{
            alert("plz enter 10 digit Govt ID")
        }
    }
}
  return (
    <div>
        <Navbar />
        <Heading>Registration</Heading>
        <div id="form">
            <form onSubmit={handleSubmit}>
                <Text fontWeight={"bold"}>Personal Details</Text>
                <Box justifyContent={'space-evenly'} w={'100%'}  display={'flex'}>
                <div>
                <label>Name {required}   </label>
                <Input type='text' placeholder='Enter Name' name="name" onChange={handleChange} />
                </div>
                <div>
                <label>Date of birth or Age {required}  </label>
                <Input type='text'placeholder='DD/MM/YY or Age in Years' name="DateorAge" onChange={handleChange} />
                </div>
                <div>
                <label>Sex {required}  </label>
                <select name="sex" onChange={handleChange} >
                    <option >Enter Sex</option>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                    <option value='other'>other</option>
                </select>
                </div>
                </Box>
                <br />
                <Box justifyContent={'space-evenly'} w={'100%'}  display={'flex'}>
                <Box>
                <label>Mobile  </label>
                <Input type='number' placeholder='Enter Mobile' name="mobile" onChange={handleChange} />
                </Box>
                <Box w={'50%'} display={'flex'} justifyContent={'space-evenly'}>
                <div><label>Government ID  </label></div>
                <div><select name="idtype" onChange={handleChange} >
                    <option >ID type</option>
                    <option value='Adhar'>Adhar</option>
                    <option value='Pan'>Pan</option>
                </select>
                </div>
                <div>
                <Input type='number'placeholder='Enter Govt ID' name="Id" onChange={handleChange} />
                </div>
                </Box>
                </Box>
                <Text fontWeight={"bold"}>Contact Details</Text>
                <Box justifyContent={'space-evenly'} w={'100%'}  display={'flex'}>
                <Box w={'40%'}  display={'flex'} justifyContent={'space-evenly'}>
                <div><label>Gaurdians Details  </label></div>
                <div><select name="label" onChange={handleChange} >
                    <option >Enter label</option>
                    <option value='Mr.'>Mr.</option>
                    <option value='Ms.'>Ms.</option>
                </select>
                </div>
                <div>
                <Input type='gaurdian name'placeholder='Gaurdian Name' name="gaurdianName" onChange={handleChange} />
                </div>
                </Box>
                <Box>
                <label>Email  </label>
                <Input type='email' placeholder='Enter Email' name="email" onChange={handleChange} />
                </Box>
                <Box>
                <label>Emergency Contact Number  </label>
                <Input type='number' placeholder='Enter Emergency NO' name="Enumber" onChange={handleChange} />
                </Box>
                </Box>
                <br />
                <br />
                <Box justifyContent={'space-evenly'} width={'20%'}  margin={'auto'} display={'flex'} >
                <Input borderRadius={'4px'} color={'red'} border={'1px solid red'} p={'5px 10px'} type='reset' value="cancle"/>
                <Input borderRadius={'4px'} border={'none'} color={'white'} bg={'#167f4b'} p={'5px 10px'} type='submit' value="submit"/>
                </Box>
            </form>
        </div>
    </div>
  )
}

export default Registration