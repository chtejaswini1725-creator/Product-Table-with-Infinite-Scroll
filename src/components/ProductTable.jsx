import React from "react";

export default function ProductTable({ products, onTitleChange, loaderRef }) {
  return (
    <table border="1" width="100%" cellPadding="10">
      <thead>
        <tr>
          <th>Title (Editable)</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product, index) => {
          const isLastRow = index === products.length - 1;

          return (
            <tr
              key={`${product.id}-${index}`}
              ref={isLastRow ? loaderRef : null}
            >
              <td>
                <input
                  value={product.title}
                  onChange={(e) => onTitleChange(product.id, e.target.value)}
                />
              </td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
