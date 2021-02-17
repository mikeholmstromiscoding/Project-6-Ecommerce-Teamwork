import React from 'react'
import '../index.css'

export default function Index({ item }) {
    return (
        <React.Fragment>
            <div className="order-item-1"><p className="order-id">{item._id}</p></div>
            <div className="order-item-2 text-nowrap"><p className="product-name">{item.product.name} <span className="font-weight-bold ">x {item.quantity}</span></p></div>
            <div className="order-item-3 font-weight-bold"><p className="product-price text-theme">＄{item.product.price - item.product.discount}.00</p></div>
        </React.Fragment>
    )
}
