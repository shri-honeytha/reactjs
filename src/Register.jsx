import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  
  const [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
});
  const url = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate();
  const handleRegister = async () => {
    console.log(user)
    const res = await axios.post(`${url}/users/register`, user);
    Navigate("/login");
  };
  return (
    <div>
      <h3>Registration Form</h3>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
      </p>
      <button onClick={handleRegister}>Register</button>
      <p>
        <Link to="/login">Already a member? Login here</Link>
      </p>
    </div>
  );
}

// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from 'react-router-dom'

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const addUser = async () => {
//     await axios.post("http://localhost:5000/users", {
//       name,
//       email,
//       password,
//     });

//     alert("Registration Successful");

//     setName("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Register</h2>

//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br /><br />

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

//       <button onClick={addUser}>Register</button>
//       <li><Link to="/login">Already a user? Login Here</Link></li>
//     </div>
//   );
// }


// // import React from 'react'
// // import { Link } from 'react-router-dom'

// // export default function Register() {


    

// //   return (
// //     <div>
// //         <h3>Registration Form</h3>
// //         <p><input type="text" placeholder="Name" /></p>
// //         <p><input type="text" placeholder="Email" /></p>
// //         <p><input type="password" placeholder="Password" /></p>
// //         <button>Register</button>
// //         <li><Link to="/login">Already a user? Login Here</Link></li>
// //     </div>
// //   )
// // }

