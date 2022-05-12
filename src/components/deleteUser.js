import React from "react";

function DeleteUser({ index, user, setUser }) {
  const handleDelete = (index) => {
    setUser((prevState) => {
      return prevState.filter((item) => user.indexOf(item) !== index);
    });
  };

  return (
    <button
      className="btn-cancel"
      onClick={() => handleDelete(index)}
    >
      حذف
    </button>
  );
}

export default DeleteUser;
