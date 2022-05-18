import React, { useContext } from "react";

// import Contexts
import UsersContext from "../../context/usersContext";

// import Packages
import { sweetalert } from "../../helpers/helpers";
import axios from "axios";

function DeleteUser({ id }) {
  const usersContext = useContext(UsersContext);

  const handleDelete = () => {
    usersContext.setUsers((prevState) =>
      prevState.filter((user) => user.id !== id)
    );

    //Delete Http request (Delete users)
    axios
      .delete(`https://6283d9436b6c317d5ba74d17.endapi.io/users/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

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
