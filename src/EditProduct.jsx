import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageURL: "",
  });

  const { productId } = useParams();
  const navigate = useNavigate();

  const url = import.meta.env.VITE_API_URL + "/products";

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${url}/getProduct/${productId}`
      );

      setProduct(res.data.product);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.patch(
        `${url}/updateProduct/${productId}`,
        product
      );

      alert("Product Updated Successfully");

      navigate("/admin/products");
    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Product</h2>

      <p>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name || ""}
          onChange={(e) =>
            setProduct({
              ...product,
              name: e.target.value,
            })
          }
        />
      </p>

      <p>
        <input
          type="text"
          placeholder="Description"
          value={product.description || ""}
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
          value={product.price || ""}
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
          value={product.imageURL || ""}
          onChange={(e) =>
            setProduct({
              ...product,
              imageURL: e.target.value,
            })
          }
        />
      </p>

      {product.imageURL && (
        <img
          src={product.imageURL}
          alt={product.name}
          width="250"
          style={{
            display: "block",
            marginBottom: "20px",
            objectFit: "cover",
          }}
        />
      )}

      <button onClick={handleSubmit}>
        Update Product
      </button>
    </div>
  );
}