import React, { useContext } from "react";
import UsersContext from "../../context/users";
import AuthContext from "../../context/auth";

function AddUser() {
  const usersContext = useContext(UsersContext);
  const authContext = useContext(AuthContext);
  return (
    <>
      <section className="flex justify-end">
        {authContext.authenticated ? (
          <button
            className="btn-success"
            onClick={() => usersContext.setModal(true)}
          >
            افزودن کاربر جدید
          </button>
        ) : (
          <p className="text-sm font-bold text-red-500">
            برای ثبت کاربر جدید لطفا ابتدا وارد شوید
          </p>
        )}
      </section>
    </>
  );
}

export default AddUser;
