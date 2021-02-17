import React from 'react';
import './index.css'

import AppTopSellers from "../app-section-headers/top-sellers";
import Product from '../app-product/'
import { useSelector } from 'react-redux';

export default function Topsellers({handleOpenModal}) {

  const productMain = useSelector(state => state.products.products[9])
  const product2 = useSelector(state => state.products.products[4])
  const product3 = useSelector(state => state.products.products[5])


    return (
      <div>
        <div className="app-top-sellers">
          <div className="container">
            <AppTopSellers />
            <div className="product-container">

              <Product product={productMain} className="main-seller product-background" handleOpenModal={handleOpenModal}/>
              <Product product={product2} className="product-background" handleOpenModal={handleOpenModal}/>
              <Product product={product3} className="product-background" handleOpenModal={handleOpenModal}/>

                {/* <Product className="product-background main-seller" handleOpenModal={handleOpenModal}/>    
                <Product tag={'new'} className="product-background" handleOpenModal={handleOpenModal}/>    
                <Product tag={'sale'} className="product-background" handleOpenModal={handleOpenModal}/> */}
            </div>
          </div>
        </div>
      </div>
    );

}
