import React, { useState } from 'react';

const Product = ({ product, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product }); // Create a copy for editing

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Implement logic to save edited product data (e.g., API call)
    console.log('Saving edited product:', editedProduct);
    setIsEditing(false); // Reset editing state
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedProduct({ ...product }); // Reset edited product to original data
  };

  const handleChange = (event) => {
    setEditedProduct({ ...editedProduct, [event.target.name]: event.target.value });
  };

  return (
    <tr>
      {isEditing ? ( // Render editing form when needed
        <>
          <td>
            <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
          </td>
          <td>
            <input type="text" name="category" value={editedProduct.category} onChange={handleChange} />
          </td>
          <td>
            <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />
          </td>
          <td>
            <input type="number" name="stock" value={editedProduct.stock} onChange={handleChange} />
          </td>
          <td>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </td>
        </>
      ) : ( // Render product details when not editing
        <>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
          <td>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Product;
