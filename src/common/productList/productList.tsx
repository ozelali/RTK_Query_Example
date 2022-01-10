import React, { useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { useGetProductListMutation } from '../../service/productList.api';
import './style.css';
import { add } from '../../features/cartListSlice';

function ProductList() {
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state) => state.products);
  const [getProductList, { isLoading }] = useGetProductListMutation();

  useEffect(() => {
    getProductList(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = (item: any) => {
    dispatch(add(item));
  };

  const productItem = (data: any) => {
    return (
      <div className="p-col-12 p-md-4">
        <div className="product-grid-item card">
          <div className="product-grid-item-top">
            <div>
              <i className="pi pi-tag product-category-icon"></i>
              <span className="product-category">{data.category}</span>
            </div>
          </div>
          <div className="product-grid-item-content">
            <img src={`${data.image}`} alt={data.name} />
            <div className="product-name">{data.name}</div>
            <div className="product-description">{data.description}</div>
          </div>
          <div className="product-grid-item-bottom">
            <span className="product-price">${data.price}</span>
            <Button
              onClick={() => addToCart(data)}
              icon="pi pi-shopping-cart"
              label="Add to Cart"
              disabled={data.inventoryStatus === 'OUTOFSTOCK'}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dataview">
      <div className="card">
        <DataView
          value={productList}
          layout={'grid'}
          itemTemplate={productItem}
          paginator
          rows={9}
          loading={isLoading}
        />
      </div>
    </div>
  );
}

export default ProductList;
