import React from "react";

function DeleteUser({ index, user, setUser }) {
  const handleDelete = (index) => {
    setUser((prevState) => {
      return prevState.filter((item) => user.indexOf(item) !== index);
    });
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-white text-sm"
      onClick={() => handleDelete(index)}
    >
      حذف
    </button>
  );
}

export default DeleteUser;
