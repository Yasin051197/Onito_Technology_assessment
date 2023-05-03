import React, { useState } from 'react'
import Navbar from './Navbar'
import { Box, FormErrorMessage, Heading, Input, Text, Toast } from '@chakra-ui/react'
import "../Css/Registration.css"
import axios from "axios"
const Registration = () => {

const [user,setUser]=useState({})
const required=<label style={{color:'red'}}>*</label>

const postData=async()=>{
    return await axios.post('https://onito-technology-server.onrender.com/users',user).then(()=>alert("user added successfully")).then(()=>reset())
}

const handleChange=(e)=>{
const {name,value}=e.target
let val=e.target.value
if(val==="Adhar"){
    alert("plz enter 12 digit adhar number in Govt ID")
}
else if(val==="Pan"){
    alert("plz enter 10 digit pan number in Govt ID")
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
                        postData()
                    }
                    else{
                        alert("plz enter all creadentials")
                    }
                }else if(!user.Enumber){
                    if(user.name && user.DateorAge && user.sex){
                        postData()
                    }
                    else{
                        alert("plz enter all creadentials")
                    }
                }else{
                    alert("plz enter valid indian Emergency contact number")
                }
            }else if(!user.mobile){
                if(user.name && user.DateorAge && user.sex){
                    postData()
                }
                else{
                    alert("plz enter all creadentials")
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
                        postData()
                    }
                    else{
                        alert("plz enter all creadentials")
                    }
                }else if(!user.Enumber){
                    if(user.name && user.DateorAge && user.sex){
                        postData()
                    }
                    else{
                        alert("plz enter all creadentials")
                    }
                }else{
                    alert("plz enter valid indian Emergency contact number")
                }
            }
            else if(!user.mobile){
                if(user.name && user.DateorAge && user.sex){
                    postData()
                }
                else{
                    alert("plz enter all creadentials")
                }
            }else{
                alert("plz enter valid indian mobile number")
            }
        }else{
            alert("plz enter 10 digit Govt ID")
        }
    }
    else if(!user.idtype && user.mobile && !user.Enumber){
        const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        if(mobileRegex.test(user.mobile)){
            if(user.name && user.DateorAge && user.sex){
                postData()
        }
        else{
            alert("plz enter all creadentials")
        }
    }
    else{
        alert("plz enter valid indian mobile number")
    }
    }
    else if(!user.idtype && !user.mobile && user.Enumber){
        const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        if(mobileRegex.test(user.Enumber)){
            if(user.name && user.DateorAge && user.sex){
                postData()
        }
        else{
            alert("plz enter all creadentials")
        }
    }else{
        alert("plz enter valid indian Emergency contact number")
    }
    }
    else if(!user.idtype && user.mobile && user.Enumber){
        const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        if(mobileRegex.test(user.mobile)){
            if(mobileRegex.test(user.Enumber)){
                if(user.name && user.DateorAge && user.sex){
                    postData()
            }
            else{
                alert("plz enter all creadentials")
            } 
        }else{
        alert("plz enter valid indian Emergency contact number")
     }
    }
    else{
        alert("plz enter valid indian mobile number")
    }
}

    else if(!user.idtype && !user.mobile && !user.Enumber){
        if(user.name && user.DateorAge && user.sex){
            postData()
        }
        else{
            alert("plz enter all creadentials")
        }
    }
}
const reset=()=>{
    window.location.reload()
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
                <Text fontWeight={"bold"}>Address Details</Text>
                <Box justifyContent={'space-evenly'} w={'100%'}  display={'flex'}>
                <div>
                <label>Address  </label>
                <Input type='text' placeholder='Enter Address' name="address" onChange={handleChange} />
                </div>
                <div>
                <label>State  </label>
                <Input type='text'placeholder='Enter State' name="state" onChange={handleChange} />
                </div>
                <div>
                <label>City  </label>
                <Input type='text'placeholder='Enter City' name="city" onChange={handleChange} />
                </div>
                </Box>
                <br />
                <Box justifyContent={'space-evenly'} w={'100%'}  display={'flex'}>
                <div>
                <label>Country  </label>
                <Input type='text' placeholder='India' name="country" onChange={handleChange} />
                </div>
                <div>
                <label>Pincode  </label>
                <Input type='number'placeholder='Enter Pincode' name="pincode" onChange={handleChange} />
                </div>
                </Box>
                <br />
                <Text fontWeight={"bold"}>Other Details</Text>
                <Box justifyContent={'space-evenly'} w={'100%'}  display={'flex'}>
                <div>
                <label>Occupation  </label>
                <Input type='text' placeholder='Enter occupation' name="accupation" onChange={handleChange} />
                </div>
                <div>
                <label>Religion  </label>
                <select name="religion" onChange={handleChange} >
                    <option>Enter Religion</option>
                    <option value="Hinduism">Hinduism</option>
                    <option value="Islam">Islam</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="Judaism">Judaism</option>
                    <option value="Sikhism">Sikhism</option>
                    <option value="Others">Others</option>
                </select>
                </div>
                <div>
                <label>Maritial Status  </label>
                <select name="Mstatus" onChange={handleChange} >
                    <option>Enter Maritial Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                </select>
                </div>
                <div>
                <label>Blood Group  </label>
                <select name="blood_group" onChange={handleChange} >
                    <option >Enter Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                </div>
                </Box>
                <br />
                <Box w={'100%'}  display={'flex'}>
                <div>
                <label>Nationality  </label>
                <Input type='text' placeholder='Indian' name="nationality" onChange={handleChange} />
                </div>
                </Box>
                <br />
                <br />
                <Box justifyContent={'space-evenly'} width={'20%'}  margin={'auto'} display={'flex'} >
                <Input borderRadius={'4px'} color={'red'} border={'1px solid red'} p={'5px 10px'} type='reset' value="cancle" onClick={reset}/>
                <Input borderRadius={'4px'} border={'none'} color={'white'} bg={'#167f4b'} p={'5px 10px'} type='submit' value="submit"/>
                </Box>
            </form>
        </div>
    </div>
  )
}

export default Registration