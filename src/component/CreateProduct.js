import React, { useState } from 'react';
import ProductService from '../services/ProductService';
import classes from'./CreateProduct.module.css';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    price: 0,
    expiryDate: '',
  });


  const generateUniqueId = () => {
    return '_' + Math.random().toString(36);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: generateUniqueId(),
      name: formData.name,
      manufacturer: { id: generateUniqueId(), name: formData.manufacturer },
      price: parseFloat(formData.price),
      expiryDate: new Date(formData.expiryDate),
    };

    ProductService.addProduct(newProduct);
  };


  return (
    <div className={classes.form}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input className={classes.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required />
        </label>
        <br />
        <br />

        <label>
          Manufacturer:
          <input className={classes.input}
          type="text"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          required />
        </label>
        <br />
        <br />

        <label>
          Price:
          <input className={classes.input}
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required />
        </label>
        <br />
        <br />

        <label>
          Expiry Date:
          <input className={classes.input}
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required />
        </label>
        <br />
        <br />

        <button className={classes.button} type="submit">Add New Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;