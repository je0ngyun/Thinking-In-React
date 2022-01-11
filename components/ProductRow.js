'use strict';

function ProductRow({ product }) {
  const { name, price } = product;
  const stockStatus = product.stocked ? '' : 'stock-out';
  return (
    <tr>
      <td className={stockStatus}>{name + ' '}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
