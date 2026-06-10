import React, { useEffect, useState ,useContext} from "react";
import { AppContext } from "./App";
import axios from "axios";
import "./Home.css";

export default function Home() {
   const { user, cart,setCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const url = import.meta.env.VITE_API_URL + "/products";
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${url}/get`);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
  const existing = cart.find(
    (item) => item._id === product._id
  );

  if (existing) {
    setCart(
      cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      { ...product, quantity: 1 },
    ]);
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Products</h1>

      <div
      className="flex flex-wrap justify-center"
      >
        {products.map((product) => (
          <div
            className="m-2 border border-gray-500 w-80 flex flex-col hover:bg-gray-100"  key={product._id}
            
          >
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full h-72 object-contain"
            />

            <h3 className="box">{product.name}</h3>

            <p className="text-xl hover:bg-gray-500">{product.description}</p>
              <p>rating:{product.rating}</p>
            <h4 className="font-bold">₹{product.price}</h4>

            <button className="bg-gray-500 w-full text-white font-bold hover:bg-blue-500" onClick={()=>addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// import { useContext } from "react";
// import { AppContext } from "./App";
// export default function Home() {
//   const { user } = useContext(AppContext);
//   return (
//     <div>
//       Home
//       <h2>{user?.name}</h2>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const res = await axios.get(
//       "http://localhost:5001/products"
//     );

//     setProducts(res.data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Products</h2>

//       {products.map((product) => (
//         <div key={product._id}>
//           <h3>{product.name}</h3>
//           <p>₹{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }