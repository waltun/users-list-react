import React, { useContext } from "react";
import UsersContext from "../context/users";
import Swal from "sweetalert2";

function DeleteUser({ id }) {
  const usersContext = useContext(UsersContext);

  const handleDelete = () => {
    usersContext.setUsers((prevState) =>
      prevState.filter((user) => user.id !== id)
    );

    //Sweet alert success alert
    Swal.fire({
      icon: "success",
      title: "حذف موفق",
      text: "کاربر مورد نظر با موفقیت حذف شد",
      customClass: "font-IRANSans",
      timer: 2000,
    });
  };

  return (
    <button className="btn-cancel" onClick={() => handleDelete()}>
      حذف
    </button>
  );
}

export default DeleteUser;
