import React, { useState } from "react";
import { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
export const AppContext = createContext();
export default function App() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  return (
    <AppContext.Provider value={{ user, setUser, cart, setCart }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}


// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Cart from "./Cart.jsx";
// import Home from "./Home.jsx";
// import Orders from "./Orders.jsx";
// import Login from "./Login.jsx";
// import Register from "./Register.jsx";
// import AdminLayout from "./AdminLayout.jsx";
// import Users from "./Users.jsx";
// import Products from "./Products.jsx";
// import Order from "./Order.jsx";
// import RootLayout from "./RootLayout.jsx";

// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "cart", element: <Cart /> },
//         { path: "orders", element: <Orders /> },
//         { path: "login", element: <Login /> },
//         { path: "register", element: <Register /> },
//         {
//           path: "admin",
//           element: <AdminLayout />,
//           children: [
//             { index: true, element: <Users /> },
//             { path: "products", element: <Products /> },
//             { path: "orders", element: <Order />,},
//           ],
//         },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// import React from 'react'
// import axios from "axios"
// import {useState,useEffect} from "react"

// export default function App() {
//   const [item, setItem] = useState({
//     name: "",
//     price: "",
//     quantity: "",
//   });
//   const [items,setItems]=useState([])

//   const API_URL="http://localhost:5000/orders"

//   // const fetchItems = async ()=>{
//   //   const res= await axios.get(API_URL)
//   //   setItems(res.data)
//   // }

//   // useEffect(()=>{
//   //   fetchItems()
//   // },[])

//   const handleAdd = () => {
//   setItems([
//     ...items,
//     {
//       name:item.name,
//       price: Number(item.price),
//       quantity: Number(item.quantity)
//     }
//   ]);

//   setItem({name:"",
//     price:"",
//     quantity:""
//   })
// };

//    const orderValue = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const addOrder = async () => {
//     await axios.post(API_URL,{items,orderValue})
//     alert("Order Saved")
//     alert("Next Order");
//     setItems([]);
//   };

//   return (
//     <div>
//       <h2>Supermarket Billing Counter</h2>
//       <p>
//         <select value={item.name}
//           onChange={(e) =>
//             setItem({ ...item, name: e.target.value })}>
//           <option>-- Select Product --</option>
//           <option>Product 1</option>
//           <option>Product 2</option>
//           <option>Product 3</option>
//         </select>
//         <input type="number"
//         placeholder='Price'
//         value={item.price}
//         onChange={(e)=>setItem({ ...item, price: e.target.value })}
//         />
//         <input type="number"
//         placeholder='Quantity'
//         value={item.quantity}
//         onChange={(e)=>setItem({ ...item, quantity: e.target.value })} />
//         <button onClick={handleAdd}>Add</button>
//       </p>
//       <h3>Items</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.price} - {item.quantity} - ₹{item.price} * {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <p>
//         Order Value: {orderValue}
//       </p>
//       <p>
//         <button onClick={addOrder}>Next</button>
//       </p>
//     </div>
//   )
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Card({ title, priority, status }) {
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         padding: "10px",
//         margin: "10px 0",
//       }}
//     >
//       <h3>{title}</h3>
//       <p>Priority: {priority}</p>
//       <p>Status: {status}</p>
//     </div>
//   );
// }

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const [priority, setPriority] = useState("Medium");

//   const API_URL = "http://localhost:5000/tasks";

//   const fetchTasks = async () => {
//     const res = await axios.get(API_URL);
//     setTasks(res.data);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const addTask = async () => {
//     if (!task.trim()) return;

//     await axios.post(API_URL, {
//       task,
//       priority,
//       completed: false,
//     });

//     setTask("");
//     setPriority("Medium");
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     fetchTasks();
//   };

//   const toggleTask = async (id, completed) => {
//     await axios.put(`${API_URL}/${id}`, {
//       completed: !completed,
//     });

//     fetchTasks();
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>To-Do List Application</h1>

//       <input
//         type="text"
//         placeholder="Enter Task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <select
//         value={priority}
//         onChange={(e) => setPriority(e.target.value)}
//       >
//         <option value="High">High</option>
//         <option value="Medium">Medium</option>
//         <option value="Low">Low</option>
//       </select>

//       <button onClick={addTask}>Add Task</button>

//       <hr />

//       {tasks.map((item) => (
//         <div key={item._id}>
//           {/* Card Component using Props */}
//           <Card
//             title={item.task}
//             priority={item.priority}
//             status={item.completed ? "Completed" : "Pending"}
//           />

//           <button
//             onClick={() =>
//               toggleTask(item._id, item.completed)
//             }
//           >
//             {item.completed
//               ? "Mark Pending"
//               : "Mark Completed"}
//           </button>

//           <button onClick={() => deleteTask(item._id)}>
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [users, setUser] = useState([]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const fetchDetails = async () => {
//     const res = await axios.get("http://localhost:5000/users");
//     setUser(res.data);
//   };
//   useEffect(() => {
//     fetchDetails();
//   }, []);

//   const handleLogin = () => {
//     const found = users.find(
//       (element) => element.email === email && element.password === password,
//     );
//     if (found) {
//       setMessage("Welcome");
//     } else {
//       setMessage("Access Denied");
//     }
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Login Form</h2>
//       <div style={{ marginTop: "5px" }}>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//       </div>
//       <div style={{ marginTop: "5px" }}>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//       </div>
//       <div style={{ marginTop: "15px" }}>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//       <p>{message}</p>
//     </div>
//   );
// }

// import React from 'react'
// import {useEffect,useState} from 'react'
// import axios from "axios";

// export default function App() {
//   const [users,setUser]=useState([]);
//   const [name,setName]=useState("");
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   const [message, setMessage] = useState("");
//   const fetchDetails=async ()=>{
//     const res=await axios.get("http://localhost:5000/users")
//     setUser(res.data)
//   };
//   useEffect(()=>{
//     fetchDetails();
//   },[]);

//   const addUser= async ()=>{
//     await axios.post("http://localhost:5000/users",{name,email,password})
//     setName("")
//     setEmail("")
//     setPassword("")
//     fetchDetails()
//   }

//   return (
//     <div style={{padding:"20px"}}>
//     <h2>Registration Form</h2>
//     <div>
//     <input type="text"
//     value={name}
//     onChange={(e)=>setName(e.target.value)}
//     placeholder="Name"/>
//     </div>
//     <div style={{marginTop:"5px"}}>
//     <input type="text"
//     value={email}
//     onChange={(e)=>setEmail(e.target.value)}
//     placeholder="Email"/>
//     </div>
//     <div style={{marginTop:"5px"}}>
//     <input type="password"
//     value={password}
//     onChange={(e)=>setPassword(e.target.value)}
//     placeholder="Password"/>
//     </div>
//     <div style={{display:"flex",marginTop:"15px",gap:"10px"}}>
//     <button onClick={addUser}>Register</button>
//     </div>
//     <p>{message}</p>

//     </div>
//   )
// }

// import React from 'react'
// import {useEffect,useState} from 'react'
// import axios from "axios";

// export default function App() {
//   const [users,setUser]=useState([]);
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   const [message, setMessage] = useState("");
//   const fetchDetails=async ()=>{
//     const res=await axios.get("http://localhost:5000/users")
//     setUser(res.data)
//   };
//   useEffect(()=>{
//     fetchDetails();
//   },[]);

//   const addUser= async ()=>{
//     await axios.post("http://localhost:5000/users",{email,password})
//     setEmail("")
//     setPassword("")
//     fetchDetails()
//   }
//   const deleteUser=async (id)=>{
//     await axios.delete(`http://localhost:5000/users/${id}`)
//     fetchDetails();
//   }

//       const handleLogin = () => {
//     const found = users.find(
//       (element) =>
//         element.email === email && element.password === password,
//     );
//     if (found) {
//       setMessage("Welcome");
//     } else {
//       setMessage("Access Denied");
//     }
//   };

//   return (
//     <div style={{padding:"20px"}}>
//     <h2>Login Page</h2>
//     <div>
//     <input type="text"
//     value={email}
//     onChange={(e)=>setEmail(e.target.value)}
//     placeholder="Email"/>
//     </div>
//     <div style={{marginTop:"5px"}}>
//     <input type="password"
//     value={password}
//     onChange={(e)=>setPassword(e.target.value)}
//     placeholder="Password"/>
//     </div>
//     <div style={{display:"flex",marginTop:"15px",gap:"10px"}}>
//     <button onClick={addUser}>Register</button>
//     <button onClick={handleLogin}>Login</button>
//     </div>
//     <p>{message}</p>

//     </div>
//   )
// }

// import { useEffect, useState } from "react";
// import axios from "axios";
// function App() {
//   const [notes, setNotes] = useState([]);
//   const [text, setText] = useState("");
//   const fetchNotes = async () => {
//     const res = await axios.get("http://localhost:5000/notes");
//     setNotes(res.data);
//   };
//   useEffect(() => {
//     fetchNotes();
//   }, []);
//   const addNote = async () => {
//     await axios.post("http://localhost:5000/notes", { text });
//     setText("");
//     fetchNotes();
//   };
//   const deleteNote = async (id) => {
//     await axios.delete(`http://localhost:5000/notes/${id}`);
//     fetchNotes();
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Notes App</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter your note"
//       />
//       <button onClick={addNote}>Add</button>
//       <ol>
//         {notes.map((note) => (
//           <li key={note._id}>
//             {note.text}{" "}
//             <button onClick={() => deleteNote(note._id)}>Delete</button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }
// export default App;

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios"

// export default function App() {
//   const [products, setProducts] = useState([]); //products is going to be an array
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const API_URL = "http://localhost:5000/products";
//   const fetchProducts = async () => {
//     const res = await axios.get(API_URL);
//     setProducts(res.data);
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   const addProduct = async () => {
//     await axios.post("http://localhost:5000/products", { name,price });
//     setName("");
//     setPrice("");
//     fetchProducts();
//   };

// const deleteProduct = async (id) => {
//     await axios.delete(`http://localhost:5000/products/${id}`);
//     fetchProducts();
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Products App</h2>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter the product"
//       />

//       <input
//         type="number"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         placeholder="Enter the price"
//       />
//       <button onClick={addProduct}>Add</button>
//       <ol>
//         {products.map((product) => (
//           <li key={product._id}>
//             {product.name} - {product.price}
//             <button onClick={() => deleteProduct(product._id)} style={{marginLeft:"10px"}}>Delete</button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios"

// export default function App() {
//   const [products, setProducts] = useState([]); //products is going to be an array

//   const API_URL = "http://localhost:5000/products";
//   const fetchProducts = async () => {
//     const res = await axios.get(API_URL);
//     setProducts(res.data);
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
// <div>
//       {products &&
//         products.map((product) =>
//           <li key={product.id}>{product.name}</li>
//        )}
//            </div>
//   );
// }

// import React from "react";
// import { useState, useEffect } from "react";

// export default function App() {
//   const [products, setProducts] = useState([]); //products is going to be an array
//   const API_URL = "http://localhost:5000/products";
//   const fetchProducts = async () => {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     setProducts(data);
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return (
//     <div>
//       {products &&
//         products.map((product) =>
//           <li key={product.id}>{product.name}</li>
//         )}
//     </div>
//   );
// }

// import React from "react";
// import { useState } from "react";

// //as sson as there is any change(we type anything) in email and password they have to get updated in the user object
// export default function App() {
//   const [user, setUser] = useState({}); //"{}" means, the user is an object, therefore, default is null.
//   const [message, setMessage] = useState();
//   const users = [
//     { id: 1, email: "john@gmail.com", password: "1234" },
//     { id: 2, email: "amy@gmail.com", password: "123456" },
//   ];

//   const handleLogin = () => {
//     const found = users.find(
//       (element) =>
//         element.email === user.email && element.password === user.password,
//     );
//     if (found) {
//       setMessage("Welcome");
//     } else {
//       setMessage("Access Denied");
//     }
//   };
//   return (
//     <div>
//       <h2>Login Form</h2>
//       {message}
//       <p>
//         <input
//           type="text"
//           placeholder="Email"
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//         />
//       </p>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// import React from 'react'
// import {useState} from "react"

// export default function App() {
//   const [score,setScore]=useState(0);
//   return (
//     <div>
//       <p>{score}</p>
//       <button onClick={()=>setScore(score+1)}>Update </button>
//     </div>
//   )
// }

// import React from 'react'
// import {useState} from "react"

// export default function App() {
//   const [score,setScore]=useState(0);
//   return (
//     <div>
//       <p>{score}</p>
//       <button onClick={()=>setScore(score+1)}>Update score</button>
//     </div>
//   )
// }

// import React from 'react'

// export default function App() {
//   const greet=(name)=>{
//     alert(`Hello!, Welcome back ${name}`)
//   }
//   return (
//     <button onClick={()=>greet("Honey")}>Greet</button>
//   )
// }
// import React from 'react'

// export default function App() {
//   const greet=()=>{
//     alert(`Hello!, Welcome back`)
//   }
//   return (
//     <button onClick={greet}>Greet</button>
//   )
// }

// import React from 'react'

// function Pass(){
//   return <div>Well Donee!!😃</div>
// }

// export default function App() {
//   let score=60
//   return (
//     <div>
//       {score>40 && <Pass/>}
//     </div>
//   )
// }

// import React from 'react'

// function Pass(){
//   return <div>Well Donee!!😃</div>
// }

// function Fail(){
//   return <div>Better Luck Next Time!!</div>
// }

// export default function App() {
//   let score=50
//   return (
//     <div>
//       {score>40?<Pass/>:<Fail/>}
//     </div>
//   )
// }

// import React from 'react'

// export default function App() {
//   const products = [
//     { id: 1, name: "Laptop", price: 10000 },
//     { id: 2, name: "Mouse", price: 700 },
//     { id: 3, name: "Keyboard", price: 1200 },
//   ];
//   return (
//     <ol>{products.map((product)=><li key={product.id}> {product.name}</li>)}</ol>
//   )
// }

// import React from "react";

// export default function App() {
//   const products = ["Laptop", "Desktop", "Keyboard", "Mouse"];
//   return (
//     <ol>
//       {products.map((product) => (
//         <li>{product}</li>
//       ))}
//     </ol>
//   );
// }

// import React from 'react'

// export default function App() {
//   const products = ["Laptop", "Desktop", "Keyboard","Mouse"];
//   return (
//     <div>{products.map((product)=>(<div>{product}</div>))}</div>
//   )
// }

// import React from 'react'

// export default function App() {
//   const products = ["Laptop", "Desktop", "Keyboard"];
//   return (
//     <div>{products.map((product)=>(<div>{product}</div>))}</div>
//   )
// }

// import React from "react";
// export default function App() {
//   const products = ["Laptop", "Desktop", "Keyboard"];
//   return (
//     <ul>
//       {products.map((product)=>(
//         <li>{product}</li>
//       ))}
//     </ul>
//   )
// }

// import React from 'react'

// function Sum({a,b=0}){ //destructuring props for better use
//   return a+b
// }

// // if b is not given it has to take it as 0
// export default function App() {
//   return (
//     <div>
//       <Sum a={4} />
//     </div>
//   )
// }

// import React from 'react'

// function Sum({a,b}){ //destructuring props for better use
//   return a+b
// }

// export default function App() {
//   return (
//     <div>
//       <Sum a={4} b={5}/>
//     </div>
//   )
// }

// import React from 'react'

// function Sum(props){
//   return props.a+props.b

// }

// export default function App() {
//   return (
//     <div>
//       <Sum a={4} b={5}/>
//     </div>
//   )
// }

// import React from 'react'

// export default function App() {
//   let name="Honey"
//   let a=10
//   let b=20
//   return (
//     <div>Hello {name}, {a+b}</div>
//   )
// }

// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       <h1 style={{backgroundColor:"orange"}}>Hello World!</h1>
//     </div>
//   )
// }

// import React from 'react'
// import "./App.css"
// export default function App() {
//   return (
//     <div>
//       <h1 className="header">Hello World!</h1>
//     </div>
//   )
// }

// // export default function App(){
// //   return "Hello! Honey😃"
// // }
// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx"
// import Home from "./Home.jsx"

// //nested components: app is parent, header, footer, home are children
// export default function App() {
//   return (
//     <div>
//       <Header/>
//       <Footer/>
//       <Home/>
//     </div>
//   ); //returning element
// }
