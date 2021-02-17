import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../store/actions/admin";

export default function Index(user) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="id">{user.user._id}</td>
      <td className="username">{user.user.userName}</td>
      <td className="email">{user.user.email}</td>
      <td className="created">{user.user.created}</td>
      {user.user.role === "customer" ? (
        <td>
          <i
            className="far fa-trash-alt"
            onClick={() => dispatch(deleteUser(user.user._id))}
          ></i>
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  );
}
