'use strict';

function ProductCategoryRow({ category }) {
  return (
    <tr className="product-row">
      <td colSpan={2}>{category}</td>
    </tr>
  );
}

export default ProductCategoryRow;
