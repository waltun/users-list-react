import React, { useState, useEffect } from "react";

import Header from "./header";
import AddUser from "./addUser";
import Modal from "./modal";
import Users from "./users";
import UsersContext from "../context/users";

function App() {
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
    </>
  );
}

export default App;
