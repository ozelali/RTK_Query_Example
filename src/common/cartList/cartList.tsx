import React, { useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { Badge } from 'primereact/badge';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Product, remove } from '../../features/cartListSlice';
import { ToastContainer, toast } from 'react-toastify';

const CartList = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart.toast) {
      toast('Welcome to Turkey, money is out !');
    }
  }, [cart.toast]);

  const header = () => {
    return (
      <div className="p-d-flex p-jc-between p-ai-center">
        <h5 className="p-m-0">Cart List</h5>
        <h5>Amount: $ {cart.amount}</h5>
      </div>
    );
  };

  const cartItem = (rowData: Product) => {
    return (
      <p>
        {rowData.name}{' '}
        {rowData.quantity > 1 && <Badge value={'x' + rowData.quantity}></Badge>}
      </p>
    );
  };

  const actionBodyTemplate = (rowData: any) => {
    return (
      <Button
        type="button"
        icon="pi pi-trash"
        className="p-button-danger"
        onClick={() => dispatch(remove(rowData))}
      />
    );
  };

  return (
    <div className="datatable">
      <ToastContainer />
      <div className="card">
        <DataTable
          value={cart.productList}
          paginator
          className="p-datatable-products"
          header={header}
          rows={10}
          rowsPerPageOptions={[10, 15, 20]}
          dataKey="id"
          rowHover
          responsiveLayout="scroll"
          emptyMessage="Your Shopping Cart is empty"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <Column
            field="name"
            body={cartItem}
            header="Name"
            sortable
            style={{ minWidth: '8rem' }}
          />
          <Column field="price" header="Price" sortable />
          <Column style={{ minWidth: '4rem' }} body={actionBodyTemplate} />
        </DataTable>
      </div>
    </div>
  );
};

export default CartList;
