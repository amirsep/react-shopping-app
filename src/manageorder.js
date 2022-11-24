import React, { useState, useEffect } from 'react';
import Adminheader from './adminheader';
import axios from 'axios';

const ManageOrder = () => {
  const [order, updateOrder] = useState([]);

  const getorder = () => {
    axios.get('http://localhost:1234/orders').then((response) => {
      updateOrder(response.data.reverse());
    });
  };

  useEffect(() => {
    getorder();
  }, [true]);

  return (
    <>
      <Adminheader />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h3 className='text-primary'> Manage Orders : {order.length} </h3>
          </div>
        </div>
        {order.map((orderdata, index) => {
          return (
            <div className='row mb-4' key={index}>
              <div className='col-lg-4'>
                <h5> Customer Details </h5>
                <p> Full Name : {orderdata.fullname} </p>
                <p> Mobile No : {orderdata.mobileno} </p>
                <p> e-Mail Id : {orderdata.emailid} </p>
                <p> Full Address : {orderdata.fulladdress} </p>
              </div>
              <div className='col-lg-8 text-center'>
                <h6>
                  Order id - : {orderdata.id}, Total Items -{' '}
                  {orderdata.product.length}
                </h6>
                <table className='table table-bordered'>
                  <thead>
                    <tr className='bg-light text-primary'>
                      <th>Product Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Photo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderdata.product.map((pdata, index2) => {
                      return (
                        <tr key={index2}>
                          <td> {pdata.id} </td>
                          <td> {pdata.name} </td>
                          <td> {pdata.price} </td>
                          <td>
                            <img src={pdata.photo} height='50' width='50' />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ManageOrder;
