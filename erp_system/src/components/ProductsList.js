import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import axios from 'axios';

// Import necessary libraries for data fetching (e.g., axios, fetch API)
const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products'); // Replace with your API endpoint
      const data = await response.data; // Access the response data
      setProducts(data);
    } catch (error) {
      // Handle errors gracefully (e.g., display error message)
      console.error('Error fetching products:', error);
    }
  };
  
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  // Fetch product data (mock or API call)
const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
        const response = await fetch('your-api-endpoint'); // Replace 'your-api-endpoint' with the actual API endpoint
        const data = await response.json();
        setProducts(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message); // Handle errors gracefully
    } finally {
        setIsLoading(false);
    }
};

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products on component mount

  const handleEditProduct = (productId) => {
    // Implement logic to handle product edit (e.g., navigate to edit page)
    console.log('Edit product:', productId); // Placeholder for now
  };

  const handleDeleteProduct = async (productId) => {
    // Implement logic to handle product deletion (e.g., API call)
    console.log('Delete product:', productId); // Placeholder for now
  };

  return (
    <div>
      <h2>Products</h2>
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button onClick={() => handleEditProduct(product.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsList;
