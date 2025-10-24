import React, { useEffect, useState, Fragment } from 'react';

function SimpleGetMethod() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let responseData = await response.json();
    setProducts(responseData);
  };

  const deleteProduct = (titleDelete) => {
    const updatedProducts = product.filter((item) => item.title !== titleDelete);
    setProducts(updatedProducts);
  };

  const updateProduct = (idToUpdate) => {
    const updatedProducts = product.map((item) => {
      if (item.id === idToUpdate) {
        return {
          ...item,
          title: "PenDrive",
          price: 999,
        }
      }
      return item
    });
    setProducts(updatedProducts)
  };

  return (
    <div>
      <h1>Simple Get Method</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product && product.length > 0 ? (
            product.map((value, index) => {
              const { id, title, price } = value;
              return (
                <Fragment key={index}>
                  <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>
                      <button onClick={() => updateProduct(id)}>Update</button>
                      <button onClick={() => deleteProduct(title)}>Delete</button>
                    </td>
                  </tr>
                </Fragment>
              );
            })
          ) : (
            <tr>
              <td colSpan="4">Currently Products Not available</td>
            </tr>
          )}
        </tbody>
      </table>

      <button
        onClick={() =>
          setProducts([
            ...product,
            { id: 21, title: "PenDrive", price: 499 }
          ])
        }
      >
        Add Product
      </button>

      <button onClick={() => setProducts([])}>Delete All</button>
    </div>
  );
}

export default SimpleGetMethod;
