import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/user";
import Order from "./order";
import { loadOrders } from "../../../store/actions/order";

export default function Index(props) {
  const orders = useSelector((state) => state.order.orders);
  const routeAdmin = useSelector((state) => state.user.user.role);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(loadOrders(props.user._id));
  });

  return (
    <div>
      <div className="container" id="user-style">
        {/* User */}
        <div className="d-flex flex-column justify-content-center">
          <div className="user text-center text-dark font-weight-bold">
            <h1 className="user-name">{props.user.userName}</h1>
            <p>{props.user.email}</p>
          </div>
          {routeAdmin === "admin" ? (
            <div className="text-center mt-3">
              <Link to="/admin">
                <button className="btn btn-logout btn-theme">ADMIN PAGE</button>
              </Link>
            </div>
          ) : (
            <div></div>
          )}
          {/* Bonus */}
          <div className="bonus-box text-center mt-3 mx-auto">
            <h3>Bonus</h3>
            <h1 className="text-theme">$0</h1>
            <Link className="text-dark" to="/#">
              Read more
            </Link>
          </div>

          {/* My Orders */}
          <div className="collapse-box mx-auto mt-5 mb-1">
            <div
              className="bg-trans d-flex align-items-center justify-content-between"
              data-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <div>My Orders</div>
              <div>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="collapse" id="collapseExample1">
            {/* Order content from order component */}

            {orders.length > 0 ? (
              orders &&
              orders.map((order, index) => {
                return <Order key={order._id} order={order} number={index} />;
              })
            ) : (
              <div className="text-center font-weight-bold py-2">
                We could not find any orders..
              </div>
            )}
          </div>
          {/* Account Details */}
          <div className="collapse-box mx-auto mt-1">
            <div
              className="bg-trans d-flex align-items-center justify-content-between"
              data-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <div className="">Account details</div>
              <div className="">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="collapse" id="collapseExample2">
            <div className="collapse-shadow mt-3 mb-3">
              <p className="username">{props.user.userName}</p>
              <p className="email">{props.user.email}</p>
              <Link className="btn btn-outline-info mt-1" to="/#">
                Change Password
              </Link>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mx-auto btn btn-logout btn-theme text-center mt-5"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
