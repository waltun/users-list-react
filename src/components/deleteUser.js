import React, { useContext } from "react";
import UsersContext from "../context/users";

function DeleteUser({ id }) {
  const usersContext = useContext(UsersContext);

  const handleDelete = () =>
    usersContext.setUsers((prevState) =>
      prevState.filter((user) => user.id !== id)
    );

  return (
    <button className="btn-cancel" onClick={() => handleDelete()}>
      حذف
    </button>
  );
}

export default DeleteUser;
