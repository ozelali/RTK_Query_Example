import React from 'react';
import ProductList from '../common/productList/productList';
import Banner from '../common/banner/banner';
import CartList from '../common/cartList/cartList';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="p-grid">
      <div className="p-col-12">
        <Banner />
      </div>
      <div className="p-col-9">
        <ProductList />
      </div>
      <div className="p-col-3">
        <CartList />
      </div>
    </div>
  );
}

export default App;
