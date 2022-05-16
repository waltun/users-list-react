import React, { useContext } from "react";
import UsersContext from "../context/users";

function AddUser() {
  let usersContext = useContext(UsersContext);

  return (
    <section className="flex justify-end">
      <button
        className="btn-success"
        onClick={() => usersContext.setModal(true)}
      >
        افزودن کاربر جدید
      </button>
    </section>
  );
}

export default AddUser;
