import React from "react";
import "./index.css";
import UserList from "./admin-user-list";
import { useEffect } from "react";
import { loadAllUsers } from "../../store/actions/admin";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  let adminUsers = useSelector((state) => state.admin.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllUsers());
  }, [dispatch]);

  return (
    <div className="admin-page">
      <div className="container">
        <div className="row">
          <div id="sidebarMenu" className="col-md-1 d-md-block bg-white">
            <div className="admin-order">
              <a className="text-dark" href="/#">
                Orders
              </a>
            </div>
            <div className="">
              <a className="text-dark" href="/#">
                Products
              </a>
            </div>
            <div className="">
              <a className="text-dark" href="/#">
                Customers
              </a>
            </div>
            <div className="">
              <a className="text-dark" href="/#">
                Reports
              </a>
            </div>
          </div>
          <main className="col-md-10 mt-5 admin-main ml-auto">
            <h2>User List</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {adminUsers &&
                    adminUsers.map((user) => {
                      return <UserList key={user._id} user={user} />;
                    })}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
