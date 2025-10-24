import React, {useEffect, useState } from 'react'

function LimitBasedSelect() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getProducts();
  }, [limit]);

  const getProducts = async () => {
    let response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    let responseData = await response.json();
    setProducts(responseData);
  }

  return (
    <div>
      <h1>Select Limit</h1>
      <table border={3}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length !== 0 ?
            products.map((value) => {
              const { id, title, image, price } = value;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td><img src={image} height={100} width={100} alt={title} /></td>
                  <td>{price}</td>
                </tr>
              );
            })
            : (
              <tr>
                <td colSpan={4}><h3>Currently no products</h3></td>
              </tr>
            )}
        </tbody>
      </table>
      <div>
        <select onChange={(e) => setLimit(Number(e.target.value))} value={limit}>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="13">13</option>
        </select>
      </div>
    </div>
  );
}

export default LimitBasedSelect;
