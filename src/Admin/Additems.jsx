import React, { useState } from 'react';
import axios from 'axios';

export default function Additems(){
  const [selectedFile, setSelectedFile] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: '',
    description: ''
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('category', productData.category);
    formData.append('description', productData.description);

    axios.post('http://localhost:5000/items/upload', formData)
      .then((response) => {
        console.log('Product uploaded successfully');
      })
      .catch((error) => {
        console.error('Error uploading product:', error);
      });
  };

  return (
    <div>
      <h1>Product Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>test:</label>
          <input type="text" name="price" value={productData.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={productData.category} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={productData.description} onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" name="image" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

