import React from 'react'
import OrderItem from '../order-item'
import '../index.css'

export default function Index({ order, number }) {
    return (
        <div>
            <div className="collapse-shadow">
                <div className="grid-wrapper">
                    {/* Top Titles */}
                    <div className="custom-hr-1"></div>

                    <div className="item-top-title-1 font-weight-bold">#</div>
                    <div className="item-top-title-2 font-weight-bold margin-custom">Date</div>
                    <div className="item-top-title-3 font-weight-bold ">Status</div>
                    <div className="item-top-title-4 font-weight-bold ">Receipt ID</div>
                    <div className="item-top-title-5 font-weight-bold ">Total amount</div>

                    <div className="custom-hr-2"></div>

                    {/* Top Items */}
                    <div className="order-item-top-1 font-weight-bold"><p className="order">{number + 1}</p></div>
                    <div className="order-item-top-2"><p className="date">{order.created.slice(0, 10)}</p></div>
                    <div className="order-item-top-3"><p className="processing">{order.status}</p></div>
                    <div className="order-item-top-4"><p className="receipe-id">{order._id}</p></div>
                    <div className="order-item-top-5"><p className="total-amount text-theme">＄{order.orderTotal}.00</p></div>

                    <div className="custom-hr-3"></div>

                    {/* Middle Title-Items */}

                    <div className="item-middle-title-1 font-weight-bold">Product id <span className="d-none product-id-sm">/Price/Quantity</span> </div>
                    <div className="item-middle-title-2 font-weight-bold">Product name x quantity</div>
                    <div className="item-middle-title-3 font-weight-bold">Product Price</div>

                    <div className="custom-hr-4"></div>


                    {/* Bottom Order-Items */}

                    {
                        
                        order.order && order.order.map((order, index) => {
                            return (<OrderItem key={index} item={order} />)
                        })
                       
                    }

                </div>
            </div>
        </div>
    )
}
