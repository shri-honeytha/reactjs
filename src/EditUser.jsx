import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams,useNavigate } from 'react-router-dom';

export default function EditUser() {
    const [user,setUser]=useState({})
    const url = import.meta.env.VITE_API_URL + "/users";
const {userId}=useParams()
const navigate=useNavigate()
const handleSubmit=async ()=>{
    const res=await axios.patch(`${url}/updateUser/${userId}`,user)
navigate("/admin")
}

const fetchUSer=async ()=>{
    const res=await axios.get(`${url}/getUser/${userId}`)
    setUser(res.data.user)
}


useEffect(()=>{
    fetchUSer()
},[])





  return (
    <div>EditUser
    <p>
        <input 
        type="text"
        defaultValue={user.name}
        onChange={(e)=>setUser({...user,name:e.target.value})} />
    </p>
    <p>
        <input
        type="text"
        defaultValue={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})} />
    </p>
    <p>
        <input 
        type="password" 
        defaultValue={user.password}
        onChange={(e)=>setUser({...user,password:e.target.value})} />
    </p>
    <p>
        <input 
        type="text" 
        defaultValue={user.role}
        onChange={(e)=>setUser({...user,role:e.target.value})} />
    </p>
    <button onClick={handleSubmit}>Update Users</button>
    </div>

  )
}
