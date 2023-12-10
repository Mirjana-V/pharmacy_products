import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
import classes from'./ProductList.module.css';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productList = await ProductService.getAllProducts();
            setProducts(productList);
    };
    
        fetchData();
    }, []);


    const handleDelete = (id) => {
        ProductService.deleteProduct(id);
        setProducts(ProductService.getAllProducts());
    };


    return (
        <div>
        <h1>Products List</h1>
        <ul>
            {products.map((product) => (
                <li key={product.id} className={classes.list}>
                    <span>Name: {product.name}</span><br/>
                    <span>Manufacturer: {product.manufacturer.name}</span><br/>
                    <span>Price: {product.price} EUR</span><br/>
                    <div className={classes.actions}>
                    <Link to={`/products/edit/${product.id}`} className={classes.button}>Edit</Link>
                    <button onClick={() => handleDelete(product.id)} className={classes.button}>Delete</button>
                    </div>
                </li>
            ))}<br/>
        </ul>
        <Link to="/products/new" className={classes.button}>Add New Product</Link>
       </div>
    )
}

export default ProductList;