import React, { useEffect, useState, CSSProperties } from "react";
import "./ProductList.css";
import { useFetch } from "../hooks/useFetch";
import PacmanLoader from "react-spinners/PacmanLoader";



function ProductList() {

  const [url, setUrl] = useState("http://localhost:3000/products");
  const { data: products, loading } = useFetch(url);

  // useEffect(() => {
  //   if (products) {
  //     setLoading(false);
  //   }
  // }, [products]);

  if (loading)
    return (
      <PacmanLoader/>
    );

  return (
    <div className="product-list">
      <div className="product-row">
        <h2>{products && products.length}</h2>
        <button onClick={() => setUrl("http://localhost:3000/products")}>
          Load All
        </button>
        <button onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}>
          Load In Stock
        </button>
      </div>

      {products &&
        products.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-id">{item.id}</div>
            <div className="product-title">
              {item.name.length > 30 ? item.name.slice(0, 30) + "..." : item.name}
            </div>
            <div className="product-info">
              <div className="product-price">${item.price}</div>
              <div className={`product-status ${item.in_stock === "true" ? "in-stock" : "out-of-stock"}`}>
                {item.in_stock === "true" ? "In Stock" : "Unavailable"}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
