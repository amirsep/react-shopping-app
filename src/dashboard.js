import React, { useState, useEffect } from 'react';
import Adminheader from './adminheader';
import axios from 'axios';

const Dashboard = () => {
  const [product, updateProduct] = useState([]);
  const [order, updateOrder] = useState([]);

  const getProduct = () => {
    axios.get('http://localhost:1234/product').then((Response) => {
      updateProduct(Response.data);
    });
  };

  const getOrder = () => {
    axios.get('http://localhost:1234/orders').then((Response) => {
      updateOrder(Response.data);
    });
  };

  useEffect(() => {
    getProduct();
    getOrder();
  }, [true]);
  return (
    <>
      <Adminheader />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-12 text-center mb-5'>
            <h3 className='text-primary'> Dashboard </h3>
          </div>

          <div className='col-lg-6 text-center text-primary'>
            <h3>
              {' '}
              Total Products <br /> {product.length}
            </h3>{' '}
          </div>
          <div className='col-lg-6 text-center text-success'>
            <h3>
              {' '}
              Total Orders <br /> {order.length}{' '}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
