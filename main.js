'use strict';

const { createElement } = React;
import FilterableProductTable from './components/FilterableProductTable';

const App = function () {
  return <FilterableProductTable />;
};

const domContainer = document.querySelector('#app');
ReactDOM.render(createElement(App), domContainer);
