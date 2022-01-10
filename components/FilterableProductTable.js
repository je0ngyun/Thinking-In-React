'use strict';

import fetch from '../mock/mockAPI';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const { useState, useEffect, useCallback } = React;

function FilterableProductTable() {
  const [data, setData] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);

  useEffect(() => {
    fetch(1500).then(setData);
  }, []);

  const handleText = useCallback(function (e) {
    setFilterText(e.target.value);
  });

  const toggleStockOptions = useCallback(function () {
    setIsStockOnly((flag) => !flag);
  });

  if (!data) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
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
