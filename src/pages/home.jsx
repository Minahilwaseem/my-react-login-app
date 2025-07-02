// src/pages/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to Home Page</h2>
      <h3>Product Listing</h3>
      <div>
        {products.map(product => (
          <div key={product.id} style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px"
          }}>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} style={{ width: "100px" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
