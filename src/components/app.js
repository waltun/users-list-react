import React, { useState, useEffect } from "react";

import Header from "./layouts/header";
import AddUser from "./users/addUser";
import Modal from "./layouts/modal";
import Users from "./users/users";
import UsersContext from "../context/users";
import AuthContext from "../context/auth";

function App() {
  const [auth, setAuth] = useState(false);
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState(() => {
    return "usersList" in localStorage
      ? [...JSON.parse(localStorage.usersList)]
      : [];
  });

  useEffect(() => {
    localStorage.usersList = JSON.stringify(users);
  }, [users]);

  return (
    <>
      <AuthContext.Provider
        value={{
          authenticated: auth,
          setAuth,
        }}
      >
        <UsersContext.Provider
          value={{
            users,
            modal,
            setModal,
            setUsers,
          }}
        >
          <Header />
          <div className="container mx-auto sm:px-20 px-6 font-IRANSans">
            {/* Button for open modal add user */}
            <AddUser />

            {/* open modal (user form) */}
            <Modal />

            {/* users table (show users) */}
            <Users />
          </div>
        </UsersContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
