import React, { useState, useEffect } from "react";

import Header from "./layouts/header";
import UsersContext from "../context/usersContext";
import AuthContext from "../context/authContext";
import Main from "./layouts/main";

function App() {
  const [auth, setAuth] = useState(false);
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState(() => {
    return "usersList" in localStorage
      ? [...JSON.parse(localStorage.usersList)]
      : [];
  });

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
          <Main />
        </UsersContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
