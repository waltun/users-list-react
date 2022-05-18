import React, { useState, useEffect } from "react";

import Header from "./layouts/header";
import UsersContext from "../context/usersContext";
import AuthContext from "../context/authContext";
import Main from "./layouts/main";
import axios from "axios";

function App() {
  const [auth, setAuth] = useState(false);
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Get Http request (retrieve users)
    axios
      .get("https://6283d9436b6c317d5ba74d17.endapi.io/users")
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.log(error));
  }, []);

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
