import React, { useEffect, useState } from "react";
import "./ProductList.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="product-list">
            <h1>Product List</h1>
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="product-id">{product.id}</div>
                    <div className="product-name">{product.name.length > 30 ? product.name.slice(0,30)+"...":product.name}</div>
                    <div className="product-info">
                        <div className="product-price">${product.price}</div>
                        <div className={`product-status ${product.in_stock ? "in-stock" : "out-of-stock"}`}>
                            {product.in_stock ? "In Stock" : "Out of Stock"}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
