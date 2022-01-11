'use strict';

function SearchBar({
  filterText,
  isStockOnly,
  handleText,
  toggleStockOptions,
}) {
  return (
    <div className="search-bar">
      <div className="text-filter">
        <span>Filter</span>
        <input type="text" value={filterText} onChange={handleText} />
      </div>
      <div className="stock-option">
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={toggleStockOptions}
        />
        <span>Only show products in stock</span>
      </div>
    </div>
  );
}

export default SearchBar;
