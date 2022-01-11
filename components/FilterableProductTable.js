'use strict';

import fetch from '../mock/mockAPI';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const { useState, useEffect } = React;

function FilterableProductTable() {
  const [data, setData] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);

  useEffect(() => {
    fetch(150).then(setData);
  }, []);

  const handleText = function (e) {
    setFilterText(e.target.value);
  };

  const toggleStockOptions = function () {
    setIsStockOnly((flag) => !flag);
  };

  if (!data) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="container">
        <SearchBar
          filterText={filterText}
          isStockOnly={isStockOnly}
          handleText={handleText}
          toggleStockOptions={toggleStockOptions}
        />
        <ProductTable
          filterText={filterText}
          isStockOnly={isStockOnly}
          product={data}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
