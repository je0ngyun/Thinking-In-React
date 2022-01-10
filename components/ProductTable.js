'use strict';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
function ProductTable({ filterText, isStockOnly, product }) {
  const CatagoryRows = Object.freeze({
    SPORTING_GOODS: 'Sporting Goods',
    ELECTRONICS: 'Electronics',
  });

  const filterAllCatagory = function () {
    let ret = [];
    for (let [_, value] of Object.entries(CatagoryRows)) {
      ret.push(
        product.filter((item) => {
          const stockFlag = isStockOnly ? item.stocked : true;
          return (
            item.category === value &&
            item.name.includes(filterText) &&
            stockFlag
          );
        }),
      );
    }
    return ret;
  };

  const filteredItem = function () {
    let ret = [];
    filterAllCatagory().forEach((items, idx) => {
      if (items.length > 0) {
        const categoryName = Object.entries(CatagoryRows)[idx][1];
        ret.push(
          <ProductCategoryRow key={categoryName} category={categoryName} />,
          ...items.map((product) => (
            <ProductRow key={product.name} product={product} />
          )),
        );
      }
    });
    return ret;
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Name </td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>{filteredItem()}</tbody>
    </table>
  );
}

export default ProductTable;
