import React, { useContext } from "react";
import UsersContext from "../../context/users";
import {sweetalert} from "../../helpers/helpers";

function DeleteUser({ id }) {
  const usersContext = useContext(UsersContext);

  const handleDelete = () => {
    usersContext.setUsers((prevState) =>
      prevState.filter((user) => user.id !== id)
    );

    //Sweet alert success alert
    sweetalert("حذف موفق", "کاربر مورد نظر با موفقیت حذف شد");
  };

  return (
    <button className="btn-cancel" onClick={() => handleDelete()}>
      حذف
    </button>
  );
}

export default DeleteUser;
