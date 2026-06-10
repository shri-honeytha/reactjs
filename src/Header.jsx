import "./Header.css"
import { Link } from "react-router-dom";
import { AppContext } from "./App";
import { useContext } from "react";
function Header() {
  const {user}=useContext(AppContext)

    return <div className="header">
    <div>MU26A Store</div>
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="cart">Cart</Link></li>
      <li><Link to="order">Order</Link></li>
      {user?.role==="admin" &&(<li><Link to="admin">Admin</Link></li>)}
        
       <li><Link to="login">Login</Link></li>
    </div>
  </div>;
  


}
export default Header


// import "./Header.css"
// import { Link } from "react-router-dom";
// import { AppContext } from "./App";
// import { useContext } from "react";
// function Header() {
//   const {user}=useContext(AppContext)
//   if(user.role==="admin"){
//     return <div className="header">
//     <div>MU26A Store</div>
//     <div>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="cart">Cart</Link></li>
//       <li><Link to="order">Order</Link></li>
//         <li><Link to="admin">Admin</Link></li>
//        <li><Link to="login">Login</Link></li>
//     </div>
//   </div>;
//   }

// else{
//   return <div className="header">
//     <div>MU26A Store</div>
//     <div>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="cart">Cart</Link></li>
//       <li><Link to="order">Order</Link></li>
       
//        <li><Link to="login">Login</Link></li>
//     </div>
//   </div>;
// }
// }
// export default Header

// import "./Header.css";
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <div className="header">
//       <div>MU26A Store</div>
//       <div>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="cart">Cart</Link>
//         </li>
//         <li>
//           <Link to="orders">Orders</Link>
//         </li>
//         <li>
//           <Link to="admin">Admin</Link>
//         </li>

//         <li>
//           <Link to="login">Login</Link>
//         </li>
//       </div>
//     </div>
//   );
// }
