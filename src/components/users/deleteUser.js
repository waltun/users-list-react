import React from "react";

function DeleteUser({ setUsers, id }) {

  const handleDelete = () => setUsers(prevState => prevState.filter(user => user.id !== id));

  return (
    <button
      className="btn-cancel"
      onClick={() => handleDelete()}
    >
      حذف
    </button>
  );
}

export default DeleteUser;
