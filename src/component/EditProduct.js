import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ProductService from "../services/ProductService";
import classes from './CreateProduct.module.css';

const EditProduct = () => {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState ({
        id: '',
        name: '',
        manufacturer: {id: '', name: ''},
        price: '',
        expiryDate: ''
    });


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await ProductService.getProductById(id);
                setProduct(productData);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
    
        fetchProduct();
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ProductService.updateProduct(id, product);
            history.push("/products");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };


    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required />
                </label>
                <br/>
                <br/>

                <label>
                Manufacturer:
                <input
                    type="text"
                    name="manufacturer"
                    value={product.manufacturer.name}
                    onChange={handleChange}
                    required />
                </label>
                <br/>
                <br/>

                <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required />
                </label>
                <br/>
                <br/>

                <label>
                Expiry Date:
                <input
                    type="date"
                    name="expiryDate"
                    value={product.expiryDate}
                    onChange={handleChange}
                    required />
                </label>
                <br/>
                <br/>

                <button type="submit" className={classes.button}>Save Changes</button>
            </form>
        </div>
    )
}

export default EditProduct;