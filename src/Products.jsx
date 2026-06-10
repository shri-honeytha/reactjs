import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageURL: "",
  });

  const url = import.meta.env.VITE_API_URL + "/products";

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${url}/get`);
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const addProduct = async () => {
    try {
      await axios.post(`${url}/addProduct`, product);

      setProduct({
        name: "",
        description: "",
        price: "",
        imageURL: "",
      });

      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${url}/delete/${productId}`);
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      <p>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, name: e.target.value })
          }
        />
      </p>

      <p>
        <input
          type="text"
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({
              ...product,
              description: e.target.value,
            })
          }
        />
      </p>

      <p>
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) =>
            setProduct({
              ...product,
              price: e.target.value,
            })
          }
        />
      </p>

      <p>
        <input
          type="text"
          placeholder="Image URL"
          value={product.imageURL}
          onChange={(e) =>
            setProduct({
              ...product,
              imageURL: e.target.value,
            })
          }
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Rating"
          value={product.rating}
          onChange={(e) =>
            setProduct({ ...product, rating: e.target.value })
          }
        />
      </p>

      <button onClick={addProduct}>
        Add Product
      </button>

      <hr />

      <ol>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/admin/editProduct/${product._id}`}>
              {product.name}
            </Link>

            {" - "}₹{product.price}
            {" - "}{product.description}
            {" - "}{product.imageURL}

            <button
              onClick={() =>
                deleteProduct(product._id)
              }
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function Products() {
//   const [products, setProducts] = useState([]);

//   const [product, setProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     imageURL: "",
//   });

//   const url = import.meta.env.VITE_API_URL + "/products";

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${url}/get`);
//       setProducts(res.data.products);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const addProduct = async () => {
//     try {
//       await axios.post(`${url}/addProduct`, product);

//       setProduct({
//         name: "",
//         description: "",
//         price: "",
//         imageURL: "",
//       });

//       fetchProducts();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const deleteProduct = async (productId) => {
//     try {
//       await axios.delete(`${url}/delete/${productId}`);
//       fetchProducts();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h2>Products</h2>

//       <p>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={product.name}
//           onChange={(e) =>
//             setProduct({ ...product, name: e.target.value })
//           }
//         />
//       </p>

//       <p>
//         <input
//           type="text"
//           placeholder="Description"
//           value={product.description}
//           onChange={(e) =>
//             setProduct({
//               ...product,
//               description: e.target.value,
//             })
//           }
//         />
//       </p>

//       <p>
//         <input
//           type="number"
//           placeholder="Price"
//           value={product.price}
//           onChange={(e) =>
//             setProduct({
//               ...product,
//               price: e.target.value,
//             })
//           }
//         />
//       </p>

//       <p>
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={product.imageURL}
//           onChange={(e) =>
//             setProduct({
//               ...product,
//               imageURL: e.target.value,
//             })
//           }
//         />
//       </p>

//       <button onClick={addProduct}>
//         Add Product
//       </button>

//       <hr />

//       <ol>
//         {products.map((product) => (
//           <li key={product._id}>
//             <Link to={`/editProduct/${product._id}`}>
//               {product.name}
//             </Link>

//             {" - "}₹{product.price}
//             {" - "}{product.description}
//             {" - "}{product.imageURL}

//             <button
//               onClick={() =>
//                 deleteProduct(product._id)
//               }
//               style={{ marginLeft: "10px" }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Product() {
//   const [products, setProducts] = useState([]);

//   const [product, setProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     imageURL: "",
//   });

//   const url = import.meta.env.VITE_API_URL + "/products";

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${url}/get`);
//       setProducts(res.data.products);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const addProduct = async () => {
//     try {
//       await axios.post(`${url}/addProduct`, product);

//       setProduct({
//         name: "",
//         description: "",
//         price: "",
//         imageURL: "",
//       });

//       fetchProducts();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const deleteProduct = async (productId) => {
//     try {
//       await axios.delete(`${url}/delete/${productId}`);
//       fetchProducts();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Products</h2>

//       <p>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={product.name}
//           onChange={(e) =>
//             setProduct({ ...product, name: e.target.value })
//           }
//         />
//       </p>

//       <p>
//         <input
//           type="text"
//           placeholder="Description"
//           value={product.description}
//           onChange={(e) =>
//             setProduct({
//               ...product,
//               description: e.target.value,
//             })
//           }
//         />
//       </p>

//       <p>
//         <input
//           type="number"
//           placeholder="Price"
//           value={product.price}
//           onChange={(e) =>
//             setProduct({ ...product, price: e.target.value })
//           }
//         />
//       </p>

//       <p>
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={product.imageURL}
//           onChange={(e) =>
//             setProduct({
//               ...product,
//               imageURL: e.target.value,
//             })
//           }
//         />
//       </p>

//       <button onClick={addProduct}>
//         Add Product
//       </button>

//       <hr />

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {products.map((product) => (
//           <div
//             key={product._id}
//             style={{
//               border: "1px solid #ddd",
//               padding: "15px",
//               width: "250px",
//               borderRadius: "10px",
//             }}
//           >
//             <img
//               src={product.imageURL}
//               alt={product.name}
//               width="200"
//               height="200"
//               style={{
//                 objectFit: "cover",
//               }}
//             />

//             <h3>{product.name}</h3>

//             <p>{product.description}</p>

//             <h4>₹{product.price}</h4>

//             <button
//               onClick={() =>
//                 deleteProduct(product._id)
//               }
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }