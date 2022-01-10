'use strict';

function SearchBar({
  filterText,
  isStockOnly,
  handleText,
  toggleStockOptions,
}) {
  return (
    <div>
      <div>
        <span>filter : </span>
        <span>
          <input type="text" value={filterText} onChange={handleText} />
        </span>
      </div>
      <div>
        <span>
          <input
            type="checkbox"
            checked={isStockOnly}
            onChange={toggleStockOptions}
          />
          <span>Only show products in stock</span>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
