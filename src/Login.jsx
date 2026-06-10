import React, { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { AppContext } from "./App";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const url = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate();
  const handleLogin = async () => {
    const res = await axios.post(`${url}/users/login`, { email, password });
    console.log(res.data.user)
    if (res.data.user) {
      setUser(res.data.user);
      Navigate("/");
    } else {
      setMessage("Invalid User");
    }
  };
  return (
    <div>
      <h3>Login Form</h3>
      {message}
      <p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </p>
      <button onClick={handleLogin}>Login</button>
      <p>
        <Link to="/register">New User Register Here</Link>
      </p>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from 'react-router-dom'

// export default function Login() {
//   const [users, setUsers] = useState([]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const fetchUsers = async () => {
//     const res = await axios.get("http://localhost:5000/users");
//     setUsers(res.data);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleLogin = () => {
//     const found = users.find(
//       (u) =>
//         u.email === email &&
//         u.password === password
//     );

//     if (found) {
//       setMessage("Welcome");
//     } else {
//       setMessage("Access Denied");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <br /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={handleLogin}>
//         Login
//       </button>

//       <p>{message}</p>
//       <li><Link to="/register">New User Register Here</Link></li>
//     </div>
//   );
// }




// import React from 'react'
// import { Link } from 'react-router-dom'
// import {useState,useEffect} from "react"
// import axios from "axios"


// export default function Login() {
// const [users,setUsers]=useState([])
// const [user,setUser]=useState({
// email:"",
// password:""
// }
// )

// const [message,setMessahe]=useState("")

// const API_URL="http://localhost:5000/users"
// const handleLogin=()=>{
//     const found=users.find(
//         (element)=>element.email===user.email && element.password===user.password
//     )
//     if (found){
//         setMessage("Welcome")
//     }
//     else{
//         setMessage("Access Denied")
//     }
// }
//   return (
//     <div>
//         <h3>Login Form</h3>
//         <p><input type="text" placeholder="Email" onChange={(e)=>setUser({...user,email:e.target.value})}/></p>
//         <p><input type="password" placeholder="Password" onChange={(e)=>setUser({...user,password:e.target.value})} /></p>
//         <button onClick={handleLogin}>Login</button>
//         <p>{message}</p>
//         <li><Link to="/register">New User Register Here</Link></li>
//     </div>
//   )
// }
